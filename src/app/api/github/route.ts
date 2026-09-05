import { NextResponse } from "next/server";

const GITHUB_USERNAME = "Raj-Anmol";
const CACHE_TTL = 3600;

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface CacheEntry {
  data: ContributionDay[];
  ts: number;
}

let cache: CacheEntry | null = null;

function levelFromCount(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 10) return 3;
  return 4;
}

export async function GET() {
  if (cache && Date.now() - cache.ts < CACHE_TTL * 1000) {
    return NextResponse.json({ days: cache.data, cached: true });
  }

  try {
    const query = `
      query {
        user(login: "${GITHUB_USERNAME}") {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  date
                  contributionCount
                }
              }
            }
          }
        }
      }
    `;

    const res = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${process.env.GITHUB_TOKEN || ""}`,
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);

    const json = await res.json();
    const weeks = json?.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
    const days: ContributionDay[] = [];

    for (const week of weeks) {
      for (const day of week.contributionDays) {
        days.push({
          date: day.date,
          count: day.contributionCount,
          level: levelFromCount(day.contributionCount),
        });
      }
    }

    const recent = days.slice(-91);

    cache = { data: recent, ts: Date.now() };
    return NextResponse.json({ days: recent, cached: false });
  } catch (err) {
    console.error("GitHub contributions error:", err);
    const fallback = generateFallback();
    return NextResponse.json({ days: fallback, cached: false, fallback: true });
  }
}

function generateFallback(): ContributionDay[] {
  const days: ContributionDay[] = [];
  const today = new Date();
  for (let i = 90; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(d.getDate() - i);
    const count = Math.floor(Math.random() * 8);
    days.push({
      date: d.toISOString().split("T")[0],
      count,
      level: levelFromCount(count),
    });
  }
  return days;
}

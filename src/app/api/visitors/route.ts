import { NextRequest, NextResponse } from "next/server";
import { kv } from "@vercel/kv";

const COUNTER_KEY = "portfolio:visitors";

export async function GET(request: NextRequest) {
  try {
    if (!process.env.KV_REST_API_URL || !process.env.KV_REST_API_TOKEN) {
      return NextResponse.json({ available: false, count: null });
    }

    const hasVisited = request.cookies.get("has_visited_portfolio");

    if (hasVisited) {
      const currentCount = await kv.get<number>(COUNTER_KEY);
      return NextResponse.json({ available: true, count: currentCount ?? 0 });
    }

    const count = await kv.incr(COUNTER_KEY);
    const response = NextResponse.json({ available: true, count });

    // Deduplicate repeat visits within 24 hours
    response.cookies.set({
      name: "has_visited_portfolio",
      value: "true",
      maxAge: 60 * 60 * 24, // 24 hours
      path: "/",
      httpOnly: true,
      sameSite: "lax",
    });

    return response;
  } catch (err) {
    console.error("Visitor counter error:", err);
    return NextResponse.json({ available: false, count: null });
  }
}

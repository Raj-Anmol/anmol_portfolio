"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { GithubIcon } from "@/components/icons/GithubIcon";
import { ExternalLink } from "lucide-react";

interface ContributionDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

const levelColors: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: "bg-muted/60",
  1: "bg-primary/25",
  2: "bg-primary/45",
  3: "bg-primary/70",
  4: "bg-primary",
};

const levelLabels = ["No activity", "Low", "Medium", "High", "Very high"];

export function GithubActivity() {
  const [days, setDays] = useState<ContributionDay[] | null>(null);

  useEffect(() => {
    fetch("/api/github")
      .then((r) => r.json())
      .then((d) => setDays(d.days))
      .catch(() => setDays([]));
  }, []);

  if (!days) {
    return (
      <div className="border border-border bg-card/60 backdrop-blur-sm rounded-xl p-4 sm:p-5 animate-pulse">
        <div className="h-5 w-40 bg-muted rounded mb-3" />
        <div className="grid grid-cols-13 gap-1">
          {Array.from({ length: 91 }).map((_, i) => (
            <div key={i} className="h-3 w-3 bg-muted/50 rounded-sm" />
          ))}
        </div>
      </div>
    );
  }

  const total = days.reduce((acc, d) => acc + d.count, 0);

  const columns: ContributionDay[][] = [];
  for (let i = 0; i < days.length; i += 7) {
    columns.push(days.slice(i, i + 7));
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className="border border-border bg-card/60 backdrop-blur-sm rounded-xl p-4 sm:p-5"
    >
      <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
        <div className="flex items-center gap-2">
          <GithubIcon className="h-4 w-4 text-foreground" />
          <h4 className="text-sm font-semibold text-foreground">GitHub Activity</h4>
          <span className="text-xs text-muted-foreground">
            {total} contributions in last 90 days
          </span>
        </div>
        <a
          href="https://github.com/Raj-Anmol"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-primary transition-colors"
        >
          View profile
          <ExternalLink className="h-3 w-3" />
        </a>
      </div>

      <div className="overflow-x-auto -mx-1 px-1">
        <div className="inline-flex gap-1 min-w-full">
          {columns.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, di) => {
                const day = week[di];
                if (!day) return <div key={di} className="h-3 w-3" />;
                return (
                  <motion.div
                    key={day.date}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: wi * 0.005 + di * 0.002, duration: 0.2 }}
                    className={`h-3 w-3 rounded-sm ${levelColors[day.level]} hover:ring-1 hover:ring-primary cursor-default transition-all`}
                    title={`${day.date}: ${day.count} contribution${day.count !== 1 ? "s" : ""} (${levelLabels[day.level]})`}
                    aria-label={`${day.date}: ${day.count} contributions`}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-end gap-1.5 mt-3 text-[10px] text-muted-foreground">
        <span>Less</span>
        {([0, 1, 2, 3, 4] as const).map((lvl) => (
          <span key={lvl} className={`h-2.5 w-2.5 rounded-sm ${levelColors[lvl]}`} />
        ))}
        <span>More</span>
      </div>
    </motion.div>
  );
}

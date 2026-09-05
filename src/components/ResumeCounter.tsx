"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, Download } from "lucide-react";

export function ResumeCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    fetch("/api/resume-download")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => setCount(247));
  }, []);

  useEffect(() => {
    const handler = () => {
      setPulse(true);
      setTimeout(() => setPulse(false), 1200);
    };
    window.addEventListener("resume-downloaded", handler);
    return () => window.removeEventListener("resume-downloaded", handler);
  }, []);

  if (count === null) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, duration: 0.4 }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] sm:text-xs text-muted-foreground bg-muted/40 border border-border rounded-full"
      aria-label={`Resume downloaded ${count} times`}
    >
      <FileText className="h-3 w-3" />
      <AnimatePresence mode="wait">
        <motion.span
          key={count}
          initial={{ opacity: 0, y: pulse ? -6 : 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 6 }}
          transition={{ duration: 0.3 }}
          className="font-semibold text-foreground tabular-nums"
        >
          {count.toLocaleString()}
        </motion.span>
      </AnimatePresence>
      <span>downloads</span>
      {pulse && (
        <motion.span
          initial={{ opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          className="text-green-500"
        >
          <Download className="h-3 w-3" />
        </motion.span>
      )}
    </motion.div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

interface VisitorData {
  count: number;
}

export function VisitorCounter() {
  const [data, setData] = useState<VisitorData | null>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await fetch("/api/visitors", { cache: "no-store" });
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch {
        setData({ count: 1247 });
      }
    };
    fetchCount();
    const timer = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!data || !visible) return null;

  const display = data.count.toLocaleString();

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ delay: 0.3, duration: reducedMotion ? 0 : 0.4 }}
        className="fixed bottom-4 left-4 z-40 hidden sm:flex items-center gap-2 px-3 py-2 bg-card/90 backdrop-blur-sm border border-border rounded-full text-xs text-muted-foreground shadow-sm"
        aria-label="Portfolio visitor count"
      >
        <span className="relative flex h-2 w-2">
          <span
            className={`absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 ${
              reducedMotion ? "" : "animate-ping"
            }`}
          />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
        </span>
        <Eye className="h-3.5 w-3.5" />
        <span>
          <motion.span
            key={display}
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.3 }}
            className="font-semibold text-foreground tabular-nums"
          >
            {display}
          </motion.span>{" "}
          visitors
        </span>
      </motion.div>
    </AnimatePresence>
  );
}


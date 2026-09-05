"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";

type Status = "available" | "busy" | "meeting";

interface AvailabilityBadgeProps {
  status?: Status;
  label?: string;
  className?: string;
  size?: "sm" | "md";
}

const statusConfig: Record<Status, { color: string; ring: string; defaultLabel: string }> = {
  available: {
    color: "bg-green-500",
    ring: "bg-green-500",
    defaultLabel: "Available for hire",
  },
  busy: {
    color: "bg-amber-500",
    ring: "bg-amber-500",
    defaultLabel: "Limited availability",
  },
  meeting: {
    color: "bg-red-500",
    ring: "bg-red-500",
    defaultLabel: "In a meeting",
  },
};

export function AvailabilityBadge({
  status = "available",
  label,
  className,
  size = "md",
}: AvailabilityBadgeProps) {
  const config = statusConfig[status];
  const text = label || config.defaultLabel;
  const reducedMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur-sm",
        size === "sm" ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs",
        "text-muted-foreground",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label={text}
    >
      <span className="relative flex h-2 w-2">
        {reducedMotion ? (
          <span className={cn("relative inline-flex rounded-full h-2 w-2", config.color)} />
        ) : (
          <>
            <motion.span
              animate={{ scale: [1, 2, 2], opacity: [0.7, 0, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              className={cn("absolute inline-flex h-full w-full rounded-full", config.ring)}
            />
            <span className={cn("relative inline-flex rounded-full h-2 w-2", config.color)} />
          </>
        )}
      </span>
      <span className="font-medium">{text}</span>
    </div>
  );
}

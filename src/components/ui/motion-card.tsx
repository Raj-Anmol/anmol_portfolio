"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface MotionCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function MotionCard({
  children,
  className,
  delay = 0,
  ...rest
}: MotionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "border border-border bg-card/80 backdrop-blur-sm rounded-xl",
        "shadow-sm transition-colors hover:border-primary/50",
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

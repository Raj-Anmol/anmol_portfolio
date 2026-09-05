"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

interface MotionGridProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  staggerChildren?: number;
  delayChildren?: number;
}

export function MotionGrid({
  children,
  className,
  staggerChildren = 0.1,
  delayChildren = 0.05,
  ...rest
}: MotionGridProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
          },
        },
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

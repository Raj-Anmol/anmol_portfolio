"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { useReducedMotion } from "@/lib/hooks/use-reduced-motion";
import { cn } from "@/lib/utils";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  duration = 1.5,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reducedMotion = useReducedMotion();

  // Initialize with real value so SSR and non-JS clients always have the correct number
  const [display, setDisplay] = useState(value);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (reducedMotion) return;

    let cleanupAnim: (() => void) | undefined;

    const startAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const durationMs = duration * 1000;
      let startTime: number | null = null;
      let frameId: number;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;
        const progress = Math.min(elapsed / durationMs, 1);

        // Smooth ease-out cubic
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(easeOut * value);

        setDisplay(current);

        if (progress < 1) {
          frameId = requestAnimationFrame(step);
        } else {
          setDisplay(value);
        }
      };

      frameId = requestAnimationFrame((timestamp) => {
        setDisplay(0);
        step(timestamp);
      });

      // Safety timeout: ensure final target value is set even if rAF throttles in background tabs
      const safetyTimeout = setTimeout(() => {
        setDisplay(value);
      }, durationMs + 300);

      cleanupAnim = () => {
        cancelAnimationFrame(frameId);
        clearTimeout(safetyTimeout);
      };
    };

    if (inView) {
      startAnimation();
      return () => cleanupAnim?.();
    }

    // Fallback: trigger after 500ms if above-the-fold hero element has not triggered IntersectionObserver
    const fallbackTimer = setTimeout(() => {
      startAnimation();
    }, 500);

    return () => {
      clearTimeout(fallbackTimer);
      cleanupAnim?.();
    };
  }, [inView, value, duration, reducedMotion]);

  const fullText = `${prefix}${value}${suffix}`;

  return (
    <span
      ref={ref}
      className={cn("tabular-nums inline-block", className)}
    >
      <span aria-hidden="true">
        {prefix}
        {display}
        {suffix}
      </span>
      <span className="sr-only">{fullText}</span>
    </span>
  );
}

"use client";

import type { ComponentProps, ReactNode } from "react";
import FastMarquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

/* ─── Root wrapper ─────────────────────────────────────────────── */

interface MarqueeProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const Marquee = ({ className, children, ...props }: MarqueeProps) => (
  <div className={cn("relative overflow-hidden", className)} {...props}>
    {children}
  </div>
);

/* ─── Scrolling content (wraps react-fast-marquee) ─────────────── */

interface MarqueeContentProps {
  children: ReactNode;
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

const MarqueeContent = ({
  children,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className,
}: MarqueeContentProps) => (
  <FastMarquee
    speed={speed}
    direction={direction}
    pauseOnHover={pauseOnHover}
    className={cn(className)}
    autoFill
  >
    {children}
  </FastMarquee>
);

/* ─── Individual item ──────────────────────────────────────────── */

interface MarqueeItemProps extends ComponentProps<"div"> {
  children: ReactNode;
}

const MarqueeItem = ({ className, children, ...props }: MarqueeItemProps) => (
  <div className={cn("shrink-0", className)} {...props}>
    {children}
  </div>
);

/* ─── Fade overlay on edges ────────────────────────────────────── */

interface MarqueeFadeProps {
  side: "left" | "right";
  className?: string;
}

const MarqueeFade = ({ side, className }: MarqueeFadeProps) => (
  <div
    className={cn(
      "pointer-events-none absolute top-0 z-10 h-full w-24",
      side === "left"
        ? "left-0 bg-linear-to-r from-background to-transparent"
        : "right-0 bg-linear-to-l from-background to-transparent",
      className
    )}
    aria-hidden="true"
  />
);

export { Marquee, MarqueeContent, MarqueeItem, MarqueeFade };

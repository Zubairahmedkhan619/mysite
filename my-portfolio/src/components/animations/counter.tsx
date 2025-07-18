"use client";
import { useEffect, useState } from "react";

type CounterProps = {
  from?: number;
  to: number;
  duration?: number; // in milliseconds
  suffix?: string;
  className?: string;
};

export function Counter({
  from = 0,
  to,
  duration = 1000,
  suffix = "",
  className = "",
}: CounterProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const value = Math.min(from + (to - from) * (progress / duration), to);
      setCount(Math.floor(value));
      if (progress < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
}

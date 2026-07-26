"use client";
import { useEffect, useRef } from "react";

export default function ProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;
    const onScroll = () => {
      const d = document.documentElement;
      const pct = (d.scrollTop / (d.scrollHeight - d.clientHeight)) * 100;
      bar.style.width = pct + "%";
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <div id="progress-bar" ref={barRef} />;
}

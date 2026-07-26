"use client";
import { useEffect, useRef, useState } from "react";

export function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    }, { threshold: 0.1, rootMargin: "-40px 0px", ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, inView };
}

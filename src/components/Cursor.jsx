"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rxRef = useRef(0);
  const ryRef = useRef(0);
  const mxRef = useRef(0);
  const myRef = useRef(0);
  const rafRef = useRef(0);

  useEffect(() => {
    const isPointer = window.matchMedia("(pointer:fine)").matches;
    if (!isPointer) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const lerp = (a, b, t) => a + (b - a) * t;

    const onMove = (e) => {
      mxRef.current = e.clientX;
      myRef.current = e.clientY;
      dot.style.left = e.clientX + "px";
      dot.style.top = e.clientY + "px";
    };

    const animRing = () => {
      rxRef.current = lerp(rxRef.current, mxRef.current, 0.11);
      ryRef.current = lerp(ryRef.current, myRef.current, 0.11);
      ring.style.left = rxRef.current + "px";
      ring.style.top = ryRef.current + "px";
      rafRef.current = requestAnimationFrame(animRing);
    };
    rafRef.current = requestAnimationFrame(animRing);

    document.addEventListener("mousemove", onMove);

    const interactables = document.querySelectorAll("a,button,.card,.social-icon,.filter-btn");
    interactables.forEach((el) => {
      el.addEventListener("mouseenter", () => document.body.classList.add("cursor-link"));
      el.addEventListener("mouseleave", () => document.body.classList.remove("cursor-link"));
    });

    document.addEventListener("mousedown", () => document.body.classList.add("cursor-click"));
    document.addEventListener("mouseup", () => document.body.classList.remove("cursor-click"));

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div id="c-dot" ref={dotRef} />
      <div id="c-ring" ref={ringRef} />
    </>
  );
}

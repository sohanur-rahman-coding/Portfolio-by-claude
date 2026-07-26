"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SECTIONS = ["home", "about", "skills", "projects", "education", "contact"];

export default function SideNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { threshold: 0.35, rootMargin: "-80px 0px -40% 0px" }
    );
    SECTIONS.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      style={{
        position: "fixed", right: "2rem", top: "50%", transform: "translateY(-50%)",
        zIndex: 100, display: "flex", flexDirection: "column", gap: "1rem",
      }}
      className="side-nav-desktop"
    >
      {SECTIONS.map((id) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.75rem", background: "none", border: "none", position: "relative" }}
          title={id.charAt(0).toUpperCase() + id.slice(1)}
        >
          <span
            style={{
              position: "absolute", right: "calc(100% + 0.5rem)",
              fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--orange)",
              opacity: 0, transform: "translateX(8px)",
              transition: "opacity 0.3s, transform 0.3s", whiteSpace: "nowrap", letterSpacing: "0.1em",
              pointerEvents: "none",
            }}
            className="dot-label"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </span>
          <motion.span
            animate={{
              width: active === id ? 20 : 6,
              backgroundColor: active === id ? "#ff7a00" : "rgba(255,255,255,0.2)",
              boxShadow: active === id ? "0 0 12px rgba(255,122,0,0.6)" : "none",
            }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            style={{ height: 6, borderRadius: 100, display: "block" }}
          />
        </button>
      ))}
      <style>{`
        @media (max-width: 1100px) { .side-nav-desktop { display: none !important; } }
        .side-nav-desktop button:hover .dot-label { opacity: 1 !important; transform: translateX(0) !important; }
      `}</style>
    </nav>
  );
}

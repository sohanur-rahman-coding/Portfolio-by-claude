"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const skillCategories = [
  {
    label: "Frontend",
    icon: "◈",
    skills: [
      { name: "React.js", pct: 90 },
      { name: "Next.js", pct: 85 },
      { name: "JavaScript", pct: 78 },
      { name: "Tailwind CSS", pct: 92 },
    ],
  },
  {
    label: "Backend",
    icon: "◉",
    skills: [
      { name: "Node.js", pct: 85 },
      { name: "Express.js", pct: 88 },
      { name: "MongoDB", pct: 82 },
      { name: "REST APIs", pct: 88 },
    ],
  },
  {
    label: "Tools",
    icon: "◎",
    skills: [
      { name: "Git & GitHub", pct: 87 },
      { name: "Figma", pct: 70 },
      { name: "Docker", pct: 60 },
      { name: "Linux", pct: 72 },
    ],
  },
];

function SkillBar({ name, pct, animate }: { name: string; pct: number; animate: boolean }) {
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<number>(0);
  const startRef = useRef<number>(0);

  useEffect(() => {
    if (!animate) return;
    startRef.current = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * pct));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, pct]);

  return (
    <div style={{ marginBottom: "1.35rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.55rem" }}>
        <span style={{ fontFamily: "var(--font-dm)", fontSize: "0.875rem", color: "var(--cream)", fontWeight: 500, letterSpacing: "0.01em" }}>{name}</span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--orange)", fontWeight: 500 }}>{displayed}%</span>
      </div>
      <div style={{ height: 4, borderRadius: 100, background: "rgba(255,255,255,0.05)", overflow: "hidden" }}>
        <div className="skill-fill" style={{ width: animate ? `${pct}%` : "0%" }} />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "var(--bg)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--orange)", display: "block" }} />
            02 &nbsp;—&nbsp; Skills
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
            My tech<br /><span className="gradient-text">stack</span>
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.75rem" }} className="skills-grid">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { delay: ci * 0.15 } } }}
                style={{ padding: "2rem", borderRadius: 20, background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}
                className="card skill-card"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.65rem", marginBottom: "1.75rem" }}>
                  <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 8, ease: "linear" }} style={{ width: 34, height: 34, borderRadius: 10, background: "rgba(255,122,0,0.08)", border: "1px solid rgba(255,122,0,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", color: "var(--orange)" }}>
                    {cat.icon}
                  </motion.div>
                  <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "0.95rem", color: "var(--white)" }}>
                    {cat.label}
                  </div>
                </div>
                {cat.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} pct={skill.pct} animate={inView} />
                ))}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .skill-card:hover { border-color: rgba(255,122,0,0.18) !important; transform: translateY(-4px); box-shadow: 0 16px 48px rgba(0,0,0,0.35); }
      `}</style>
    </section>
  );
}

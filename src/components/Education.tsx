"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const education = [
  {
    degree: "Diploma in Computer Science and Technology",
    institution: "Dhaka Polytechnic Institute",
    status: "active", statusLabel: "In Progress",
    period: "2023-2027", location: "Dhaka, Bangladesh",
    desc: "Comprehensive four-year diploma program covering fundamentals of computer science, software engineering, and modern web development practices.",
    courses: ["Data Structures", "Algorithms", "Database Systems", "Web Development", "OOP", "Networking"],
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Faugan High School",
    status: "done", statusLabel: "Completed",
    period: "2022-2023", location: "Dhaka, Bangladesh",
    desc: "Completed SSC with Science group, focusing on Mathematics, Physics, and Computer Science fundamentals.",
    courses: ["Mathematics", "Physics", "Chemistry", "ICT", "Biology"],
  },
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--orange)", display: "block" }} />
            04 &nbsp;—&nbsp; Education
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
            Academic<br /><span className="gradient-text">background</span>
          </motion.h2>

          <div style={{ position: "relative", maxWidth: 800, margin: "0 auto", paddingLeft: "clamp(1.5rem,4vw,2rem)" }}>
            {/* Timeline line */}
            <div style={{ position: "absolute", left: 0, top: 8, bottom: 8, width: 1, background: "linear-gradient(180deg,transparent,rgba(255,122,0,0.3) 15%,rgba(255,122,0,0.3) 85%,transparent)" }} />

            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { delay: i * 0.22 } } }}
                style={{ position: "relative", paddingBottom: i < education.length - 1 ? "3rem" : 0, paddingLeft: "clamp(1.5rem,3vw,2.5rem)" }}
              >
                {/* Dot */}
                <div style={{ position: "absolute", left: "-0.5rem", top: "0.25rem", width: "1rem", height: "1rem", borderRadius: "50%", background: "var(--orange)", boxShadow: "0 0 20px rgba(255,122,0,0.6)", border: "2px solid var(--bg)" }} className="ping-ring" />

                <div className="card edu-card" style={{ padding: "clamp(1.5rem,3vw,2.25rem)", borderRadius: 20, background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "clamp(1rem,2vw,1.15rem)", color: "var(--white)", marginBottom: "0.3rem", lineHeight: 1.3 }}>{edu.degree}</div>
                      <div style={{ fontSize: "0.9rem", color: "var(--orange)", fontWeight: 500 }}>{edu.institution}</div>
                    </div>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.3rem 0.85rem", borderRadius: 100, whiteSpace: "nowrap", flexShrink: 0, background: edu.status === "active" ? "rgba(255,122,0,0.1)" : "rgba(52,211,153,0.1)", border: `1px solid ${edu.status === "active" ? "rgba(255,122,0,0.25)" : "rgba(52,211,153,0.25)"}`, color: edu.status === "active" ? "var(--orange)" : "#34d399" }}>
                      {edu.statusLabel}
                    </span>
                  </div>

                  <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted2)", display: "flex", alignItems: "center", gap: "0.4rem", letterSpacing: "0.04em" }}>
                      <svg width="12" height="12" fill="none" stroke="var(--orange)" strokeWidth="1.8" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                      {edu.period}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted2)", display: "flex", alignItems: "center", gap: "0.4rem", letterSpacing: "0.04em" }}>
                      <svg width="12" height="12" fill="none" stroke="var(--orange)" strokeWidth="1.8" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {edu.location}
                    </span>
                  </div>

                  <p style={{ fontSize: "clamp(0.85rem,1.5vw,0.9rem)", color: "var(--muted)", lineHeight: 1.85, marginBottom: "1.1rem" }}>{edu.desc}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {edu.courses.map((c) => (
                      <span key={c} style={{ fontFamily: "var(--font-mono)", fontSize: "0.67rem", padding: "0.3rem 0.8rem", borderRadius: 7, background: "rgba(255,255,255,0.032)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--muted2)", letterSpacing: "0.04em" }}>{c}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        .edu-card:hover { border-color: rgba(255,122,0,0.18) !important; transform: translateX(4px); }
      `}</style>
    </section>
  );
}

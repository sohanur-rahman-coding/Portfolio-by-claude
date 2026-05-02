"use client";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const stats = [
  { num: "6+", label: "Month Experience" },
  { num: "15+", label: "Projects Built" },
  { num: "10+", label: "Happy Clients" },
  { num: "∞", label: "Lines of Code" },
];

const techTags = ["React", "Node.js", "MongoDB", "JavaScript", "Next.js", "Express"];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "var(--bg2)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--orange)", display: "block" }} />
            01 &nbsp;—&nbsp; About Me
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2.5rem,6vw,5rem)", alignItems: "center" }} className="about-grid">
            {/* LEFT */}
            <div>
              <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "2rem" }}>
                Crafting digital<br /><span className="gradient-text">experiences</span>
              </motion.h2>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontSize: "clamp(0.9rem,1.8vw,1.05rem)", color: "var(--muted)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
                I&apos;m Sohanur Rahman, a passionate MERN Stack Developer from Dhaka, Bangladesh. I specialize in building full-stack web applications that are both technically robust and beautifully designed.
              </motion.p>

              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontSize: "clamp(0.9rem,1.8vw,1.05rem)", color: "var(--muted)", lineHeight: 1.9, marginBottom: "2rem" }}>
                Currently pursuing my Diploma in Computer Science at Dhaka Polytechnic Institute, blending academic learning with real-world project experience to deliver solutions that make an impact.
              </motion.p>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ display: "flex", flexWrap: "wrap", gap: "0.65rem" }}>
                {techTags.map((tech) => (
                  <span key={tech} style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    padding: "0.35rem 0.9rem", borderRadius: 8,
                    background: "rgba(255,122,0,0.06)", border: "1px solid rgba(255,122,0,0.14)",
                    color: "var(--orange)", letterSpacing: "0.04em",
                    transition: "all 0.3s",
                  }} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT */}
            <div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.1rem", marginBottom: "1.5rem" }}>
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    variants={{ hidden: { opacity: 0, scale: 0.85 }, visible: { opacity: 1, scale: 1, transition: { delay: i * 0.1 } } }}
                    style={{ padding: "1.75rem 1.5rem", borderRadius: 20, background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)", textAlign: "center" }}
                    className="card stat-card-hover"
                  >
                    <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "2.5rem", lineHeight: 1 }} className="gradient-text">{s.num}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted2)", marginTop: "0.5rem", letterSpacing: "0.06em" }}>{s.label}</div>
                  </motion.div>
                ))}
              </div>

              <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                style={{ padding: "1.4rem 1.5rem", borderRadius: 20, background: "rgba(255,122,0,0.04)", border: "1px solid rgba(255,122,0,0.12)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.6rem" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--orange)", animation: "pulse-dot 2s ease-in-out infinite" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Currently</span>
                </div>
                <p style={{ fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500, marginBottom: "0.25rem" }}>Open to full-time positions & freelance projects</p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Dhaka, Bangladesh · Available remotely</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
      <style>{`
        .tech-tag:hover { background: rgba(255,122,0,0.12) !important; border-color: rgba(255,122,0,0.3) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

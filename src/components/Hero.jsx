"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import DP from "@/assests/Gemini.png";

const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/sohanur-rahman-coding",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/sohanur-rahman-ii/",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/sohanbai11/",
    icon: (
      <svg viewBox="0 0 24 24" style={{ width: 15, height: 15, fill: "currentColor" }}>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

const words = ["Hi,", "I'm"];
const nameWords = ["Sohanur", "Rahman"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "5rem",
        paddingBottom: "2rem",
      }}
    >
      {/* Grid background */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(255,122,0,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(255,122,0,0.04) 1px,transparent 1px)",
        backgroundSize: "64px 64px",
        maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%)",
        WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%,black 0%,transparent 80%)",
      }} />

      {/* Ambient glows */}
      <div style={{ position: "absolute", width: 900, height: 900, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,122,0,0.10) 0%,transparent 65%)", top: -250, right: -150, pointerEvents: "none", animation: "glowFloat 8s ease-in-out infinite" }} />
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,122,0,0.06) 0%,transparent 65%)", bottom: -100, left: -50, pointerEvents: "none", animation: "glowFloat 11s ease-in-out infinite reverse" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)", position: "relative", zIndex: 1, width: "100%" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "clamp(2rem,5vw,5rem)", alignItems: "center" }}
          className="hero-inner-grid"
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                padding: "0.45rem 1.1rem", borderRadius: "100px",
                background: "rgba(255,122,0,0.07)", border: "1px solid rgba(255,122,0,0.2)",
                fontFamily: "var(--font-mono)", fontSize: "0.72rem",
                color: "var(--orange)", letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "1.75rem",
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--orange)", animation: "pulse-dot 2s ease-in-out infinite", display: "block" }} />
              Open to opportunities
            </motion.div>

            {/* Headline */}
            <div style={{ marginBottom: "1.25rem" }}>
              <div style={{ overflow: "hidden" }}>
                {words.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.11, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-syne)", fontWeight: 800,
                      fontSize: "clamp(3rem,8vw,7.5rem)", lineHeight: 0.92,
                      letterSpacing: "-0.04em", color: "var(--cream)", marginRight: "0.3em",
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              <div style={{ overflow: "hidden" }}>
                {nameWords.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.52 + i * 0.11, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-syne)", fontWeight: 800,
                      fontSize: "clamp(3rem,8vw,7.5rem)", lineHeight: 0.92,
                      letterSpacing: "-0.04em", marginRight: "0.3em",
                    }}
                    className="gradient-text"
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Role tag */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              style={{
                fontFamily: "var(--font-mono)", fontSize: "clamp(0.85rem,2vw,1.05rem)",
                color: "var(--muted2)", marginBottom: "1.25rem", letterSpacing: "0.04em",
              }}
            >
              <span style={{ color: "var(--orange)" }}>&lt;</span>&nbsp;MERN Stack Developer&nbsp;<span style={{ color: "var(--orange)" }}>/&gt;</span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              style={{
                fontSize: "clamp(0.9rem,2vw,1.05rem)", color: "var(--muted)",
                lineHeight: 1.9, maxWidth: 480, marginBottom: "2.5rem",
              }}
            >
              Passionate full-stack developer crafting modern, scalable, and high-performance web applications — from concept to deployment.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap", marginBottom: "2.5rem" }}
              className="hero-actions"
            >
              <motion.a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.6rem",
                  fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem",
                  letterSpacing: "0.02em", borderRadius: "100px", padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg,var(--orange),var(--orange2))",
                  color: "#000", boxShadow: "0 4px 24px rgba(255,122,0,0.4)",
                  textDecoration: "none", transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
                }}
                className="hero-btn-primary"
              >
                Hire Me
                <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} style={{ display: "flex", alignItems: "center" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </motion.div>
              </motion.a>
              <motion.a href="/Sohanur_Rahman_CV.pdf" download="Sohanur_Rahman_CV.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                display: "inline-flex", alignItems: "center", gap: "0.6rem",
                fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem",
                letterSpacing: "0.02em", borderRadius: "100px", padding: "0.9rem 2rem",
                background: "transparent", color: "var(--cream)", border: "1px solid rgba(255,255,255,0.14)",
                textDecoration: "none", transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)",
              }} className="hero-btn-outline">
                Download CV
                <motion.div animate={{ y: [0, 3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} style={{ display: "flex", alignItems: "center" }}>
                  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 15V3M5 20h14M7 10l5 5 5-5" /></svg>
                </motion.div>
              </motion.a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}
              className="hero-socials"
            >
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Follow</span>
              <span style={{ width: 28, height: 1, background: "rgba(255,255,255,0.1)" }} />
              {socialLinks.map((s) => (
                <motion.a key={s.title} href={s.href} target="_blank" rel="noreferrer" title={s.title} className="social-icon"
                  whileHover={{ scale: 1.15, rotate: 5, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ width: 38, height: 38, borderRadius: 12, border: "1px solid rgba(255,255,255,0.09)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted2)", textDecoration: "none", transition: "all 0.3s" }}>
                  {s.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT – Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}
            className="hero-avatar-col"
          >
            <div style={{ position: "relative", animation: "heroFloat 9s ease-in-out infinite" }}>
              {/* Rings */}
              <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", border: "1px dashed rgba(255,122,0,0.18)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              <div style={{ position: "absolute", width: 290, height: 290, borderRadius: "50%", border: "1px solid rgba(255,122,0,0.07)", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }} />
              {/* Glow */}
              <div style={{ position: "absolute", width: 220, height: 220, borderRadius: "50%", background: "radial-gradient(circle,rgba(255,122,0,0.18) 0%,transparent 65%)", top: "50%", left: "50%", transform: "translate(-50%,-50%)", filter: "blur(24px)" }} />
              {/* Orbit dots */}
              <span className="orbit-dot-1" />
              <span className="orbit-dot-2" />
              {/* Avatar */}
              <div style={{ width: 220, height: 220, borderRadius: "50%", background: "linear-gradient(135deg,#181818,#0e0e0e)", border: "2px solid rgba(255,122,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", boxShadow: "0 0 60px rgba(255,122,0,0.12), inset 0 0 40px rgba(255,122,0,0.04)" }}>
                <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "3.5rem", background: "linear-gradient(135deg,var(--orange),var(--orange2))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}><Image height={400} width={400} alt="DP" src={DP} priority sizes="(max-width: 768px) 100vw, 400px"></Image></span>
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg,rgba(255,122,0,0.04) 0%,transparent 100%)" }} />
              </div>

              {/* Stat cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                style={{ position: "absolute", top: 20, left: -55, padding: "1 rem 1.1rem", borderRadius: 16, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,122,0,0.15)", textAlign: "center", minWidth: 80, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1 rem", color: "var(--orange)" }}>6+</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted2)", letterSpacing: "0.06em" }}>Month Exp</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.7 }}
                style={{ position: "absolute", bottom: 20, right: -55, padding: "0.75rem 1.1rem", borderRadius: 16, background: "rgba(8,8,8,0.9)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,122,0,0.15)", textAlign: "center", minWidth: 80, boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
              >
                <div style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", color: "var(--orange)" }}>15+</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--muted2)", letterSpacing: "0.06em" }}>Projects</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem" }}
      >
        <div style={{ width: 24, height: 38, borderRadius: 100, border: "1.5px solid rgba(255,255,255,0.1)", display: "flex", alignItems: "flex-start", justifyContent: "center", padding: "5px 0" }}>
          <div style={{ width: 3, height: 8, borderRadius: 100, background: "var(--orange)", animation: "scroll-hint 1.8s ease-in-out infinite" }} />
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--muted)", letterSpacing: "0.22em", textTransform: "uppercase" }}>Scroll</span>
      </motion.div>

      <style>{`
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 40px rgba(255,122,0,0.55), 0 0 60px rgba(255,122,0,0.15) !important; }
        .hero-btn-outline:hover { border-color: rgba(255,122,0,0.5) !important; color: var(--orange) !important; transform: translateY(-2px); }
      `}</style>
    </section>
  );
}

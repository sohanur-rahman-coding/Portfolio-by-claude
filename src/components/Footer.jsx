"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@/assests/Gemini_Generated_Image_whvnbqwhvnbqwhvn (1).png";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={{ background: "var(--bg)", borderTop: "1px solid rgba(255,255,255,0.055)", padding: "clamp(3rem,6vw,4.5rem) 0 2.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "3rem", marginBottom: "3rem" }} className="footer-grid">
          <div>
            <span style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.75rem", letterSpacing: "-0.03em", color: "var(--white)", marginBottom: "0.75rem", display: "block" }}>
              <Image src={logo} alt="logo" height={200} width={200}></Image><span style={{ color: "var(--orange)" }}>.</span>
            </span>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.8, maxWidth: 280 }}>
              Building modern web experiences with clean code and thoughtful design. Based in Dhaka, Bangladesh.
            </p>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.78rem", color: "var(--white)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Navigation</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {["Home", "About", "Skills", "Projects", "Education", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`}
                    onClick={(e) => { e.preventDefault(); document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" }); }}
                    style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s,transform 0.3s", display: "inline-block" }}
                    className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.78rem", color: "var(--white)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1.25rem" }}>Connect</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
              {[["GitHub", "https://github.com"], ["LinkedIn", "https://linkedin.com"], ["Facebook", "https://facebook.com"], ["Email", "mailto:sohanur@example.com"]].map(([label, href]) => (
                <li key={label}>
                  <a href={href} target="_blank" rel="noreferrer"
                    style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.3s,transform 0.3s", display: "inline-block" }}
                    className="footer-link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)", paddingTop: "1.75rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontFamily: "var(--font-mono)" }}>
            © 2025 Sohanur Rahman · Built with <span style={{ color: "var(--orange)" }}>♥</span> using Next.js
          </span>
          <button onClick={scrollTop}
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted2)", background: "none", border: "none", cursor: "pointer", transition: "color 0.3s,transform 0.3s", letterSpacing: "0.08em" }}
            className="back-top">
            Back to top
            <motion.svg animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7" /></motion.svg>
          </button>
        </div>
      </div>
    </footer>
  );
}

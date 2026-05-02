"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import logo from "@/assests/Gemini_Generated_Image_whvnbqwhvnbqwhvn (1).png";


const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar.tsx এর IntersectionObserver অংশটি এটি দিয়ে রিপ্লেস করুন:
useEffect(() => {
  const sections = ["home", "about", "skills", "projects", "education", "contact"];
  
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        // e.isIntersecting এর সাথে e.intersectionRatio চেক করলে একুরেসি বাড়বে
        if (e.isIntersecting && e.intersectionRatio >= 0.1) {
          setActive(e.target.id);
        }
      });
    },
    { 
      // rootMargin এবং threshold একটু ফ্লেক্সিবল করা হয়েছে
      threshold: [0.1, 0.5], 
      rootMargin: "-10% 0px -70% 0px" 
    }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) obs.observe(el);
  });

  return () => obs.disconnect();
}, []);

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMobileOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
          padding: scrolled ? "0.9rem clamp(1.25rem,5vw,4rem)" : "1.4rem clamp(1.25rem,5vw,4rem)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "all 0.4s cubic-bezier(0.23,1,0.32,1)",
          background: scrolled ? "rgba(8,8,8,0.82)" : "transparent",
          backdropFilter: scrolled ? "blur(32px) saturate(1.5)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.055)" : "1px solid transparent",
        }}
      >
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
          style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "1.5rem", letterSpacing: "-0.03em", color: "var(--white)", textDecoration: "none", display: "flex", alignItems: "center" }}>
          <Image src={logo} alt="logo" height={200} width={200}></Image>
        </a>

        {/* Desktop Nav */}
        <ul style={{ display: "flex", alignItems: "center", gap: "2.25rem", listStyle: "none" }} className="nav-links-desktop">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                style={{ fontFamily: "var(--font-dm)", fontSize: "0.875rem", fontWeight: 400, color: active === link.href.replace("#","") ? "var(--orange)" : "var(--muted2)", textDecoration: "none", position: "relative", transition: "color 0.3s", paddingBottom: 4 }}>
                {link.label}
                {active === link.href.replace("#","") && (
                  <motion.span layoutId="nav-underline"
                    style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1.5px", background: "var(--orange)", borderRadius: 2 }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }} />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }} className="btn-hire"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem", borderRadius: "100px", padding: "0.6rem 1.4rem", border: "none", background: "linear-gradient(135deg,var(--orange),var(--orange2))", color: "#000", boxShadow: "0 4px 20px rgba(255,122,0,0.3)", textDecoration: "none", transition: "all 0.35s cubic-bezier(0.23,1,0.32,1)" }}>
            Hire Me
          </a>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="hamburger-btn"
            style={{ background: "none", border: "none", color: "var(--cream)", width: 40, height: 40, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: 5, padding: 0 }}>
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }} style={{ display: "block", width: 22, height: 1.5, background: "var(--cream)", transformOrigin: "center" }} />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1, scaleX: mobileOpen ? 0 : 1 }} style={{ display: "block", width: 22, height: 1.5, background: "var(--cream)" }} />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }} style={{ display: "block", width: 22, height: 1.5, background: "var(--cream)", transformOrigin: "center" }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.16,1,0.3,1] }}
            style={{ position: "fixed", inset: 0, zIndex: 400, background: "rgba(8,8,8,0.97)", backdropFilter: "blur(40px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1.75rem" }}
          >
            {/* Close X in top-right */}
            <button onClick={() => setMobileOpen(false)} aria-label="Close menu"
              style={{ position: "absolute", top: "1.5rem", right: "clamp(1.25rem,5vw,4rem)", background: "none", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--muted2)", fontSize: "1.1rem", cursor: "pointer", transition: "all 0.3s" }}>
              ✕
            </button>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
              Navigation
            </motion.div>

            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.15, ease: [0.16,1,0.3,1] }}
                style={{
                  fontFamily: "var(--font-syne)", fontWeight: 700,
                  fontSize: "clamp(2rem,8vw,2.75rem)",
                  color: active === link.href.replace("#","") ? "var(--orange)" : "var(--cream)",
                  textDecoration: "none", transition: "color 0.2s",
                  letterSpacing: "-0.02em",
                }}
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55, ease: [0.16,1,0.3,1] }}
              style={{ marginTop: "1rem", fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem", padding: "0.9rem 2.5rem", borderRadius: 100, background: "linear-gradient(135deg,var(--orange),var(--orange2))", color: "#000", textDecoration: "none", boxShadow: "0 4px 24px rgba(255,122,0,0.4)" }}>
              Hire Me →
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .btn-hire:hover { box-shadow: 0 8px 32px rgba(255,122,0,0.5) !important; transform: translateY(-1px); }
      `}</style>
    </>
  );
}

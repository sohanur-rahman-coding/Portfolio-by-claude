"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const contactInfo = [
  { icon: "✉", label: "Email", value: "sohanbd413@gmail.com", href: "mailto:sohanbd413@gmail.com" },
  { icon: "📍", label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  { icon: "💬", label: "WhatsApp", value: "+880 1747744641", href: "#" },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("https://formsubmit.co/ajax/sohanbd413@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || "New Portfolio Message",
          message: form.message,
          _subject: "New contact from your portfolio!"
        }),
      });
      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      setStatus("idle");
    }
  };
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
  return (
    <section id="contact" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "var(--bg2)", position: "relative", overflow: "hidden" }}>
      {/* Bottom glow */}
      <div style={{ position: "absolute", bottom: -120, left: "50%", transform: "translateX(-50%)", width: 800, height: 500, borderRadius: "50%", background: "radial-gradient(ellipse,rgba(255,122,0,0.06) 0%,transparent 60%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)", position: "relative" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--orange)", display: "block" }} />
            05 &nbsp;—&nbsp; Contact
          </motion.div>

          <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "3.5rem" }}>
            Let&apos;s work<br /><span className="gradient-text">together</span>
          </motion.h2>

          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "clamp(2rem,4vw,4rem)", alignItems: "start" }} className="contact-grid">

            {/* Info */}
            <motion.div variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
              style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {contactInfo.map((item) => (
                <motion.a key={item.label} href={item.href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className="card contact-info-item"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: 16, textDecoration: "none", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>
                  <motion.div 
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,122,0,0.08)", border: "1px solid rgba(255,122,0,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.2rem" }}>
                    {item.icon}
                  </motion.div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.06em", marginBottom: "0.15rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}

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

            {/* Form */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              className="card" style={{ borderRadius: 22, padding: "clamp(1.5rem,3vw,2.5rem)", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>

              {status === "sent" ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "3rem 2rem" }}>
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring", stiffness: 200, damping: 15 }} style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", fontSize: "1.6rem", color: "var(--orange)" }}>✓</motion.div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--white)" }}>Message Sent!</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => setStatus("idle")} style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem", padding: "0.75rem 1.75rem", borderRadius: 100, background: "transparent", color: "var(--orange)", border: "1px solid rgba(255,122,0,0.35)", cursor: "pointer", transition: "all 0.3s" }}>
                    Send Another
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="form-row">
                    {["name", "email"].map((field) => (
                      <div key={field} style={{ marginBottom: "1.1rem" }}>
                        <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>
                          {field.charAt(0).toUpperCase() + field.slice(1)}
                        </label>
                        <input type={field === "email" ? "email" : "text"} placeholder={field === "name" ? "John Doe" : "john@example.com"} value={form[field as keyof typeof form]} onChange={(e) => setForm({ ...form, [field]: e.target.value })} className="form-input" />
                      </div>
                    ))}
                  </div>
                  <div style={{ marginBottom: "1.1rem" }}>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Subject</label>
                    <input type="text" placeholder="Project Inquiry" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="form-input" />
                  </div>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <label style={{ display: "block", fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted2)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.6rem" }}>Message</label>
                    <textarea placeholder="Tell me about your project..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="form-input" style={{ resize: "vertical", minHeight: 130, fontFamily: "var(--font-dm)" }} />
                  </div>
                  <motion.button type="submit" disabled={status === "sending"}
                    whileHover={status === "sending" ? {} : { scale: 1.02 }}
                    whileTap={status === "sending" ? {} : { scale: 0.98 }}
                    style={{ width: "100%", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.95rem", borderRadius: 100, border: "none", cursor: status === "sending" ? "wait" : "pointer", background: error ? "rgba(255,60,60,0.85)" : "linear-gradient(135deg,var(--orange),var(--orange2))", color: "#000", transition: "all 0.3s", boxShadow: error ? "none" : "0 4px 24px rgba(255,122,0,0.35)", opacity: status === "sending" ? 0.75 : 1 }}>
                    {status === "sending" ? "Sending..." : error ? "Please fill required fields" : "Send Message →"}
                  </motion.button>
                  <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>I typically reply within 24 hours</p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

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

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setError(true);
      setTimeout(() => setError(false), 2500);
      return;
    }
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1600));
    setStatus("sent");
  };

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
                <a key={item.label} href={item.href}
                  className="card contact-info-item"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1.25rem 1.5rem", borderRadius: 16, textDecoration: "none", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(255,122,0,0.08)", border: "1px solid rgba(255,122,0,0.14)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1rem" }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", letterSpacing: "0.06em", marginBottom: "0.15rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.9rem", color: "var(--cream)", fontWeight: 500 }}>{item.value}</div>
                  </div>
                </a>
              ))}

              <div style={{ marginTop: "0.5rem" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.75rem" }}>Social</p>
                <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
                  {["GitHub", "LinkedIn", "Facebook"].map((s) => (
                    <a key={s} href="#" className="social-icon"
                      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", padding: "0.55rem 1.1rem", borderRadius: 12, border: "1px solid rgba(255,255,255,0.09)", color: "var(--muted2)", textDecoration: "none", fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.04em", transition: "all 0.3s" }}>
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div variants={{ hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } }}
              className="card" style={{ borderRadius: 22, padding: "clamp(1.5rem,3vw,2.5rem)", background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)" }}>

              {status === "sent" ? (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "3rem 2rem", animation: "popIn 0.4s cubic-bezier(0.16,1,0.3,1)" }}>
                  <div style={{ width: 64, height: 64, borderRadius: "50%", background: "rgba(255,122,0,0.1)", border: "1px solid rgba(255,122,0,0.25)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", fontSize: "1.6rem", color: "var(--orange)" }}>✓</div>
                  <h3 style={{ fontFamily: "var(--font-syne)", fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--white)" }}>Message Sent!</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--muted)", marginBottom: "1.5rem", lineHeight: 1.7 }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} style={{ fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.875rem", padding: "0.75rem 1.75rem", borderRadius: 100, background: "transparent", color: "var(--orange)", border: "1px solid rgba(255,122,0,0.35)", cursor: "pointer", transition: "all 0.3s" }}>
                    Send Another
                  </button>
                </div>
              ) : (
                <>
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
                  <button onClick={handleSubmit} disabled={status === "sending"}
                    style={{ width: "100%", padding: "1rem", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.95rem", borderRadius: 100, border: "none", cursor: status === "sending" ? "wait" : "pointer", background: error ? "rgba(255,60,60,0.85)" : "linear-gradient(135deg,var(--orange),var(--orange2))", color: "#000", transition: "all 0.3s", boxShadow: error ? "none" : "0 4px 24px rgba(255,122,0,0.35)", opacity: status === "sending" ? 0.75 : 1 }}>
                    {status === "sending" ? "Sending..." : error ? "Please fill required fields" : "Send Message →"}
                  </button>
                  <p style={{ textAlign: "center", fontSize: "0.72rem", color: "var(--muted)", marginTop: "0.75rem", fontFamily: "var(--font-mono)", letterSpacing: "0.04em" }}>I typically reply within 24 hours</p>
                </>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

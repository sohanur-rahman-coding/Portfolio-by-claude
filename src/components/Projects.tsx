"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "@/lib/useInView";
import Image from "next/image"; 

// Assets import
import Skill_sphere from "@/assests/skill-sphere.png";
import keen_keeper from "@/assests/keen-keeper.png";
import digi_tools from "@/assests/dig-tools.png";
import job from "@/assests/job-tracker.png";
import issue from "@/assests/issue-tracker.png";
import dragon from "@/assests/dragon-news.png";

const projects = [
  {
    id: 1,
    category: "fullstack",
    image: Skill_sphere,
    color: "#ff7a00",
    bg: "linear-gradient(135deg,#1a0a00,#0e0600)",
    title: "Skill Sphere",
    sub: "Full Stack Project",
    desc: "SkillSphere is a modern, high-performance E-learning platform built to deliver a smooth and engaging learning experience.",
    tags: ["Next.js 15", "React.js", "Hero.Ui", "MongoDB", "Tailwind CSS", "lenis"],
    repo: "https://github.com/sohanur-rahman-coding/skill-sphere",
    live: "https://skill-sphere-2z7vlr4mh-sohanur-rahman-codings-projects.vercel.app/",
  },
  {
    id: 2,
    category: "fullstack",
    image: keen_keeper,
    color: "#3b82f6",
    bg: "linear-gradient(135deg,#000a1a,#000611)",
    title: "Keen Keeper",
    sub: "Full Stack Project",
    desc: "A responsive Friend Tracker app to manage friendships and track interactions like calls, texts, and video chats.",
    tags: ["React.js", "git", "next.js", "MongoDB", "github"],
    repo: "https://github.com/sohanur-rahman-coding/keen-keeper",
    live: "https://keen-keeper-yxwy-8r7rb5ih2-sohanur-rahman-codings-projects.vercel.app/",
  },
  {
    id: 3,
    category: "frontend",
    image: digi_tools,
    color: "#a855f7",
    bg: "linear-gradient(135deg,#0d0012,#080009)",
    title: "Digi Tools",
    sub: "Educational Digital Platform",
    desc: "DigiTools is a clean and modern React-based web application where users can explore premium digital tools. ",
    tags: ["HTML%", "Tailwind CSS", "JavaScript (ES6+)", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/Digi-Tools",
    live: "https://digi-tools-a06.netlify.app/",
  },
  {
    id: 4,
    category: "fullstack",
    image: job,
    color: "#10b981",
    bg: "linear-gradient(135deg,#001a15,#002211)",
    title: "Job Tracker",
    sub: "Career Management Tool",
    desc: "Job Status Tracker is a dynamic web application that allows users to manage job applications .",
    tags: ["HTML%", "Tailwind CSS", "JavaScript (ES6+)", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/Job-Tracker",
    live: "https://sohanur-rahman-coding.github.io/Job-Tracker/",
  },
  {
    id: 5,
    category: "fullstack",
    image: issue,
    color: "#f59e0b",
    bg: "linear-gradient(135deg,#0a0800,#001a0a)",
    title: "GitHub Issues Tracker",
    sub: "Issue Management Tool",
    desc: "GitHub Issue Tracker is a dynamic and interactive web application .",
    tags: ["HTML5", "Tailwind CSS", "JavaScript (ES6+)", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/GitHub-Issues-Tracker",
    live: "https://sohanur-rahman-coding.github.io/GitHub-Issues-Tracker/",
  },
  {
    id: 6,
    category: "frontend",
    image: dragon,
    color: "#f43f5e",
    bg: "linear-gradient(135deg,#1a0005,#110008)",
    title: "Dragon News",
    sub: "News Portal Web App",
    desc: "A dynamic news application with category-based browsing and API integration.",
    tags: ["Next.js 15", "React.js", "Hero.Ui", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/sohanur-rahman-coding/Dragon-news",
    live: "https://dragon-news-fglx-mnh106tcz-sohanur-rahman-codings-projects.vercel.app",
  },
];

const filters = ["all", "fullstack", "frontend"];

export default function Projects() {
  const { ref, inView } = useInView();
  const [active, setActive] = useState("all");

  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "var(--bg2)", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--orange)", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "var(--orange)", display: "block" }} />
            03 &nbsp;—&nbsp; Projects
          </motion.div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em" }}>
              Selected<br /><span className="gradient-text">work</span>
            </motion.h2>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    fontFamily: "var(--font-mono)", fontSize: "0.7rem",
                    padding: "0.5rem 1.25rem", borderRadius: 100, border: "1px solid",
                    letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                    transition: "all 0.3s",
                    background: active === f ? "var(--orange)" : "transparent",
                    color: active === f ? "#000" : "var(--muted2)",
                    borderColor: active === f ? "var(--orange)" : "rgba(255,255,255,0.09)",
                    fontWeight: active === f ? 600 : 400,
                  }}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5rem" }} className="projects-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="card"
                  style={{ borderRadius: 20, background: "rgba(255,255,255,0.022)", border: "1px solid rgba(255,255,255,0.055)", overflow: "hidden" }}
                >
                  {/* Preview Section - Image now fills this container */}
                  <div style={{ height: 180, position: "relative", overflow: "hidden" }}>
                    <Image 
                      src={p.image} 
                      alt={p.title}
                      fill // Container এর পুরো জায়গা নেবে
                      style={{ objectFit: 'cover' }} // ইমেজ ক্রপ হয়ে জায়গা ফিল করবে
                    />
                    
                    {/* Category Tag Overlay */}
                    <span style={{ 
                      position: "absolute", 
                      top: "0.75rem", 
                      right: "0.75rem", 
                      fontFamily: "var(--font-mono)", 
                      fontSize: "0.6rem", 
                      padding: "0.2rem 0.65rem", 
                      borderRadius: 100, 
                      color: p.color, 
                      border: `1px solid ${p.color}40`, 
                      background: "rgba(0,0,0,0.5)", // ইমেজ এর উপর লেখা বোঝার জন্য ব্যাকগ্রাউন্ড
                      backdropFilter: "blur(4px)",
                      letterSpacing: "0.1em", 
                      textTransform: "capitalize",
                      zIndex: 1
                    }}>
                      {p.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "1.5rem" }}>
                    <div style={{ fontFamily: "var(--font-syne)", fontWeight: 700, fontSize: "1.05rem", color: "var(--white)", marginBottom: "0.22rem", transition: "color 0.3s" }} className="proj-title-hover">{p.title}</div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--muted2)", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>{p.sub}</div>
                    <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: "1.1rem" }}>{p.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", padding: "0.22rem 0.65rem", borderRadius: 7, background: "rgba(255,255,255,0.032)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--muted2)", letterSpacing: "0.04em" }}>{t}</span>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem" }}>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-syne)",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          padding: "0.6rem",
                          borderRadius: 100,
                          background: "linear-gradient(135deg,var(--orange),var(--orange2))",
                          color: "#000",
                          textDecoration: "none",
                          transition: "all 0.3s",
                          boxShadow: "0 4px 16px rgba(255,122,0,0.25)"
                        }}
                      >
                        Live Demo
                      </a>

                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          flex: 1,
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-syne)",
                          fontWeight: 600,
                          fontSize: "0.75rem",
                          padding: "0.6rem",
                          borderRadius: 100,
                          background: "transparent",
                          color: "var(--cream)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          textDecoration: "none",
                          transition: "all 0.3s"
                        }}
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
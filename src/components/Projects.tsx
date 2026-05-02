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
    bg: "#1a0a00",
    title: "Skill Sphere",
    sub: "Full Stack Project",
    desc: "SkillSphere is a modern, high-performance E-learning platform .",
    tags: ["Next.js 15", "React.js", "MongoDB", "Tailwind CSS"],
    repo: "https://github.com/sohanur-rahman-coding/skill-sphere",
    live: "https://skill-sphere-2z7vlr4mh-sohanur-rahman-codings-projects.vercel.app/",
  },
  {
    id: 2,
    category: "fullstack",
    image: keen_keeper,
    color: "#3b82f6",
    bg: "#000a1a",
    title: "Keen Keeper",
    sub: "Full Stack Project",
    desc: "A responsive Friend Tracker app to manage friendships and track interactions.",
    tags: ["React.js", "Next.js", "MongoDB", "GitHub"],
    repo: "https://github.com/sohanur-rahman-coding/keen-keeper",
    live: "https://keen-keeper-yxwy-8r7rb5ih2-sohanur-rahman-codings-projects.vercel.app/",
  },
  {
    id: 3,
    category: "frontend",
    image: digi_tools,
    color: "#a855f7",
    bg: "#0d0012",
    title: "Digi Tools",
    sub: "Educational Digital Platform",
    desc: "DigiTools is a clean and modern React-based web application. ",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/Digi-Tools",
    live: "https://sohanur-rahman-coding.github.io/Digi-Tools/",
  },
  {
    id: 4,
    category: "fullstack",
    image: job,
    color: "#10b981",
    bg: "#001a15",
    title: "Job Tracker",
    sub: "Career Management Tool",
    desc: "Job Status Tracker is a dynamic web application that allows users to manage job applications .",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/Job-Tracker",
    live: "https://sohanur-rahman-coding.github.io/Job-Tracker/",
  },
  {
    id: 5,
    category: "fullstack",
    image: issue,
    color: "#f59e0b",
    bg: "#0a0800",
    title: "GitHub Issues Tracker",
    sub: "Issue Management Tool",
    desc: "GitHub Issue Tracker is a dynamic and interactive web application .",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "Daisy Ui"],
    repo: "https://github.com/sohanur-rahman-coding/GitHub-Issues-Tracker",
    live: "https://sohanur-rahman-coding.github.io/GitHub-Issues-Tracker/",
  },
  {
    id: 6,
    category: "frontend",
    image: dragon,
    color: "#f43f5e",
    bg: "#1a0005",
    title: "Dragon News",
    sub: "News Portal Web App",
    desc: "A dynamic news application with category-based browsing and API integration.",
    tags: ["Next.js 15", "React.js", "MongoDB", "Tailwind CSS"],
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
    <section id="projects" style={{ padding: "clamp(5rem,10vw,9rem) 0", background: "#050505", position: "relative" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(1.25rem,5vw,4rem)" }}>
        <motion.div ref={ref} initial="hidden" animate={inView ? "visible" : "hidden"} variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}>

          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            style={{ fontFamily: "monospace", fontSize: "0.72rem", color: "#ff7a00", letterSpacing: "0.28em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <span style={{ width: 24, height: 1, background: "#ff7a00", display: "block" }} />
            03 &nbsp;—&nbsp; Projects
          </motion.div>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", marginBottom: "3.5rem" }}>
            <motion.h2 variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              style={{ fontWeight: 800, fontSize: "clamp(2.2rem,5.5vw,5rem)", lineHeight: 0.95, letterSpacing: "-0.03em", color: "#fff" }}>
              Selected<br /><span style={{ color: "#ff7a00" }}>work</span>
            </motion.h2>

            <motion.div variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  style={{
                    fontFamily: "monospace", fontSize: "0.7rem",
                    padding: "0.5rem 1.25rem", borderRadius: 100, border: "1px solid",
                    letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer",
                    transition: "all 0.3s",
                    background: active === f ? "#ff7a00" : "transparent",
                    color: active === f ? "#000" : "rgba(255,255,255,0.6)",
                    borderColor: active === f ? "#ff7a00" : "rgba(255,255,255,0.1)",
                    fontWeight: active === f ? 600 : 400,
                  }}
                >
                  {f}
                </button>
              ))}
            </motion.div>
          </div>

          <div style={{
  display: "grid",
  // নিচে এটি সব ডিভাইসের জন্য কলাম সংখ্যা অটো সেট করবে
  gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
  gap: "1.5rem",
  width: "100%"
}}>
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.3 }}
                  style={{ borderRadius: 20, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}
                >
                  {/* Image container fixes */}
                  <div style={{ height: 200, position: "relative", overflow: "hidden", background: p.bg }}>
                    <Image 
                        src={p.image} 
                        alt={p.title}
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                    <span style={{ 
                      position: "absolute", top: "10px", right: "10px", 
                      fontSize: "0.6rem", padding: "3px 10px", borderRadius: 100, 
                      color: p.color, border: `1px solid ${p.color}`, 
                      background: "rgba(0,0,0,0.7)", zIndex: 1 
                    }}>
                      {p.category}
                    </span>
                  </div>

                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: "5px" }}>{p.title}</div>
                    <div style={{ fontSize: "0.7rem", color: "#ff7a00", marginBottom: "10px", textTransform: "uppercase" }}>{p.sub}</div>
                    <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.5, marginBottom: "1rem", height: "3rem", overflow: "hidden" }}>{p.desc}</p>
                    
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "1.25rem" }}>
                      {p.tags.map((t) => (
                        <span key={t} style={{ fontSize: "0.6rem", padding: "3px 8px", borderRadius: 5, background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.7)" }}>{t}</span>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, textAlign: "center", fontSize: "0.75rem", fontWeight: 600, padding: "10px", borderRadius: 100, background: "#ff7a00", color: "#000", textDecoration: "none" }}>
                        Live Demo
                      </a>
                      <a href={p.repo} target="_blank" rel="noopener noreferrer"
                        style={{ flex: 1, textAlign: "center", fontSize: "0.75rem", fontWeight: 600, padding: "10px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.1)", color: "#fff", textDecoration: "none" }}>
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
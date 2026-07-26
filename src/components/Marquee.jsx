"use client";

const items = ["MongoDB", "Express.js", "React.js", "Node.js", "Next.js", "TypeScript", "Tailwind CSS", "REST API", "Git & GitHub", "JWT Auth", "Mongoose", "Redux", "Prisma", "PostgreSQL", "Docker"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.055)", borderBottom: "1px solid rgba(255,255,255,0.055)", background: "rgba(255,122,0,0.02)", padding: "1.1rem 0", overflow: "hidden", position: "relative" }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.85rem", paddingRight: "2.5rem", fontFamily: "var(--font-syne)", fontWeight: 600, fontSize: "0.85rem", color: "var(--muted2)", letterSpacing: "0.06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>
            <span style={{ color: "var(--orange)", fontSize: "0.7rem" }}>★</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

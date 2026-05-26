"use client";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const projects = [
  {
    num: "01",
    year: "2024",
    status: "Live",
    title: "E-Commerce Platform",
    summary: "Full-stack retail platform built to scale.",
    desc: "End-to-end e-commerce for a regional retail brand with real-time inventory sync, Midtrans payment, promo engine, and admin analytics. Deployed on AWS + Docker, handles 1,000+ concurrent users.",
    tech: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Redis",
      "Docker",
      "AWS",
    ],
    highlights: [
      "1,000+ concurrent users",
      "Midtrans payment integration",
      "Real-time inventory sync",
      "Admin analytics dashboard",
    ],
    github: "https://github.com/BimaPanjiWijaya",
    live: "#",
  },
  {
    num: "02",
    year: "2024",
    status: "Live",
    title: "Project Management App",
    summary: "Real-time collaborative task system.",
    desc: "Jira-inspired tool with real-time WebSocket kanban, sprint planning, RBAC, time tracking, and Slack/email webhooks.",
    tech: ["React", "Express", "MongoDB", "Socket.io", "JWT", "Redis"],
    highlights: [
      "Real-time WebSocket sync",
      "RBAC — 5 permission levels",
      "Slack & email webhooks",
      "Sprint velocity tracking",
    ],
    github: "#",
    live: "#",
  },
  {
    num: "03",
    year: "2023",
    status: "Live",
    title: "Analytics Dashboard",
    summary: "Multi-tenant BI platform.",
    desc: "Connects to PostgreSQL, MySQL, Google Sheets. Drag-and-drop chart builder, scheduled PDF/Excel exports, embeddable widgets.",
    tech: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Chart.js",
      "AWS S3",
      "Puppeteer",
    ],
    highlights: [
      "Multi-source connectors",
      "Drag & drop chart builder",
      "Scheduled PDF/Excel export",
      "Embeddable widget system",
    ],
    github: "#",
    live: "#",
  },
  {
    num: "04",
    year: "2023",
    status: "Live",
    title: "REST API Gateway",
    summary: "Microservices API with developer tools.",
    desc: "Centralized API with key management, tiered rate limiting, webhook delivery, usage analytics, and auto-generated Swagger docs.",
    tech: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker", "Swagger"],
    highlights: [
      "Tiered rate limiting",
      "API key management",
      "Webhook delivery system",
      "Auto-generated Swagger docs",
    ],
    github: "#",
    live: "#",
  },
  {
    num: "05",
    year: "2022",
    status: "Archived",
    title: "Local Business Directory",
    summary: "Discovery platform for Bandung.",
    desc: "Community-driven directory of restaurants, shops, and services. Search + filters, Google Maps, claim & review system, 500+ listings.",
    tech: ["React", "Firebase", "Google Maps API", "TailwindCSS"],
    highlights: [
      "Google Maps integration",
      "Business verification",
      "Review & rating system",
      "500+ listings",
    ],
    github: "#",
    live: "#",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title="Projects I've"
        italic="shipped."
        desc="Real-world applications designed, built, and deployed — from side projects to systems at scale."
      />

      <section style={{ padding: "88px 0" }}>
        <div className="container">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            {projects.map((p) => (
              <div
                key={p.num}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "36px 40px",
                  position: "relative",
                  overflow: "hidden",
                  transition:
                    "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border2)";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 20px 60px rgba(0,0,0,0.5)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--border)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Gold side accent on hover — static left bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "2px",
                    background:
                      p.status === "Live" ? "var(--green)" : "var(--muted)",
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 160px",
                    gap: "32px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "14px",
                        marginBottom: "14px",
                        flexWrap: "wrap",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--muted)",
                        }}
                      >
                        {p.num}
                      </span>
                      <h2
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "24px",
                          fontWeight: 400,
                          color: "var(--text)",
                        }}
                      >
                        {p.title}
                      </h2>
                      <span
                        className={`badge ${p.status === "Live" ? "badge-green" : "badge-gray"}`}
                      >
                        {p.status === "Live" && (
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              background: "var(--green)",
                              display: "inline-block",
                            }}
                          />
                        )}
                        {p.status}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "11px",
                          color: "var(--muted)",
                          marginLeft: "auto",
                        }}
                      >
                        {p.year}
                      </span>
                    </div>

                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--muted2)",
                        lineHeight: 1.78,
                        maxWidth: "680px",
                        marginBottom: "20px",
                      }}
                    >
                      {p.desc}
                    </p>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "12px",
                        marginBottom: "20px",
                      }}
                    >
                      {p.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "13px",
                            color: "var(--muted2)",
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              background: "var(--gold)",
                              display: "inline-block",
                              flexShrink: 0,
                            }}
                          />
                          {h}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {p.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      paddingTop: "4px",
                    }}
                  >
                    <Link
                      href={p.live}
                      className="btn btn-gold"
                      style={{ justifyContent: "center", fontSize: "13px" }}
                    >
                      Live ↗
                    </Link>
                    <Link
                      href={p.github}
                      className="btn btn-ghost"
                      style={{ justifyContent: "center", fontSize: "13px" }}
                    >
                      GitHub
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

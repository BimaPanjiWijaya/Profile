"use client";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Me"
        title="Developer, builder,"
        italic="problem solver."
        desc="I write code for a living, but what I really love is turning complex problems into simple, elegant experiences."
      />

      <section
        style={{ padding: "88px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 320px",
            gap: "88px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "32px",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "24px",
              }}
            >
              My Story
            </h2>
            {[
              "I started my journey in web development in 2020, building simple landing pages for local businesses in Bandung. What began as a freelance side gig quickly turned into a full-time passion.",
              "Over the past 3+ years, I've grown from building static websites into architecting full-stack applications — from designing database schemas to deploying containerized services on AWS. I currently work as a Senior Full Stack Developer at PT. Tech Innovate, where I lead a small engineering team building products used by tens of thousands of users.",
              "Outside of work, I contribute to open source, write about web development, and mentor junior developers in local tech communities. I believe in paying forward what I've learned.",
              "When I'm not coding, you'll find me exploring Bandung's coffee scene, playing chess online, or hiking around West Java.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "16px",
                  color: "var(--muted2)",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                {p}
              </p>
            ))}
            <div style={{ display: "flex", gap: "12px", marginTop: "36px" }}>
              <Link href="/experience" className="btn btn-gold">
                View Experience →
              </Link>
              <a href="#" className="btn btn-ghost">
                Download CV ↓
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Info card */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background:
                    "linear-gradient(90deg, var(--gold), transparent)",
                }}
              />
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "20px",
                }}
              >
                Quick Info
              </p>
              {[
                ["Name", "Bima Panji Wijaya"],
                ["Role", "Full Stack Developer"],
                ["Location", "Bandung, Indonesia"],
                ["Experience", "3+ Years"],
                ["Status", "🟢 Open to work"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "10px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      fontFamily: "var(--mono)",
                    }}
                  >
                    {k}
                  </span>
                  <span
                    style={{
                      fontSize: "13px",
                      color: "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    {v}
                  </span>
                </div>
              ))}
            </div>

            {/* Education */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Education
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "var(--text)",
                  marginBottom: "4px",
                }}
              >
                S1 Informatika
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted2)" }}>
                Universitas Padjadjaran
              </p>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted)",
                  marginTop: "2px",
                }}
              >
                2018 – 2022 · GPA 3.72
              </p>
            </div>

            {/* Languages */}
            <div
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "16px",
                padding: "28px",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "var(--gold)",
                  marginBottom: "16px",
                }}
              >
                Languages
              </p>
              {[
                ["Bahasa Indonesia", "Native"],
                ["English", "Professional"],
              ].map(([lang, lvl]) => (
                <div
                  key={lang}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "8px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: "14px", color: "var(--text)" }}>
                    {lang}
                  </span>
                  <span className="badge badge-gold">{lvl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "88px 0" }}>
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            How I Work
          </p>
          <h2 className="section-title" style={{ marginBottom: "52px" }}>
            My <em>Values</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            {[
              [
                "⚙️",
                "Engineering First",
                "Clean, maintainable code that scales. Every decision is intentional.",
              ],
              [
                "🎯",
                "Product-Minded",
                'Understanding the "why" behind features builds solutions that truly serve users.',
              ],
              [
                "🤝",
                "Collaborative",
                "Great software is a team sport — honest feedback, proactive communication.",
              ],
              [
                "📚",
                "Always Learning",
                "Dedicated time every week to new tools, paradigms, and best practices.",
              ],
            ].map(([icon, title, desc]) => (
              <div
                key={String(title)}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "28px",
                  transition: "border-color 0.25s, transform 0.25s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(201,168,76,0.3)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>
                  {icon}
                </div>
                <h3
                  style={{
                    fontSize: "16px",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "10px",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                  }}
                >
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

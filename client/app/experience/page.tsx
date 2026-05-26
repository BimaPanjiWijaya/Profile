"use client";
import PageHero from "@/components/PageHero";
import Link from "next/link";

const exps = [
  {
    role: "Senior Full Stack Developer",
    co: "PT. Tech Innovate",
    period: "Jan 2023 — Present",
    type: "Full-time",
    loc: "Bandung",
    color: "var(--blue)",
    badge: "badge-blue",
    desc: "Lead the engineering team building a SaaS platform serving 50,000+ active users. Responsible for architecture decisions, code reviews, and mentoring junior developers.",
    wins: [
      "Redesigned API architecture, cutting response time 40%",
      "Docker-based CI/CD: 30min → 5min deploys",
      "Mentored 3 juniors; 2 since promoted",
      "Monolith → microservices with zero downtime",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
  },
  {
    role: "Full Stack Developer",
    co: "StartupXYZ",
    period: "Mar 2022 — Dec 2022",
    type: "Full-time",
    loc: "Remote — Jakarta",
    color: "var(--green)",
    badge: "badge-green",
    desc: "Developed and maintained multiple client-facing web applications. Worked closely with product and design teams in a fast-paced environment.",
    wins: [
      "Built 3 client apps from scratch with Next.js + Node.js",
      "Integrated Midtrans, Xendit, and Stripe",
      "Reduced page load time by 60%",
      "99.5% API uptime across production services",
    ],
    tech: ["React", "Express", "MongoDB", "Redis", "GCP", "Nginx"],
  },
  {
    role: "Frontend Developer",
    co: "Digital Agency Co.",
    period: "Aug 2021 — Feb 2022",
    type: "Contract",
    loc: "Bandung",
    color: "var(--gold)",
    badge: "badge-gold",
    desc: "Built responsive web interfaces for 15+ client projects. Worked directly with designers using Figma for spec handoffs, pixel-perfect delivery.",
    wins: [
      "Delivered 15+ projects on time and budget",
      "Created reusable React component library",
      "Perfect Lighthouse scores on 8 sites",
      "Introduced Storybook for doc",
    ],
    tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Figma"],
  },
  {
    role: "Junior Web Developer",
    co: "Freelance",
    period: "Jan 2020 — Jul 2021",
    type: "Freelance",
    loc: "Bandung",
    color: "var(--muted2)",
    badge: "badge-gray",
    desc: "Started professional journey building websites and web apps for small businesses. Managed full project lifecycle independently from scoping to deployment.",
    wins: [
      "12 client projects, 5★ avg rating",
      "Custom CMS solutions with PHP + MySQL",
      "Solo: requirements → design → deploy",
      "Self-taught modern frontend frameworks",
    ],
    tech: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"],
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Career"
        title="Work history &"
        italic="education."
        desc="3+ years of professional experience — from freelance gigs to leading engineering teams at scale."
      />

      <section
        style={{ padding: "88px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Work Experience
          </p>
          <h2 className="section-title" style={{ marginBottom: "48px" }}>
            Professional <em>History</em>
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {exps.map((e, i) => (
              <div
                key={i}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "36px 40px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(el) =>
                  ((el.currentTarget as HTMLElement).style.borderColor =
                    "var(--border2)")
                }
                onMouseLeave={(el) =>
                  ((el.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "2px",
                    background: e.color,
                  }}
                />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "32px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginBottom: "6px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "22px",
                          fontWeight: 400,
                          color: "var(--text)",
                        }}
                      >
                        {e.role}
                      </h3>
                      <span className={`badge ${e.badge}`}>{e.type}</span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        gap: "12px",
                        alignItems: "center",
                        marginBottom: "18px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "14px",
                          fontWeight: 600,
                          color: e.color,
                        }}
                      >
                        {e.co}
                      </span>
                      <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                        📍 {e.loc}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--muted2)",
                        lineHeight: 1.8,
                        maxWidth: "640px",
                        marginBottom: "20px",
                      }}
                    >
                      {e.desc}
                    </p>
                    <div style={{ marginBottom: "20px" }}>
                      <p
                        style={{
                          fontFamily: "var(--mono)",
                          fontSize: "10px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--muted)",
                          marginBottom: "10px",
                        }}
                      >
                        Key Achievements
                      </p>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "6px",
                        }}
                      >
                        {e.wins.map((w) => (
                          <div
                            key={w}
                            style={{
                              display: "flex",
                              gap: "10px",
                              fontSize: "14px",
                              color: "var(--muted2)",
                              alignItems: "flex-start",
                            }}
                          >
                            <span
                              style={{
                                color: e.color,
                                fontWeight: 700,
                                flexShrink: 0,
                                lineHeight: 1.6,
                              }}
                            >
                              →
                            </span>
                            {w}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                    >
                      {e.tech.map((t) => (
                        <span key={t} className="tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        style={{ padding: "88px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Education
          </p>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>
            Academic <em>Background</em>
          </h2>
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              padding: "36px 40px",
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
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr auto",
                gap: "32px",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "22px",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "4px",
                  }}
                >
                  S1 Teknik Informatika
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--gold)",
                    marginBottom: "8px",
                  }}
                >
                  Universitas Padjadjaran
                </p>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    marginBottom: "14px",
                  }}
                >
                  Thesis on distributed systems optimization. Active in software
                  engineering student club.
                </p>
                <span className="badge badge-gold">GPA: 3.72 / 4.00</span>
              </div>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: "11px",
                  color: "var(--muted)",
                  whiteSpace: "nowrap",
                }}
              >
                2018 – 2022
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0" }}>
        <div className="container">
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "48px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }}
            />
            <div>
              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "28px",
                  fontWeight: 400,
                  color: "var(--text)",
                  marginBottom: "8px",
                }}
              >
                Want the full picture?
              </h3>
              <p style={{ fontSize: "15px", color: "var(--muted2)" }}>
                Download my CV for a complete overview of experience, skills,
                and education.
              </p>
            </div>
            <div style={{ display: "flex", gap: "12px", flexShrink: 0 }}>
              <Link href="/contact" className="btn btn-gold">
                Get in Touch →
              </Link>
              <a href="#" className="btn btn-ghost">
                Download CV ↓
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

"use client";
import Link from "next/link";

const stack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "AWS",
  "Redis",
  "Prisma",
  "TailwindCSS",
];

const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    year: "2024",
    tech: ["Next.js", "Node.js", "PostgreSQL"],
    desc: "Full-stack e-commerce serving 1,000+ concurrent users with real-time inventory and Midtrans payment.",
  },
  {
    num: "02",
    title: "Project Management App",
    year: "2024",
    tech: ["React", "Socket.io", "MongoDB"],
    desc: "Collaborative task manager with real-time WebSocket sync, RBAC, and Slack integrations.",
  },
  {
    num: "03",
    title: "Analytics Dashboard",
    year: "2023",
    tech: ["Next.js", "Prisma", "Chart.js"],
    desc: "Multi-tenant BI platform with drag-and-drop charts and scheduled PDF report exports.",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "80px 0",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Gold orb */}
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "5%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 420px",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <div>
              {/* Available badge */}
              <div
                className="anim-in"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "100px",
                  border: "1px solid rgba(45,212,160,0.3)",
                  background: "rgba(45,212,160,0.06)",
                  marginBottom: "32px",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--green)",
                    letterSpacing: "0.1em",
                  }}
                >
                  Available for projects
                </span>
              </div>

              {/* Headline */}
              <h1
                className="anim-up d1"
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "clamp(52px, 6.5vw, 88px)",
                  fontWeight: 300,
                  lineHeight: 1.03,
                  letterSpacing: "-0.02em",
                  color: "var(--text)",
                  marginBottom: "28px",
                }}
              >
                Building the web,
                <br />
                <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>
                  pixel by pixel.
                </em>
              </h1>

              <p
                className="anim-up d2"
                style={{
                  fontSize: "17px",
                  color: "var(--muted2)",
                  lineHeight: 1.8,
                  maxWidth: "480px",
                  marginBottom: "44px",
                }}
              >
                I&apos;m{" "}
                <strong style={{ color: "var(--text)", fontWeight: 500 }}>
                  Bima Panji Wijaya
                </strong>{" "}
                — a Full Stack Developer from Bandung, Indonesia. I design,
                build, and ship scalable web applications end to end.
              </p>

              <div
                className="anim-up d3"
                style={{
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                  marginBottom: "64px",
                }}
              >
                <Link href="/projects" className="btn btn-gold">
                  View Projects →
                </Link>
                <Link href="/about" className="btn btn-ghost">
                  About Me
                </Link>
              </div>

              {/* Stats row */}
              <div
                className="anim-up d4"
                style={{
                  display: "flex",
                  gap: "0",
                  borderTop: "1px solid var(--border)",
                  paddingTop: "32px",
                }}
              >
                {[
                  ["3+", "Years exp."],
                  ["20+", "Projects"],
                  ["10+", "Clients"],
                ].map(([n, l], i) => (
                  <div
                    key={l}
                    style={{
                      paddingRight: "40px",
                      marginRight: "40px",
                      borderRight: i < 2 ? "1px solid var(--border)" : "none",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--serif)",
                        fontSize: "40px",
                        fontWeight: 600,
                        color: "var(--gold)",
                        lineHeight: 1,
                      }}
                    >
                      {n}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "11px",
                        color: "var(--muted)",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                        marginTop: "6px",
                      }}
                    >
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right card */}
            <div className="anim-up d2">
              <div
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "20px",
                  padding: "36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* gold top accent */}
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

                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "14px",
                    }}
                  >
                    Current Position
                  </p>
                  <p
                    style={{
                      fontSize: "17px",
                      fontWeight: 600,
                      color: "var(--text)",
                    }}
                  >
                    Senior Full Stack Developer
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted2)",
                      marginTop: "2px",
                    }}
                  >
                    PT. Tech Innovate · Bandung
                  </p>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "28px",
                  }}
                />

                <div style={{ marginBottom: "28px" }}>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                      marginBottom: "14px",
                    }}
                  >
                    Core Stack
                  </p>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}
                  >
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Node.js",
                      "PostgreSQL",
                      "Docker",
                    ].map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--border)",
                    marginBottom: "28px",
                  }}
                />

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "24px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>🇮🇩</span>
                  <div>
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "var(--text)",
                      }}
                    >
                      Bandung, Indonesia
                    </p>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                      GMT+7 · Open to remote
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn btn-gold"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Let&apos;s Work Together →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          style={{
            position: "absolute",
            bottom: "36px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            animation: "float 3s ease infinite",
          }}
        >
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "9px",
              color: "var(--muted)",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              background:
                "linear-gradient(to bottom, var(--gold), transparent)",
            }}
          />
        </div>
      </section>

      {/* ── MARQUEE STACK ── */}
      <div
        style={{
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "18px 0",
          background: "var(--bg2)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "marquee 22s linear infinite",
            width: "max-content",
            gap: "0",
          }}
        >
          {[...stack, ...stack].map((t, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--mono)",
                fontSize: "12px",
                color: "var(--muted)",
                letterSpacing: "0.12em",
                padding: "0 32px",
                borderRight: "1px solid var(--border)",
                whiteSpace: "nowrap",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section
        style={{ padding: "100px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "56px",
            }}
          >
            <div>
              <p className="label" style={{ marginBottom: "16px" }}>
                Selected Work
              </p>
              <h2 className="section-title">
                Featured <em>Projects</em>
              </h2>
            </div>
            <Link
              href="/projects"
              className="btn btn-ghost"
              style={{ flexShrink: 0 }}
            >
              All Projects →
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1px",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
            }}
          >
            {projects.map((p, i) => (
              <div
                key={p.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "72px 1fr auto",
                  gap: "32px",
                  alignItems: "center",
                  padding: "32px 36px",
                  background: "var(--surface)",
                  borderBottom:
                    i < projects.length - 1
                      ? "1px solid var(--border)"
                      : "none",
                  transition: "background 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--surface2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.background =
                    "var(--surface)")
                }
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    color: "var(--muted)",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.num}
                </span>
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      marginBottom: "8px",
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
                      {p.title}
                    </h3>
                    <span className="badge badge-gray">{p.year}</span>
                  </div>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--muted2)",
                      lineHeight: 1.7,
                      maxWidth: "600px",
                      marginBottom: "12px",
                    }}
                  >
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", gap: "6px" }}>
                    {p.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href="/projects"
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "12px",
                    color: "var(--gold)",
                    letterSpacing: "0.08em",
                    whiteSpace: "nowrap",
                    flexShrink: 0,
                  }}
                >
                  View →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{ padding: "100px 0", position: "relative", overflow: "hidden" }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          className="container"
          style={{ textAlign: "center", position: "relative" }}
        >
          <p
            className="label"
            style={{ justifyContent: "center", marginBottom: "24px" }}
          >
            Open to Work
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "24px",
            }}
          >
            Have a project
            <br />
            in{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>
              mind?
            </em>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted2)",
              maxWidth: "420px",
              margin: "0 auto 40px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m always open to discussing new projects and interesting
            opportunities.
          </p>
          <div
            style={{ display: "flex", gap: "12px", justifyContent: "center" }}
          >
            <Link href="/contact" className="btn btn-gold">
              Get in Touch →
            </Link>
            <Link href="/projects" className="btn btn-ghost">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

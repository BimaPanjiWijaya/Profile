"use client";
import PageHero from "@/components/PageHero";

const cats = [
  {
    label: "Frontend",
    color: "var(--blue)",
    skills: [
      { n: "React / Next.js", v: 92 },
      { n: "TypeScript", v: 88 },
      { n: "Tailwind CSS", v: 90 },
      { n: "Vue.js", v: 72 },
      { n: "HTML / CSS", v: 96 },
    ],
  },
  {
    label: "Backend",
    color: "var(--green)",
    skills: [
      { n: "Node.js / Express", v: 88 },
      { n: "PostgreSQL", v: 82 },
      { n: "MongoDB", v: 78 },
      { n: "REST API", v: 92 },
      { n: "GraphQL", v: 70 },
    ],
  },
  {
    label: "DevOps & Cloud",
    color: "var(--gold)",
    skills: [
      { n: "Docker", v: 78 },
      { n: "Git / GitHub", v: 95 },
      { n: "AWS (EC2/S3/RDS)", v: 72 },
      { n: "CI/CD", v: 76 },
      { n: "Linux / CLI", v: 83 },
    ],
  },
];

const tools = [
  { cat: "Editor", items: ["VS Code", "Vim", "Cursor"] },
  { cat: "Design", items: ["Figma", "Excalidraw"] },
  { cat: "Database", items: ["TablePlus", "MongoDB Compass", "Redis Insight"] },
  { cat: "API", items: ["Postman", "Insomnia", "Swagger"] },
  { cat: "DevOps", items: ["Docker Desktop", "Vercel", "Railway", "Netlify"] },
  { cat: "Productivity", items: ["Notion", "Linear", "Slack"] },
];

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label="Skills & Expertise"
        title="My technical"
        italic="toolkit."
        desc="Languages, frameworks, and tools I use to build reliable, modern web applications — from idea to production."
      />

      {/* Skill bars */}
      <section
        style={{ padding: "88px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {cats.map((cat) => (
              <div
                key={cat.label}
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "16px",
                  padding: "32px",
                  position: "relative",
                  overflow: "hidden",
                  transition: "border-color 0.25s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border2)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.borderColor =
                    "var(--border)")
                }
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: `linear-gradient(90deg, ${cat.color}, transparent)`,
                  }}
                />
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: cat.color,
                    marginBottom: "28px",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: cat.color,
                      display: "inline-block",
                    }}
                  />
                  {cat.label}
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {cat.skills.map((s) => (
                    <div key={s.n}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "8px",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "14px",
                            color: "var(--text)",
                            fontWeight: 400,
                          }}
                        >
                          {s.n}
                        </span>
                        <span
                          style={{
                            fontFamily: "var(--mono)",
                            fontSize: "11px",
                            color: "var(--muted)",
                          }}
                        >
                          {s.v}%
                        </span>
                      </div>
                      <div
                        style={{
                          height: "3px",
                          background: "var(--surface2)",
                          borderRadius: "3px",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            height: "100%",
                            width: `${s.v}%`,
                            background: cat.color,
                            borderRadius: "3px",
                            opacity: 0.8,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section
        style={{ padding: "88px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Daily Tools
          </p>
          <h2 className="section-title" style={{ marginBottom: "48px" }}>
            Tools & <em>Software</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1px",
              border: "1px solid var(--border)",
              borderRadius: "16px",
              overflow: "hidden",
              background: "var(--border)",
            }}
          >
            {tools.map((g) => (
              <div
                key={g.cat}
                style={{ background: "var(--surface)", padding: "28px" }}
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
                  {g.cat}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                  {g.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soft skills */}
      <section style={{ padding: "88px 0" }}>
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Beyond Code
          </p>
          <h2 className="section-title" style={{ marginBottom: "48px" }}>
            Soft <em>Skills</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "16px",
            }}
          >
            {[
              [
                "Communication",
                "Clear, honest, async-friendly comms with clients and teammates — always in context.",
              ],
              [
                "Problem Solving",
                "Breaking complex issues into digestible steps with a calm, structured mindset.",
              ],
              [
                "Time Management",
                "Delivering on deadline without sacrificing quality or burning out.",
              ],
              [
                "Leadership",
                "Mentoring junior developers and leading small engineering squads with empathy.",
              ],
            ].map(([t, d]) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  gap: "20px",
                  padding: "24px",
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
              >
                <div
                  style={{
                    width: "3px",
                    borderRadius: "2px",
                    background: "var(--gold)",
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "6px",
                    }}
                  >
                    {t}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--muted2)",
                      lineHeight: 1.7,
                    }}
                  >
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

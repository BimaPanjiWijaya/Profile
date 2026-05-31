import PageHero from "@/components/PageHero";

const categories = [
  {
    label: "Frontend",
    color: "var(--blue)",
    skills: [
      "React.js / Next.js",
      "React Native",
      "TypeScript / JavaScript",
      "Redux / Context API",
      "Apollo Client",
      "HTML / CSS / Tailwind CSS",
    ],
  },
  {
    label: "Backend",
    color: "var(--green)",
    skills: [
      "Node.js / Express.js",
      "PostgreSQL / Sequelize",
      "MongoDB / Redis",
      "GraphQL / Apollo Server",
      "REST API",
    ],
  },
  {
    label: "Tools & Practices",
    color: "var(--gold)",
    skills: [
      "Git / GitHub",
      "AWS / Firebase / Supabase",
      "Vercel",
      "Test-Driven Development (TDD)",
      "AI-assisted Dev (Copilot)",
    ],
  },
];

const tools = [
  "VS Code",
  "Postman",
  "GitHub Copilot",
  "Vercel",
  "Supabase",
  "Firebase",
  "AWS",
  "Expo",
];

const certifications = [
  {
    issuer: "HackerRank",
    name: "Problem Solving (Basic)",
    date: "May 2026",
    code: "0535ec823789",
  },
  {
    issuer: "HackerRank",
    name: "JavaScript (Basic)",
    date: "May 2026",
    code: "da98576f8106",
  },
  {
    issuer: "HackerRank",
    name: "React (Basic)",
    date: "May 2026",
    code: "11c2e25d0a6a",
  },
];

export default function SkillsPage() {
  return (
    <>
      <PageHero
        label="Skills & Expertise"
        title="My technical"
        italic="toolkit."
        desc="Languages, frameworks, and tools I use to build modern web applications — front-end to back-end."
      />

      {/* ── SKILL CATEGORIES ── */}
      <section
        style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px",
            }}
          >
            {categories.map((cat) => (
              <div
                key={cat.label}
                className="h-border"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: cat.color,
                    marginBottom: "24px",
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
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {cat.skills.map((s) => (
                    <li
                      key={s}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          background: cat.color,
                          opacity: 0.5,
                          flexShrink: 0,
                        }}
                      />
                      <span style={{ fontSize: "15px", color: "var(--text)" }}>
                        {s}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOOLS ── */}
      <section
        style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "20px" }}>
            Daily Tools
          </p>
          <h2 className="section-title" style={{ marginBottom: "36px" }}>
            Tools & <em>Software</em>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            {tools.map((t) => (
              <span
                key={t}
                className="tag"
                style={{ padding: "8px 16px", fontSize: "13px" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATIONS ── */}
      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <p className="label" style={{ marginBottom: "20px" }}>
            Credentials
          </p>
          <h2 className="section-title" style={{ marginBottom: "36px" }}>
            Certifi<em>cations</em>
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            {certifications.map((c) => (
              <div
                key={c.code}
                className="h-border"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--gold)",
                    marginBottom: "10px",
                  }}
                >
                  {c.issuer}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "8px",
                  }}
                >
                  {c.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                    Issued {c.date}
                  </span>
                  <span className="badge badge-gold">Verified</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    marginTop: "8px",
                  }}
                >
                  #{c.code}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

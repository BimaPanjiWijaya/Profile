import PageHero from "@/components/PageHero";

const categories = [
  {
    label: "Language",
    color: "var(--gold)",
    skills: ["JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    label: "Frontend",
    color: "var(--blue)",
    skills: [
      "React.js / Next.js",
      "React Native / React Navigation",
      "Redux / Context API",
      "HTML / CSS / Tailwind CSS",
      "Shadcn UI / DaisyUI / Bootstrap",
      "Apollo Client / Axios",
      "Recharts",
    ],
  },
  {
    label: "Backend",
    color: "var(--green)",
    skills: [
      "Node.js / Express.js",
      "PostgreSQL / MongoDB / Redis",
      "Sequelize / Prisma",
      "REST API / GraphQL / Apollo Server",
      "JWT / NextAuth / bcryptjs",
      "Zod / Gemini AI",
      "Nodemailer",
    ],
  },
];

const tools = [
  "VS Code",
  "Postman",
  "Git",
  "GitHub",
  "Vercel",
  "Supabase",
  "Firebase",
  "AWS EC2",
  "Expo",
  "Vite",
];

const certifications = [
  {
    issuer: "HackerRank",
    name: "Software Engineer Intern",
    date: "20 May 2026",
    code: "64ED3AE1F780",
    type: "Role Certification",
  },
  {
    issuer: "HackerRank",
    name: "Problem Solving (Basic)",
    date: "21 May 2026",
    code: "0535EC823789",
    type: "Skill Certification",
  },
  {
    issuer: "HackerRank",
    name: "JavaScript (Basic)",
    date: "20 May 2026",
    code: "DA98576F8106",
    type: "Skill Certification",
  },
  {
    issuer: "HackerRank",
    name: "React (Basic)",
    date: "21 May 2026",
    code: "11C2E25D0A6A",
    type: "Skill Certification",
  },
  {
    issuer: "HackerRank",
    name: "CSS (Basic)",
    date: "21 May 2026",
    code: "5A3854552C93",
    type: "Skill Certification",
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
          <div className="grid-auto-3">
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
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
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
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "10px",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--gold)",
                    }}
                  >
                    {c.issuer}
                  </p>
                  <span
                    className="badge badge-gray"
                    style={{ fontSize: "10px" }}
                  >
                    {c.type === "Role Certification" ? "Role" : "Skill"}
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var(--text)",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {c.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "8px",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "var(--muted)" }}>
                    {c.date}
                  </span>
                  <span className="badge badge-gold">Verified</span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "10px",
                    color: "var(--muted)",
                    letterSpacing: "0.04em",
                  }}
                >
                  ID: {c.code}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import PageHero from "@/components/PageHero";
import Link from "next/link";

const projects = [
  {
    num: "01",
    year: "May 2026",
    status: "Live",
    title: "Grockcicle",
    desc: "An e-commerce website that sells drinkware and accessories. Built with a modern full-stack JavaScript setup, featuring product browsing, infinite scroll, authentication, and a seamless checkout experience.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "JWT",
      "Bcryptjs",
      "Zod",
      "React Toastify",
      "React Infinite Scroll",
      "Vercel",
    ],
    github: "#",
    live: "#",
  },
  {
    num: "02",
    year: "May 2026",
    status: "Live",
    title: "Pacebok",
    desc: "A social media mobile application built with React Native. Users can post content, follow others, and interact in real time. Backed by a GraphQL API with Apollo Server and MongoDB, with file storage via AWS and Firebase.",
    tech: [
      "React Native",
      "Expo",
      "Apollo Client",
      "React Navigation",
      "Node.js",
      "Apollo Server",
      "MongoDB",
      "Redis",
      "JWT",
      "AWS",
      "Firebase",
    ],
    github: "#",
    live: "#",
  },
  {
    num: "03",
    year: "April 2026",
    status: "Live",
    title: "Sakti Finance",
    desc: "A financial management website powered by artificial intelligence. Helps users track expenses, set budgets, and get AI-driven financial insights. Integrates third-party APIs with a PostgreSQL backend and React frontend.",
    tech: [
      "React",
      "Vite",
      "Redux",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Sequelize",
      "JWT",
      "Supabase",
      "3rd Party API",
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
        italic="built."
        desc="Applications I designed and developed — from e-commerce to mobile apps to AI-powered tools."
      />

      <section style={{ padding: "72px 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {projects.map((p) => (
              <div
                key={p.num}
                className="h-lift"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Status bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "3px",
                    background:
                      p.status === "Live" ? "var(--green)" : "var(--surface2)",
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    gap: "24px",
                    alignItems: "start",
                  }}
                >
                  <div>
                    {/* Header row */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        flexWrap: "wrap",
                        marginBottom: "12px",
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
                          fontSize: "22px",
                          fontWeight: 400,
                          color: "var(--text)",
                        }}
                      >
                        {p.title}
                      </h2>
                      <span className="badge badge-green">
                        <span
                          style={{
                            width: "5px",
                            height: "5px",
                            borderRadius: "50%",
                            background: "var(--green)",
                            display: "inline-block",
                          }}
                        />
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

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--muted2)",
                        lineHeight: 1.8,
                        maxWidth: "680px",
                        marginBottom: "18px",
                      }}
                    >
                      {p.desc}
                    </p>

                    {/* Tech tags */}
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

                  {/* Links */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                      paddingTop: "2px",
                      flexShrink: 0,
                    }}
                  >
                    <Link
                      href={p.live}
                      className="btn btn-gold"
                      style={{
                        justifyContent: "center",
                        fontSize: "13px",
                        padding: "9px 18px",
                      }}
                    >
                      Live ↗
                    </Link>
                    <Link
                      href={p.github}
                      className="btn btn-ghost"
                      style={{
                        justifyContent: "center",
                        fontSize: "13px",
                        padding: "9px 18px",
                      }}
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

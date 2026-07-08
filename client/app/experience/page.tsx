import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience in government IT infrastructure and web development, along with full-stack JavaScript training from Hacktiv8 and a Bachelor's degree in Engineering.",
};
const exps = [
  {
    role: "Programmer",
    co: "South Bengkulu Regional Revenue Agency",
    period: "Sep 2025 — Jan 2026",
    type: "Contract",
    loc: "Bengkulu, Indonesia",
    color: "var(--blue)",
    badge: "badge-blue",
    desc: "Maintained IT infrastructure and developed a web application to improve public service quality at the regional revenue agency.",
    wins: [
      "Designed and build a customer satisfaction website with form and submit features, 1 week processing time.",
      "Performed monthly maintenance on 15 workstations and peripherals (PC and printers) and software (Windows OS, antivirus), including driver updates, and system backups.",
      "Maintain Wi-Fi network on 1 office floor weekly, including connectivity monitoring, access point configuration, and troubleshooting intermittent connections",
    ],
    tech: ["HTML/CSS", "WordPress", "PostgreSQL"],
  },
  {
    role: "Programmer",
    co: "DPMPTSP South Bengkulu",
    period: "Aug 2023 — Aug 2025",
    type: "Full-time",
    loc: "Bengkulu, Indonesia",
    color: "var(--green)",
    badge: "badge-green",
    desc: "Developed and maintained government digital service applications for the One-Stop Integrated Service agency (DPMPTSP) of South Bengkulu.",
    wins: [
      "Designed and developed a DPMPTSP Portal application within 3 weeks, featuring interactive cards and form submission functionality.",
      "Built and implemented a Public Service Mall & Marketplace website over 2 months, featuring profile pages, regulation info, feedback forms (Mall), and navbar, auth, and profile pages (Marketplace, collaborated with 1 team member).",
      "Performed monthly maintenance on network infrastructure across 2 buildings and office hardware & software (PCs, printers, OS, antivirus), including connectivity checks, router resets, hardware cleaning, system updates, and data backup.",
    ],
    tech: ["HTML/CSS", "WordPress", "PostgreSQL"],
  },
];

const education = [
  {
    degree: "Full Stack JavaScript Immersive Program",
    school: "Hacktiv8",
    period: "Feb 2026 – May 2026",
    loc: "Jakarta, Indonesia",
    note: "Hacktiv8 Full Stack JavaScript adalah bootcamp intensif yang melatih kemampuan membangun aplikasi web end-to-end, mencakup React.js, Next.js, dan TypeScript untuk frontend, serta Node.js, Express.js, PostgreSQL, dan MongoDB untuk backend, lengkap dengan praktik proyek kolaboratif dan deployment.",
    color: "var(--gold)",
  },
  {
    degree: "Bachelor of Engineering",
    school: "Universitas Ahmad Dahlan",
    period: "2017 – 2022",
    loc: "Yogyakarta, Indonesia",
    note: "GPA 3.39 / 4.00",
    color: "var(--muted2)",
  },
];

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        label="Career"
        title="Work history &"
        italic="education."
        desc="2+ years of professional experience in government technology and full-stack web development."
      />

      {/* ── WORK EXPERIENCE ── */}
      <section
        style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Work Experience
          </p>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>
            Professional <em>History</em>
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {exps.map((e, i) => (
              <div
                key={i}
                className="h-border"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Color bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "3px",
                    background: e.color,
                  }}
                />

                <div className="card-row">
                  <div>
                    {/* Role & badge */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        flexWrap: "wrap",
                        marginBottom: "4px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontSize: "20px",
                          fontWeight: 400,
                          color: "var(--text)",
                        }}
                      >
                        {e.role}
                      </h3>
                      <span className={`badge ${e.badge}`}>{e.type}</span>
                    </div>

                    {/* Company & location */}
                    <p
                      style={{
                        fontSize: "14px",
                        marginBottom: "16px",
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        gap: "2px 8px",
                      }}
                    >
                      <span style={{ fontWeight: 600, color: e.color }}>
                        {e.co}
                      </span>
                      <span style={{ color: "var(--muted)" }}>{e.loc}</span>
                    </p>

                    {/* Description */}
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--muted2)",
                        lineHeight: 1.8,
                        maxWidth: "640px",
                        marginBottom: "16px",
                      }}
                    >
                      {e.desc}
                    </p>

                    {/* Key wins */}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                        marginBottom: "18px",
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

                    {/* Tech tags */}
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

                  {/* Period */}
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "11px",
                      color: "var(--muted)",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.04em",
                      paddingTop: "4px",
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

      {/* ── EDUCATION ── */}
      <section
        style={{ padding: "72px 0", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">
          <p className="label" style={{ marginBottom: "16px" }}>
            Education
          </p>
          <h2 className="section-title" style={{ marginBottom: "32px" }}>
            Academic <em>Background</em>
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {education.map((ed) => (
              <div
                key={ed.school}
                className="card-row card-outer"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: "28px 36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: "3px",
                    background: ed.color,
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "19px",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "4px",
                    }}
                  >
                    {ed.degree}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: ed.color,
                      marginBottom: "4px",
                    }}
                  >
                    {ed.school}
                  </p>
                  <p style={{ fontSize: "13px", color: "var(--muted)" }}>
                    {ed.loc}
                  </p>
                  {ed.note && (
                    <p
                      style={{
                        fontSize: "14px",
                        color: "var(--muted2)",
                        lineHeight: 1.7,
                        marginTop: "10px",
                      }}
                    >
                      {ed.note}
                    </p>
                  )}
                </div>
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {ed.period}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

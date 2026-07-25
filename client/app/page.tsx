import Link from "next/link";
import Image from "next/image";

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
        }}
      >
        <div className="container hero-grid">
          <div>
            {/* Available badge */}
            <div className="anim-in" style={{ marginBottom: "32px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 14px",
                  borderRadius: "100px",
                  border: "1px solid rgba(45,212,160,0.25)",
                  background: "rgba(45,212,160,0.06)",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    display: "inline-block",
                    animation: "pulse 2s infinite",
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
                  Available for work
                </span>
              </span>
            </div>

            {/* Name */}
            <h1
              className="anim-up d1 hero-title"
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(48px, 6vw, 84px)",
                fontWeight: 300,
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Bima Panji Wijaya
            </h1>

            {/* Role */}
            <p
              className="anim-up d1 hero-role"
              style={{
                fontFamily: "var(--mono)",
                fontSize: "13px",
                color: "var(--gold)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Full Stack Developer · Jakarta, Indonesia
            </p>

            {/* Bio */}
            <p
              className="anim-up d2"
              style={{
                fontSize: "18px",
                color: "var(--muted2)",
                lineHeight: 1.8,
                maxWidth: "520px",
                marginBottom: "40px",
              }}
            >
              I build responsive and user-friendly web applications with
              JavaScript and TypeScript — from front-end to back-end, end-to-end.
            </p>

            {/* CTAs */}
            <div
              className="anim-up d3"
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                marginBottom: "72px",
              }}
            >
              <Link href="/projects" className="btn btn-gold">
                View My Work →
              </Link>
              <Link href="/contact" className="btn btn-ghost">
                Get in Touch
              </Link>
            </div>

            {/* Stats */}
            <div className="anim-up d4 stats-row">
              {[
                ["2+", "Years Experience"],
                ["5+", "Projects Built"],
                ["2+", "Companies"],
              ].map(([n, l]) => (
                <div key={l} className="stat-item">
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "38px",
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
                      fontSize: "10px",
                      color: "var(--muted)",
                      letterSpacing: "0.14em",
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

          <div className="hero-photo-wrap anim-up d3">
            <div className="hero-photo-ring">
              <Image
                src="/bima.jpeg"
                alt="Foto profil Bima Panji Wijaya"
                width={460}
                height={560}
                priority
                className="hero-photo"
              />
            </div>

            <div className="hero-photo-badge">
              <span className="dot" />
              Full Stack Developer
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section
        style={{
          padding: "88px 0",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container grid-auto-2">
          {/* Text */}
          <div>
            <p className="label" style={{ marginBottom: "20px" }}>
              About Me
            </p>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "clamp(26px, 3vw, 36px)",
                fontWeight: 300,
                color: "var(--text)",
                letterSpacing: "-0.01em",
                marginBottom: "28px",
                lineHeight: 1.2,
              }}
            >
              Developer, builder,{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>
                problem solver.
              </em>
            </h2>
            <p
              style={{
                fontSize: "16px",
                color: "var(--muted2)",
                lineHeight: 1.85,
                marginBottom: "20px",
              }}
            >
              I&apos;m a full-stack developer with a passion for modern web
              development. I understand JavaScript and TypeScript, as well as
              front-end and back-end development.
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--muted2)",
                lineHeight: 1.85,
                marginBottom: "36px",
              }}
            >
              I&apos;m highly motivated to learn new technologies, solve
              problems, and build responsive and user-friendly web applications.
              Currently completing the Full Stack JavaScript Immersive Program
              at Hacktiv8.
            </p>
            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link href="/experience" className="btn btn-gold">
                View Experience →
              </Link>
            </div>
          </div>

          {/* Info card */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-lg)",
              padding: "28px",
            }}
          >
            {[
              ["Role", "Full Stack Developer"],
              ["Location", "Jakarta, Indonesia"],
              ["Education", "Hacktiv8 · UAD"],
              ["Experience", "2+ Years"],
              ["Status", "🟢 Open to work"],
            ].map(([k, v], i, arr) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "12px 0",
                  borderBottom:
                    i < arr.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "11px",
                    color: "var(--muted)",
                    letterSpacing: "0.06em",
                    flexShrink: 0,
                  }}
                >
                  {k}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontWeight: 500,
                    textAlign: "right",
                  }}
                >
                  {v}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "88px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p
            className="label"
            style={{ justifyContent: "center", marginBottom: "20px" }}
          >
            Open to Opportunities
          </p>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(36px, 4.5vw, 60px)",
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "20px",
            }}
          >
            Have a project{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>
              in mind?
            </em>
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "var(--muted2)",
              maxWidth: "400px",
              margin: "0 auto 36px",
              lineHeight: 1.8,
            }}
          >
            I&apos;m always open to new projects and interesting opportunities.
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

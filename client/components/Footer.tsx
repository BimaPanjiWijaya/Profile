"use client";
import Link from "next/link";

const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/BimaPanjiWijaya", label: "GitHub ↗" },
  {
    href: "https://www.linkedin.com/in/bima-panji-wijaya-8a44a8218/",
    label: "LinkedIn ↗",
  },
  { href: "mailto:bimapanjiwijaya@gmail.com", label: "Email ↗" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg2)",
        padding: "48px 0 32px",
      }}
    >
      <div className="container">
        <div className="grid-footer">
          <div>
            <Link href="/" style={{ display: "block", marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--serif)",
                  fontSize: "20px",
                  fontWeight: 600,
                  color: "var(--text)",
                }}
              >
                Bima Panji Wijaya
              </span>
            </Link>
            <p
              style={{
                fontSize: "13px",
                color: "var(--muted)",
                maxWidth: "280px",
                lineHeight: 1.75,
              }}
            >
              Full Stack Developer based in Jakarta, Indonesia. Building digital
              products with care and precision.
            </p>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Pages
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {pageLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    fontSize: "14px",
                    color: "var(--muted2)",
                    transition: "color var(--transition)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--text)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--muted2)")
                  }
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: "10px",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--muted)",
                marginBottom: "16px",
              }}
            >
              Connect
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    color: "var(--muted2)",
                    transition: "color var(--transition)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--gold)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "var(--muted2)")
                  }
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--muted)" }}>
            © {new Date().getFullYear()} Bima Panji Wijaya. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11px",
              color: "var(--muted)",
            }}
          ></p>
        </div>
      </div>
    </footer>
  );
}

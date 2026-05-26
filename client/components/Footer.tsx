import Link from "next/link";

const pageLinks = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

const socials = [
  { href: "https://github.com/BimaPanjiWijaya", label: "GitHub ↗" },
  { href: "#", label: "LinkedIn ↗" },
  { href: "mailto:bima@email.com", label: "Email ↗" },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--gray-100)",
        background: "#fff",
        padding: "48px 0 32px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 160px 160px",
            gap: "60px",
            alignItems: "start",
            marginBottom: "40px",
          }}
        >
          <div>
            <Link href="/" style={{ display: "block", marginBottom: "12px" }}>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "var(--ink)",
                }}
              >
                Bima Panji Wijaya
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "var(--gray-400)",
                maxWidth: "280px",
                lineHeight: 1.7,
              }}
            >
              Full Stack Developer based in Bandung, Indonesia. Building digital
              products with care and precision.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray-400)",
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
                  style={{ fontSize: "14px", color: "var(--gray-600)" }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--gray-400)",
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
                  style={{ fontSize: "14px", color: "var(--gray-600)" }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid var(--gray-100)",
            paddingTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--gray-400)" }}>
            © {new Date().getFullYear()} Bima Panji Wijaya. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "12px",
              color: "var(--gray-400)",
            }}
          >
            Built with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}

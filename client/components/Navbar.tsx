"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: "var(--nav-h)",
          background: scrolled
            ? "rgba(11, 12, 15, 0.88)"
            : "rgba(11, 12, 15, 0.4)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid var(--border)"
            : "1px solid transparent",
          transition: "background 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "0 48px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <span
              style={{
                fontFamily: "var(--serif)",
                fontSize: "17px",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1,
                letterSpacing: "-0.01em",
              }}
            >
              Bima Panji Wijaya
            </span>
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: "9px",
                color: "var(--gold)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Full Stack Dev
            </span>
          </Link>

          {/* Desktop nav */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${active ? " active" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="/contact"
              className="btn btn-gold"
              style={{
                marginLeft: "16px",
                padding: "8px 20px",
                fontSize: "13px",
              }}
            >
              Hire Me
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-burger"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "36px",
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                height: "2px",
                background: "var(--text)",
                borderRadius: "2px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "var(--text)",
                borderRadius: "2px",
                transition: "opacity 0.25s ease",
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: "2px",
                background: "var(--text)",
                borderRadius: "2px",
                transition: "transform 0.25s ease, opacity 0.25s ease",
                transform: mobileOpen
                  ? "rotate(-45deg) translateY(-7px)"
                  : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            top: "var(--nav-h)",
            left: 0,
            right: 0,
            zIndex: 999,
            background: "var(--bg2)",
            borderBottom: "1px solid var(--border)",
            padding: "12px 20px 20px",
            boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`mobile-nav-link${active ? " active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ paddingTop: "8px", borderTop: "1px solid var(--border)", marginTop: "4px" }}>
            <Link
              href="/contact"
              className="btn btn-gold"
              style={{ width: "100%", justifyContent: "center" }}
            >
              Hire Me →
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

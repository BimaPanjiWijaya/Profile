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
          background: scrolled ? "rgba(250,251,253,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--gray-100)"
            : "1px solid transparent",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "0 60px",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{ display: "flex", flexDirection: "column", gap: "1px" }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "18px",
                fontWeight: 700,
                color: "var(--ink)",
                lineHeight: 1,
              }}
            >
              Bima Panji
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                color: "var(--blue)",
                letterSpacing: "0.12em",
                fontWeight: 400,
              }}
            >
              FULL STACK DEV
            </span>
          </Link>

          {/* Desktop nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "8px 16px",
                    borderRadius: "var(--radius-md)",
                    fontSize: "14px",
                    fontWeight: active ? 600 : 400,
                    color: active ? "var(--blue)" : "var(--gray-600)",
                    background: active ? "var(--blue-pale)" : "transparent",
                    transition: "all var(--transition)",
                  }}
                  onMouseEnter={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--gray-50)";
                  }}
                  onMouseLeave={(e) => {
                    if (!active)
                      (e.currentTarget as HTMLElement).style.background =
                        "transparent";
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="btn btn-dark"
              style={{
                marginLeft: "12px",
                padding: "9px 22px",
                fontSize: "13px",
              }}
            >
              Hire Me
            </Link>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
            className="mobile-burger"
          >
            <div
              style={{
                width: "22px",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--ink)",
                  borderRadius: "2px",
                  transition: "all 0.2s",
                  transform: mobileOpen
                    ? "rotate(45deg) translateY(7px)"
                    : "none",
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--ink)",
                  borderRadius: "2px",
                  opacity: mobileOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: "block",
                  height: "2px",
                  background: "var(--ink)",
                  borderRadius: "2px",
                  transition: "all 0.2s",
                  transform: mobileOpen
                    ? "rotate(-45deg) translateY(-7px)"
                    : "none",
                }}
              />
            </div>
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
            background: "#fff",
            borderBottom: "1px solid var(--gray-100)",
            padding: "16px 24px 24px",
            boxShadow: "var(--shadow-lg)",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "12px 16px",
                borderRadius: "var(--radius-md)",
                fontSize: "15px",
                fontWeight: pathname === link.href ? 600 : 400,
                color: pathname === link.href ? "var(--blue)" : "var(--ink)",
                background:
                  pathname === link.href ? "var(--blue-pale)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

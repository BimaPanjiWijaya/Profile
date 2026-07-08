"use client";
import { useState } from "react";

const info = [
  {
    label: "Email",
    value: "bimapanjiwijaya@gmail.com",
    href: "mailto:bimapanjiwijaya@gmail.com",
  },
  {
    label: "Phone",
    value: "085157798617",
    href: "tel:085157798617",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bimapanji",
    href: "#",
  },
  {
    label: "GitHub",
    value: "github.com/BimaPanjiWijaya",
    href: "https://github.com/BimaPanjiWijaya",
  },
  {
    label: "Location",
    value: "Jakarta, Indonesia",
    href: null,
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const field = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "12px 16px",
    fontSize: "14px",
    fontFamily: "var(--sans)",
    background: focused === name ? "var(--surface2)" : "var(--surface)",
    border: `1px solid ${focused === name ? "rgba(201,168,76,0.45)" : "var(--border)"}`,
    borderRadius: "var(--radius-md)",
    color: "var(--text)",
    outline: "none",
    transition: "all 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(201,168,76,0.07)" : "none",
  });

  return (
    <>
      {/* ── HERO ── */}
      <section
        style={{
          padding: "80px 0 64px",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <p className="label anim-in" style={{ marginBottom: "24px" }}>
            Get In Touch
          </p>
          <h1
            className="anim-up d1"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(40px, 5vw, 68px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "16px",
            }}
          >
            Let&apos;s work{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold2)" }}>
              together.
            </em>
          </h1>
          <p
            className="anim-up d2"
            style={{
              fontSize: "16px",
              color: "var(--muted2)",
              maxWidth: "460px",
              lineHeight: 1.8,
            }}
          >
            Whether you have a project, a job opportunity, or just want to say
            hello — I&apos;m always happy to hear from you.
          </p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <section style={{ padding: "72px 0" }}>
        <div className="container grid-contact">
          {/* Left: Contact info */}
          <div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "24px",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "10px",
              }}
            >
              Contact Information
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "var(--muted2)",
                lineHeight: 1.8,
                marginBottom: "36px",
              }}
            >
              I typically respond within 24 hours. For urgent inquiries, email
              is the fastest route.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                marginBottom: "36px",
              }}
            >
              {info.map((c) => (
                <div
                  key={c.label}
                  className="h-border"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "16px 18px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: "2px",
                      }}
                    >
                      {c.label}
                    </p>
                    {c.href ? (
                      <a
                        href={c.href}
                        className="h-gold"
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        {c.value}
                      </a>
                    ) : (
                      <p
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--text)",
                        }}
                      >
                        {c.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div
              style={{
                padding: "20px 22px",
                background: "rgba(45,212,160,0.05)",
                border: "1px solid rgba(45,212,160,0.18)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "6px",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: "var(--green)",
                    animation: "pulse 2s infinite",
                    display: "inline-block",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "var(--green)",
                  }}
                >
                  Currently Available
                </span>
              </div>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--muted2)",
                  lineHeight: 1.7,
                }}
              >
                Open to full-time roles, contract work, and project
                collaborations.{" "}
                <strong style={{ color: "var(--text)" }}>
                  Response time: under 24 hours.
                </strong>
              </p>
            </div>
          </div>

          {/* Right: Form */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius-xl)",
              padding: "36px",
            }}
          >
            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "20px" }}>✅</div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "24px",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "10px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    marginBottom: "24px",
                  }}
                >
                  Thank you for reaching out. I&apos;ll get back to you within
                  24 hours.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="btn btn-ghost"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={submit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "18px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "22px",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "4px",
                    }}
                  >
                    Send a Message
                  </h3>
                  <p style={{ fontSize: "12px", color: "var(--muted)" }}>
                    All fields are required.
                  </p>
                </div>

                <div className="form-row-2">
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: "6px",
                      }}
                    >
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Bima Panji"
                      required
                      style={field("name")}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--muted)",
                        marginBottom: "6px",
                      }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="you@email.com"
                      required
                      style={field("email")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    placeholder="Project inquiry / Job opportunity"
                    required
                    style={field("subject")}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "var(--mono)",
                      fontSize: "10px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: "6px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project, timeline, and budget..."
                    required
                    rows={5}
                    style={
                      {
                        ...field("message"),
                        resize: "none",
                      } as React.CSSProperties
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-gold"
                  style={{
                    width: "100%",
                    justifyContent: "center",
                    padding: "14px",
                    fontSize: "14px",
                    fontWeight: 600,
                    opacity: status === "sending" ? 0.6 : 1,
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                  }}
                >
                  {status === "sending" ? "Sending…" : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

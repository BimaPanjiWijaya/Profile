"use client";
import { useState } from "react";

const info = [
  {
    icon: "✉️",
    label: "Email",
    value: "bima@email.com",
    href: "mailto:bima@email.com",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/bimapanji",
    href: "#",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/BimaPanjiWijaya",
    href: "https://github.com/BimaPanjiWijaya",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Bandung, West Java, Indonesia",
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

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const field = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    fontSize: "14px",
    fontFamily: "var(--sans)",
    background: focused === name ? "var(--surface2)" : "var(--surface)",
    border: `1px solid ${focused === name ? "rgba(201,168,76,0.5)" : "var(--border)"}`,
    borderRadius: "10px",
    color: "var(--text)",
    outline: "none",
    transition: "all 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(201,168,76,0.08)" : "none",
  });

  return (
    <>
      {/* Hero */}
      <section
        style={{
          padding: "80px 0 64px",
          borderBottom: "1px solid var(--border)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-40%",
            right: "-10%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="container">
          <p className="label anim-in" style={{ marginBottom: "24px" }}>
            Get In Touch
          </p>
          <h1
            className="anim-up d1"
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(44px, 5.5vw, 72px)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "var(--text)",
              marginBottom: "20px",
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
              fontSize: "17px",
              color: "var(--muted2)",
              maxWidth: "500px",
              lineHeight: 1.8,
            }}
          >
            Whether you have a project, a job opportunity, or just want to say
            hello — I&apos;m always happy to hear from you.
          </p>
        </div>
      </section>

      <section style={{ padding: "88px 0" }}>
        <div
          className="container"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 500px",
            gap: "88px",
            alignItems: "start",
          }}
        >
          {/* Left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontSize: "28px",
                fontWeight: 400,
                color: "var(--text)",
                marginBottom: "12px",
              }}
            >
              Contact Information
            </h2>
            <p
              style={{
                fontSize: "15px",
                color: "var(--muted2)",
                lineHeight: 1.8,
                marginBottom: "44px",
              }}
            >
              I typically respond within 24 hours. For urgent inquiries, email
              is the fastest route.
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                marginBottom: "48px",
              }}
            >
              {info.map((c) => (
                <div
                  key={c.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    borderRadius: "12px",
                    transition: "border-color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border2)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.borderColor =
                      "var(--border)")
                  }
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "var(--surface2)",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </div>
                  <div>
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
                        style={{
                          fontSize: "14px",
                          fontWeight: 500,
                          color: "var(--gold)",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.opacity =
                            "0.7")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.opacity = "1")
                        }
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
                padding: "24px",
                background: "rgba(45,212,160,0.06)",
                border: "1px solid rgba(45,212,160,0.2)",
                borderRadius: "12px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "8px",
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
                  fontSize: "14px",
                  color: "var(--muted2)",
                  lineHeight: 1.7,
                }}
              >
                Open to full-time roles, contract work, and project
                collaborations. Response time:{" "}
                <strong style={{ color: "var(--text)" }}>under 24 hours</strong>
                .
              </p>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: "20px",
              padding: "40px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: "linear-gradient(90deg, var(--gold), transparent)",
              }}
            />

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "56px 0" }}>
                <div style={{ fontSize: "56px", marginBottom: "20px" }}>✅</div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "26px",
                    fontWeight: 400,
                    color: "var(--text)",
                    marginBottom: "12px",
                  }}
                >
                  Message Sent!
                </h3>
                <p
                  style={{
                    fontSize: "15px",
                    color: "var(--muted2)",
                    lineHeight: 1.7,
                    marginBottom: "28px",
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
                  gap: "20px",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "24px",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "6px",
                    }}
                  >
                    Send a Message
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--muted)",
                      marginBottom: "8px",
                    }}
                  >
                    All fields required.
                  </p>
                </div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "14px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "var(--mono)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
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
                        letterSpacing: "0.15em",
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
                      letterSpacing: "0.15em",
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
                      letterSpacing: "0.15em",
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
                    rows={6}
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
                  style={{
                    width: "100%",
                    padding: "15px",
                    background: "var(--gold)",
                    color: "#000",
                    border: "none",
                    borderRadius: "10px",
                    fontFamily: "var(--sans)",
                    fontWeight: 700,
                    fontSize: "15px",
                    letterSpacing: "0.02em",
                    cursor: "pointer",
                    transition: "all 0.25s",
                    opacity: status === "sending" ? 0.6 : 1,
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending") {
                      (e.currentTarget as HTMLElement).style.background =
                        "var(--gold2)";
                      (e.currentTarget as HTMLElement).style.transform =
                        "translateY(-1px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      "var(--gold)";
                    (e.currentTarget as HTMLElement).style.transform =
                      "translateY(0)";
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

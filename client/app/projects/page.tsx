import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of full-stack applications I've built — including an AI-powered analytics platform, an e-commerce site, a cross-platform social app, and an AI-driven finance tracker.",
};
const projects = [
  {
    num: "01",
    year: "Juni 2026 - Now",
    status: "Upcoming",
    title: "Jadwalin",
    desc: "Jadwalin — A booking and scheduling platform that allows users to create schedules, manage booking slots, and receive automated notifications. Built solo using Next.js (App Router), PostgreSQL, and integrated with Telegram Bot for real-time reminders.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostCSS",
      "Prisma",
      "Prisma Adapter PG",
      "PostgreSQL",
      "Supabase",
      "JWT",
      "bcryptjs",
      "Nodemailer",
      "Cloudinary",
      "Telegram Bot API",
      "Vercel",
      "Vercel Cron",
      "ESLint",
      "Node.js",
    ],
    github: "https://github.com/BimaPanjiWijaya/Jadwalin",
    live: "https://github.com/BimaPanjiWijaya/Jadwalin",
  },
  {
    num: "02",
    year: "May 2026",
    status: "Live",
    title: "InsightIQ",
    desc: "An AI-powered platform for TikTok creators to analyze their niche automatically, get personalized product recommendations from TikTok Shop, and receive daily Telegram notifications - all set up in under 2 minutes.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Redix",
      "Shadcn",
      "Sonner",
      "MongoDB",
      "JWT",
      "Bcryptjs",
      "Dotenv",
      "Zod",
      "Vercel",
      "Vercel Cron",
      "Apify",
      "Google AI Studio",
      "Telegram Bot API",
    ],
    github: "https://github.com/hck94-insightiq/insightiq",
    live: "https://insightiq-94.vercel.app/",
  },
  {
    num: "03",
    year: "May 2026",
    status: "Live",
    title: "Grockcicle",
    desc: "Grockcicle is an e-commerce web application that provides a product catalog, search, infinite scroll, product details, and a wishlist. The application is built using the Next.js App Router architecture and API routes integrated with MongoDB for storing user, product, and wishlist data.",
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
    github: "https://github.com/BimaPanjiWijaya/Grockcicle",
    live: "https://grockcicle.vercel.app/",
  },
  {
    num: "04",
    year: "May 2026",
    status: "Live",
    title: "Pacebok",
    desc: "A cross-platform social media app (iOS, Android & Web) built with a GraphQL-first architecture using Apollo Client and Apollo Server. Features include secure authentication, photo posts, likes, comments, stories, follow/unfollow, and user search & explore - developed as a fullstack mobile developer from a single codebase using modern full-stack mobile development practices.",
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
    github: "https://github.com/BimaPanjiWijaya/Pacebok-Mobile-App",
    live: "https://pacebok.vercel.app/",
  },
  {
    num: "05",
    year: "April 2026",
    status: "Live",
    title: "Sakti Finance",
    desc: "A financial management website powered by AI, featuring real-time income & expense dashboard, AI-driven financial analysis with personalized recommendations, automatic location tagging per transaction, and full CRUD transaction management - built as a fullstack developer with Google OAuth & JWT authentication.",
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
    github: "https://github.com/BimaPanjiWijaya/Sakti-Finance",
    live: "https://saktifinance-b163c.web.app/",
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
          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
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

                <div className="card-row">
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

import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://bima-panji-wijaya.vercel.app/"),
  title: {
    default: "Bima Panji Wijaya — Full Stack Developer",
    template: "%s | Bima Panji Wijaya",
  },
  description:
    "Full Stack Developer based in Jakarta, Indonesia. Specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
  keywords: [
    "Full Stack Developer",
    "Software Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Jakarta",
    "Indonesia",
  ],
  openGraph: {
    title: "Bima Panji Wijaya — Full Stack Developer",
    description:
      "Full Stack Developer based in Jakarta, Indonesia. Specializing in React, Next.js, Node.js, PostgreSQL, and modern web applications.",
    url: "https://bima-panji-wijaya.vercel.app/",
    siteName: "Bima Panji Wijaya Portfolio",
    images: [
      {
        url: "public/favicon.svg",
        width: 1200,
        height: 630,
        alt: "Bima Panji Wijaya — Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <div className="page-offset">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

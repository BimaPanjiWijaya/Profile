import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bima Panji Wijaya — Full Stack Developer",
    template: "%s | Bima Panji Wijaya",
  },
  description:
    "Full Stack Developer based in Bandung, Indonesia. Specializing in React, Next.js, Node.js, and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Bandung",
    "Indonesia",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

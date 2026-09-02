import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "./card-polish.css";
import "./visual-tuning.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "AHMED SHAWQI MOHAMMED QAID | Software Engineer Portfolio",
  description:
    "Portfolio website for AHMED SHAWQI MOHAMMED QAID, an entry-level Software Engineer focused on backend development, databases, systems, C++, Flutter, and practical AI-enabled software projects.",
  keywords: [
    "AHMED SHAWQI MOHAMMED QAID",
    "Ahmed Qaid",
    "Software Engineer",
    "Backend Developer",
    "Database Developer",
    "C++",
    "Flutter",
    "PostgreSQL",
    "Supabase",
    "Competitive Programming",
    "ICPC",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

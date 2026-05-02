import type { Metadata } from "next";
import { Syne, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sohanur Rahman — MERN Stack Developer",
  description:
    "Passionate MERN Stack Developer from Bangladesh building modern, scalable web applications.",
  keywords: ["MERN", "React", "Next.js", "Node.js", "MongoDB", "Full Stack Developer", "Bangladesh"],
  authors: [{ name: "Sohanur Rahman" }],
  openGraph: {
    title: "Sohanur Rahman — MERN Stack Developer",
    description: "Passionate MERN Stack Developer from Bangladesh building modern, scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${dmMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

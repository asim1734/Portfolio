import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import { ScrollToTop } from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Asim Rupani — Full-Stack Developer",
  description: "Full-stack developer building web apps and AI tools with TypeScript, React, Next.js, and FastAPI.",
  keywords: ["full-stack", "typescript", "react", "next.js", "fastapi", "ai agents", "portfolio"],
  authors: [{ name: "Asim Rupani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.asimrupani.engineer",
    siteName: "Asim Rupani — Portfolio",
    title: "Asim Rupani — Full-Stack Developer",
    description: "Full-stack developer building web apps and AI tools with TypeScript, React, Next.js, and FastAPI.",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Asim Rupani — Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asim Rupani — Full-Stack Developer",
    description: "Full-stack developer building web apps and AI tools with TypeScript, React, Next.js, and FastAPI.",
    images: ["/opengraph-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}

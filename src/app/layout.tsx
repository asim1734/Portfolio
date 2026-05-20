import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Asim - Frontend Engineer",
  description: "Senior frontend engineer specializing in React, TypeScript, and Next.js",
  keywords: ["frontend", "typescript", "react", "next.js", "portfolio"],
  authors: [{ name: "Asim" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asim.dev",
    title: "Asim - Frontend Engineer",
    description: "Senior frontend engineer specializing in React, TypeScript, and Next.js",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

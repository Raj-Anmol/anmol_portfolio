import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "./globals.css";
import { generateAllSchemas } from "@/lib/schema";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import ScrollLock from "@/components/ScrollLock";
import { CommandPalette } from "@/components/CommandPalette";
import { ScrollProgress } from "@/components/ScrollProgress";
import { VisitorCounter } from "@/components/VisitorCounter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://anmol-raj.vercel.app"),
  title: {
    default: "Anmol Raj | Full Stack Developer & AI Integration Specialist",
    template: "%s | Anmol Raj",
  },
  description:
    "Computer Science undergraduate specializing in full-stack web development using MERN stack. Skilled in architecting RESTful APIs, building real-time applications, and integrating AI/ML models. Open to full-time opportunities.",
  keywords: [
    "Anmol Raj",
    "Anmol",
    "Full Stack Developer",
    "AI Integration",
    "MERN Stack",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Python",
    "Machine Learning",
    "Web Development",
    "Jagannath University",
    "Edunet Foundation",
    "IBM SkillsBuild",
    "Raj-Anmol",
  ],
  authors: [
    { name: "Anmol Raj", url: "https://anmol-raj.vercel.app" },
    { name: "Anmol Raj", url: socialLinks.linkedin },
    { name: "Anmol Raj", url: socialLinks.github },
  ],
  creator: "Anmol Raj",
  publisher: "Anmol Raj",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://anmol-raj.vercel.app",
    siteName: "Anmol Raj | Portfolio",
    title: "Anmol Raj | Full Stack Developer & AI Integration Specialist",
    description:
      "Computer Science undergraduate specializing in full-stack web development using MERN stack. Skilled in architecting RESTful APIs, building real-time applications, and integrating AI/ML models.",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 630,
        alt: "Anmol Raj - Full Stack Developer",
      },
    ],
  },
  
  alternates: {
    canonical: "https://anmol-raj.vercel.app",
    types: {
      "application/rss+xml": "https://anmol-raj.vercel.app/rss.xml",
    },
  },
  other: {
    "profile:first_name": "Anmol",
    "profile:last_name": "Raj",
    "profile:username": "Raj-Anmol",
  },
  verification: {
    google: "g3XOkDO7c1-0SjIwYe_759-Wg8HL00b-ekp0OvXqnsg",
    other: {
      "msvalidate.01": "E1A977D8ED3A378668EFBC93FED06673",
    },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schemas = generateAllSchemas();

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/profile.png" />
        <link rel="manifest" href="/manifest.json" />
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
          strategy="lazyOnload"
        />
        <link rel="robots.txt" href="/robots.txt" className="d-none" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <ScrollLock />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <VisitorCounter />
        <CommandPalette />
        </ThemeProvider>
      </body>
    </html>
  );
}
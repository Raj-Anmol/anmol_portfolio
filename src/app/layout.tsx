import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { generateAllSchemas } from "@/lib/schema";

export const metadataBase = new URL("https://anmolraj.vercel.app");

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
  title: {
    default: "Anmol Raj | Full Stack Developer & AI Integration Specialist",
    template: "%s | Anmol Raj",
  },
  description:
    "Computer Science undergraduate specializing in full-stack web development using MERN stack. Skilled in architecting RESTful APIs, building real-time applications, and integrating AI/ML models. Open to full-time opportunities.",
  keywords: [
    "Anmol Raj",
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
  ],
  authors: [{ name: "Anmol Raj", url: "https://github.com/Raj-Anmol" }],
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
    url: "https://anmolraj.vercel.app",
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
  twitter: {
    card: "summary_large_image",
    title: "Anmol Raj | Full Stack Developer & AI Integration Specialist",
    description:
      "Computer Science undergraduate specializing in full-stack web development using MERN stack. Skilled in architecting RESTful APIs, building real-time applications, and integrating AI/ML models.",
    images: ["/profile.png"],
    creator: "@raj_anmol",
  },
  verification: {
    google: "google-site-verification-code",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
        />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
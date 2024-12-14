import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CRYPH | Inteligência Artificial para Criptomoedas",
  description: "CRYPH é uma plataforma de gestão de carteiras de criptomoedas com inteligência artificial. Nunca perca uma alta com nossa tecnologia avançada de análise preditiva.",
  keywords: "criptomoedas, bitcoin, ethereum, inteligência artificial, trading, investimentos, análise preditiva, gestão de carteira",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://cryph.com.br",
    siteName: "CRYPH",
    title: "CRYPH | IA para Criptomoedas",
    description: "Maximize seus lucros em criptomoedas com inteligência artificial. Análise preditiva 24/7 para nunca perder uma oportunidade.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CRYPH Platform Preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "CRYPH | IA para Criptomoedas",
    description: "Maximize seus lucros em criptomoedas com inteligência artificial.",
    images: ["/twitter-image.jpg"],
  },
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
  verification: {
    google: "seu-código-de-verificação-google",
  },
  alternates: {
    canonical: "https://cryph.com.br",
  },
  authors: [
    { name: "CRYPH Team" }
  ],
  generator: "Next.js",
  applicationName: "CRYPH",
  referrer: "origin-when-cross-origin",
  creator: "CRYPH",
  publisher: "CRYPH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

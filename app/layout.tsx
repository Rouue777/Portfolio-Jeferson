import type { Metadata, Viewport } from "next";
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

const title = "JEFERSON PAIXÃO | Desenvolvedor Backend & Full Stack";
const description =
  "Portfólio de Jeferson Paixão, desenvolvedor Backend & Full Stack com foco em APIs, bancos de dados, arquitetura e projetos de software.";

export const metadata: Metadata = {
  title,
  description,
  applicationName: "Portfólio de Jeferson Paixão",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title,
    description,
    siteName: "Portfólio de Jeferson Paixão",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090B",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

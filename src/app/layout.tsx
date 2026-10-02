import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import { Navbar } from "@/components/navbar";

const siteUrl = "https://blood-proposal.vercel.app";

const siteTitle = "پروپوزال پلتفرم اهدای من | شرکت فورا";
const siteDescription =
  "پروپوزال پیشنهادی شرکت فورا به سازمان انتقال خون برای طراحی و راه‌اندازی پلتفرم یکپارچه «اهدای من»؛ شامل معماری فنی، امنیت، ۴۰ ماژول محصول و نقشه راه اجرایی مبتنی بر AI.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | پروپوزال اهدای من",
  },
  description: siteDescription,
  authors: [{ name: "شرکت فورا", url: siteUrl }],
  creator: "شرکت فورا",
  publisher: "شرکت فورا",
  applicationName: "پلتفرم اهدای من",
  category: "Healthcare / Proposal",
  alternates: { canonical: "/" },
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "پروپوزال پلتفرم اهدای من",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/OG.png",
        width: 1200,
        height: 630,
        alt: "پروپوزال پلتفرم اهدای من | شرکت فورا برای سازمان انتقال خون",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/OG.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/**
 * اسکریپت anti-FOUC که قبل از hydration اجرا می‌شه.
 * منطقش دقیقاً همون منطق theme-store است تا تناقض پیش نیاد.
 */
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('color-scheme');
    var scheme = null;

    if (stored) {
      try {
        var parsed = JSON.parse(stored);
        scheme = parsed && parsed.state && parsed.state.colorScheme;
      } catch (e) {}
    }

    if (!scheme) {
      scheme = window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark'
        : 'light';
    }

    var root = document.documentElement;
    root.classList.toggle('dark', scheme === 'dark');
    root.style.colorScheme = scheme;
  } catch (e) {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html dir="rtl" lang="fa" className="h-full" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body
        suppressHydrationWarning
        className="font-iransans overflow-x-hidden"
      >
        <Background />
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}

"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Country = {
  id: string;
  flag: string;
  country: string;
  service: string;
  accent: Accent;
  features: string[];
  highlight: string;
};

/* ============ پالت ============ */
const ACCENT: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    dot: string;
    badge: string;
  }
> = {
  blue: {
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    dot: "bg-blue-400",
    badge: "bg-blue-900/40 border-blue-500/30 text-blue-300",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    dot: "bg-red-400",
    badge: "bg-red-900/40 border-red-500/30 text-red-300",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    dot: "bg-beige-400",
    badge: "bg-primary-800/60 border-beige-500/25 text-beige-300",
  },
};

/* ============ داده‌ها ============ */
const COUNTRIES: Country[] = [
  {
    id: "au",
    flag: "AU",
    country: "استرالیا",
    service: "Lifeblood",
    accent: "blue",
    highlight: "۷۰٪ بازگشت با پیام شخصی‌سازی‌شده",
    features: [
      "نوبت‌دهی آنلاین و اپلیکیشن",
      "تاریخچه و کارت دیجیتال اهدا",
      "خودارزیابی سلامت پیش از اهدا",
      "بازخورد و پشتیبانی اهداکننده",
    ],
  },
  {
    id: "us",
    flag: "US",
    country: "آمریکا",
    service: "American Red Cross",
    accent: "red",
    highlight: "سیستم Blood Drive Management",
    features: [
      "مدیریت Blood Drive سازمانی",
      "رزرو و جابجایی نوبت",
      "کارت دیجیتال اهدا",
      "اطلاعات سلامت و سابقه",
    ],
  },
  {
    id: "ca",
    flag: "CA",
    country: "کانادا",
    service: "Canadian Blood Services",
    accent: "beige",
    highlight: "پرونده یکپارچه اهداکننده",
    features: [
      "حساب کاربری یکپارچه",
      "بررسی شرایط اهدا",
      "تاریخچه و سابقه اهدا",
      "مدیریت رویدادهای اهدا",
    ],
  },
  {
    id: "region",
    flag: "ME",
    country: "منطقه",
    service: "عربستان و قزاقستان",
    accent: "beige",
    highlight: "تجربه بومی منطقه",
    features: [
      "نوبت‌دهی در ۱۸۵ مرکز (عربستان)",
      "اپلیکیشن اختصاصی اهدا",
      "ردیابی با QR Code (قزاقستان)",
      "کمپین‌های مناسبتی",
    ],
  },
];

/* ============ کامپوننت ============ */
export const BenchmarkSection = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="benchmark-title"
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* ==== سربرگ ==== */}
        <div className="max-w-3xl mb-14" data-reveal="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش ششم — تجربه جهانی
            </span>
          </div>

          <h2
            id="benchmark-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            دیگران چه کرده‌اند،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ما چه می‌افزاییم؟
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            تجربه کشورهای پیشرو را بررسی کردیم؛ نه برای کپی، بلکه برای طراحی
            متناسب با ساختار و فرهنگ سازمان انتقال خون ایران.
          </p>
        </div>

        {/* ==== چهار کارت کشور ==== */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {COUNTRIES.map((c, idx) => {
            const a = ACCENT[c.accent];
            return (
              <li
                key={c.id}
                data-reveal="fade-up"
                style={delay(80 + idx * 60)}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6 sm:p-7",
                  "transition-all duration-300 hover:-translate-y-1",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ کارت */}
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={[
                      "w-14 h-14 rounded-2xl flex items-center justify-center border shrink-0",
                      "font-morabba font-bold text-lg",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    {c.flag}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-morabba font-bold text-beige-50 leading-tight">
                      {c.country}
                    </h3>
                    <p className={`text-xs mt-0.5 ${a.text}`}>{c.service}</p>
                  </div>
                </div>

                {/* نکته کلیدی */}
                <div
                  className={[
                    "rounded-xl border px-3 py-2 mb-5",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`text-xs font-medium ${a.text}`}>
                    ↳ {c.highlight}
                  </p>
                </div>

                {/* ویژگی‌ها */}
                <ul className="space-y-2.5">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-beige-300"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>

        {/* ==== پیام بومی‌سازی ==== */}
        <div
          className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/40 via-primary-900/30 to-primary-800/40 backdrop-blur-sm px-8 py-12 text-center"
          data-reveal="fade-up"
          style={delay(340)}
        >
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 75% 70%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative text-sm text-beige-400 mb-4">نتیجه بررسی</p>
          <p className="relative text-2xl md:text-3xl font-morabba font-bold text-beige-50 leading-tight">
            نه کپی،
            <br />
            <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
              بومی‌سازی.
            </span>
          </p>
          <p className="relative text-base text-beige-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            ساختار سازمان، داده‌های موجود، فرآیندهای داخلی، زبان و فرهنگ کاربر
            ایرانی، مبنای طراحی ماست.
          </p>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

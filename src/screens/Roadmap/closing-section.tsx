"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ============ سه ستون ============ */
const PILLARS = [
  {
    id: "donor",
    title: "اهداکننده",
    subtitle: "تجربه",
    accent: "blue" as const,
  },
  {
    id: "management",
    title: "کارشناس",
    subtitle: "عملیات",
    accent: "beige" as const,
  },
  {
    id: "director",
    title: "مدیر",
    subtitle: "تصمیم",
    accent: "red" as const,
  },
];

const ACCENT_TEXT = {
  blue: "text-blue-300",
  beige: "text-beige-300",
  red: "text-red-300",
};

const ACCENT_DOT = {
  blue: "bg-blue-400",
  beige: "bg-beige-400",
  red: "bg-red-400",
};

const ACCENT_BORDER = {
  blue: "border-blue-500/30",
  beige: "border-beige-500/25",
  red: "border-red-500/30",
};

/* ============ کامپوننت ============ */
export const ClosingSection = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="closing-title"
      className="relative w-full py-24 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* ==== بلوک اصلی ==== */}
        <div
          className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/50 via-primary-900/40 to-primary-800/50 backdrop-blur-sm px-6 sm:px-12 py-16"
          data-reveal="fade-up"
        >
          {/* هاله‌های نورانی */}
          <div
            className="absolute inset-0 opacity-[0.20] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, rgba(18,58,99,0.7), transparent 45%), radial-gradient(circle at 80% 75%, rgba(161,27,46,0.6), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto text-center">
            {/* برچسب */}
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-8">
              <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
              </span>
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                پیام پایانی
              </span>
            </div>

            {/* پیام اصلی */}
            <h2
              id="closing-title"
              className="text-3xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.25]"
            >
              ما یک سایت طراحی نمی‌کنیم.
              <br />
              ما سه پنل جدا نمی‌سازیم.
              <br />
              <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
                ما یک پلتفرم یکپارچه می‌سازیم.
              </span>
            </h2>

            {/* توضیح */}
            <p className="text-base md:text-lg text-beige-300 leading-relaxed mt-8 max-w-3xl mx-auto">
              اهداکننده جذب و همراهی می‌شود، کارشناس توانمند می‌شود، و مدیر
              تصویر واقعی سازمان را می‌بیند — همه در یک جریان داده واحد.
            </p>
          </div>

          {/* سه ستون */}
          <ul
            className="relative grid grid-cols-1 sm:grid-cols-3 gap-4 mt-14 max-w-3xl mx-auto"
            data-reveal="fade-up"
            style={delay(160)}
          >
            {PILLARS.map((p) => (
              <li
                key={p.id}
                className={[
                  "rounded-2xl border backdrop-blur-sm px-5 py-6 text-center",
                  ACCENT_BORDER[p.accent],
                  "bg-primary-900/40",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-block w-2.5 h-2.5 rounded-full mb-3",
                    ACCENT_DOT[p.accent],
                  ].join(" ")}
                  aria-hidden="true"
                />
                <p className="text-lg font-morabba font-bold text-beige-50 leading-tight">
                  {p.title}
                </p>
                <p
                  className={[
                    "text-xs mt-1 font-medium",
                    ACCENT_TEXT[p.accent],
                  ].join(" ")}
                >
                  {p.subtitle}
                </p>
              </li>
            ))}
          </ul>

          {/* خط جداکننده */}
          <div
            className="relative h-px max-w-lg mx-auto my-12 bg-gradient-to-r from-transparent via-beige-200/20 to-transparent"
            aria-hidden="true"
          />

          {/* شعار نهایی */}
          <div
            className="relative text-center"
            data-reveal="fade-up"
            style={delay(240)}
          >
            <p className="text-xl md:text-2xl font-morabba font-bold text-beige-100 leading-snug">
              یک پلتفرم.
              <br />
              سه تجربه. یک جریان داده.
            </p>

            {/* امضا */}
            <div className="mt-10 flex flex-col items-center gap-2">
              <div
                className="w-16 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
                aria-hidden="true"
              />
              <p className="text-2xl font-morabba font-bold text-red-500 mt-3">
                فدورا
              </p>
              <p className="text-xs text-beige-500">
                تیم محصول دیجیتال تمام‌کامل
              </p>
              <p className="text-[10px] text-beige-600 max-w-md text-center leading-relaxed">
                راهبرد محصول · تجربه کاربری · وب · بک‌اند · یکپارچه‌سازی · دواپس
                · تحلیل · سئو · آمادگی هوش مصنوعی
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

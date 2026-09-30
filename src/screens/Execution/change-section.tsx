"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Phase = {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: Accent;
  actions: string[];
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
const PHASES: Phase[] = [
  {
    id: "pre",
    number: "۰۱",
    title: "پیش از اجرای آزمایشی",
    description: "آماده‌سازی سازمان و شناسایی افراد کلیدی.",
    accent: "blue",
    actions: [
      "نقشه‌برداری ذی‌نفعان",
      "انتخاب قهرمانان کاربر",
      "ارزیابی وضعیت اولیه",
      "طرح ارتباطات",
    ],
  },
  {
    id: "during",
    number: "۰۲",
    title: "در طول اجرای آزمایشی",
    description: "همراهی میدانی و آموزش عملی کاربران.",
    accent: "beige",
    actions: [
      "آموزش مبتنی بر شایستگی",
      "کوچینگ در محل",
      "میز پشتیبانی",
      "جلسات بازخورد روزانه",
    ],
  },
  {
    id: "post",
    number: "۰۳",
    title: "پس از اجرای آزمایشی",
    description: "تحلیل بازخورد و آماده‌سازی برای گسترش.",
    accent: "red",
    actions: [
      "تحلیل بازخورد",
      "بهبود مستمر",
      "آماده‌سازی گسترش",
      "به‌روزرسانی مستندات",
    ],
  },
];

/* ============ KPIهای پذیرش ============ */
const ADOPTION_KPIS = [
  { value: "۸۰٪+", label: "نرخ پذیرش کاربر", accent: "blue" as const },
  { value: "۹۵٪+", label: "کیفیت داده", accent: "beige" as const },
  { value: "۱۰۰٪", label: "تکمیل آموزش", accent: "beige" as const },
  { value: "۴ از ۵", label: "رضایت کاربر", accent: "red" as const },
];

/* ============ کامپوننت ============ */
export const ChangeSection = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="change-title"
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-14" data-reveal="fade-up">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش چهارم — پذیرش کاربر
            </span>
          </div>

          <h2
            id="change-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            فناوری خوب کافی نیست؛
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              پذیرش کاربر حیاتی است.
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            برنامه پذیرش از روز اول طراحی می‌شود تا کاربران سازمان، پلتفرم را
            بخشی از کار روزانه‌شان بدانند.
          </p>
        </div>

        {/* سه فاز */}
        <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {PHASES.map((phase, idx) => {
            const a = ACCENT[phase.accent];
            return (
              <li
                key={phase.id}
                data-reveal="fade-up"
                style={delay(80 + idx * 60)}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6 sm:p-7",
                  "transition-all duration-300 hover:-translate-y-1",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={["text-2xl font-morabba font-bold", a.text].join(
                      " ",
                    )}
                  >
                    {phase.number}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${a.dot}`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="text-lg font-morabba font-bold text-beige-50 mb-2 leading-snug">
                  {phase.title}
                </h3>
                <p className="text-sm text-beige-400 leading-relaxed mb-5">
                  {phase.description}
                </p>

                <ul className="space-y-2.5">
                  {phase.actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2.5 text-sm text-beige-300"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{action}</span>
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

        {/* KPIهای پذیرش */}
        <div
          className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10"
          data-reveal="fade-up"
          style={delay(340)}
        >
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
                شاخص‌های پذیرش
              </h3>
              <p className="text-sm text-beige-400 mt-2">
                موفقیت برنامه پذیرش، با عدد سنجیده می‌شود.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {ADOPTION_KPIS.map((kpi) => {
              const a = ACCENT[kpi.accent];
              return (
                <li
                  key={kpi.label}
                  className={[
                    "rounded-2xl border backdrop-blur-sm px-5 py-6 text-center",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`text-3xl font-morabba font-bold ${a.text}`}>
                    {kpi.value}
                  </p>
                  <p className="text-xs text-beige-400 mt-2 leading-relaxed">
                    {kpi.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

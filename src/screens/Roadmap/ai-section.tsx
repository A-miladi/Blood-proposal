"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";
import { AI_ICONS } from "./components/icons";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Phase = "MVP" | "Pilot" | "بلندمدت";

type Capability = {
  id: string;
  title: string;
  description: string;
  accent: Accent;
  icon: keyof typeof AI_ICONS;
  phase: Phase;
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

/* ============ برچسب فاز ============ */
const PHASE_LABEL: Record<Phase, string> = {
  MVP: "فاز MVP",
  Pilot: "فاز آزمایشی",
  بلندمدت: "بلندمدت",
};

/* ============ داده‌ها ============ */
const CAPABILITIES: Capability[] = [
  {
    id: "forecast",
    title: "پیش‌بینی تقاضای خون",
    description:
      "با تحلیل تاریخ، فصل و بحران‌ها، نیاز هر استان و گروه خونی پیش از وقوع پیش‌بینی می‌شود.",
    accent: "blue",
    icon: "forecast",
    phase: "MVP",
  },
  {
    id: "retention",
    title: "پیش‌بینی بازگشت اهداکننده",
    description:
      "سیستم امتیازدهی می‌کند چه کسی با احتمال بالا برمی‌گردد و چه کسی نیاز به پیگیری دارد.",
    accent: "blue",
    icon: "retention",
    phase: "MVP",
  },
  {
    id: "noshow",
    title: "پیش‌بینی عدم مراجعه",
    description:
      "بر اساس سابقه نوبت‌ها، احتمال عدم مراجعه تخمین زده و از قبل ظرفیت آزاد مدیریت می‌شود.",
    accent: "beige",
    icon: "noshow",
    phase: "Pilot",
  },
  {
    id: "inventory",
    title: "بهینه‌سازی موجودی",
    description:
      "الگوریتم‌ها با در نظر گرفتن مصرف، انقضا و ظرفیت مراکز، سطح مطلوب موجودی را تنظیم می‌کنند.",
    accent: "beige",
    icon: "inventory",
    phase: "Pilot",
  },
  {
    id: "assistant",
    title: "دستیار هوشمند اهداکننده",
    description:
      "پاسخ خودکار به سؤالات پرتکرار و همراهی اهداکننده در مسیر نوبت‌گیری و آمادگی اهدا.",
    accent: "red",
    icon: "assistant",
    phase: "MVP",
  },
  {
    id: "segment",
    title: "بخش‌بندی هوشمند اهداکنندگان",
    description:
      "دسته‌بندی خودکار اهداکنندگان بر اساس رفتار و ریسک ریزش برای کمپین هدفمند.",
    accent: "red",
    icon: "segment",
    phase: "MVP",
  },
];

/* ============ زنجیره ============ */
const PIPELINE = [
  { label: "داده خام", sublabel: "اهدا · نوبت · پیام" },
  { label: "پردازش", sublabel: "پاکسازی و آماده‌سازی" },
  { label: "مدل", sublabel: "یادگیری ماشین" },
  { label: "بینش", sublabel: "امتیاز و پیش‌بینی" },
  { label: "اقدام", sublabel: "کمپین · نوبت · پیگیری" },
];

/* ============ کامپوننت ============ */
export const AICapabilitiesSection = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="ai-title"
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
              بخش چهارم — هوشمندی
            </span>
          </div>

          <h2
            id="ai-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            پلتفرم فقط داده را
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ذخیره نمی‌کند؛ از آن یاد می‌گیرد.
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            هوش مصنوعی به پلتفرم کمک می‌کند پیش از وقوع بحران، اهداکننده را
            بشناسد، ظرفیت را تنظیم کند و ارتباط هدفمند بسازد.
          </p>
        </div>

        {/* ==== ۶ کارت قابلیت ==== */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = AI_ICONS[cap.icon];
            const a = ACCENT[cap.accent];
            return (
              <li
                key={cap.id}
                data-reveal="fade-up"
                style={delay(80 + idx * 50)}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6",
                  "transition-all duration-300 hover:-translate-y-1",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ کارت */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div
                    className={[
                      "w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    <Icon />
                  </div>
                  <span
                    className={[
                      "text-[10px] font-medium px-2.5 py-1 rounded-full border shrink-0",
                      a.badge,
                    ].join(" ")}
                  >
                    {PHASE_LABEL[cap.phase]}
                  </span>
                </div>

                <h3 className="text-lg font-morabba font-bold text-beige-50 mb-2 leading-snug">
                  {cap.title}
                </h3>
                <p className="text-sm text-beige-400 leading-relaxed">
                  {cap.description}
                </p>

                <div
                  className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>

        {/* ==== زنجیره داده تا اقدام ==== */}
        <div
          className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10"
          data-reveal="fade-up"
          style={delay(380)}
        >
          <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
                از داده خام تا اقدام
              </h3>
              <p className="text-sm text-beige-400 mt-2">
                هر لایه، ورودی لایه بعدی را می‌سازد.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5">
              ۵ مرحله
            </span>
          </div>

          {/* دسکتاپ — افقی */}
          <ol className="hidden md:flex items-stretch gap-3">
            {PIPELINE.map((step, idx) => {
              const isLast = idx === PIPELINE.length - 1;
              const tone: Accent =
                idx === PIPELINE.length - 1
                  ? "red"
                  : idx === PIPELINE.length - 2
                    ? "blue"
                    : "beige";
              const a = ACCENT[tone];
              return (
                <li
                  key={step.label}
                  className="flex items-stretch gap-3 flex-1 min-w-0"
                >
                  <div
                    className={[
                      "flex-1 min-w-0 rounded-2xl border backdrop-blur-sm px-4 py-5 flex flex-col",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={[
                          "text-[10px] font-medium px-2 py-0.5 rounded-full border",
                          a.badge,
                        ].join(" ")}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`w-2 h-2 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="text-sm font-morabba font-bold text-beige-50 leading-tight">
                      {step.label}
                    </p>
                    <p className="text-[11px] text-beige-400 mt-1.5">
                      {step.sublabel}
                    </p>
                  </div>

                  {!isLast && (
                    <div
                      className="flex items-center justify-center shrink-0 w-5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-5 h-5 text-beige-500/50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M19 12H5M11 6l-6 6 6 6" />
                      </svg>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* موبایل — عمودی */}
          <ol className="md:hidden relative">
            {PIPELINE.map((step, idx) => {
              const isLast = idx === PIPELINE.length - 1;
              const tone: Accent =
                idx === PIPELINE.length - 1
                  ? "red"
                  : idx === PIPELINE.length - 2
                    ? "blue"
                    : "beige";
              const a = ACCENT[tone];
              return (
                <li
                  key={step.label}
                  className="relative flex gap-5 pb-5 last:pb-0"
                >
                  <div className="relative flex flex-col items-center shrink-0 w-7">
                    <span
                      className={[
                        "w-3.5 h-3.5 rounded-full ring-4 ring-primary-900/60 z-10",
                        a.dot,
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <span
                        className="flex-1 w-px bg-gradient-to-b from-beige-200/25 to-beige-200/10 my-1.5"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-medium ${a.text}`}>
                        {step.label}
                      </span>
                      <span className="text-xs text-beige-500">
                        / مرحله {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-sm text-beige-200 mt-1">
                      {step.sublabel}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

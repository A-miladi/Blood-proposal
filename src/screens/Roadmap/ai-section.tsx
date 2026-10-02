"use client";

import { AI_ICONS } from "./components/icons";

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
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    dot: "bg-blue-600 dark:bg-blue-400",
    badge:
      "bg-blue-100 border-blue-600/30 text-blue-700 dark:bg-blue-900/40 dark:border-blue-500/30 dark:text-blue-300",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    dot: "bg-red-600 dark:bg-red-400",
    badge:
      "bg-red-100 border-red-600/30 text-red-700 dark:bg-red-900/40 dark:border-red-500/30 dark:text-red-300",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    dot: "bg-primary-600 dark:bg-beige-400",
    badge:
      "bg-beige-100 border-primary-900/20 text-primary-700 dark:bg-primary-800/60 dark:border-beige-500/25 dark:text-beige-300",
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
  return (
    <section
      aria-labelledby="ai-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        {/* ==== سربرگ ==== */}
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش چهارم — هوشمندی
            </span>
          </div>

          <h2
            id="ai-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            پلتفرم فقط داده را
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ذخیره نمی‌کند؛ از آن یاد می‌گیرد.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            هوش مصنوعی به پلتفرم کمک می‌کند پیش از وقوع بحران، اهداکننده را
            بشناسد، ظرفیت را تنظیم کند و ارتباط هدفمند بسازد.
          </p>
        </div>

        {/* ==== ۶ کارت قابلیت ==== */}
        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap) => {
            const Icon = AI_ICONS[cap.icon];
            const a = ACCENT[cap.accent];
            return (
              <li
                key={cap.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ کارت */}
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div
                    className={[
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    <Icon />
                  </div>
                  <span
                    className={[
                      "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium",
                      a.badge,
                    ].join(" ")}
                  >
                    {PHASE_LABEL[cap.phase]}
                  </span>
                </div>

                <h3 className="mb-2 font-morabba text-lg font-bold leading-snug text-primary-900 dark:text-beige-50">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary-600 dark:text-beige-400">
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
        <div className="relative rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
                از داده خام تا اقدام
              </h3>
              <p className="mt-2 text-sm text-primary-600 dark:text-beige-400">
                هر لایه، ورودی لایه بعدی را می‌سازد.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-3 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              ۵ مرحله
            </span>
          </div>

          {/* دسکتاپ — افقی */}
          <ol className="hidden items-stretch gap-3 md:flex">
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
                  className="flex min-w-0 flex-1 items-stretch gap-3"
                >
                  <div
                    className={[
                      "flex min-w-0 flex-1 flex-col rounded-2xl border px-4 py-5 backdrop-blur-sm",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={[
                          "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                          a.badge,
                        ].join(" ")}
                      >
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={`h-2 w-2 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="font-morabba text-sm font-bold leading-tight text-primary-900 dark:text-beige-50">
                      {step.label}
                    </p>
                    <p className="mt-1.5 text-[11px] text-primary-600 dark:text-beige-400">
                      {step.sublabel}
                    </p>
                  </div>

                  {!isLast && (
                    <div
                      className="flex w-5 shrink-0 items-center justify-center"
                      aria-hidden="true"
                    >
                      <svg
                        className="h-5 w-5 text-primary-400/50 dark:text-beige-500/50"
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
          <ol className="relative md:hidden">
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
                  <div className="relative flex w-7 shrink-0 flex-col items-center">
                    <span
                      className={[
                        "z-10 h-3.5 w-3.5 rounded-full ring-4 ring-beige-100 dark:ring-primary-900/60",
                        a.dot,
                      ].join(" ")}
                      aria-hidden="true"
                    />
                    {!isLast && (
                      <span
                        className="my-1.5 w-px flex-1 bg-gradient-to-b from-primary-900/20 to-primary-900/5 dark:from-beige-200/25 dark:to-beige-200/10"
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="flex-1 pb-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className={`text-xs font-medium ${a.text}`}>
                        {step.label}
                      </span>
                      <span className="text-xs text-primary-500 dark:text-beige-500">
                        / مرحله {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-primary-800 dark:text-beige-200">
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
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

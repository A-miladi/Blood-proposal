"use client";

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
  return (
    <section
      aria-labelledby="change-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش چهارم — پذیرش کاربر
            </span>
          </div>

          <h2
            id="change-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            فناوری خوب کافی نیست؛
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              پذیرش کاربر حیاتی است.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            برنامه پذیرش از روز اول طراحی می‌شود تا کاربران سازمان، پلتفرم را
            بخشی از کار روزانه‌شان بدانند.
          </p>
        </div>

        {/* سه فاز */}
        <ul className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PHASES.map((phase) => {
            const a = ACCENT[phase.accent];
            return (
              <li
                key={phase.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span
                    className={["font-morabba text-2xl font-bold", a.text].join(
                      " ",
                    )}
                  >
                    {phase.number}
                  </span>
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${a.dot}`}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="mb-2 font-morabba text-lg font-bold leading-snug text-primary-900 dark:text-beige-50">
                  {phase.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-primary-600 dark:text-beige-400">
                  {phase.description}
                </p>

                <ul className="space-y-2.5">
                  {phase.actions.map((action) => (
                    <li
                      key={action}
                      className="flex items-start gap-2.5 text-sm text-primary-700 dark:text-beige-300"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
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
        <div className="relative rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
                شاخص‌های پذیرش
              </h3>
              <p className="mt-2 text-sm text-primary-600 dark:text-beige-400">
                موفقیت برنامه پذیرش، با عدد سنجیده می‌شود.
              </p>
            </div>
          </div>

          <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {ADOPTION_KPIS.map((kpi) => {
              const a = ACCENT[kpi.accent];
              return (
                <li
                  key={kpi.label}
                  className={[
                    "rounded-2xl border px-5 py-6 text-center backdrop-blur-sm",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`font-morabba text-3xl font-bold ${a.text}`}>
                    {kpi.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-primary-600 dark:text-beige-400">
                    {kpi.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

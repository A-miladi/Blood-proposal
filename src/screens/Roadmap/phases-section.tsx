"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Phase = {
  id: string;
  number: string;
  title: string;
  duration: string;
  description: string;
  accent: Accent;
  outputs: string[];
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
    line: string;
  }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    dot: "bg-blue-600 dark:bg-blue-400",
    badge:
      "bg-blue-100 border-blue-600/30 text-blue-700 dark:bg-blue-900/40 dark:border-blue-500/30 dark:text-blue-300",
    line: "via-blue-500/50",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    dot: "bg-red-600 dark:bg-red-400",
    badge:
      "bg-red-100 border-red-600/30 text-red-700 dark:bg-red-900/40 dark:border-red-500/30 dark:text-red-300",
    line: "via-red-500/50",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    dot: "bg-primary-600 dark:bg-beige-400",
    badge:
      "bg-beige-100 border-primary-900/20 text-primary-700 dark:bg-primary-800/60 dark:border-beige-500/25 dark:text-beige-300",
    line: "via-primary-500/30 dark:via-beige-500/30",
  },
};

/* ============ داده‌ها ============ */
const PHASES: Phase[] = [
  {
    id: "discovery",
    number: "۰۱",
    title: "شناخت",
    duration: "۴ تا ۶ هفته",
    description: "درک عمیق فرآیندهای موجود، داده‌ها و نیازهای مدیران.",
    accent: "blue",
    outputs: [
      "سند نیازمندی‌ها",
      "نقشه فرآیندها",
      "فهرست APIهای موجود",
      "چارچوب شاخص‌ها",
    ],
  },
  {
    id: "design",
    number: "۰۲",
    title: "طراحی محصول",
    duration: "۶ تا ۸ هفته",
    description: "طراحی سه تجربه کاربری، سیستم طراحی و معماری اطلاعات.",
    accent: "blue",
    outputs: [
      "وایرفریم سه پنل",
      "سیستم طراحی",
      "نقشه سایت",
      "نمونه اولیه قابل کلیک",
    ],
  },
  {
    id: "mvp",
    number: "۰۳",
    title: "ساخت نسخه اولیه",
    duration: "۱۲ تا ۱۶ هفته",
    description:
      "پیاده‌سازی ماژول‌های اصلی پلتفرم و اتصال به سامانه‌های موجود.",
    accent: "beige",
    outputs: ["احراز هویت", "پلتفرم اهداکننده", "پنل عملیات", "داشبورد مدیریت"],
  },
  {
    id: "pilot",
    number: "۰۴",
    title: "اجرای آزمایشی",
    duration: "۸ تا ۱۲ هفته",
    description:
      "اجرا در حداقل دو استان و سه مرکز، با پشتیبانی میدانی و آموزش.",
    accent: "beige",
    outputs: [
      "استقرار در مراکز پایلوت",
      "آموزش کاربران",
      "بازخورد میدانی",
      "رفع اشکال",
    ],
  },
  {
    id: "measure",
    number: "۰۵",
    title: "ارزیابی",
    duration: "۴ هفته",
    description: "مقایسه نتایج با وضعیت قبل از اجرا و اندازه‌گیری شاخص‌ها.",
    accent: "red",
    outputs: [
      "گزارش اثربخشی",
      "مقایسه با خط پایه",
      "تحلیل ریزش کاربر",
      "اصلاحات لازم",
    ],
  },
  {
    id: "scale",
    number: "۰۶",
    title: "گسترش ملی",
    duration: "۱۶ تا ۲۴ هفته",
    description: "استقرار تدریجی در تمام استان‌ها و مراکز کشور.",
    accent: "red",
    outputs: ["استقرار استانی", "آموزش گسترده", "پایش مستمر", "پشتیبانی ملی"],
  },
];

/* ============ کامپوننت ============ */
export const PhasesSection = () => {
  return (
    <section
      aria-labelledby="phases-title"
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
              بخش پنجم — مسیر اجرا
            </span>
          </div>

          <h2
            id="phases-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            شش گام از شناخت
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              تا استقرار ملی.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            هر فاز با خروجی مشخص و قابل اندازه‌گیری بسته می‌شود تا حرکت پروژه
            شفاف و قابل پیگیری باشد.
          </p>
        </div>

        {/* ==== خط زمانی دسکتاپ ==== */}
        <div className="relative mb-16 hidden lg:block">
          <ol className="relative grid grid-cols-6 gap-4">
            {PHASES.map((phase) => {
              const a = ACCENT[phase.accent];
              return (
                <li key={phase.id} className="relative">
                  {/* نقطه روی خط */}
                  <div className="mb-4 flex justify-center">
                    <span
                      className={[
                        "z-10 h-4 w-4 rounded-full ring-4 ring-beige-100 dark:ring-primary-900",
                        a.dot,
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </div>

                  {/* کارت */}
                  <div
                    className={[
                      "group relative rounded-2xl border p-5 backdrop-blur-sm",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <span
                        className={[
                          "font-morabba text-xs font-bold",
                          a.text,
                        ].join(" ")}
                      >
                        {phase.number}
                      </span>
                      <span
                        className={[
                          "rounded-full border px-2 py-0.5 text-[9px] font-medium",
                          a.badge,
                        ].join(" ")}
                      >
                        {phase.duration}
                      </span>
                    </div>

                    <h3 className="mb-2 font-morabba text-base font-bold text-primary-900 dark:text-beige-50">
                      {phase.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-primary-600 dark:text-beige-400">
                      {phase.description}
                    </p>

                    <div
                      className={`hover-line absolute bottom-0 left-4 right-4 h-px ${a.text}`}
                      aria-hidden="true"
                    />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ==== کارت‌های تفصیلی — زیر خط زمانی (دسکتاپ) ==== */}
        <div className="mb-16 hidden grid-cols-2 gap-4 lg:grid">
          {PHASES.map((phase) => {
            const a = ACCENT[phase.accent];
            return (
              <div
                key={`${phase.id}-detail`}
                className={[
                  "rounded-2xl border p-5 backdrop-blur-sm",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={[
                      "rounded-lg border px-2.5 py-1 font-morabba text-sm font-bold",
                      a.badge,
                    ].join(" ")}
                  >
                    {phase.number}
                  </span>
                  <h4 className="font-morabba text-sm font-bold text-primary-800 dark:text-beige-100">
                    {phase.title}
                  </h4>
                  <span className="mr-auto text-[10px] text-primary-500 dark:text-beige-500">
                    {phase.duration}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {phase.outputs.map((out) => (
                    <li
                      key={out}
                      className="flex items-start gap-2 text-[11px] text-primary-700 dark:text-beige-300"
                    >
                      <span
                        className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* ==== موبایل و تبلت — عمودی ==== */}
        <ol className="relative mb-16 lg:hidden">
          {PHASES.map((phase, idx) => {
            const a = ACCENT[phase.accent];
            const isLast = idx === PHASES.length - 1;
            return (
              <li key={phase.id} className="relative flex gap-5 pb-6 last:pb-0">
                {/* rail */}
                <div className="relative flex w-8 shrink-0 flex-col items-center">
                  <span
                    className={[
                      "z-10 mt-1 h-3.5 w-3.5 rounded-full ring-4 ring-beige-100 dark:ring-primary-900/60",
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

                {/* محتوا */}
                <div
                  className={[
                    "flex-1 rounded-2xl border p-5 backdrop-blur-sm",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span
                      className={[
                        "font-morabba text-sm font-bold",
                        a.text,
                      ].join(" ")}
                    >
                      {phase.number}
                    </span>
                    <span
                      className={[
                        "rounded-full border px-2 py-0.5 text-[10px] font-medium",
                        a.badge,
                      ].join(" ")}
                    >
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="mb-2 font-morabba text-lg font-bold text-primary-900 dark:text-beige-50">
                    {phase.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-primary-600 dark:text-beige-400">
                    {phase.description}
                  </p>

                  <ul className="space-y-1.5 border-t border-primary-900/[0.08] pt-3 dark:border-beige-200/[0.06]">
                    {phase.outputs.map((out) => (
                      <li
                        key={out}
                        className="flex items-start gap-2 text-xs text-primary-700 dark:text-beige-300"
                      >
                        <span
                          className={`mt-1.5 h-1 w-1 shrink-0 rounded-full ${a.dot}`}
                          aria-hidden="true"
                        />
                        <span>{out}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>

        {/* ==== پیام پایانی ==== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary-900/10 bg-gradient-to-br from-beige-100/60 via-beige-50/40 to-beige-100/60 px-8 py-12 text-center backdrop-blur-sm dark:border-beige-200/10 dark:from-primary-800/40 dark:via-primary-900/30 dark:to-primary-800/40">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 70% 80%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative mb-4 text-sm text-primary-600 dark:text-beige-400">
            چرا این ترتیب؟
          </p>
          <p className="relative font-morabba text-2xl font-bold leading-tight text-primary-900 md:text-3xl dark:text-beige-50">
            اول شناخت دقیق،
            <br />
            <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
              بعد ساخت و گسترش.
            </span>
          </p>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-600 dark:text-beige-400">
            هر فاز با خط پایه مشخص شروع و با خروجی قابل اندازه‌گیری بسته می‌شود.
          </p>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

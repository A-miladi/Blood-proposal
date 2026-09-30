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
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    dot: "bg-blue-400",
    badge: "bg-blue-900/40 border-blue-500/30 text-blue-300",
    line: "via-blue-500/50",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    dot: "bg-red-400",
    badge: "bg-red-900/40 border-red-500/30 text-red-300",
    line: "via-red-500/50",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    dot: "bg-beige-400",
    badge: "bg-primary-800/60 border-beige-500/25 text-beige-300",
    line: "via-beige-500/30",
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
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* ==== سربرگ ==== */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش پنجم — مسیر اجرا
            </span>
          </div>

          <h2
            id="phases-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            شش گام از شناخت
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              تا استقرار ملی.
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            هر فاز با خروجی مشخص و قابل اندازه‌گیری بسته می‌شود تا حرکت پروژه
            شفاف و قابل پیگیری باشد.
          </p>
        </div>

        <div className="hidden lg:block relative mb-16">
          <ol className="relative grid grid-cols-6 gap-4">
            {PHASES.map((phase) => {
              const a = ACCENT[phase.accent];
              return (
                <li key={phase.id} className="relative">
                  {/* نقطه روی خط */}
                  <div className="flex justify-center mb-4">
                    <span
                      className={[
                        "w-4 h-4 rounded-full ring-4 ring-primary-900 z-10",
                        a.dot,
                      ].join(" ")}
                      aria-hidden="true"
                    />
                  </div>

                  {/* کارت */}
                  <div
                    className={[
                      "group relative rounded-2xl border backdrop-blur-sm p-5",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={[
                          "text-xs font-morabba font-bold",
                          a.text,
                        ].join(" ")}
                      >
                        {phase.number}
                      </span>
                      <span
                        className={[
                          "text-[9px] font-medium px-2 py-0.5 rounded-full border",
                          a.badge,
                        ].join(" ")}
                      >
                        {phase.duration}
                      </span>
                    </div>

                    <h3 className="text-base font-morabba font-bold text-beige-50 mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-[11px] text-beige-400 leading-relaxed">
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
        <div className="hidden lg:grid grid-cols-2 gap-4 mb-16">
          {PHASES.map((phase) => {
            const a = ACCENT[phase.accent];
            return (
              <div
                key={`${phase.id}-detail`}
                className={[
                  "rounded-2xl border backdrop-blur-sm p-5",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={[
                      "text-sm font-morabba font-bold px-2.5 py-1 rounded-lg border",
                      a.badge,
                    ].join(" ")}
                  >
                    {phase.number}
                  </span>
                  <h4 className="text-sm font-morabba font-bold text-beige-100">
                    {phase.title}
                  </h4>
                  <span className="text-[10px] text-beige-500 mr-auto">
                    {phase.duration}
                  </span>
                </div>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {phase.outputs.map((out) => (
                    <li
                      key={out}
                      className="flex items-start gap-2 text-[11px] text-beige-300"
                    >
                      <span
                        className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${a.dot}`}
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
        <ol className="lg:hidden relative mb-16">
          {PHASES.map((phase, idx) => {
            const a = ACCENT[phase.accent];
            const isLast = idx === PHASES.length - 1;
            return (
              <li key={phase.id} className="relative flex gap-5 pb-6 last:pb-0">
                {/* rail */}
                <div className="relative flex flex-col items-center shrink-0 w-8">
                  <span
                    className={[
                      "w-3.5 h-3.5 rounded-full ring-4 ring-primary-900/60 z-10 mt-1",
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

                {/* محتوا */}
                <div
                  className={[
                    "flex-1 rounded-2xl border backdrop-blur-sm p-5",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={[
                        "text-sm font-morabba font-bold",
                        a.text,
                      ].join(" ")}
                    >
                      {phase.number}
                    </span>
                    <span
                      className={[
                        "text-[10px] font-medium px-2 py-0.5 rounded-full border",
                        a.badge,
                      ].join(" ")}
                    >
                      {phase.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-morabba font-bold text-beige-50 mb-2">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-beige-400 leading-relaxed mb-4">
                    {phase.description}
                  </p>

                  <ul className="space-y-1.5 pt-3 border-t border-beige-200/[0.06]">
                    {phase.outputs.map((out) => (
                      <li
                        key={out}
                        className="flex items-start gap-2 text-xs text-beige-300"
                      >
                        <span
                          className={`mt-1.5 w-1 h-1 rounded-full shrink-0 ${a.dot}`}
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
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/40 via-primary-900/30 to-primary-800/40 backdrop-blur-sm px-8 py-12 text-center">
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 70% 80%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative text-sm text-beige-400 mb-4">چرا این ترتیب؟</p>
          <p className="relative text-2xl md:text-3xl font-morabba font-bold text-beige-50 leading-tight">
            اول شناخت دقیق،
            <br />
            <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
              بعد ساخت و گسترش.
            </span>
          </p>
          <p className="relative text-base text-beige-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            هر فاز با خط پایه مشخص شروع و با خروجی قابل اندازه‌گیری بسته می‌شود.
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

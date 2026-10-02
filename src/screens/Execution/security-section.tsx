"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Pillar = {
  id: string;
  title: string;
  description: string;
  accent: Accent;
  items: string[];
};

/* ============ پالت ============ */
const ACCENT: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    dot: string;
  }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    dot: "bg-blue-600 dark:bg-blue-400",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    dot: "bg-red-600 dark:bg-red-400",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    dot: "bg-primary-600 dark:bg-beige-400",
  },
};

/* ============ داده‌ها ============ */
const PILLARS: Pillar[] = [
  {
    id: "access",
    title: "کنترل دسترسی",
    description: "هر کاربر فقط داده‌ای را می‌بیند که مجاز است.",
    accent: "blue",
    items: [
      "دسترسی مبتنی بر نقش",
      "اصل حداقل دسترسی",
      "احراز هویت دو مرحله‌ای",
      "جلسه‌های امن و قابل ابطال",
    ],
  },
  {
    id: "encryption",
    title: "رمزنگاری",
    description: "داده سلامت در هر مرحله، چه ذخیره چه انتقال، محافظت می‌شود.",
    accent: "blue",
    items: [
      "رمزنگاری AES-256 در ذخیره",
      "TLS 1.3 در انتقال",
      "مدیریت کلید متمرکز",
      "رمزنگاری پشتیبان",
    ],
  },
  {
    id: "audit",
    title: "پایش و ثبت",
    description: "هر دسترسی و هر تغییر، ثبت و قابل بازبینی است.",
    accent: "beige",
    items: [
      "ثبت غیرقابل تغییر تمام دسترسی‌ها",
      "هشدار فعالیت مشکوک",
      "پایش لحظه‌ای رخداد",
      "بازبینی دوره‌ای گزارش‌ها",
    ],
  },
  {
    id: "compliance",
    title: "انطباق",
    description: "پلتفرم با استانداردهای امنیت اطلاعات سلامت هم‌راستا است.",
    accent: "red",
    items: [
      "ISO 27001 — مدیریت امنیت",
      "ISO 27799 — امنیت سلامت",
      "الگوگیری از HIPAA و GDPR",
      "سیاست حفظ محرمانگی",
    ],
  },
];

/* ============ کامپوننت ============ */
export const SecuritySection = () => {
  return (
    <section
      aria-labelledby="security-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش دوم — امنیت و حریم خصوصی
            </span>
          </div>

          <h2
            id="security-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            داده سلامت،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              امانت است.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            امنیت بخش فرعی پروژه نیست؛ از اولین روز طراحی در معماری پلتفرم لحاظ
            می‌شود.
          </p>
        </div>

        {/* چهار ستون امنیت */}
        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {PILLARS.map((p) => {
            const a = ACCENT[p.accent];
            return (
              <li
                key={p.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="mb-3 flex items-center gap-3">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${a.dot}`}
                    aria-hidden="true"
                  />
                  <h3 className="font-morabba text-lg font-bold text-primary-900 dark:text-beige-50">
                    {p.title}
                  </h3>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-primary-600 dark:text-beige-400">
                  {p.description}
                </p>

                <ul className="space-y-2.5">
                  {p.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-primary-700 dark:text-beige-300"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
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

        {/* RPO / RTO */}
        <div className="relative rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
                تداوم کسب‌وکار
              </h3>
              <p className="mt-2 text-sm text-primary-600 dark:text-beige-400">
                پلتفرم در برابر بحران‌ها مقاوم طراحی می‌شود.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-3 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              ISO 22301
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                value: "۱۵ دقیقه",
                label: "حداکثر از دست رفتن داده",
                accent: "red" as const,
              },
              {
                value: "۴ ساعت",
                label: "حداکثر زمان بازگردانی",
                accent: "red" as const,
              },
              {
                value: "۲ منطقه",
                label: "استقرار جغرافیایی",
                accent: "blue" as const,
              },
              {
                value: "۶ ماه",
                label: "تست دوره‌ای بازیابی",
                accent: "beige" as const,
              },
            ].map((item) => {
              const a = ACCENT[item.accent];
              return (
                <li
                  key={item.label}
                  className={[
                    "rounded-2xl border px-5 py-6 text-center backdrop-blur-sm",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`font-morabba text-2xl font-bold ${a.text}`}>
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-primary-600 dark:text-beige-400">
                    {item.label}
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

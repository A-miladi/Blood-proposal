"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type KpiGroup = {
  id: string;
  title: string;
  subtitle: string;
  accent: Accent;
  items: { label: string; benchmark: string }[];
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
const KPI_GROUPS: KpiGroup[] = [
  {
    id: "donor",
    title: "اهداکننده",
    subtitle: "رفتار و نگهداشت",
    accent: "blue",
    items: [
      { label: "بازگشت اهداکننده بار اول", benchmark: "۲۹٪ ← هدف ۴۰٪+" },
      { label: "نگهداشت ۱۲ماهه", benchmark: "۷۰٪+ (استرالیا)" },
      { label: "بازگرداندن غیرفعال", benchmark: "—" },
      { label: "اهداکننده فعال", benchmark: "—" },
      { label: "اهداکننده داوطلب بدون دستمزد", benchmark: "۱۰۰٪ (ایران)" },
    ],
  },
  {
    id: "appointment",
    title: "نوبت",
    subtitle: "ظرفیت و مراجعه",
    accent: "beige",
    items: [
      { label: "نرخ رزرو", benchmark: "—" },
      { label: "نرخ مراجعه", benchmark: "—" },
      { label: "نرخ عدم مراجعه", benchmark: "کاهش هدف: ۳۰٪" },
      { label: "نرخ لغو", benchmark: "—" },
      { label: "نرخ جابجایی", benchmark: "—" },
    ],
  },
  {
    id: "campaign",
    title: "کمپین",
    subtitle: "قیف تبدیل",
    accent: "beige",
    items: [
      { label: "هدف‌گذاری‌شده", benchmark: "—" },
      { label: "تحویل‌شده", benchmark: "—" },
      { label: "تعامل‌کننده", benchmark: "—" },
      { label: "تبدیل به نوبت", benchmark: "—" },
      { label: "تبدیل به اهدا", benchmark: "—" },
    ],
  },
  {
    id: "service",
    title: "خدمت",
    subtitle: "رضایت و کیفیت",
    accent: "red",
    items: [
      { label: "نمره رضایت", benchmark: "۹۱٪ فعلی" },
      { label: "تعداد شکایات", benchmark: "—" },
      { label: "زمان رسیدگی", benchmark: "—" },
      { label: "نرخ عوارض انتقال خون", benchmark: "—" },
      { label: "پوشش واکسیناسیون", benchmark: "—" },
    ],
  },
];

/* ============ کامپوننت ============ */
export const KpiSection = () => {
  return (
    <section
      aria-labelledby="kpi-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش اول — شاخص‌های موفقیت
            </span>
          </div>

          <h2
            id="kpi-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            موفقیت را چطور
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              اندازه می‌گیریم؟
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            هر شاخص با یک بنچمارک بین‌المللی مقایسه می‌شود تا بدانیم کجا هستیم و
            به کجا می‌رویم.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {KPI_GROUPS.map((group) => {
            const a = ACCENT[group.accent];
            return (
              <li
                key={group.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ */}
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`h-2.5 w-2.5 rounded-full ${a.dot}`}
                      aria-hidden="true"
                    />
                    <h3 className="font-morabba text-lg font-bold text-primary-900 dark:text-beige-50">
                      {group.title}
                    </h3>
                  </div>
                  <span
                    className={[
                      "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                      a.badge,
                    ].join(" ")}
                  >
                    {group.subtitle}
                  </span>
                </div>

                {/* شاخص‌ها */}
                <ul className="space-y-3">
                  {group.items.map((item) => (
                    <li
                      key={item.label}
                      className="flex items-start justify-between gap-4 border-b border-primary-900/[0.08] pb-3 last:border-0 last:pb-0 dark:border-beige-200/[0.06]"
                    >
                      <span className="text-sm leading-snug text-primary-700 dark:text-beige-300">
                        {item.label}
                      </span>
                      <span
                        className={[
                          "shrink-0 text-left text-[11px] font-medium",
                          a.text,
                        ].join(" ")}
                      >
                        {item.benchmark}
                      </span>
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
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

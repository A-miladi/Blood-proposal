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
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش اول — شاخص‌های موفقیت
            </span>
          </div>

          <h2
            id="kpi-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            موفقیت را چطور
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              اندازه می‌گیریم؟
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            هر شاخص با یک بنچمارک بین‌المللی مقایسه می‌شود تا بدانیم کجا هستیم و
            به کجا می‌رویم.
          </p>
        </div>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {KPI_GROUPS.map((group) => {
            const a = ACCENT[group.accent];
            return (
              <li
                key={group.id}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6 sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-2.5 h-2.5 rounded-full ${a.dot}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-morabba font-bold text-beige-50">
                      {group.title}
                    </h3>
                  </div>
                  <span
                    className={[
                      "text-[10px] font-medium px-2.5 py-1 rounded-full border",
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
                      className="flex items-start justify-between gap-4 pb-3 border-b border-beige-200/[0.06] last:border-0 last:pb-0"
                    >
                      <span className="text-sm text-beige-300 leading-snug">
                        {item.label}
                      </span>
                      <span
                        className={[
                          "text-[11px] font-medium shrink-0 text-left",
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
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

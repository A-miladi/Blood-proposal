"use client";

import type { ReactNode } from "react";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type ValueItem = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  accent: Accent;
  icon: ReactNode;
  benefits: string[];
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
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    dot: "bg-blue-400",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    dot: "bg-red-400",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    dot: "bg-beige-400",
  },
};

/* ============ آیکون‌ها ============ */
const IconDonor = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconStaff = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
  </svg>
);

const IconCenter = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M3 21h18" />
    <path d="M5 21V7l7-5 7 5v14" />
    <path d="M9 21v-6h6v6" />
  </svg>
);

const IconProvince = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M9 20l-6-3V5l6 3 6-3 6 3v12l-6-3-6 3z" />
    <path d="M9 8v12M15 5v12" />
  </svg>
);

const IconDirector = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
);

const IconOrg = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-6 h-6"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
  </svg>
);

/* ============ داده‌ها ============ */
const VALUES: ValueItem[] = [
  {
    id: "donor",
    title: "اهداکننده",
    subtitle: "برای مردم",
    description:
      "دسترسی ساده‌تر به خدمات و ارتباط شفاف‌تر با سازمان، در هر زمان و از هر دستگاه.",
    accent: "blue",
    icon: <IconDonor />,
    benefits: [
      "نوبت‌گیری سریع و بدون تماس",
      "دیدن سابقه و کارت اهدا",
      "پیام‌های شخصی‌سازی‌شده",
      "پاسخ سریع به سؤالات",
    ],
  },
  {
    id: "staff",
    title: "کارشناس",
    subtitle: "برای عملیات روزانه",
    description:
      "کاهش فعالیت‌های دستی و دسترسی سریع‌تر به اطلاعات اهداکننده و کمپین‌ها.",
    accent: "beige",
    icon: <IconStaff />,
    benefits: [
      "فهرست پیگیری با اولویت",
      "کمپین‌ساز ساده",
      "ثبت سریع تماس و نتیجه",
      "گزارش آماده به‌جای Excel",
    ],
  },
  {
    id: "center",
    title: "مدیر مرکز",
    subtitle: "برای مدیریت شعبه",
    description: "دید بهتر نسبت به عملکرد مرکز، ظرفیت و عدم مراجعه‌ها.",
    accent: "beige",
    icon: <IconCenter />,
    benefits: [
      "داشبورد عملکرد مرکز",
      "مدیریت ظرفیت و نوبت",
      "پایش عدم مراجعه",
      "هشدار کمبود ذخیره",
    ],
  },
  {
    id: "province",
    title: "مدیر استانی",
    subtitle: "برای نظارت منطقه‌ای",
    description: "امکان مقایسه مراکز و نظارت دقیق بر عملکرد استان.",
    accent: "blue",
    icon: <IconProvince />,
    benefits: [
      "مقایسه مراکز استان",
      "تحلیل روند منطقه‌ای",
      "هماهنگی تیم‌های سیار",
      "گزارش‌های استاندارد",
    ],
  },
  {
    id: "director",
    title: "مدیرکل",
    subtitle: "برای تصمیم‌گیری",
    description: "تصویر یکپارچه از وضعیت کشور و ابزار تصمیم‌گیری اجرایی.",
    accent: "red",
    icon: <IconDirector />,
    benefits: [
      "داشبورد ملی",
      "هشدارهای هوشمند",
      "کاوش کشور تا مرکز",
      "تحلیل روند و پیش‌بینی",
    ],
  },
  {
    id: "org",
    title: "سازمان",
    subtitle: "برای آینده",
    description: "حرکت از فعالیت‌های پراکنده به یک سیستم داده‌محور و یکپارچه.",
    accent: "red",
    icon: <IconOrg />,
    benefits: [
      "یک جریان داده",
      "استاندارد بین‌المللی",
      "زیرساخت مقیاس‌پذیر",
      "زمینه‌سازی برای AI",
    ],
  },
];

/* ============ کامپوننت ============ */
export const ValueSection = () => {
  return (
    <section
      aria-labelledby="value-title"
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
              بخش هفتم — ارزش
            </span>
          </div>

          <h2
            id="value-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            این پلتفرم برای چه کسی
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              چه چیزی می‌آورد؟
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            ارزش این پروژه در سطح یک کاربر خلاصه نمی‌شود؛ از اهداکننده تا
            مدیرکل، هر کس سهم خودش را می‌گیرد.
          </p>
        </div>

        {/* ==== ۶ کارت ارزش ==== */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => {
            const a = ACCENT[v.accent];
            return (
              <li
                key={v.id}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ کارت */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={[
                      "w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    {v.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-morabba font-bold text-beige-50 leading-tight">
                      {v.title}
                    </h3>
                    <p className={`text-xs mt-0.5 ${a.text}`}>{v.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-beige-400 leading-relaxed mb-5">
                  {v.description}
                </p>

                <ul className="space-y-2">
                  {v.benefits.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-beige-300"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span>{b}</span>
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

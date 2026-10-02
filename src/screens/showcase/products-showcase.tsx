"use client";

import type { ReactNode } from "react";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Module = {
  id: string;
  title: string;
  description: string;
};

type ProductShowcase = {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  accent: Accent;
  icon: ReactNode;
  principles: string[];
  modules: Module[];
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

/* ============ آیکون‌های محصول ============ */
const IconDonor = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-7 w-7"
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
    className="h-7 w-7"
  >
    <rect x="3" y="3" width="7" height="9" rx="1.5" />
    <rect x="14" y="3" width="7" height="5" rx="1.5" />
    <rect x="14" y="12" width="7" height="9" rx="1.5" />
    <rect x="3" y="16" width="7" height="5" rx="1.5" />
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
    className="h-7 w-7"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
);

/* ============ داده‌ها ============ */
const PRODUCTS: ProductShowcase[] = [
  {
    id: "donor",
    title: "پلتفرم اهداکننده",
    subtitle: "Donor Platform",
    tagline: "برای مردم",
    accent: "blue",
    icon: <IconDonor />,
    principles: ["ساده", "صمیمی", "موبایل‌محور"],
    modules: [
      {
        id: "home",
        title: "صفحه اصلی",
        description: "نقطه ورود و دعوت به اهدا",
      },
      { id: "auth", title: "ورود / ثبت‌نام", description: "احراز هویت امن" },
      {
        id: "dashboard",
        title: "داشبورد شخصی",
        description: "نمای کلی اهداکننده",
      },
      { id: "profile", title: "پروفایل", description: "اطلاعات فردی و سلامت" },
      {
        id: "history",
        title: "سابقه اهدا",
        description: "تاریخچه کامل اهداها",
      },
      {
        id: "appointments",
        title: "نوبت‌ها",
        description: "رزرو و مدیریت نوبت",
      },
      { id: "centers", title: "مراکز اهدا", description: "نزدیک‌ترین مراکز" },
      {
        id: "notifications",
        title: "اعلان‌ها",
        description: "پیام‌های سازمان",
      },
      { id: "campaigns", title: "کمپین‌ها", description: "کمپین‌های فعال" },
      { id: "education", title: "آموزش", description: "محتوای آموزشی" },
      { id: "feedback", title: "نظرسنجی", description: "بازخورد اهداکننده" },
      { id: "support", title: "پشتیبانی", description: "ارتباط با سازمان" },
      { id: "requests", title: "درخواست‌ها", description: "پیگیری درخواست" },
    ],
  },
  {
    id: "management",
    title: "پنل عملیات",
    subtitle: "Management Panel",
    tagline: "برای کارشناسان",
    accent: "beige",
    icon: <IconStaff />,
    principles: ["سریع", "عملیاتی", "داده‌محور"],
    modules: [
      {
        id: "dashboard",
        title: "داشبورد",
        description: "نمای کلی عملیات روزانه",
      },
      {
        id: "donors",
        title: "مدیریت اهداکنندگان",
        description: "جستجو و فیلتر",
      },
      {
        id: "campaigns",
        title: "کمپین‌ساز",
        description: "ساخت و ارسال کمپین",
      },
      {
        id: "callcenter",
        title: "مرکز تماس",
        description: "ثبت تماس و اولویت",
      },
      { id: "sms", title: "پیام‌ها", description: "ارسال هدفمند SMS" },
      {
        id: "appointments",
        title: "مدیریت نوبت",
        description: "ظرفیت و زمان‌بندی",
      },
      { id: "mobile", title: "تیم‌های سیار", description: "هماهنگی و گزارش" },
      {
        id: "orgs",
        title: "سازمان‌های همکار",
        description: "مدیریت همکاری‌ها",
      },
      {
        id: "satisfaction",
        title: "رضایت‌سنجی",
        description: "نظرسنجی و تحلیل",
      },
      { id: "complaints", title: "شکایات", description: "ثبت و پیگیری" },
      { id: "reports", title: "گزارش‌ها", description: "گزارش‌های آماده" },
      { id: "analytics", title: "تحلیل داده", description: "نمودار و بینش" },
      { id: "training", title: "آموزش", description: "مدیریت پرسنل" },
      { id: "quality", title: "کیفیت و پایش", description: "SOP و پایش عوارض" },
    ],
  },
  {
    id: "director",
    title: "پنل مدیران",
    subtitle: "Director Panel",
    tagline: "برای مدیران ارشد",
    accent: "red",
    icon: <IconDirector />,
    principles: ["راهبردی", "مینیمال", "تصمیم‌محور"],
    modules: [
      { id: "national", title: "داشبورد ملی", description: "نمای کل کشور" },
      { id: "province", title: "عملکرد استان", description: "مقایسه استانی" },
      { id: "center", title: "عملکرد مرکز", description: "کاوش تخصصی" },
      { id: "donors", title: "تحلیل اهداکننده", description: "روند و الگو" },
      { id: "retention", title: "نگهداشت", description: "بازگشت و ریزش" },
      { id: "campaigns", title: "تحلیل کمپین", description: "قیف تبدیل" },
      {
        id: "appointments",
        title: "تحلیل نوبت",
        description: "ظرفیت و مراجعه",
      },
      { id: "satisfaction", title: "رضایت‌سنجی", description: "نمره و روند" },
      { id: "alerts", title: "هشدارهای هوشمند", description: "اعلان مدیریتی" },
      { id: "reports", title: "گزارش‌ها", description: "گزارش اجرایی" },
      { id: "trends", title: "تحلیل روند", description: "سری‌های زمانی" },
      { id: "drilldown", title: "کاوش", description: "کشور ← استان ← مرکز" },
      {
        id: "insights",
        title: "بینش‌های مدیریتی",
        description: "جمع‌بندی کلان",
      },
    ],
  },
];

/* ============ زیرکامپوننت: نمایش یک محصول ============ */
type ProductBlockProps = {
  product: ProductShowcase;
};

function ProductBlock({ product }: ProductBlockProps) {
  const a = ACCENT[product.accent];

  return (
    <div className="relative">
      {/* سربرگ محصول */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex items-start gap-4">
          <div
            className={[
              "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border",
              a.border,
              a.bg,
              a.text,
            ].join(" ")}
          >
            {product.icon}
          </div>
          <div>
            <h3 className="font-morabba text-2xl font-bold leading-tight text-primary-900 md:text-3xl dark:text-beige-50">
              {product.title}
            </h3>
            <p className={`mt-1 text-sm ${a.text}`}>{product.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 sm:justify-end">
          <span
            className={[
              "rounded-full border px-2.5 py-1 text-[10px] font-medium",
              a.badge,
            ].join(" ")}
          >
            {product.subtitle}
          </span>
          {product.principles.map((p) => (
            <span
              key={p}
              className={[
                "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                a.border,
                a.text,
              ].join(" ")}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* گرید ماژول‌ها */}
      <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {product.modules.map((m, idx) => (
          <li
            key={m.id}
            className={[
              "group relative rounded-2xl border px-4 py-4 backdrop-blur-sm",
              "border-primary-900/10 bg-white-50/60 hover:border-primary-900/20",
              "dark:border-beige-200/10 dark:bg-primary-800/30 dark:hover:border-beige-200/20",
            ].join(" ")}
          >
            <div className="mb-2 flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${a.dot}`}
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] text-primary-500 dark:text-beige-500">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>
            <h4 className="mb-1 font-morabba text-sm font-bold leading-snug text-primary-800 dark:text-beige-100">
              {m.title}
            </h4>
            <p className="text-[11px] leading-relaxed text-primary-500 dark:text-beige-500">
              {m.description}
            </p>

            <div
              className={`hover-line absolute bottom-0 left-4 right-4 h-px ${a.text}`}
              aria-hidden="true"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ============ کامپوننت اصلی ============ */
export const ProductsShowcase = () => {
  return (
    <section
      aria-labelledby="showcase-products-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش اول — سه محصول
            </span>
          </div>

          <h2
            id="showcase-products-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            هر محصول،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ماژول‌های خودش.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            مجموع ۴۰ ماژول که در سه تجربه متفاوت طراحی شده‌اند — همه با یک زبان
            واحد و یک لایه داده مشترک.
          </p>
        </div>

        <div className="space-y-20">
          <ProductBlock product={PRODUCTS[0]} />
          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-primary-900/15 to-transparent dark:via-beige-200/10"
            aria-hidden="true"
          />
          <ProductBlock product={PRODUCTS[1]} />
          <div
            className="h-px w-full bg-gradient-to-r from-transparent via-primary-900/15 to-transparent dark:via-beige-200/10"
            aria-hidden="true"
          />
          <ProductBlock product={PRODUCTS[2]} />
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

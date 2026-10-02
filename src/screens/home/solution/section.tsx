"use client";

import Image from "next/image";
import {
  ArchNode,
  ARCH_ICONS,
  ACCENT_MAP,
  BranchConnector,
  MergeConnector,
  VerticalConnector,
} from "./architecture";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Product = {
  id: string;
  title: string;
  titleFa: string;
  subtitle: string;
  description: string;
  accent: Accent;
  icon: keyof typeof ARCH_ICONS;
  principles: string[];
  features: string[];
  kpi: string;
};

type PageShot = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: Accent;
};

/* ============ داده‌ها ============ */
const PAGES: PageShot[] = [
  {
    id: "home",
    title: "صفحه اصلی سایت",
    subtitle: "نقطه ورود دیجیتال",
    description:
      "محتوای ساختاریافته، مسیر روشن برای اهداکننده جدید و دعوت به اقدام در یک نگاه.",
    image: "/1.png",
    accent: "blue",
  },
  {
    id: "donor-dashboard",
    title: "داشبورد اهداکننده",
    subtitle: "تجربه شخصی",
    description:
      "تاریخچه اهدا، نوبت‌های فعال، کارت دیجیتال و پیام‌های سازمان در یک صفحه.",
    image: "/2.png",
    accent: "blue",
  },
  {
    id: "appointment",
    title: "نوبت‌دهی",
    subtitle: "رزرو و جابجایی",
    description: "رزرو، تغییر زمان و یادآوری در یک جریان یکپارچه.",
    image: "/3.png",
    accent: "blue",
  },
  {
    id: "management",
    title: "پنل عملیات",
    subtitle: "برای کارشناسان",
    description: "مرکز تماس، کمپین‌ها و مدیریت نوبت‌ها در یک محیط.",
    image: "/4.png",
    accent: "beige",
  },
  {
    id: "director",
    title: "پنل مدیران",
    subtitle: "برای مدیران ارشد",
    description: "داشبورد ملی، هشدارهای هوشمند و کاوش کشوری.",
    image: "/5.png",
    accent: "red",
  },
];

const PRODUCTS: Product[] = [
  {
    id: "donor",
    title: "اهداکننده",
    titleFa: "پلتفرم اهداکننده",
    subtitle: "برای مردم",
    description:
      "دسترسی ساده، سریع و شخصی‌سازی‌شده به خدمات اهدای خون — از نوبت‌گیری تا کارت دیجیتال اهدا.",
    accent: "blue",
    icon: "user",
    principles: ["ساده", "صمیمی", "موبایل‌محور"],
    features: [
      "نوبت‌دهی آنلاین یکپارچه",
      "تاریخچه و کارت دیجیتال اهدا",
      "پیام‌های شخصی‌سازی‌شده",
      "سیستم نشان و پاداش",
    ],
    kpi: "از کلیک اول تا قطره‌ی آخر",
  },
  {
    id: "management",
    title: "کارشناسان",
    titleFa: "پنل عملیات",
    subtitle: "برای کارشناسان",
    description:
      "ابزار عملیاتی یکپارچه برای جذب، پیگیری، کمپین و ارتباط هدفمند با اهداکنندگان.",
    accent: "beige",
    icon: "grid",
    principles: ["سریع", "عملیاتی", "داده‌محور"],
    features: [
      "مرکز تماس با اولویت‌بندی",
      "کمپین‌ساز با قیف تبدیل",
      "مدیریت نوبت‌ها و عدم مراجعه",
      "گزارش‌های لحظه‌ای و پایش عوارض",
    ],
    kpi: "کاهش فعالیت دستی کارشناس",
  },
  {
    id: "director",
    title: "مدیران ارشد",
    titleFa: "پنل مدیران",
    subtitle: "برای مدیران ارشد",
    description:
      "تصویر یکپارچه از وضعیت کشور، هشدارهای هوشمند و ابزار تصمیم‌گیری اجرایی.",
    accent: "red",
    icon: "chart",
    principles: ["راهبردی", "مینیمال", "تصمیم‌محور"],
    features: [
      "داشبورد ملی با شاخص‌های بین‌المللی",
      "سیستم هشدار مدیریتی",
      "کاوش: کشور ← استان ← مرکز",
      "تحلیل روند و پیش‌بینی هوشمند",
    ],
    kpi: "تصویر واقعی برای تصمیم درست",
  },
];

type FlowStep = {
  label: string;
  role: string;
  accent: Accent | "default";
};

const DATA_FLOW: FlowStep[] = [
  { label: "اهداکننده نوبت می‌گیرد", role: "اهداکننده", accent: "blue" },
  { label: "نوبت در سیستم ثبت می‌شود", role: "سیستم", accent: "default" },
  { label: "اگر مراجعه نکند ← عدم مراجعه", role: "سیستم", accent: "default" },
  { label: "کارشناس در داشبورد می‌بیند", role: "کارشناس", accent: "beige" },
  {
    label: "مدیر مرکز وضعیت را ارزیابی می‌کند",
    role: "مدیر مرکز",
    accent: "beige",
  },
  {
    label: "مدیرکل روند کل کشور را می‌بیند",
    role: "مدیرکل",
    accent: "red",
  },
];

const SUMMARY_STATS = [
  { value: "۵", label: "صفحه کلیدی" },
  { value: "۳", label: "تجربه کاربری" },
  { value: "۱", label: "جریان داده" },
  { value: "۱۶", label: "چالش هدف" },
];

type PageCardProps = {
  page: PageShot;
  size?: "sm" | "lg";
};

function PageCard({ page, size = "sm" }: PageCardProps) {
  const a = ACCENT_MAP[page.accent];
  const isLarge = size === "lg";

  return (
    <article
      className={[
        "group relative h-[550px] overflow-hidden rounded-3xl border backdrop-blur-sm",
        a.border,
        a.bg,
      ].join(" ")}
    >
      <div
        className={[
          "relative h-96 w-full overflow-hidden border-b bg-beige-100/60 dark:bg-primary-900/60",
          a.border,
          isLarge ? "aspect-[16/10]" : "aspect-[16/11]",
        ].join(" ")}
      >
        <div
          className="absolute left-0 top-0 z-10 flex items-center gap-1.5 px-3 py-2  dark:bg-primary-900/70"
          aria-hidden="true"
        >
          <span className="h-2 w-2 rounded-full bg-red-500/60" />
          <span className="h-2 w-2 rounded-full bg-primary-500/40 dark:bg-beige-500/40" />
          <span className="h-2 w-2 rounded-full bg-green-600/60" />
        </div>

        <Image
          src={page.image}
          alt={page.title}
          fill
          className="object-center pt-6"
          loading="lazy"
        />

        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent dark:from-primary-900/60"
          aria-hidden="true"
        />
      </div>

      <div className={isLarge ? "p-6 sm:p-7" : "p-5 sm:p-6"}>
        <div className="mb-2 flex items-center justify-between">
          <span className={`text-xs font-medium ${a.text}`}>
            {page.subtitle}
          </span>
          <span
            className={`h-2 w-2 rounded-full ${a.dot}`}
            aria-hidden="true"
          />
        </div>
        <h4
          className={[
            "mb-2 font-morabba font-bold leading-snug text-primary-900 dark:text-beige-50",
            isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          ].join(" ")}
        >
          {page.title}
        </h4>
        <p className="text-sm leading-relaxed text-primary-600 dark:text-beige-400">
          {page.description}
        </p>
      </div>

      <div
        className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
        aria-hidden="true"
      />
    </article>
  );
}

/* ============ کامپوننت اصلی ============ */
export const SolutionSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 font-iransans lg:px-0">
      <div className="container relative z-10 mx-auto">
        {/* ==== سربرگ ==== */}
        <div className="mb-12 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش دوم — پیشنهاد فدورا
            </span>
          </div>

          <h2
            id="solution-title"
            className="font-morabba text-2xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            ما یک سایت طراحی نمی‌کنیم؛
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              یک لایه یکپارچه می‌سازیم.
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            سامانه‌های فعلی سازمان حذف نمی‌شوند؛{" "}
            <span className="font-medium text-primary-900 dark:text-beige-100">
              اطلاعات و فرآیندهای پراکنده
            </span>{" "}
            در یک تجربه یکپارچه کنار هم قرار می‌گیرند. نتیجه: اهداکننده سرویس
            ساده‌تر، کارشناس ابزار عملیاتی بهتر، و مدیرکل دید واقعی‌تر.
          </p>
        </div>

        <ul className="mb-16 grid grid-cols-2 gap-1 sm:grid-cols-4">
          {SUMMARY_STATS.map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-primary-900/10 bg-white-50/10 px-5 py-5 text-center backdrop-blur-sm dark:border-beige-200/10 dark:bg-primary-800/40"
            >
              <p className="font-morabba text-3xl font-bold text-red-600 sm:text-4xl dark:text-red-500">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-primary-600 dark:text-beige-400">
                {s.label}
              </p>
            </li>
          ))}
        </ul>

        {/* ==== نمایش پنج صفحه اصلی ==== */}
        <div className="mb-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="font-morabba text-2xl font-bold text-primary-900 md:text-3xl dark:text-beige-50">
                نگاهی به پنج صفحه اصلی
              </h3>
              <p className="mt-2 text-base text-primary-600 dark:text-beige-400">
                از نگاه اهداکننده تا میز مدیرعامل — همه در یک پلتفرم.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-4 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              ۵ صفحه · ۳ تجربه
            </span>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {PAGES.slice(0, 3).map((p) => (
              <div key={p.id}>
                <PageCard page={p} size="sm" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {PAGES.slice(3, 5).map((p) => (
              <div key={p.id}>
                <PageCard page={p} size="lg" />
              </div>
            ))}
          </div>
        </div>

        {/* ==== معماری کلان ==== */}
        <div className="relative mb-16 rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
              معماری کلان پلتفرم
            </h3>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-3 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              یک پلتفرم · سه تجربه
            </span>
          </div>

          <ArchNode
            icon={<ARCH_ICONS.platform />}
            label="پلتفرم یکپارچه انتقال خون"
            sublabel="پلتفرم یکپارچه اهداکننده، عملیات و مدیریت"
            accent="default"
            size="lg"
          />

          <VerticalConnector height={24} />
          <BranchConnector />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRODUCTS.map((p) => {
              const Icon = ARCH_ICONS[p.icon];
              const a = ACCENT_MAP[p.accent];
              return (
                <div
                  key={p.id}
                  className={[
                    "rounded-2xl border px-5 py-5 backdrop-blur-sm",
                    a.border,
                    a.bg,
                    a.glow,
                  ].join(" ")}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    <span className={a.text}>
                      <Icon />
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${a.dot}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-morabba text-sm font-bold leading-tight text-primary-900 dark:text-beige-50">
                    {p.titleFa}
                  </p>
                  <p className="mt-1 text-xs text-primary-600 dark:text-beige-400">
                    {p.subtitle}
                  </p>
                </div>
              );
            })}
          </div>

          <MergeConnector />

          <ArchNode
            icon={<ARCH_ICONS.data />}
            label="لایه داده یکپارچه"
            sublabel="استانداردهای تبادل داده · کدگذاری محصولات · کدگذاری بالینی"
            accent="default"
            size="lg"
          />

          <VerticalConnector height={24} />

          <ArchNode
            icon={<ARCH_ICONS.brain />}
            label="تحلیل + هوش مصنوعی ← هوشمندی"
            sublabel="پیش‌بینی تقاضا · بازگشت اهداکننده · عدم مراجعه · بهینه‌سازی موجودی"
            accent="red"
            size="lg"
          />
        </div>

        {/* ==== سه محصول — جزئیات ==== */}
        <div className="mb-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="font-morabba text-2xl font-bold text-primary-900 md:text-3xl dark:text-beige-50">
                سه تجربه، یک پلتفرم
              </h3>
              <p className="mt-2 text-base text-primary-600 dark:text-beige-400">
                هر کاربر، زبان طراحی خودش را دارد.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-4 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              اصول طراحی
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {PRODUCTS.map((p) => {
              const Icon = ARCH_ICONS[p.icon];
              const a = ACCENT_MAP[p.accent];
              return (
                <li
                  key={p.id}
                  className={[
                    "group relative rounded-3xl border p-6 backdrop-blur-xl",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <div
                      className={[
                        "flex h-12 w-12 items-center justify-center rounded-2xl border",
                        a.border,
                        a.bg,
                        a.text,
                      ].join(" ")}
                    >
                      <Icon />
                    </div>
                    <div className="flex flex-wrap justify-end gap-1.5">
                      {p.principles.map((tag) => (
                        <span
                          key={tag}
                          className={[
                            "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                            a.border,
                            a.text,
                          ].join(" ")}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 className="font-morabba text-xl font-bold text-primary-900 dark:text-beige-50">
                    {p.titleFa}
                  </h4>
                  <p className={`mt-1 text-xs ${a.text}`}>{p.subtitle}</p>

                  <p className="mt-4 text-sm leading-relaxed text-primary-600 dark:text-beige-400">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-primary-700 dark:text-beige-300"
                      >
                        <span
                          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
                          aria-hidden="true"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 border-t border-primary-900/[0.08] pt-4 dark:border-beige-200/[0.06]">
                    <p className={`text-xs font-medium ${a.text}`}>↳ {p.kpi}</p>
                  </div>

                  <div
                    className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
                    aria-hidden="true"
                  />
                </li>
              );
            })}
          </ul>
        </div>

        {/* ==== جریان داده ==== */}
        <div className="mb-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <h3 className="font-morabba text-2xl font-bold text-primary-900 md:text-3xl dark:text-beige-50">
                یک اقدام، چند تصمیم
              </h3>
              <p className="mt-2 text-base text-primary-600 dark:text-beige-400">
                داده از اهداکننده تا مدیرکل، در یک جریان زنده حرکت می‌کند.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-4 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              یک اقدام ← چند تصمیم
            </span>
          </div>

          <ol className="hidden items-stretch gap-3 md:flex">
            {DATA_FLOW.map((step, idx) => {
              const a = ACCENT_MAP[step.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li
                  key={idx}
                  className="flex min-w-0 flex-1 items-stretch gap-3"
                >
                  <div
                    className={[
                      "flex min-w-0 flex-1 flex-col rounded-2xl border px-4 py-5 backdrop-blur-sm",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="mb-3 flex items-center justify-between gap-2">
                      <span
                        className={[
                          "h-2.5 w-2.5 shrink-0 rounded-full",
                          a.dot,
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      <span className="text-[10px] text-primary-500 dark:text-beige-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className={`mb-1 text-xs font-medium ${a.text}`}>
                      {step.role}
                    </p>

                    <p className="mt-auto text-sm leading-snug text-primary-900 dark:text-beige-100">
                      {step.label}
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

          <ol className="relative md:hidden">
            {DATA_FLOW.map((step, idx) => {
              const a = ACCENT_MAP[step.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li key={idx} className="relative flex gap-5 pb-5 last:pb-0">
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
                        {step.role}
                      </span>
                      <span className="text-xs text-primary-500 dark:text-beige-500">
                        / مرحله {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="mt-1 text-base leading-snug text-primary-900 dark:text-beige-100">
                      {step.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ==== پیام پایانی ==== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary-900/10 bg-gradient-to-br from-beige-100/60 via-beige-50/40 to-beige-100/60 px-8 py-12 text-center backdrop-blur-sm dark:border-beige-200/10 dark:from-primary-800/40 dark:via-primary-900/30 dark:to-primary-800/40">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 70% 80%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative mb-4 text-sm text-primary-600 dark:text-beige-400">
            نتیجه نهایی پیشنهاد فدورا
          </p>
          <p className="relative font-morabba text-3xl font-bold leading-tight text-primary-900 md:text-4xl dark:text-beige-50">
            یک پلتفرم.
            <br />
            <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
              سه تجربه. یک جریان داده.
            </span>
          </p>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-600 dark:text-beige-400">
            اهداکننده جذب و همراهی می‌شود، کارشناس توانمند می‌شود، مدیر تصویر
            واقعی می‌بیند.
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

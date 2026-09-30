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
        "group relative rounded-3xl h-[550px] overflow-hidden border backdrop-blur-sm",
        a.border,
        a.bg,
      ].join(" ")}
    >
      <div
        className={[
          "relative w-full h-96 overflow-hidden bg-primary-900/60 border-b",
          a.border,
          isLarge ? "aspect-[16/10]" : "aspect-[16/11]",
        ].join(" ")}
      >
        <div
          className="absolute top-0 left-0 right-0 z-10 flex items-center gap-1.5 px-3 py-2 bg-primary-900/70 backdrop-blur-sm border-b border-beige-200/5"
          aria-hidden="true"
        >
          <span className="w-2 h-2 rounded-full bg-red-500/60" />
          <span className="w-2 h-2 rounded-full bg-beige-500/40" />
          <span className="w-2 h-2 rounded-full bg-green-600/60" />
        </div>

        <Image
          src={page.image}
          alt={page.title}
          fill
          className="object-center pt-7"
          loading="lazy"
        />

        <div
          className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <div className={isLarge ? "p-6 sm:p-7" : "p-5 sm:p-6"}>
        <div className="flex items-center justify-between mb-2">
          <span className={`text-xs font-medium ${a.text}`}>
            {page.subtitle}
          </span>
          <span
            className={`w-2 h-2 rounded-full ${a.dot}`}
            aria-hidden="true"
          />
        </div>
        <h4
          className={[
            "font-morabba font-bold text-beige-50 mb-2 leading-snug",
            isLarge ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
          ].join(" ")}
        >
          {page.title}
        </h4>
        <p className="text-sm text-beige-400 leading-relaxed">
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
    <section
      aria-labelledby="solution-title"
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* ==== سربرگ ==== */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش دوم — پیشنهاد فدورا
            </span>
          </div>

          <h2
            id="solution-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            ما یک سایت طراحی نمی‌کنیم؛
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              یک لایه یکپارچه می‌سازیم.
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            سامانه‌های فعلی سازمان حذف نمی‌شوند؛{" "}
            <span className="text-beige-100 font-medium">
              اطلاعات و فرآیندهای پراکنده
            </span>{" "}
            در یک تجربه یکپارچه کنار هم قرار می‌گیرند. نتیجه: اهداکننده سرویس
            ساده‌تر، کارشناس ابزار عملیاتی بهتر، و مدیرکل دید واقعی‌تر.
          </p>
        </div>

        {/* ==== خلاصه عددی ==== */}
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-16">
          {SUMMARY_STATS.map((s) => (
            <li
              key={s.label}
              className="bg-primary-800/40 backdrop-blur-sm border border-beige-200/10 rounded-2xl px-5 py-5 text-center"
            >
              <p className="text-3xl sm:text-4xl font-morabba font-bold text-red-500">
                {s.value}
              </p>
              <p className="text-sm text-beige-400 mt-1.5">{s.label}</p>
            </li>
          ))}
        </ul>

        {/* ==== نمایش پنج صفحه اصلی ==== */}
        <div className="mb-16">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <div>
              <h3 className="text-2xl md:text-3xl font-morabba font-bold text-beige-50">
                نگاهی به پنج صفحه اصلی
              </h3>
              <p className="text-base text-beige-400 mt-2">
                از نگاه اهداکننده تا میز مدیرعامل — همه در یک پلتفرم.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-4 py-1.5">
              ۵ صفحه · ۳ تجربه
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {PAGES.slice(0, 3).map((p) => (
              <div key={p.id}>
                <PageCard page={p} size="sm" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {PAGES.slice(3, 5).map((p) => (
              <div key={p.id}>
                <PageCard page={p} size="lg" />
              </div>
            ))}
          </div>
        </div>

        {/* ==== معماری کلان ==== */}
        <div className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10 mb-16">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
              معماری کلان پلتفرم
            </h3>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5">
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

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PRODUCTS.map((p) => {
              const Icon = ARCH_ICONS[p.icon];
              const a = ACCENT_MAP[p.accent];
              return (
                <div
                  key={p.id}
                  className={[
                    "rounded-2xl border backdrop-blur-sm px-5 py-5",
                    a.border,
                    a.bg,
                    a.glow,
                  ].join(" ")}
                >
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className={a.text}>
                      <Icon />
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${a.dot}`}
                      aria-hidden="true"
                    />
                  </div>
                  <p className="text-sm font-morabba font-bold text-beige-50 leading-tight">
                    {p.titleFa}
                  </p>
                  <p className="text-xs text-beige-400 mt-1">{p.subtitle}</p>
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
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-morabba font-bold text-beige-50">
                سه تجربه، یک پلتفرم
              </h3>
              <p className="text-base text-beige-400 mt-2">
                هر کاربر، زبان طراحی خودش را دارد.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-4 py-1.5">
              اصول طراحی
            </span>
          </div>

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => {
              const Icon = ARCH_ICONS[p.icon];
              const a = ACCENT_MAP[p.accent];
              return (
                <li
                  key={p.id}
                  className={[
                    "group relative rounded-3xl border backdrop-blur-xl p-6",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div
                      className={[
                        "w-12 h-12 rounded-2xl flex items-center justify-center border",
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
                            "text-[10px] font-medium px-2.5 py-1 rounded-full border",
                            a.border,
                            a.text,
                          ].join(" ")}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 className="text-xl font-morabba font-bold text-beige-50">
                    {p.titleFa}
                  </h4>
                  <p className={`text-xs mt-1 ${a.text}`}>{p.subtitle}</p>

                  <p className="text-sm text-beige-400 leading-relaxed mt-4">
                    {p.description}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2.5 text-sm text-beige-300"
                      >
                        <span
                          className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                          aria-hidden="true"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 pt-4 border-t border-beige-200/[0.06]">
                    <p className={`text-xs ${a.text} font-medium`}>↳ {p.kpi}</p>
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
          <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
            <div>
              <h3 className="text-2xl md:text-3xl font-morabba font-bold text-beige-50">
                یک اقدام، چند تصمیم
              </h3>
              <p className="text-base text-beige-400 mt-2">
                داده از اهداکننده تا مدیرکل، در یک جریان زنده حرکت می‌کند.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-4 py-1.5">
              یک اقدام ← چند تصمیم
            </span>
          </div>

          <ol className="hidden md:flex items-stretch gap-3">
            {DATA_FLOW.map((step, idx) => {
              const a = ACCENT_MAP[step.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li
                  key={idx}
                  className="flex items-stretch gap-3 flex-1 min-w-0"
                >
                  <div
                    className={[
                      "flex-1 min-w-0 rounded-2xl border backdrop-blur-sm px-4 py-5 flex flex-col",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span
                        className={[
                          "w-2.5 h-2.5 rounded-full shrink-0",
                          a.dot,
                        ].join(" ")}
                        aria-hidden="true"
                      />
                      <span className="text-[10px] text-beige-500">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <p className={`text-xs font-medium ${a.text} mb-1`}>
                      {step.role}
                    </p>

                    <p className="text-sm text-beige-100 leading-snug mt-auto">
                      {step.label}
                    </p>
                  </div>

                  {!isLast && (
                    <div
                      className="flex items-center justify-center shrink-0 w-5"
                      aria-hidden="true"
                    >
                      <svg
                        className="w-5 h-5 text-beige-500/50"
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

          <ol className="md:hidden relative">
            {DATA_FLOW.map((step, idx) => {
              const a = ACCENT_MAP[step.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li key={idx} className="relative flex gap-5 pb-5 last:pb-0">
                  <div className="relative flex flex-col items-center shrink-0 w-7">
                    <span
                      className={[
                        "w-3.5 h-3.5 rounded-full ring-4 ring-primary-900/60 z-10",
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

                  <div className="flex-1 pb-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className={`text-xs font-medium ${a.text}`}>
                        {step.role}
                      </span>
                      <span className="text-xs text-beige-500">
                        / مرحله {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-base text-beige-100 mt-1 leading-snug">
                      {step.label}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ==== پیام پایانی ==== */}
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/40 via-primary-900/30 to-primary-800/40 backdrop-blur-sm px-8 py-12 text-center">
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 70% 80%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative text-sm text-beige-400 mb-4">
            نتیجه نهایی پیشنهاد فدورا
          </p>
          <p className="relative text-3xl md:text-4xl font-morabba font-bold text-beige-50 leading-tight">
            یک پلتفرم.
            <br />
            <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
              سه تجربه. یک جریان داده.
            </span>
          </p>
          <p className="relative text-base text-beige-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            اهداکننده جذب و همراهی می‌شود، کارشناس توانمند می‌شود، مدیر تصویر
            واقعی می‌بیند.
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

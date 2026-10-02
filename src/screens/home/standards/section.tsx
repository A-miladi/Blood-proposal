"use client";

import { STANDARD_ICONS } from "./icons";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Standard = {
  id: string;
  code: string;
  title: string;
  description: string;
  accent: Accent;
  icon: keyof typeof STANDARD_ICONS;
  items: string[];
  reference: string;
  source: string;
};

/* ============ Accent Palette ============ */
const ACCENT: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    glow: string;
    dot: string;
    badge: string;
  }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(18,58,99,0.10)] dark:shadow-[0_0_40px_rgba(18,58,99,0.20)]",
    dot: "bg-blue-600 dark:bg-blue-400",
    badge:
      "bg-blue-100 border-blue-600/30 text-blue-700 dark:bg-blue-900/40 dark:border-blue-500/30 dark:text-blue-300",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(161,27,46,0.10)] dark:shadow-[0_0_40px_rgba(161,27,46,0.20)]",
    dot: "bg-red-600 dark:bg-red-400",
    badge:
      "bg-red-100 border-red-600/30 text-red-700 dark:bg-red-900/40 dark:border-red-500/30 dark:text-red-300",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    glow: "shadow-[0_0_40px_rgba(7,18,31,0.05)] dark:shadow-[0_0_40px_rgba(230,223,216,0.08)]",
    dot: "bg-primary-600 dark:bg-beige-400",
    badge:
      "bg-beige-100 border-primary-900/20 text-primary-700 dark:bg-primary-800/60 dark:border-beige-500/25 dark:text-beige-300",
  },
};

/* ============ Data ============ */
const STANDARDS: Standard[] = [
  {
    id: "interop",
    code: "FHIR · ISBT 128",
    title: "تبادل داده سلامت",
    description:
      "زبان مشترک بین پلتفرم و سامانه‌های بیمارستانی برای ردگیری محصول خونی از اهدا تا تزریق.",
    accent: "blue",
    icon: "interop",
    items: [
      "HL7 FHIR R4/R5 — منبع BiologicallyDerivedProduct برای محصولات خونی",
      "ISBT 128 — برچسب‌گذاری یکنواخت محصولات با منشأ انسانی",
      "SNOMED CT — کدگذاری بالینی رویدادهای اهدا",
      "LOINC — کدگذاری مشاهدات آزمایشگاهی",
    ],
    reference:
      "HL7 International · ICCBBA · SNOMED International · Regenstrief",
    source: "hl7.org · isbt128.org · snomed.org · loinc.org",
  },
  {
    id: "quality",
    code: "ISO 15189:2022",
    title: "کیفیت آزمایشگاه پزشکی",
    description:
      "چارچوب مدیریت کیفیت و صلاحیت برای آزمایشگاه‌های بانک خون با تمرکز بر ریسک و ایمنی بیمار.",
    accent: "beige",
    icon: "quality",
    items: [
      "مدیریت اطلاعات و محرمانگی",
      "صلاحیت و آموزش پرسنل",
      "کنترل تجهیزات و کالیبراسیون",
      "مدیریت ریسک در هر مرحله آزمایش",
      "فرآیندهای قبل، حین و بعد از آزمایش",
    ],
    reference: "ISO 15189:2022 — Medical laboratories",
    source: "iso.org",
  },
  {
    id: "security",
    code: "ISO 27001 · ISO 27799",
    title: "امنیت و حریم خصوصی",
    description:
      "حفاظت از داده سلامت اهداکننده و گیرنده در تمام لایه‌های پلتفرم، مطابق استانداردهای بین‌المللی.",
    accent: "red",
    icon: "security",
    items: [
      "ISO 27001 — چارچوب مدیریت امنیت اطلاعات (ISMS)",
      "ISO 27799 — کنترل‌های امنیتی ویژه سلامت",
      "رمزنگاری at Rest و in Transit",
      "کنترل دسترسی مبتنی بر نقش (RBAC)",
      "ثبت غیرقابل تغییر تمام دسترسی‌ها",
    ],
    reference: "ISO/IEC 27001:2022 · ISO 27799:2025",
    source: "iso.org",
  },
  {
    id: "vigilance",
    code: "INHS",
    title: "پایش عوارض انتقال خون",
    description:
      "اتصال به نظام ملی مراقبت از خون ایران برای ثبت، پیگیری و تحلیل عوارض جانبی انتقال خون.",
    accent: "red",
    icon: "vigilance",
    items: [
      "ثبت عوارض جانبی انتقال خون (ATR)",
      "اتصال مستقیم به سامانه INHS",
      "پایش زنجیره کامل: اهدا ← آزمایش ← تزریق",
      "تحلیل روند و شناسایی الگوهای خطر",
      "چرخه اقدام اصلاحی و پیشگیرانه",
    ],
    reference: "Iranian National Haemovigilance System (INHS)",
    source: "healthvigilance.ir",
  },
];

/* ============ جریان داده ============ */
type FlowNode = {
  label: string;
  sublabel: string;
  accent: Accent;
};

const DATA_FLOW: FlowNode[] = [
  { label: "اهداکننده", sublabel: "SNOMED CT", accent: "blue" },
  { label: "محصول خونی", sublabel: "ISBT 128", accent: "beige" },
  { label: "داده سلامت", sublabel: "HL7 FHIR", accent: "blue" },
  { label: "آزمایشگاه", sublabel: "LOINC", accent: "beige" },
  { label: "گیرنده", sublabel: "INHS", accent: "red" },
];

/* ============ Component ============ */
export const StandardsSection = () => {
  return (
    <section
      aria-labelledby="standards-title"
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
              بخش سوم — پشتوانه فنی
            </span>
          </div>

          <h2
            id="standards-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            چرا این پلتفرم
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              قابل اعتماد است؟
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            پلتفرم بر پایه استانداردهای بین‌المللی ساخته می‌شود تا با سامانه‌های
            بیمارستانی، آزمایشگاهی و نظام ملی مراقبت از خون یکپارچه کار کند.
          </p>
        </div>

        {/* ==== چهار کارت استاندارد ==== */}
        <ul className="mb-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {STANDARDS.map((std) => {
            const Icon = STANDARD_ICONS[std.icon];
            const a = ACCENT[std.accent];
            return (
              <li
                key={std.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div
                    className={[
                      "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    <Icon />
                  </div>
                  <span
                    className={[
                      "rounded-full border px-3 py-1.5 text-xs font-medium",
                      a.badge,
                    ].join(" ")}
                  >
                    {std.code}
                  </span>
                </div>

                <h3 className="mb-2 font-morabba text-xl font-bold leading-snug text-primary-900 sm:text-2xl dark:text-beige-50">
                  {std.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-primary-600 dark:text-beige-400">
                  {std.description}
                </p>

                <ul className="mb-5 space-y-2.5">
                  {std.items.map((item) => (
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

                <div className="border-t border-primary-900/[0.08] pt-4 dark:border-beige-200/[0.06]">
                  <p className={`mb-1 text-xs font-medium ${a.text}`}>
                    {std.reference}
                  </p>
                  <p className="text-[10px] text-primary-500 dark:text-beige-500">
                    {std.source}
                  </p>
                </div>

                <div
                  className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>

        {/* ==== دیاگرام جریان داده ==== */}
        <div className="relative mb-16 rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
                جریان داده در زنجیره انتقال خون
              </h3>
              <p className="mt-2 text-sm text-primary-600 dark:text-beige-400">
                هر استاندارد، یک حلقه از زنجیره را پوشش می‌دهد.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-3 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              اهدا ← تزریق
            </span>
          </div>

          <div className="hidden items-center justify-between gap-2 md:flex">
            {DATA_FLOW.map((node, idx) => {
              const a = ACCENT[node.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <div
                  key={node.label}
                  className="flex flex-1 items-center gap-2"
                >
                  <div
                    className={[
                      "flex-1 rounded-2xl border px-4 py-5 text-center backdrop-blur-sm",
                      a.border,
                      a.bg,
                      a.glow,
                    ].join(" ")}
                  >
                    <p className="font-morabba text-sm font-bold leading-tight text-primary-900 dark:text-beige-50">
                      {node.label}
                    </p>
                    <p className={`mt-1.5 text-[10px] font-medium ${a.text}`}>
                      {node.sublabel}
                    </p>
                  </div>
                  {!isLast && (
                    <svg
                      className="h-5 w-5 shrink-0 text-primary-400/40 dark:text-beige-500/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M19 12H5M11 6l-6 6 6 6" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>

          <ol className="space-y-3 md:hidden">
            {DATA_FLOW.map((node, idx) => {
              const a = ACCENT[node.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li key={node.label} className="flex items-center gap-3">
                  <div
                    className={[
                      "flex flex-1 items-center justify-between rounded-2xl border px-4 py-3.5 backdrop-blur-sm",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <span className="font-morabba text-sm font-bold text-primary-900 dark:text-beige-50">
                      {node.label}
                    </span>
                    <span className={`text-[10px] font-medium ${a.text}`}>
                      {node.sublabel}
                    </span>
                  </div>
                  {!isLast && (
                    <svg
                      className="h-4 w-4 shrink-0 rotate-90 text-primary-400/40 dark:text-beige-500/40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-primary-900/[0.08] pt-6 text-[11px] text-primary-500 dark:border-beige-200/[0.06] dark:text-beige-500">
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
              SNOMED CT · FHIR
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-600 dark:bg-beige-400" />
              ISBT 128 · LOINC
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-600 dark:bg-red-400" />
              INHS
            </span>
          </div>
        </div>

        {/* ==== پیام پایانی ==== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary-900/10 bg-gradient-to-br from-beige-100/60 via-beige-50/40 to-beige-100/60 px-8 py-12 text-center backdrop-blur-sm dark:border-beige-200/10 dark:from-primary-800/40 dark:via-primary-900/30 dark:to-primary-800/40">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.10] dark:opacity-[0.18]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 75% 70%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative mb-4 text-sm text-primary-600 dark:text-beige-400">
            نتیجه نهایی
          </p>
          <p className="relative font-morabba text-2xl font-bold leading-tight text-primary-900 md:text-3xl dark:text-beige-50">
            استاندارد بین‌المللی،
            <br />
            <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
              پاسخ بومی.
            </span>
          </p>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-600 dark:text-beige-400">
            پلتفرم با استانداردهای جهانی ساخته می‌شود و با نظام ملی مراقبت از
            خون ایران یکپارچه کار می‌کند.
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

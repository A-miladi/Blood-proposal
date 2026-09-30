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
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(18,58,99,0.20)]",
    dot: "bg-blue-400",
    badge: "bg-blue-900/40 border-blue-500/30 text-blue-300",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(161,27,46,0.20)]",
    dot: "bg-red-400",
    badge: "bg-red-900/40 border-red-500/30 text-red-300",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    glow: "shadow-[0_0_40px_rgba(230,223,216,0.08)]",
    dot: "bg-beige-400",
    badge: "bg-primary-800/60 border-beige-500/25 text-beige-300",
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
              بخش سوم — پشتوانه فنی
            </span>
          </div>

          <h2
            id="standards-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            چرا این پلتفرم
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              قابل اعتماد است؟
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            پلتفرم بر پایه استانداردهای بین‌المللی ساخته می‌شود تا با سامانه‌های
            بیمارستانی، آزمایشگاهی و نظام ملی مراقبت از خون یکپارچه کار کند.
          </p>
        </div>

        {/* ==== چهار کارت استاندارد ==== */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {STANDARDS.map((std) => {
            const Icon = STANDARD_ICONS[std.icon];
            const a = ACCENT[std.accent];
            return (
              <li
                key={std.id}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6 sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div
                    className={[
                      "w-12 h-12 rounded-2xl flex items-center justify-center border shrink-0",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    <Icon />
                  </div>
                  <span
                    className={[
                      "text-xs font-medium px-3 py-1.5 rounded-full border",
                      a.badge,
                    ].join(" ")}
                  >
                    {std.code}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-morabba font-bold text-beige-50 mb-2 leading-snug">
                  {std.title}
                </h3>
                <p className="text-sm text-beige-400 leading-relaxed mb-5">
                  {std.description}
                </p>

                <ul className="space-y-2.5 mb-5">
                  {std.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-beige-300"
                    >
                      <span
                        className={`mt-2 w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-beige-200/[0.06]">
                  <p className={`text-xs font-medium ${a.text} mb-1`}>
                    {std.reference}
                  </p>
                  <p className="text-[10px] text-beige-500">{std.source}</p>
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
        <div className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10 mb-16">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
                جریان داده در زنجیره انتقال خون
              </h3>
              <p className="text-sm text-beige-400 mt-2">
                هر استاندارد، یک حلقه از زنجیره را پوشش می‌دهد.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5">
              اهدا ← تزریق
            </span>
          </div>

          <div className="hidden md:flex items-center justify-between gap-2">
            {DATA_FLOW.map((node, idx) => {
              const a = ACCENT[node.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <div
                  key={node.label}
                  className="flex items-center gap-2 flex-1"
                >
                  <div
                    className={[
                      "flex-1 rounded-2xl border backdrop-blur-sm px-4 py-5 text-center",
                      a.border,
                      a.bg,
                      a.glow,
                    ].join(" ")}
                  >
                    <p className="text-sm font-morabba font-bold text-beige-50 leading-tight">
                      {node.label}
                    </p>
                    <p className={`text-[10px] mt-1.5 ${a.text} font-medium`}>
                      {node.sublabel}
                    </p>
                  </div>
                  {!isLast && (
                    <svg
                      className="w-5 h-5 text-beige-500/40 shrink-0"
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

          <ol className="md:hidden space-y-3">
            {DATA_FLOW.map((node, idx) => {
              const a = ACCENT[node.accent];
              const isLast = idx === DATA_FLOW.length - 1;
              return (
                <li key={node.label} className="flex items-center gap-3">
                  <div
                    className={[
                      "flex-1 rounded-2xl border backdrop-blur-sm px-4 py-3.5 flex items-center justify-between",
                      a.border,
                      a.bg,
                    ].join(" ")}
                  >
                    <span className="text-sm font-morabba font-bold text-beige-50">
                      {node.label}
                    </span>
                    <span className={`text-[10px] ${a.text} font-medium`}>
                      {node.sublabel}
                    </span>
                  </div>
                  {!isLast && (
                    <svg
                      className="w-4 h-4 text-beige-500/40 shrink-0 rotate-90"
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

          <div className="mt-8 pt-6 border-t border-beige-200/[0.06] flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] text-beige-500">
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              SNOMED CT · FHIR
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-beige-400" />
              ISBT 128 · LOINC
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
              INHS
            </span>
          </div>
        </div>

        {/* ==== پیام پایانی ==== */}
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/40 via-primary-900/30 to-primary-800/40 backdrop-blur-sm px-8 py-12 text-center">
          <div
            className="absolute inset-0 opacity-[0.18] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 30%, rgba(18,58,99,0.6), transparent 45%), radial-gradient(circle at 75% 70%, rgba(161,27,46,0.5), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <p className="relative text-sm text-beige-400 mb-4">نتیجه نهایی</p>
          <p className="relative text-2xl md:text-3xl font-morabba font-bold text-beige-50 leading-tight">
            استاندارد بین‌المللی،
            <br />
            <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
              پاسخ بومی.
            </span>
          </p>
          <p className="relative text-base text-beige-400 mt-5 max-w-2xl mx-auto leading-relaxed">
            پلتفرم با استانداردهای جهانی ساخته می‌شود و با نظام ملی مراقبت از
            خون ایران یکپارچه کار می‌کند.
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

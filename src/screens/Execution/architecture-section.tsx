"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Layer = {
  id: string;
  title: string;
  subtitle: string;
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
    line: string;
  }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    dot: "bg-blue-600 dark:bg-blue-400",
    line: "via-blue-600/60 dark:via-blue-500/50",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    dot: "bg-red-600 dark:bg-red-400",
    line: "via-red-600/60 dark:via-red-500/50",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    dot: "bg-primary-600 dark:bg-beige-400",
    line: "via-primary-600/40 dark:via-beige-500/30",
  },
};

/* ============ داده‌ها ============ */
const LAYERS: Layer[] = [
  {
    id: "frontend",
    title: "لایه نمایش",
    subtitle: "Frontend",
    accent: "blue",
    items: [
      "Next.js (App Router)",
      "React + TypeScript",
      "Tailwind CSS",
      "طراحی ریسپانسیو",
    ],
  },
  {
    id: "gateway",
    title: "دروازه API",
    subtitle: "API Gateway",
    accent: "blue",
    items: [
      "Kong / Nginx",
      "مدیریت نرخ درخواست",
      "احراز هویت متمرکز",
      "مسیریابی هوشمند",
    ],
  },
  {
    id: "service",
    title: "لایه سرویس",
    subtitle: "Service Layer",
    accent: "beige",
    items: ["NestJS / Django", "سرور FHIR", "سرویس‌های AI", "مدیریت صف پیام"],
  },
  {
    id: "data",
    title: "لایه داده",
    subtitle: "Data Layer",
    accent: "beige",
    items: [
      "PostgreSQL — داده اصلی",
      "Redis — کش",
      "Elasticsearch — جستجو",
      "Data Lake — تحلیل",
    ],
  },
  {
    id: "intelligence",
    title: "لایه هوشمندی",
    subtitle: "Intelligence",
    accent: "red",
    items: [
      "مدل‌های یادگیری ماشین",
      "پیش‌بینی تقاضا",
      "امتیازدهی اهداکننده",
      "هشدار هوشمند",
    ],
  },
];

/* ============ یکپارچه‌سازی ============ */
const INTEGRATIONS = [
  { label: "نرم‌افزار جامع انتقال خون", method: "REST API" },
  { label: "سامانه نوبت‌دهی اینترنتی", method: "FHIR Appointment" },
  { label: "نظام ملی مراقبت از خون", method: "FHIR DiagnosticReport" },
  { label: "سامانه‌های بیمارستانی", method: "HL7 FHIR" },
];

/* ============ کامپوننت ============ */
export const ArchitectureSection = () => {
  return (
    <section
      aria-labelledby="arch-title"
      className="relative w-full overflow-hidden px-4 py-20 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="mb-14 max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
              بخش سوم — معماری فنی
            </span>
          </div>

          <h2
            id="arch-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            پلتفرم روی
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              چه ستون‌هایی می‌ایستد؟
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            معماری لایه‌ای، امکان توسعه مستقل، مقیاس‌پذیری و نگهداری ساده‌تر را
            فراهم می‌کند.
          </p>
        </div>

        {/* لایه‌ها */}
        <div className="relative mb-16 space-y-3">
          {LAYERS.map((layer, idx) => {
            const a = ACCENT[layer.accent];
            const isLast = idx === LAYERS.length - 1;
            return (
              <div key={layer.id} className="relative">
                <div
                  className={[
                    "rounded-2xl border p-5 backdrop-blur-sm sm:p-6",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                      <h3 className="font-morabba text-lg font-bold text-primary-900 dark:text-beige-50">
                        {layer.title}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-medium ${a.text}`}>
                      {layer.subtitle}
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs leading-relaxed text-primary-700 dark:text-beige-300"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {!isLast && (
                  <div className="flex justify-center py-1" aria-hidden="true">
                    <span
                      className={[
                        "h-4 w-px bg-gradient-to-b from-transparent to-transparent",
                        a.line,
                      ].join(" ")}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* یکپارچه‌سازی */}
        <div className="relative rounded-3xl border border-primary-900/10 bg-white-50/40 p-6 backdrop-blur-sm sm:p-10 dark:border-beige-200/10 dark:bg-primary-800/20">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div>
              <h3 className="font-morabba text-xl font-bold text-primary-800 md:text-2xl dark:text-beige-100">
                یکپارچه‌سازی با سامانه‌های موجود
              </h3>
              <p className="mt-2 text-sm text-primary-600 dark:text-beige-400">
                پلتفرم، جایگزین سامانه‌های فعلی نیست؛ لایه‌ای روی آن‌هاست.
              </p>
            </div>
            <span className="rounded-full border border-primary-900/15 bg-white-50/60 px-3 py-1.5 text-xs text-primary-500 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
              API Gateway
            </span>
          </div>

          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {INTEGRATIONS.map((item) => {
              const a = ACCENT.blue;
              return (
                <li
                  key={item.label}
                  className={[
                    "flex items-center justify-between gap-3 rounded-2xl border px-5 py-4 backdrop-blur-sm",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <span className="text-sm leading-snug text-primary-800 dark:text-beige-200">
                    {item.label}
                  </span>
                  <span
                    className={[
                      "shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium",
                      a.border,
                      a.text,
                    ].join(" ")}
                  >
                    {item.method}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

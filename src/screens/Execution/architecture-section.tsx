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
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    dot: "bg-blue-400",
    line: "via-blue-500/50",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    dot: "bg-red-400",
    line: "via-red-500/50",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    dot: "bg-beige-400",
    line: "via-beige-500/30",
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
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش سوم — معماری فنی
            </span>
          </div>

          <h2
            id="arch-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            پلتفرم روی
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              چه ستون‌هایی می‌ایستد؟
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            معماری لایه‌ای، امکان توسعه مستقل، مقیاس‌پذیری و نگهداری ساده‌تر را
            فراهم می‌کند.
          </p>
        </div>

        {/* لایه‌ها */}
        <div className="relative space-y-3 mb-16">
          {LAYERS.map((layer, idx) => {
            const a = ACCENT[layer.accent];
            const isLast = idx === LAYERS.length - 1;
            return (
              <div key={layer.id} className="relative">
                <div
                  className={[
                    "rounded-2xl border backdrop-blur-sm p-5 sm:p-6",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-2.5 h-2.5 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                      <h3 className="text-lg font-morabba font-bold text-beige-50">
                        {layer.title}
                      </h3>
                    </div>
                    <span className={`text-[11px] font-medium ${a.text}`}>
                      {layer.subtitle}
                    </span>
                  </div>

                  <ul className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-2">
                    {layer.items.map((item) => (
                      <li
                        key={item}
                        className="text-xs text-beige-300 leading-relaxed"
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
                        "w-px h-4 bg-gradient-to-b from-transparent to-transparent",
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
        <div className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
                یکپارچه‌سازی با سامانه‌های موجود
              </h3>
              <p className="text-sm text-beige-400 mt-2">
                پلتفرم، جایگزین سامانه‌های فعلی نیست؛ لایه‌ای روی آن‌هاست.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5">
              API Gateway
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {INTEGRATIONS.map((item) => {
              const a = ACCENT.blue;
              return (
                <li
                  key={item.label}
                  className={[
                    "flex items-center justify-between gap-3 rounded-2xl border backdrop-blur-sm px-5 py-4",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <span className="text-sm text-beige-200 leading-snug">
                    {item.label}
                  </span>
                  <span
                    className={[
                      "text-[10px] font-medium px-2.5 py-1 rounded-full border shrink-0",
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
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

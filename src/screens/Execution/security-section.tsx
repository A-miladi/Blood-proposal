"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Pillar = {
  id: string;
  title: string;
  description: string;
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

/* ============ داده‌ها ============ */
const PILLARS: Pillar[] = [
  {
    id: "access",
    title: "کنترل دسترسی",
    description: "هر کاربر فقط داده‌ای را می‌بیند که مجاز است.",
    accent: "blue",
    items: [
      "دسترسی مبتنی بر نقش",
      "اصل حداقل دسترسی",
      "احراز هویت دو مرحله‌ای",
      "جلسه‌های امن و قابل ابطال",
    ],
  },
  {
    id: "encryption",
    title: "رمزنگاری",
    description: "داده سلامت در هر مرحله، چه ذخیره چه انتقال، محافظت می‌شود.",
    accent: "blue",
    items: [
      "رمزنگاری AES-256 در ذخیره",
      "TLS 1.3 در انتقال",
      "مدیریت کلید متمرکز",
      "رمزنگاری پشتیبان",
    ],
  },
  {
    id: "audit",
    title: "پایش و ثبت",
    description: "هر دسترسی و هر تغییر، ثبت و قابل بازبینی است.",
    accent: "beige",
    items: [
      "ثبت غیرقابل تغییر تمام دسترسی‌ها",
      "هشدار فعالیت مشکوک",
      "پایش لحظه‌ای رخداد",
      "بازبینی دوره‌ای گزارش‌ها",
    ],
  },
  {
    id: "compliance",
    title: "انطباق",
    description: "پلتفرم با استانداردهای امنیت اطلاعات سلامت هم‌راستا است.",
    accent: "red",
    items: [
      "ISO 27001 — مدیریت امنیت",
      "ISO 27799 — امنیت سلامت",
      "الگوگیری از HIPAA و GDPR",
      "سیاست حفظ محرمانگی",
    ],
  },
];

/* ============ کامپوننت ============ */
export const SecuritySection = () => {
  return (
    <section
      aria-labelledby="security-title"
      className="relative w-full py-20 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-5">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              بخش دوم — امنیت و حریم خصوصی
            </span>
          </div>

          <h2
            id="security-title"
            className="text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2]"
          >
            داده سلامت،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              امانت است.
            </span>
          </h2>

          <p className="text-lg text-beige-300 leading-relaxed mt-5">
            امنیت بخش فرعی پروژه نیست؛ از اولین روز طراحی در معماری پلتفرم لحاظ
            می‌شود.
          </p>
        </div>

        {/* چهار ستون امنیت */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PILLARS.map((p) => {
            const a = ACCENT[p.accent];
            return (
              <li
                key={p.id}
                className={[
                  "group relative rounded-3xl border backdrop-blur-sm p-6 sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${a.dot}`}
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-morabba font-bold text-beige-50">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-beige-400 leading-relaxed mb-5">
                  {p.description}
                </p>

                <ul className="space-y-2.5">
                  {p.items.map((item) => (
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

                <div
                  className={`hover-line absolute bottom-0 left-6 right-6 h-px ${a.text}`}
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>

        {/* RPO / RTO */}
        <div className="relative bg-primary-800/20 backdrop-blur-sm border border-beige-200/10 rounded-3xl p-6 sm:p-10">
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <div>
              <h3 className="text-xl md:text-2xl font-morabba font-bold text-beige-100">
                تداوم کسب‌وکار
              </h3>
              <p className="text-sm text-beige-400 mt-2">
                پلتفرم در برابر بحران‌ها مقاوم طراحی می‌شود.
              </p>
            </div>
            <span className="text-xs text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-3 py-1.5">
              ISO 22301
            </span>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                value: "۱۵ دقیقه",
                label: "حداکثر از دست رفتن داده",
                accent: "red" as const,
              },
              {
                value: "۴ ساعت",
                label: "حداکثر زمان بازگردانی",
                accent: "red" as const,
              },
              {
                value: "۲ منطقه",
                label: "استقرار جغرافیایی",
                accent: "blue" as const,
              },
              {
                value: "۶ ماه",
                label: "تست دوره‌ای بازیابی",
                accent: "beige" as const,
              },
            ].map((item) => {
              const a = ACCENT[item.accent];
              return (
                <li
                  key={item.label}
                  className={[
                    "rounded-2xl border backdrop-blur-sm px-5 py-6 text-center",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`text-2xl font-morabba font-bold ${a.text}`}>
                    {item.value}
                  </p>
                  <p className="text-xs text-beige-400 mt-2 leading-relaxed">
                    {item.label}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

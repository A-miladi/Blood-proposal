"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Country = {
  id: string;
  flag: string;
  country: string;
  service: string;
  accent: Accent;
  features: string[];
  highlight: string;
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

/* ============ داده‌ها ============ */
const COUNTRIES: Country[] = [
  {
    id: "au",
    flag: "AU",
    country: "استرالیا",
    service: "Lifeblood",
    accent: "blue",
    highlight: "۷۰٪ بازگشت با پیام شخصی‌سازی‌شده",
    features: [
      "نوبت‌دهی آنلاین و اپلیکیشن",
      "تاریخچه و کارت دیجیتال اهدا",
      "خودارزیابی سلامت پیش از اهدا",
      "بازخورد و پشتیبانی اهداکننده",
    ],
  },
  {
    id: "us",
    flag: "US",
    country: "آمریکا",
    service: "American Red Cross",
    accent: "red",
    highlight: "سیستم Blood Drive Management",
    features: [
      "مدیریت Blood Drive سازمانی",
      "رزرو و جابجایی نوبت",
      "کارت دیجیتال اهدا",
      "اطلاعات سلامت و سابقه",
    ],
  },
  {
    id: "ca",
    flag: "CA",
    country: "کانادا",
    service: "Canadian Blood Services",
    accent: "beige",
    highlight: "پرونده یکپارچه اهداکننده",
    features: [
      "حساب کاربری یکپارچه",
      "بررسی شرایط اهدا",
      "تاریخچه و سابقه اهدا",
      "مدیریت رویدادهای اهدا",
    ],
  },
  {
    id: "region",
    flag: "ME",
    country: "منطقه",
    service: "عربستان و قزاقستان",
    accent: "beige",
    highlight: "تجربه بومی منطقه",
    features: [
      "نوبت‌دهی در ۱۸۵ مرکز (عربستان)",
      "اپلیکیشن اختصاصی اهدا",
      "ردیابی با QR Code (قزاقستان)",
      "کمپین‌های مناسبتی",
    ],
  },
];

/* ============ کامپوننت ============ */
export const BenchmarkSection = () => {
  return (
    <section
      aria-labelledby="benchmark-title"
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
              بخش ششم — تجربه جهانی
            </span>
          </div>

          <h2
            id="benchmark-title"
            className="font-morabba text-4xl font-bold leading-[1.2] text-primary-900 md:text-5xl dark:text-beige-50"
          >
            دیگران چه کرده‌اند،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ما چه می‌افزاییم؟
            </span>
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-primary-700 dark:text-beige-300">
            تجربه کشورهای پیشرو را بررسی کردیم؛ نه برای کپی، بلکه برای طراحی
            متناسب با ساختار و فرهنگ سازمان انتقال خون ایران.
          </p>
        </div>

        {/* ==== چهار کارت کشور ==== */}
        <ul className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {COUNTRIES.map((c) => {
            const a = ACCENT[c.accent];
            return (
              <li
                key={c.id}
                className={[
                  "group relative rounded-3xl border p-6 backdrop-blur-sm sm:p-7",
                  a.border,
                  a.bg,
                ].join(" ")}
              >
                {/* سربرگ کارت */}
                <div className="mb-5 flex items-center gap-4">
                  <div
                    className={[
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border",
                      "font-morabba text-lg font-bold",
                      a.border,
                      a.bg,
                      a.text,
                    ].join(" ")}
                  >
                    {c.flag}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-morabba text-lg font-bold leading-tight text-primary-900 dark:text-beige-50">
                      {c.country}
                    </h3>
                    <p className={`mt-0.5 text-xs ${a.text}`}>{c.service}</p>
                  </div>
                </div>

                {/* نکته کلیدی */}
                <div
                  className={[
                    "mb-5 rounded-xl border px-3 py-2",
                    a.border,
                    a.bg,
                  ].join(" ")}
                >
                  <p className={`text-xs font-medium ${a.text}`}>
                    ↳ {c.highlight}
                  </p>
                </div>

                {/* ویژگی‌ها */}
                <ul className="space-y-2.5">
                  {c.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-sm text-primary-700 dark:text-beige-300"
                    >
                      <span
                        className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${a.dot}`}
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{f}</span>
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

        {/* ==== پیام بومی‌سازی ==== */}
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
            نتیجه بررسی
          </p>
          <p className="relative font-morabba text-2xl font-bold leading-tight text-primary-900 md:text-3xl dark:text-beige-50">
            نه کپی،
            <br />
            <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
              بومی‌سازی.
            </span>
          </p>
          <p className="relative mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-600 dark:text-beige-400">
            ساختار سازمان، داده‌های موجود، فرآیندهای داخلی، زبان و فرهنگ کاربر
            ایرانی، مبنای طراحی ماست.
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

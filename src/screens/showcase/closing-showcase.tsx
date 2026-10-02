"use client";

const HIGHLIGHTS = [
  {
    id: "one-platform",
    title: "یک پلتفرم",
    description: "به‌جای چند سامانه پراکنده",
    accent: "blue" as const,
  },
  {
    id: "three-experiences",
    title: "سه تجربه",
    description: "اهداکننده، کارشناس، مدیر",
    accent: "beige" as const,
  },
  {
    id: "forty-modules",
    title: "۴۰ ماژول",
    description: "یکپارچه و هماهنگ",
    accent: "red" as const,
  },
  {
    id: "one-data",
    title: "یک جریان داده",
    description: "از اهدا تا تصمیم",
    accent: "blue" as const,
  },
];

const ACCENT_TEXT = {
  blue: "text-blue-700 dark:text-blue-300",
  beige: "text-primary-700 dark:text-beige-300",
  red: "text-red-700 dark:text-red-300",
};

const ACCENT_DOT = {
  blue: "bg-blue-600 dark:bg-blue-400",
  beige: "bg-primary-600 dark:bg-beige-400",
  red: "bg-red-600 dark:bg-red-400",
};

const ACCENT_BORDER = {
  blue: "border-blue-600/30 dark:border-blue-500/30",
  beige: "border-primary-900/15 dark:border-beige-500/25",
  red: "border-red-600/30 dark:border-red-500/30",
};

export const ClosingShowcase = () => {
  return (
    <section
      aria-labelledby="showcase-closing-title"
      className="relative w-full overflow-hidden px-4 py-24 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-primary-900/10 bg-gradient-to-br from-beige-100/70 via-beige-50/50 to-beige-100/70 px-6 py-16 backdrop-blur-sm sm:px-12 dark:border-beige-200/10 dark:from-primary-800/50 dark:via-primary-900/40 dark:to-primary-800/50">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.20]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, rgba(18,58,99,0.7), transparent 45%), radial-gradient(circle at 80% 75%, rgba(161,27,46,0.6), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
                جمع‌بندی نهایی
              </span>
            </div>

            <h2
              id="showcase-closing-title"
              className="font-morabba text-3xl font-bold leading-[1.25] text-primary-900 md:text-5xl dark:text-beige-50"
            >
              این پلتفرم،
              <br />
              نتیجه ماه‌ها بررسی،
              <br />
              <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
                طراحی و مهندسی است.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-primary-700 md:text-lg dark:text-beige-300">
              از درک مسئله تا طراحی هر ماژول، همه‌چیز بر پایه داده، استانداردهای
              بین‌المللی و تجربه کاربر ایرانی ساخته شده است.
            </p>
          </div>

          {/* چهار نکته کلیدی */}
          <ul className="relative mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-4 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.id}
                className={[
                  "rounded-2xl border bg-white-50/60 px-5 py-6 text-center backdrop-blur-sm dark:bg-primary-900/40",
                  ACCENT_BORDER[h.accent],
                ].join(" ")}
              >
                <span
                  className={[
                    "mb-3 inline-block h-2.5 w-2.5 rounded-full",
                    ACCENT_DOT[h.accent],
                  ].join(" ")}
                  aria-hidden="true"
                />
                <p className="font-morabba text-lg font-bold leading-tight text-primary-900 dark:text-beige-50">
                  {h.title}
                </p>
                <p
                  className={[
                    "mt-1.5 text-xs font-medium",
                    ACCENT_TEXT[h.accent],
                  ].join(" ")}
                >
                  {h.description}
                </p>
              </li>
            ))}
          </ul>

          {/* خط جداکننده */}
          <div
            className="relative mx-auto my-12 h-px max-w-lg bg-gradient-to-r from-transparent via-primary-900/20 to-transparent dark:via-beige-200/20"
            aria-hidden="true"
          />

          {/* امضا */}
          <div className="relative text-center">
            <p className="font-morabba text-xl font-bold leading-snug text-primary-800 md:text-2xl dark:text-beige-100">
              آماده‌ایم تا این پلتفرم را
              <br />
              با سازمان انتقال خون بسازیم.
            </p>

            <div className="mt-10 flex flex-col items-center gap-2">
              <div
                className="h-px w-16 bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
                aria-hidden="true"
              />
              <p className="mt-3 font-morabba text-2xl font-bold text-red-600 dark:text-red-500">
                فدورا
              </p>
              <p className="text-xs text-primary-500 dark:text-beige-500">
                تیم محصول دیجیتال تمام‌کامل
              </p>
              <p className="max-w-md text-center text-[10px] leading-relaxed text-primary-500 dark:text-beige-600">
                راهبرد محصول · تجربه کاربری · وب · بک‌اند · یکپارچه‌سازی · دواپس
                · تحلیل · سئو · آمادگی هوش مصنوعی
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

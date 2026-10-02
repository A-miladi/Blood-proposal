"use client";

/* ============ سه ستون ============ */
const PILLARS = [
  {
    id: "donor",
    title: "اهداکننده",
    subtitle: "تجربه",
    accent: "blue" as const,
  },
  {
    id: "management",
    title: "کارشناس",
    subtitle: "عملیات",
    accent: "beige" as const,
  },
  {
    id: "director",
    title: "مدیر",
    subtitle: "تصمیم",
    accent: "red" as const,
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

/* ============ کامپوننت ============ */
export const ClosingSection = () => {
  return (
    <section
      aria-labelledby="closing-title"
      className="relative w-full overflow-hidden px-4 py-24 font-iransans lg:px-0"
    >
      <div className="container relative z-10 mx-auto">
        {/* ==== بلوک اصلی ==== */}
        <div className="relative overflow-hidden rounded-3xl border border-primary-900/10 bg-gradient-to-br from-beige-100/70 via-beige-50/50 to-beige-100/70 px-6 py-16 backdrop-blur-sm sm:px-12 dark:border-beige-200/10 dark:from-primary-800/50 dark:via-primary-900/40 dark:to-primary-800/50">
          {/* هاله‌های نورانی */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] dark:opacity-[0.20]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, rgba(18,58,99,0.7), transparent 45%), radial-gradient(circle at 80% 75%, rgba(161,27,46,0.6), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-4xl text-center">
            {/* برچسب */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
                پیام پایانی
              </span>
            </div>

            {/* پیام اصلی */}
            <h2
              id="closing-title"
              className="font-morabba text-3xl font-bold leading-[1.25] text-primary-900 md:text-5xl dark:text-beige-50"
            >
              ما یک سایت طراحی نمی‌کنیم.
              <br />
              ما سه پنل جدا نمی‌سازیم.
              <br />
              <span className="bg-gradient-to-l from-blue-500 via-primary-700 to-red-500 bg-clip-text text-transparent dark:from-blue-300 dark:via-beige-100 dark:to-red-400">
                ما یک پلتفرم یکپارچه می‌سازیم.
              </span>
            </h2>

            {/* توضیح */}
            <p className="mx-auto mt-8 max-w-3xl text-base leading-relaxed text-primary-700 md:text-lg dark:text-beige-300">
              اهداکننده جذب و همراهی می‌شود، کارشناس توانمند می‌شود، و مدیر
              تصویر واقعی سازمان را می‌بیند — همه در یک جریان داده واحد.
            </p>
          </div>

          {/* سه ستون */}
          <ul className="relative mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {PILLARS.map((p) => (
              <li
                key={p.id}
                className={[
                  "rounded-2xl border bg-white-50/60 px-5 py-6 text-center backdrop-blur-sm dark:bg-primary-900/40",
                  ACCENT_BORDER[p.accent],
                ].join(" ")}
              >
                <span
                  className={[
                    "mb-3 inline-block h-2.5 w-2.5 rounded-full",
                    ACCENT_DOT[p.accent],
                  ].join(" ")}
                  aria-hidden="true"
                />
                <p className="font-morabba text-lg font-bold leading-tight text-primary-900 dark:text-beige-50">
                  {p.title}
                </p>
                <p
                  className={[
                    "mt-1 text-xs font-medium",
                    ACCENT_TEXT[p.accent],
                  ].join(" ")}
                >
                  {p.subtitle}
                </p>
              </li>
            ))}
          </ul>

          {/* خط جداکننده */}
          <div
            className="relative mx-auto my-12 h-px max-w-lg bg-gradient-to-r from-transparent via-primary-900/20 to-transparent dark:via-beige-200/20"
            aria-hidden="true"
          />

          {/* شعار نهایی */}
          <div className="relative text-center">
            <p className="font-morabba text-xl font-bold leading-snug text-primary-800 md:text-2xl dark:text-beige-100">
              یک پلتفرم.
              <br />
              سه تجربه. یک جریان داده.
            </p>

            {/* امضا */}
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

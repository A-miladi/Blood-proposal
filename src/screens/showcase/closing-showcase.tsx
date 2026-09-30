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
  blue: "text-blue-300",
  beige: "text-beige-300",
  red: "text-red-300",
};

const ACCENT_DOT = {
  blue: "bg-blue-400",
  beige: "bg-beige-400",
  red: "bg-red-400",
};

const ACCENT_BORDER = {
  blue: "border-blue-500/30",
  beige: "border-beige-500/25",
  red: "border-red-500/30",
};

export const ClosingShowcase = () => {
  return (
    <section
      aria-labelledby="showcase-closing-title"
      className="relative w-full py-24 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/50 via-primary-900/40 to-primary-800/50 backdrop-blur-sm px-6 sm:px-12 py-16">
          <div
            className="absolute inset-0 opacity-[0.20] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 25%, rgba(18,58,99,0.7), transparent 45%), radial-gradient(circle at 80% 75%, rgba(161,27,46,0.6), transparent 45%)",
            }}
            aria-hidden="true"
          />

          <div className="relative max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-8">
              <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
              </span>
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                جمع‌بندی نهایی
              </span>
            </div>

            <h2
              id="showcase-closing-title"
              className="text-3xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.25]"
            >
              این پلتفرم،
              <br />
              نتیجه ماه‌ها بررسی،
              <br />
              <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
                طراحی و مهندسی است.
              </span>
            </h2>

            <p className="text-base md:text-lg text-beige-300 leading-relaxed mt-8 max-w-3xl mx-auto">
              از درک مسئله تا طراحی هر ماژول، همه‌چیز بر پایه داده، استانداردهای
              بین‌المللی و تجربه کاربر ایرانی ساخته شده است.
            </p>
          </div>

          {/* چهار نکته کلیدی */}
          <ul className="relative grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.id}
                className={[
                  "rounded-2xl border backdrop-blur-sm px-5 py-6 text-center",
                  ACCENT_BORDER[h.accent],
                  "bg-primary-900/40",
                ].join(" ")}
              >
                <span
                  className={[
                    "inline-block w-2.5 h-2.5 rounded-full mb-3",
                    ACCENT_DOT[h.accent],
                  ].join(" ")}
                  aria-hidden="true"
                />
                <p className="text-lg font-morabba font-bold text-beige-50 leading-tight">
                  {h.title}
                </p>
                <p
                  className={[
                    "text-xs mt-1.5 font-medium",
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
            className="relative h-px max-w-lg mx-auto my-12 bg-gradient-to-r from-transparent via-beige-200/20 to-transparent"
            aria-hidden="true"
          />

          {/* امضا */}
          <div className="relative text-center">
            <p className="text-xl md:text-2xl font-morabba font-bold text-beige-100 leading-snug">
              آماده‌ایم تا این پلتفرم را
              <br />
              با سازمان انتقال خون بسازیم.
            </p>

            <div className="mt-10 flex flex-col items-center gap-2">
              <div
                className="w-16 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
                aria-hidden="true"
              />
              <p className="text-2xl font-morabba font-bold text-red-500 mt-3">
                فدورا
              </p>
              <p className="text-xs text-beige-500">
                تیم محصول دیجیتال تمام‌کامل
              </p>
              <p className="text-[10px] text-beige-600 max-w-md text-center leading-relaxed">
                راهبرد محصول · تجربه کاربری · وب · بک‌اند · یکپارچه‌سازی · دواپس
                · تحلیل · سئو · آمادگی هوش مصنوعی
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

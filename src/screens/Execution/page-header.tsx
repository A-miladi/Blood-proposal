"use client";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type RadialItem = {
  id: string;
  label: string;
  count: number;
  accent: Accent;
};

/* ============ پالت ============ */
const STROKE_CLASS: Record<Accent, string> = {
  blue: "stroke-blue-600 dark:stroke-blue-400",
  red: "stroke-red-600 dark:stroke-red-400",
  beige: "stroke-primary-600 dark:stroke-beige-400",
};

const TEXT_CLASS: Record<Accent, string> = {
  blue: "text-blue-700 dark:text-blue-300",
  red: "text-red-700 dark:text-red-300",
  beige: "text-primary-700 dark:text-beige-300",
};

const DOT_CLASS: Record<Accent, string> = {
  blue: "bg-blue-600 dark:bg-blue-400",
  red: "bg-red-600 dark:bg-red-400",
  beige: "bg-primary-600 dark:bg-beige-400",
};

/* ============ داده‌های چارت ============ */
const CHART_ITEMS: RadialItem[] = [
  { id: "layers", label: "لایه فنی", count: 5, accent: "red" },
  { id: "kpi", label: "دسته شاخص", count: 4, accent: "blue" },
  { id: "security", label: "محور امنیت", count: 4, accent: "beige" },
  { id: "adoption", label: "فاز پذیرش", count: 3, accent: "blue" },
];

/* ============ زیرکامپوننت: چارت شعاعی ============ */
function RadialChart({ items }: { items: RadialItem[] }) {
  const maxCount = Math.max(...items.map((i) => i.count));
  const radius = 34;
  const strokeWidth = 3.5;
  const arcSpan = 80;
  const quadrantStarts = [-130, -40, 50, 140];

  const round = (n: number) => Math.round(n * 10000) / 10000;

  const arcPath = (start: number, end: number, r: number) => {
    const s = (start * Math.PI) / 180;
    const e = (end * Math.PI) / 180;
    const x1 = round(50 + r * Math.cos(s));
    const y1 = round(50 + r * Math.sin(s));
    const x2 = round(50 + r * Math.cos(e));
    const y2 = round(50 + r * Math.sin(e));
    return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
  };

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      {/* ===== کمان‌ها ===== */}
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {items.map((item, i) => {
          const start = quadrantStarts[i];
          const end = start + arcSpan;
          const fillEnd = start + arcSpan * (item.count / maxCount);

          return (
            <g key={item.id}>
              <path
                d={arcPath(start, end, radius)}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className="stroke-primary-900/10 dark:stroke-beige-200/12"
              />
              <path
                d={arcPath(start, fillEnd, radius)}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className={STROKE_CLASS[item.accent]}
              />
            </g>
          );
        })}
      </svg>

      {/* ===== شماره داخل هر کمان ===== */}
      {items.map((item, i) => {
        const midAngle = quadrantStarts[i] + arcSpan / 2;
        const rad = (midAngle * Math.PI) / 180;
        const countRadius = 22;
        const x = round(50 + countRadius * Math.cos(rad));
        const y = round(50 + countRadius * Math.sin(rad));

        return (
          <div
            key={`count-${item.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <span
              className={[
                "font-morabba text-lg font-bold leading-none",
                TEXT_CLASS[item.accent],
              ].join(" ")}
            >
              {item.count}
            </span>
          </div>
        );
      })}

      {/* ===== برچسب‌های بیرونی ===== */}
      {items.map((item, i) => {
        const midAngle = quadrantStarts[i] + arcSpan / 2;
        const rad = (midAngle * Math.PI) / 180;
        const labelRadius = 46;
        const x = round(50 + labelRadius * Math.cos(rad));
        const y = round(50 + labelRadius * Math.sin(rad));

        return (
          <div
            key={`label-${item.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <p
              className={[
                "font-morabba text-[10px] font-bold leading-none",
                TEXT_CLASS[item.accent],
              ].join(" ")}
            >
              {item.label}
            </p>
          </div>
        );
      })}

      {/* ===== مرکز ===== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex aspect-square w-[26%] flex-col items-center justify-center rounded-full border border-primary-900/15 bg-white-50/80 backdrop-blur-sm dark:border-beige-200/15 dark:bg-primary-800/80">
          <span className="mb-0.5 h-1.5 w-1.5 rounded-full bg-red-500" />
          <p className="font-morabba text-[9px] font-bold text-primary-900 dark:text-beige-100">
            فنی
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============ کامپوننت اصلی ============ */
export const PageHeader = () => {
  return (
    <section
      aria-labelledby="tech-header-title"
      className="relative w-full overflow-hidden px-4 pb-16 pt-12 font-iransans lg:px-0 lg:pt-24"
    >
      <div className="container relative z-10 mx-auto">
        {/* دو ستونه: تیتر + چارت */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-14">
          {/* ستون تیتر */}
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
                پیوست — جزئیات فنی
              </span>
            </div>

            <h1
              id="tech-header-title"
              className="font-morabba text-4xl font-bold leading-[1.15] text-primary-900 sm:text-5xl md:text-6xl dark:text-beige-50"
            >
              زیر پوست پلتفرم،
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                چه خبر است؟
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-700 md:text-lg dark:text-beige-300">
              شاخص‌های موفقیت، امنیت داده، معماری فنی و برنامه پذیرش کاربر —
              چهار ستونی که اجرای پروژه را قابل اتکا می‌کند.
            </p>
          </div>

          {/* ستون چارت */}
          <div className="relative w-full">
            <RadialChart items={CHART_ITEMS} />
          </div>
        </div>

        {/* آمار */}
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "۴", label: "دسته شاخص" },
            { value: "۴", label: "محور امنیت" },
            { value: "۵", label: "لایه فنی" },
            { value: "۳", label: "فاز پذیرش" },
          ].map((s) => (
            <li
              key={s.label}
              className="rounded-2xl border border-primary-900/10 bg-white-50/60 px-5 py-5 text-center backdrop-blur-sm dark:border-beige-200/10 dark:bg-primary-800/40"
            >
              <p className="font-morabba text-3xl font-bold text-red-600 sm:text-4xl dark:text-red-500">
                {s.value}
              </p>
              <p className="mt-1.5 text-sm text-primary-600 dark:text-beige-400">
                {s.label}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

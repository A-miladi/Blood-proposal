"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

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
  blue: "stroke-blue-400",
  red: "stroke-red-400",
  beige: "stroke-beige-400",
};

const TEXT_CLASS: Record<Accent, string> = {
  blue: "text-blue-300",
  red: "text-red-300",
  beige: "text-beige-300",
};

const DOT_CLASS: Record<Accent, string> = {
  blue: "bg-blue-400",
  red: "bg-red-400",
  beige: "bg-beige-400",
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
  const arcSpan = 80; // درجه
  const quadrantStarts = [-130, -40, 50, 140]; // شروع هر کمان

  /* گرد کردن به ۴ رقم اعشار برای جلوگیری از hydration mismatch */
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
    <div className="relative w-full max-w-[340px] aspect-square mx-auto">
      {/* ===== کمان‌ها ===== */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        {items.map((item, i) => {
          const start = quadrantStarts[i];
          const end = start + arcSpan;
          const fillEnd = start + arcSpan * (item.count / maxCount);

          return (
            <g key={item.id}>
              {/* پس‌زمینه کمان */}
              <path
                d={arcPath(start, end, radius)}
                fill="none"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                className="stroke-beige-200/12"
              />
              {/* بخش پرشده */}
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
                "text-lg font-morabba font-bold leading-none",
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
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center whitespace-nowrap"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <p
              className={[
                "text-[10px] font-morabba font-bold leading-none",
                TEXT_CLASS[item.accent],
              ].join(" ")}
            >
              {item.label}
            </p>
          </div>
        );
      })}

      {/* ===== مرکز ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[26%] aspect-square rounded-full border border-beige-200/15 bg-primary-800/80 backdrop-blur-sm flex flex-col items-center justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mb-0.5" />
          <p className="text-[9px] font-morabba font-bold text-beige-100">
            فنی
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============ کامپوننت اصلی ============ */
export const PageHeader = () => {
  const sectionRef = useReveal<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      aria-labelledby="tech-header-title"
      className="relative w-full pt-12 lg:pt-24 pb-16 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* دو ستونه: تیتر + چارت */}
        <div className="grid items-center gap-10 lg:gap-14 lg:grid-cols-[1.3fr_1fr]">
          {/* ستون تیتر */}
          <div className="max-w-3xl" data-reveal="fade-up">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-6">
              <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
              </span>
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                پیوست — جزئیات فنی
              </span>
            </div>

            <h1
              id="tech-header-title"
              className="text-4xl sm:text-5xl md:text-6xl font-morabba font-bold text-beige-50 leading-[1.15]"
            >
              زیر پوست پلتفرم،
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                چه خبر است؟
              </span>
            </h1>

            <p className="text-base md:text-lg text-beige-300 leading-relaxed mt-6 max-w-2xl">
              شاخص‌های موفقیت، امنیت داده، معماری فنی و برنامه پذیرش کاربر —
              چهار ستونی که اجرای پروژه را قابل اتکا می‌کند.
            </p>
          </div>

          {/* ستون چارت */}
          <div
            className="relative w-full"
            data-reveal="fade-up"
            style={delay(140)}
          >
            <RadialChart items={CHART_ITEMS} />
          </div>
        </div>

        {/* آمار */}
        <ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
          data-reveal="fade-up"
          style={delay(200)}
        >
          {[
            { value: "۴", label: "دسته شاخص" },
            { value: "۴", label: "محور امنیت" },
            { value: "۵", label: "لایه فنی" },
            { value: "۳", label: "فاز پذیرش" },
          ].map((s) => (
            <li
              key={s.label}
              className="bg-primary-800/40 backdrop-blur-sm border border-beige-200/10 rounded-2xl px-5 py-5 text-center"
            >
              <p className="text-3xl sm:text-4xl font-morabba font-bold text-red-500">
                {s.value}
              </p>
              <p className="text-sm text-beige-400 mt-1.5">{s.label}</p>
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

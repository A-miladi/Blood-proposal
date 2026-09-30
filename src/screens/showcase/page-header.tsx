"use client";

import type { CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type Segment = {
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
const SEGMENTS: Segment[] = [
  { id: "donor", label: "اهداکننده", count: 13, accent: "blue" },
  { id: "management", label: "عملیات", count: 14, accent: "beige" },
  { id: "director", label: "مدیران", count: 13, accent: "red" },
];

const TOTAL = SEGMENTS.reduce((sum, s) => sum + s.count, 0);

function SegmentedRing({
  segments,
  total,
}: {
  segments: Segment[];
  total: number;
}) {
  const radius = 36;
  const strokeWidth = 4;
  const gap = 3;
  const startAngle = -90;

  const round = (n: number) => Math.round(n * 10000) / 10000;

  const polar = (angle: number, r: number) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: round(50 + r * Math.cos(rad)),
      y: round(50 + r * Math.sin(rad)),
    };
  };

  const arcPath = (start: number, end: number, r: number) => {
    const s = polar(start, r);
    const e = polar(end, r);
    const largeArc = end - start > 180 ? 1 : 0;
    return `M ${s.x} ${s.y} A ${r} ${r} 0 ${largeArc} 1 ${e.x} ${e.y}`;
  };

  const totalSpan = 360 - gap * segments.length;
  const spans = segments.map((s) => (s.count / total) * totalSpan);

  /* محاسبه زاویه‌ها بدون reassign */
  const arcs = segments.map((s, i) => {
    const before = spans.slice(0, i).reduce((sum, span) => sum + span + gap, 0);
    const start = startAngle + before;
    const end = start + spans[i];
    return { segment: s, start, end, mid: (start + end) / 2 };
  });

  return (
    <div className="relative w-full max-w-[340px] aspect-square mx-auto">
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full pointer-events-none -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-beige-200/8"
        />
        {arcs.map(({ segment, start, end }) => (
          <path
            key={segment.id}
            d={arcPath(start, end, radius)}
            fill="none"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            className={STROKE_CLASS[segment.accent]}
          />
        ))}
      </svg>

      {/* برچسب‌ها */}
      {arcs.map(({ segment, mid }) => {
        const p = polar(mid, 46);
        return (
          <div
            key={`label-${segment.id}`}
            className="absolute -translate-x-1/2 -translate-y-1/2 text-center"
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span
                className={`w-1.5 h-1.5 rounded-full ${DOT_CLASS[segment.accent]}`}
                aria-hidden="true"
              />
              <span
                className={`text-[10px] font-morabba font-bold leading-none ${TEXT_CLASS[segment.accent]}`}
              >
                {segment.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* مرکز */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[42%] aspect-square rounded-full border border-beige-200/15 bg-primary-800/80 backdrop-blur-sm flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-morabba font-bold text-beige-50 leading-none">
            {total}
          </p>
          <p className="text-[9px] text-beige-400 mt-1">ماژول</p>
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
      aria-labelledby="showcase-title"
      className="relative w-full pt-8 lg:pt-24 pb-16 px-4 lg:px-0 font-iransans overflow-hidden"
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
                پیوست — ماژول‌های پلتفرم
              </span>
            </div>

            <h1
              id="showcase-title"
              className="text-4xl sm:text-5xl md:text-6xl font-morabba font-bold text-beige-50 leading-[1.15]"
            >
              یک پلتفرم،
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                ۴۰ ماژول یکپارچه.
              </span>
            </h1>

            <p className="text-base md:text-lg text-beige-300 leading-relaxed mt-6 max-w-2xl">
              نگاهی کامل به ماژول‌های سه محصول: پلتفرم اهداکننده، پنل عملیات و
              پنل مدیران. هر ماژول، بخشی از یک جریان داده واحد است.
            </p>
          </div>

          {/* ستون چارت */}
          <div
            className="relative w-full"
            data-reveal="fade-up"
            style={delay(140)}
          >
            <SegmentedRing segments={SEGMENTS} total={TOTAL} />
          </div>
        </div>

        {/* آمار */}
        <ul
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
          data-reveal="fade-up"
          style={delay(200)}
        >
          {[
            { value: "۱۳", label: "ماژول اهداکننده" },
            { value: "۱۴", label: "ماژول عملیات" },
            { value: "۱۳", label: "ماژول مدیران" },
            { value: "۴۰", label: "ماژول کل" },
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

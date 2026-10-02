"use client";

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

  const arcs = segments.map((s, i) => {
    const before = spans.slice(0, i).reduce((sum, span) => sum + span + gap, 0);
    const start = startAngle + before;
    const end = start + spans[i];
    return { segment: s, start, end, mid: (start + end) / 2 };
  });

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          strokeWidth={strokeWidth}
          className="stroke-primary-900/8 dark:stroke-beige-200/8"
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
                className={`h-1.5 w-1.5 rounded-full ${DOT_CLASS[segment.accent]}`}
                aria-hidden="true"
              />
              <span
                className={`font-morabba text-[10px] font-bold leading-none ${TEXT_CLASS[segment.accent]}`}
              >
                {segment.label}
              </span>
            </div>
          </div>
        );
      })}

      {/* مرکز */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="flex aspect-square w-[42%] flex-col items-center justify-center rounded-full border border-primary-900/15 bg-white-50/80 text-center backdrop-blur-sm dark:border-beige-200/15 dark:bg-primary-800/80">
          <p className="font-morabba text-2xl font-bold leading-none text-primary-900 dark:text-beige-50">
            {total}
          </p>
          <p className="mt-1 text-[9px] text-primary-500 dark:text-beige-400">
            ماژول
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
      aria-labelledby="showcase-title"
      className="relative w-full overflow-hidden px-4 pb-16 pt-8 font-iransans lg:px-0 lg:pt-24"
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
                پیوست — ماژول‌های پلتفرم
              </span>
            </div>

            <h1
              id="showcase-title"
              className="font-morabba text-4xl font-bold leading-[1.15] text-primary-900 sm:text-5xl md:text-6xl dark:text-beige-50"
            >
              یک پلتفرم،
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                ۴۰ ماژول یکپارچه.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-700 md:text-lg dark:text-beige-300">
              نگاهی کامل به ماژول‌های سه محصول: پلتفرم اهداکننده، پنل عملیات و
              پنل مدیران. هر ماژول، بخشی از یک جریان داده واحد است.
            </p>
          </div>

          {/* ستون چارت */}
          <div className="relative w-full">
            <SegmentedRing segments={SEGMENTS} total={TOTAL} />
          </div>
        </div>

        {/* آمار */}
        <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { value: "۱۳", label: "ماژول اهداکننده" },
            { value: "۱۴", label: "ماژول عملیات" },
            { value: "۱۳", label: "ماژول مدیران" },
            { value: "۴۰", label: "ماژول کل" },
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

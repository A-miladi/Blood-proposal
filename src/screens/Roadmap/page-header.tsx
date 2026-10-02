"use client";

import type { ReactNode } from "react";

/* ============ Types ============ */
type Accent = "blue" | "red" | "beige";

type FlowNode = {
  id: string;
  label: string;
  /** برچسب کوتاه برای نمایش داخل دایره — اگر نباشه از label استفاده می‌شه */
  short?: string;
  sublabel?: string;
  accent?: Accent;
  icon?: ReactNode;
  /** گره نتیجه با رنگ قرمز و glow برجسته می‌شه */
  isResult?: boolean;
};

type PageHeaderProps = {
  badge: string;
  title: string;
  titleAccent: string;
  description: string;
  flowchart?: FlowNode[];
  /** برچسب دایره مرکزی */
  flowchartCenter?: string;
  stats?: { value: string; label: string }[];
};

/* ============ پالت ============ */
const ACCENT: Record<
  Accent,
  {
    text: string;
    border: string;
    bg: string;
    dot: string;
    glow: string;
  }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/40 dark:border-blue-500/40",
    bg: "bg-blue-600/[0.08] dark:bg-blue-600/[0.12]",
    dot: "bg-blue-600 dark:bg-blue-400",
    glow: "shadow-[0_0_30px_rgba(18,58,99,0.20)] dark:shadow-[0_0_30px_rgba(18,58,99,0.35)]",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/40 dark:border-red-500/40",
    bg: "bg-red-600/[0.08] dark:bg-red-600/[0.12]",
    dot: "bg-red-600 dark:bg-red-400",
    glow: "shadow-[0_0_30px_rgba(161,27,46,0.20)] dark:shadow-[0_0_30px_rgba(161,27,46,0.35)]",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/25 dark:border-beige-500/30",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.07]",
    dot: "bg-primary-600 dark:bg-beige-400",
    glow: "shadow-[0_0_30px_rgba(7,18,31,0.06)] dark:shadow-[0_0_30px_rgba(230,223,216,0.10)]",
  },
};

function CircularFlowChart({
  nodes,
  centerLabel,
}: {
  nodes: FlowNode[];
  centerLabel?: string;
}) {
  const count = nodes.length;
  const radiusPct = 37;
  const startAngle = -90;

  /* گرد کردن به ۴ رقم اعشار — جلوگیری از hydration mismatch */
  const round = (n: number) => Math.round(n * 10000) / 10000;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[340px]">
      {/* حلقه نقطه‌چین */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={radiusPct}
          fill="none"
          stroke="currentColor"
          strokeWidth="0.25"
          strokeDasharray="1 2.2"
          className="text-primary-900/20 dark:text-beige-200/25"
        />
      </svg>

      {/* گره‌ها */}
      {nodes.map((node, i) => {
        const angle = startAngle + (360 / count) * i;
        const rad = (angle * Math.PI) / 180;
        const x = round(50 + radiusPct * Math.cos(rad));
        const y = round(50 + radiusPct * Math.sin(rad));
        const accent = node.accent || (node.isResult ? "red" : "blue");
        const a = ACCENT[accent];
        const displayLabel = node.short || node.label;

        return (
          <div
            key={node.id}
            className="group absolute aspect-square w-[26%] -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className={[
                "flex h-full w-full flex-col items-center justify-center rounded-full border-2 px-1 text-center backdrop-blur-sm",
                a.border,
                a.bg,
                node.isResult ? a.glow : "",
              ].join(" ")}
            >
              <span className="mb-0.5 font-mono text-[8px] leading-none text-primary-500 dark:text-beige-500">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={[
                  "font-morabba text-[10px] font-bold leading-tight",
                  a.text,
                ].join(" ")}
              >
                {displayLabel}
              </span>
            </div>
          </div>
        );
      })}

      {nodes.map((_, i) => {
        const angle = startAngle + (360 / count) * (i + 0.5);
        const rad = (angle * Math.PI) / 180;
        const x = round(50 + radiusPct * Math.cos(rad));
        const y = round(50 + radiusPct * Math.sin(rad));
        const rotation = round(angle + 90);

        return (
          <div
            key={`arrow-${i}`}
            className="pointer-events-none absolute h-3 w-3"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            }}
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-full w-full text-red-500/50"
            >
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </div>
        );
      })}

      {/* دایره مرکزی */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="flex aspect-square w-[32%] flex-col items-center justify-center rounded-full border border-primary-900/15 bg-white-50/70 px-2 text-center backdrop-blur-sm dark:border-beige-200/15 dark:bg-primary-800/70">
          <span className="mb-1 h-1.5 w-1.5 rounded-full bg-red-500" />
          <p className="font-morabba text-[10px] font-bold leading-tight text-primary-900 dark:text-beige-100">
            {centerLabel || "پلتفرم"}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ============ کامپوننت اصلی ============ */
export const PageHeader = ({
  badge,
  title,
  titleAccent,
  description,
  flowchart,
  flowchartCenter,
  stats,
}: PageHeaderProps) => {
  const hasFlowchart = flowchart && flowchart.length > 0;

  return (
    <section
      aria-labelledby="page-header-title"
      className="relative w-full overflow-hidden px-4 pb-16 pt-12 font-iransans lg:px-0 lg:pt-24"
    >
      <div className="container relative z-10 mx-auto">
        <div
          className={[
            "grid items-center gap-10 lg:gap-14",
            hasFlowchart ? "lg:grid-cols-[1.3fr_1fr]" : "lg:grid-cols-1",
          ].join(" ")}
        >
          <div className="max-w-3xl">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-100/70 px-5 py-2 backdrop-blur-xl dark:bg-blue-900/30">
              <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-medium tracking-wide text-blue-800 dark:text-blue-200">
                {badge}
              </span>
            </div>

            <h1
              id="page-header-title"
              className="font-morabba text-4xl font-bold leading-[1.15] text-primary-900 sm:text-5xl md:text-6xl dark:text-beige-50"
            >
              {title}
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-700 md:text-lg dark:text-beige-300">
              {description}
            </p>
          </div>

          {/* ستون فلوچارت */}
          {hasFlowchart && (
            <div className="relative w-full">
              <CircularFlowChart
                nodes={flowchart}
                centerLabel={flowchartCenter}
              />
            </div>
          )}
        </div>

        {/* آمار */}
        {stats && stats.length > 0 && (
          <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s) => (
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
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

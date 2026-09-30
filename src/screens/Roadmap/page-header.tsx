"use client";

import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

const delay = (ms: number): CSSProperties =>
  ({ "--reveal-delay": `${ms}ms` }) as CSSProperties;

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
    text: "text-blue-300",
    border: "border-blue-500/40",
    bg: "bg-blue-600/[0.12]",
    dot: "bg-blue-400",
    glow: "shadow-[0_0_30px_rgba(18,58,99,0.35)]",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/40",
    bg: "bg-red-600/[0.12]",
    dot: "bg-red-400",
    glow: "shadow-[0_0_30px_rgba(161,27,46,0.35)]",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/30",
    bg: "bg-beige-500/[0.07]",
    dot: "bg-beige-400",
    glow: "shadow-[0_0_30px_rgba(230,223,216,0.10)]",
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
    <div className="relative w-full max-w-[340px] aspect-square mx-auto">
      {/* حلقه نقطه‌چین */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
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
          className="text-beige-200/25"
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
            className="absolute w-[26%] aspect-square -translate-x-1/2 -translate-y-1/2 group"
            style={{ left: `${x}%`, top: `${y}%` }}
          >
            <div
              className={[
                "w-full h-full rounded-full border-2 backdrop-blur-sm",
                "flex flex-col items-center justify-center text-center px-1",
                "transition-all duration-300 group-hover:scale-105",
                a.border,
                a.bg,
                node.isResult ? a.glow : "",
              ].join(" ")}
            >
              <span className="text-[8px] font-mono text-beige-500 leading-none mb-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className={[
                  "text-[10px] font-morabba font-bold leading-tight",
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
            className="absolute w-3 h-3 pointer-events-none"
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
              className="w-full h-full text-red-500/50"
            >
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </div>
        );
      })}

      {/* دایره مرکزی */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-[32%] aspect-square rounded-full border border-beige-200/15 bg-primary-800/70 backdrop-blur-sm flex flex-col items-center justify-center text-center px-2">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 mb-1" />
          <p className="text-[10px] font-morabba font-bold text-beige-100 leading-tight">
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
  const sectionRef = useReveal<HTMLElement>();
  const hasFlowchart = flowchart && flowchart.length > 0;

  return (
    <section
      ref={sectionRef}
      aria-labelledby="page-header-title"
      className="relative w-full pt-24 pb-16 px-4 lg:px-0 font-iransans overflow-hidden"
    >
      <div className="container mx-auto relative z-10">
        {/* دو ستونه: تیتر + فلوچارت */}
        <div
          className={[
            "grid items-center gap-10 lg:gap-14",
            hasFlowchart ? "lg:grid-cols-[1.3fr_1fr]" : "lg:grid-cols-1",
          ].join(" ")}
        >
          {/* ستون تیتر */}
          <div className="max-w-3xl" data-reveal="fade-up">
            <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-6">
              <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
              </span>
              <span className="text-blue-200 text-sm font-medium tracking-wide">
                {badge}
              </span>
            </div>

            <h1
              id="page-header-title"
              className="text-4xl sm:text-5xl md:text-6xl font-morabba font-bold text-beige-50 leading-[1.15]"
            >
              {title}
              <br />
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                {titleAccent}
              </span>
            </h1>

            <p className="text-base md:text-lg text-beige-300 leading-relaxed mt-6 max-w-2xl">
              {description}
            </p>
          </div>

          {/* ستون فلوچارت */}
          {hasFlowchart && (
            <div
              className="relative w-full"
              data-reveal="fade-up"
              style={delay(140)}
            >
              <CircularFlowChart
                nodes={flowchart}
                centerLabel={flowchartCenter}
              />
            </div>
          )}
        </div>

        {/* آمار */}
        {stats && stats.length > 0 && (
          <ul
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16"
            data-reveal="fade-up"
            style={delay(200)}
          >
            {stats.map((s) => (
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
        )}
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

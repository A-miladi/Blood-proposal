"use client";

import type { ReactNode } from "react";

/* ============ Icons ============ */
const IconPlatform = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const IconData = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
  </svg>
);

const IconBrain = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M9.5 2a3.5 3.5 0 0 0-3.5 3.5v.5a3 3 0 0 0-2 2.83V11a3 3 0 0 0 1 2.24V15a3 3 0 0 0 3 3h.5a3.5 3.5 0 0 0 3.5 3.5" />
    <path d="M14.5 2a3.5 3.5 0 0 1 3.5 3.5v.5a3 3 0 0 1 2 2.83V11a3 3 0 0 1-1 2.24V15a3 3 0 0 1-3 3h-.5a3.5 3.5 0 0 1-3.5 3.5" />
    <path d="M12 2v20" />
  </svg>
);

const IconUser = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconGrid = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

const IconChart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-5 w-5"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
);

export const ARCH_ICONS = {
  platform: IconPlatform,
  data: IconData,
  brain: IconBrain,
  user: IconUser,
  grid: IconGrid,
  chart: IconChart,
};

/* ============ Accent Palette ============ */
type Accent = "blue" | "red" | "beige" | "default";

const ACCENT: Record<
  Accent,
  { text: string; border: string; bg: string; glow: string; dot: string }
> = {
  blue: {
    text: "text-blue-700 dark:text-blue-300",
    border: "border-blue-600/30 dark:border-blue-500/30",
    bg: "bg-blue-600/[0.06] dark:bg-blue-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(18,58,99,0.10)] dark:shadow-[0_0_40px_rgba(18,58,99,0.20)]",
    dot: "bg-blue-600 dark:bg-blue-400",
  },
  red: {
    text: "text-red-700 dark:text-red-300",
    border: "border-red-600/30 dark:border-red-500/30",
    bg: "bg-red-600/[0.06] dark:bg-red-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(161,27,46,0.10)] dark:shadow-[0_0_40px_rgba(161,27,46,0.20)]",
    dot: "bg-red-600 dark:bg-red-400",
  },
  beige: {
    text: "text-primary-700 dark:text-beige-300",
    border: "border-primary-900/15 dark:border-beige-500/25",
    bg: "bg-white-50/60 dark:bg-beige-500/[0.05]",
    glow: "shadow-[0_0_40px_rgba(7,18,31,0.05)] dark:shadow-[0_0_40px_rgba(230,223,216,0.08)]",
    dot: "bg-primary-600 dark:bg-beige-400",
  },
  default: {
    text: "text-primary-700 dark:text-beige-200",
    border: "border-primary-900/15 dark:border-beige-200/20",
    bg: "bg-white-50/60 dark:bg-primary-800/50",
    glow: "",
    dot: "bg-primary-600 dark:bg-beige-300",
  },
};

export const ACCENT_MAP = ACCENT;

/* ============ Node ============ */
type NodeProps = {
  icon: ReactNode;
  label: string;
  sublabel?: string;
  accent?: Accent;
  meta?: string;
  size?: "md" | "lg";
  pulse?: boolean;
};

function Node({
  icon,
  label,
  sublabel,
  accent = "default",
  meta,
  size = "md",
  pulse = false,
}: NodeProps) {
  const a = ACCENT[accent];

  return (
    <div
      className={[
        "relative rounded-2xl border backdrop-blur-sm",
        a.border,
        a.bg,
        a.glow,
        size === "lg" ? "px-6 py-4" : "px-4 py-3",
        pulse ? "arch-pulse" : "",
      ].join(" ")}
    >
      <div className="relative flex items-center gap-3">
        <span className={`shrink-0 ${a.text}`}>{icon}</span>
        <div className="min-w-0">
          <p className="font-morabba text-sm font-bold leading-tight text-primary-900 dark:text-beige-50">
            {label}
          </p>
          {sublabel && (
            <p className="mt-0.5 truncate text-[10px] text-primary-600 dark:text-beige-400">
              {sublabel}
            </p>
          )}
        </div>
        {meta && (
          <span className={`shrink-0 text-[10px] font-medium ${a.text}`}>
            {meta}
          </span>
        )}
      </div>
    </div>
  );
}

export const ArchNode = Node;

/* ============ Vertical Connector (خطی) ============ */
export function VerticalConnector({ height = 28 }: { height?: number }) {
  return (
    <div
      className="flex justify-center"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <div className="relative h-full w-px overflow-hidden">
        {/* خط زمینه */}
        <div className="absolute inset-0 bg-primary-900/15 dark:bg-beige-200/15" />

        {/* ==== گرادیانت نورانی که از بالا به پایین حرکت می‌کنه ==== */}
        <div className="arch-line-down absolute left-0 right-0 h-1/2 bg-gradient-to-b from-transparent via-red-500 to-transparent" />
      </div>
    </div>
  );
}

/* ============ Branch Connector (1 → 3, خطی) ============ */
export function BranchConnector() {
  return (
    <div className="relative h-10 w-full overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-primary-900/20 dark:text-beige-200/20"
        viewBox="0 0 300 40"
        preserveAspectRatio="none"
      >
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="50"
          y1="20"
          x2="250"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="50"
          y1="20"
          x2="50"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="150"
          y1="20"
          x2="150"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="250"
          y1="20"
          x2="250"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ==== گرادیانت عمودی روی خط اصلی (150) ==== */}
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400" />
      </div>

      {/* ==== گرادیانت افقی روی خط میانی (y=50%) ==== */}
      <div className="absolute left-[16.66%] right-[16.66%] top-1/2 h-px overflow-hidden">
        <div className="arch-line-right absolute inset-y-0 w-1/3 bg-gradient-to-l from-transparent via-primary-700 to-transparent dark:via-beige-300" />
      </div>

      {/* ==== سه گرادیانت عمودی روی سه شاخه ==== */}
      <div className="absolute bottom-0 left-[16.66%] top-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400"
          style={{ animationDelay: "0.6s" }}
        />
      </div>
      <div className="absolute bottom-0 left-1/2 top-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-primary-700 to-transparent dark:via-beige-300"
          style={{ animationDelay: "0.9s" }}
        />
      </div>
      <div className="absolute bottom-0 left-[83.33%] top-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-red-500 to-transparent dark:via-red-400"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </div>
  );
}

/* ============ Merge Connector (3 → 1, خطی) ============ */
export function MergeConnector() {
  return (
    <div className="relative h-10 w-full overflow-hidden" aria-hidden="true">
      <svg
        className="absolute inset-0 h-full w-full text-primary-900/20 dark:text-beige-200/20"
        viewBox="0 0 300 40"
        preserveAspectRatio="none"
      >
        <line
          x1="50"
          y1="0"
          x2="50"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="150"
          y1="0"
          x2="150"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="250"
          y1="0"
          x2="250"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="50"
          y1="20"
          x2="250"
          y2="20"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
        <line
          x1="150"
          y1="20"
          x2="150"
          y2="40"
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ==== سه گرادیانت عمودی روی شاخه‌های ورودی ==== */}
      <div className="absolute left-[16.66%] top-0 h-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent dark:via-blue-400" />
      </div>
      <div className="absolute left-1/2 top-0 h-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-primary-700 to-transparent dark:via-beige-300"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
      <div className="absolute left-[83.33%] top-0 h-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-red-500 to-transparent dark:via-red-400"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      {/* ==== گرادیانت افقی روی خط میانی (همگرایی) ==== */}
      <div className="absolute left-[16.66%] right-[16.66%] top-1/2 h-px overflow-hidden">
        <div className="arch-line-converge absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-primary-700 to-transparent dark:via-beige-300" />
      </div>

      {/* ==== گرادیانت عمودی روی خط خروجی ==== */}
      <div className="absolute bottom-0 left-1/2 top-1/2 w-px -translate-x-1/2 overflow-hidden">
        <div
          className="arch-line-down absolute inset-0 bg-gradient-to-b from-transparent via-red-500 to-transparent"
          style={{ animationDelay: "1.2s" }}
        />
      </div>
    </div>
  );
}

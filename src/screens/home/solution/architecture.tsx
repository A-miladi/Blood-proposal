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
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    className="w-5 h-5"
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
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(18,58,99,0.20)]",
    dot: "bg-blue-400",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    glow: "shadow-[0_0_40px_rgba(161,27,46,0.20)]",
    dot: "bg-red-400",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    glow: "shadow-[0_0_40px_rgba(230,223,216,0.08)]",
    dot: "bg-beige-400",
  },
  default: {
    text: "text-beige-200",
    border: "border-beige-200/20",
    bg: "bg-primary-800/50",
    glow: "",
    dot: "bg-beige-300",
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
};

function Node({
  icon,
  label,
  sublabel,
  accent = "default",
  meta,
  size = "md",
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
      ].join(" ")}
    >
      <div className="flex items-center gap-3">
        <span className={`shrink-0 ${a.text}`}>{icon}</span>
        <div className="min-w-0">
          <p className="text-sm font-morabba font-bold text-beige-50 leading-tight">
            {label}
          </p>
          {sublabel && (
            <p className="text-[10px] text-beige-400 mt-0.5 truncate">
              {sublabel}
            </p>
          )}
        </div>
        {meta && (
          <span className={`shrink-0 text-[10px] ${a.text} font-medium`}>
            {meta}
          </span>
        )}
      </div>
    </div>
  );
}

export const ArchNode = Node;

/* ============ Vertical Connector ============ */
export function VerticalConnector({ height = 28 }: { height?: number }) {
  return (
    <div
      className="flex justify-center"
      style={{ height: `${height}px` }}
      aria-hidden="true"
    >
      <div className="relative w-px h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-beige-200/15 via-red-500/40 to-beige-200/15" />
      </div>
    </div>
  );
}

/* ============ Branch Connector (1 → 3) ============ */
export function BranchConnector() {
  return (
    <div className="relative w-full h-10" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full text-beige-200/20"
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
    </div>
  );
}

/* ============ Merge Connector (3 → 1) ============ */
export function MergeConnector() {
  return (
    <div className="relative w-full h-10" aria-hidden="true">
      <svg
        className="absolute inset-0 w-full h-full text-beige-200/20"
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
    </div>
  );
}

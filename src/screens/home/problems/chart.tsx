"use client";

import { useMemo, useState } from "react";

/* ============ Types ============ */
type Priority = "critical" | "high" | "medium";

type ChartItem = {
  label: string;
  count: number;
  priority?: Priority;
};

type SortMode = "count" | "priority";

type ProblemsChartProps = {
  data?: ChartItem[];
  totalLabel?: string;
  title?: string;

  showSortToggle?: boolean;
};

/* ============ Data ============ */
const DEFAULT_DATA: ChartItem[] = [
  { label: "عملیات", count: 3, priority: "high" },
  { label: "داده و گزارش", count: 3, priority: "critical" },
  { label: "ارتباطات", count: 2, priority: "high" },
  { label: "اهداکننده", count: 2, priority: "critical" },
  { label: "دیجیتال و UX", count: 2, priority: "critical" },
  { label: "نوبت‌دهی", count: 1, priority: "high" },
  { label: "بحران", count: 1, priority: "critical" },
  { label: "کیفیت", count: 1, priority: "medium" },
  { label: "سازمانی", count: 1, priority: "medium" },
];

/* ============ Priority Meta ============ */
const PRIORITY_ORDER: Record<Priority, number> = {
  critical: 0,
  high: 1,
  medium: 2,
};

const PRIORITY_DOT: Record<Priority, string> = {
  critical: "bg-red-500",
  high: "bg-amber-400",
  medium: "bg-emerald-400",
};

/* ============ Component ============ */
export const ProblemsChart = ({
  data = DEFAULT_DATA,
  title = "توزیع چالش‌ها بر اساس حوزه",
  totalLabel = "۱۶ چالش",
  showSortToggle = true,
}: ProblemsChartProps) => {
  const [sortBy, setSortBy] = useState<SortMode>("count");

  const sortedData = useMemo(() => {
    const copy = [...data];
    if (sortBy === "count") {
      return copy.sort((a, b) => b.count - a.count);
    }
    return copy.sort((a, b) => {
      const pa = a.priority ? PRIORITY_ORDER[a.priority] : 99;
      const pb = b.priority ? PRIORITY_ORDER[b.priority] : 99;
      if (pa !== pb) return pa - pb;
      return b.count - a.count;
    });
  }, [data, sortBy]);

  const maxCount = Math.max(...data.map((d) => d.count));

  return (
    <div
      role="figure"
      aria-label={`${title} — مجموع ${totalLabel}`}
      className="bg-primary-800/30 backdrop-blur-sm border border-beige-200/10 rounded-2xl p-5"
    >
      {/* ==== Header ==== */}
      <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
        <div className="flex items-center gap-3">
          <h3 className="text-sm font-morabba font-bold text-beige-200">
            {title}
          </h3>
          <span className="text-[10px] text-beige-500 bg-primary-900/60 border border-primary-700/50 rounded-full px-2 py-0.5">
            {totalLabel}
          </span>
        </div>

        {showSortToggle && (
          <div
            role="tablist"
            aria-label="مرتب‌سازی نمودار"
            className="inline-flex items-center bg-primary-900/60 border border-primary-700/50 rounded-full p-0.5 text-[10px]"
          >
            <button
              type="button"
              role="tab"
              aria-selected={sortBy === "count"}
              onClick={() => setSortBy("count")}
              className={[
                "px-2.5 py-1 rounded-full",
                sortBy === "count"
                  ? "bg-primary-700/70 text-beige-100"
                  : "text-beige-400 hover:text-beige-200",
              ].join(" ")}
            >
              تعداد
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={sortBy === "priority"}
              onClick={() => setSortBy("priority")}
              className={[
                "px-2.5 py-1 rounded-full",
                sortBy === "priority"
                  ? "bg-primary-700/70 text-beige-100"
                  : "text-beige-400 hover:text-beige-200",
              ].join(" ")}
            >
              اولویت
            </button>
          </div>
        )}
      </div>

      {/* ==== Bars ==== */}
      <ul className="space-y-2.5">
        {sortedData.map((item) => {
          const percent = (item.count / maxCount) * 100;
          const dotClass = item.priority
            ? PRIORITY_DOT[item.priority]
            : "bg-beige-500/40";

          return (
            <li
              key={item.label}
              className="flex items-center gap-3 group"
              aria-label={`${item.label}: ${item.count} چالش`}
            >
              <span className="text-xs text-beige-300 w-24 shrink-0 text-right font-medium truncate">
                {item.label}
              </span>

              <div
                className="relative flex-1 h-1 rounded-full overflow-hidden bg-primary-900/40"
                aria-hidden="true"
              >
                <div
                  style={{ width: `${percent}%` }}
                  className="absolute top-0 right-0 h-full rounded-full bg-gradient-to-l from-primary-500 to-primary-200"
                />
              </div>

              <span
                className="w-3 flex justify-center shrink-0"
                aria-hidden="true"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${dotClass}`}
                  title={
                    item.priority
                      ? {
                          critical: "بحرانی",
                          high: "بالا",
                          medium: "متوسط",
                        }[item.priority]
                      : undefined
                  }
                />
              </span>

              <span className="text-sm font-morabba font-bold text-beige-200 w-6 text-center shrink-0">
                {item.count}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

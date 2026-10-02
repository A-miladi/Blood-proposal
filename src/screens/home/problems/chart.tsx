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
  critical: "bg-red-600 dark:bg-red-500",
  high: "bg-amber-500 dark:bg-amber-400",
  medium: "bg-emerald-600 dark:bg-emerald-400",
};

const PRIORITY_LABEL: Record<Priority, string> = {
  critical: "بحرانی",
  high: "بالا",
  medium: "متوسط",
};

/* ============ Component ============ */
export const ProblemsChart = ({
  data = DEFAULT_DATA,
  title = "توزیع چالش‌ها بر اساس حوزه",
  totalLabel = "۱۶ چالش",
  showSortToggle = true,
}: ProblemsChartProps) => {
  const [sortBy, setSortBy] = useState<SortMode>("priority");

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
    <div className="rounded-2xl border border-primary-900/10 bg-white-50/60 p-5 backdrop-blur-sm dark:border-beige-200/10 dark:bg-primary-800/30">
      {/* ==== Header ==== */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <h3 className="font-morabba text-sm font-bold text-primary-800 dark:text-beige-200">
            {title}
          </h3>
          <span className="rounded-full border border-primary-900/15 bg-beige-100/60 px-2 py-0.5 text-[10px] text-primary-600 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-500">
            {totalLabel}
          </span>
        </div>

        {showSortToggle && (
          <div
            role="tablist"
            aria-label="مرتب‌سازی نمودار"
            className="inline-flex items-center rounded-full border border-primary-900/15 bg-beige-100/60 p-0.5 text-[10px] dark:border-primary-700/50 dark:bg-primary-900/60"
          >
            <button
              type="button"
              role="tab"
              aria-selected={sortBy === "count"}
              onClick={() => setSortBy("count")}
              className={[
                "rounded-full px-2.5 py-1 transition-colors",
                sortBy === "count"
                  ? "bg-primary-200 text-primary-900 dark:bg-primary-700/70 dark:text-beige-100"
                  : "text-primary-600 hover:text-primary-900 dark:text-beige-400 dark:hover:text-beige-200",
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
                "rounded-full px-2.5 py-1 transition-colors",
                sortBy === "priority"
                  ? "bg-primary-200 text-primary-900 dark:bg-primary-700/70 dark:text-beige-100"
                  : "text-primary-600 hover:text-primary-900 dark:text-beige-400 dark:hover:text-beige-200",
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
            : "bg-primary-500/40 dark:bg-beige-500/40";

          return (
            <li
              key={item.label}
              className="group flex items-center gap-3"
              aria-label={`${item.label}: ${item.count} چالش`}
            >
              <span className="w-24 shrink-0 truncate text-right text-xs font-medium text-primary-700 dark:text-beige-300">
                {item.label}
              </span>

              <div
                className="relative h-[3px] flex-1 overflow-hidden rounded-full bg-beige-300/60 dark:bg-primary-900/40"
                aria-hidden="true"
              >
                <div
                  style={{ width: `${percent}%` }}
                  className="absolute right-0 top-0 h-full rounded-full bg-gradient-to-l from-primary-50 to-primary-400 dark:from-primary-700 dark:to-primary-200"
                />
              </div>

              <span
                className="flex w-3 shrink-0 justify-center"
                aria-hidden="true"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${dotClass}`}
                  title={
                    item.priority ? PRIORITY_LABEL[item.priority] : undefined
                  }
                />
              </span>

              <span className="w-6 shrink-0 text-center font-morabba text-sm font-bold text-primary-800 dark:text-beige-200">
                {item.count}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

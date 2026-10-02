"use client";

import { useColorScheme } from "@/hooks/useColorScheme";
import { MoonIcon } from "./icons/MoonIcon";
import { SunIcon } from "./icons/SunIcon";

interface ThemeToggleProps {
  size?: number;
  className?: string;
}

export default function ThemeToggle({
  size = 40,
  className = "",
}: ThemeToggleProps) {
  const { isDark, toggleColorScheme } = useColorScheme();

  const trackWidth = size * 1.7;
  const trackHeight = size;
  const thumbSize = size * 0.8;
  const padding = (trackHeight - thumbSize) / 2;

  return (
    <button
      type="button"
      onClick={toggleColorScheme}
      aria-label={isDark ? "فعال‌سازی حالت روشن" : "فعال‌سازی حالت تاریک"}
      aria-pressed={isDark}
      style={{ width: trackWidth, height: trackHeight, padding }}
      className={`
        relative inline-flex shrink-0 cursor-pointer
        rounded-full border transition-colors duration-300 ease-out
        ${
          isDark
            ? "bg-primary-700 border-primary-600 shadow-inner shadow-black/40"
            : "bg-beige-200 border-beige-400 shadow-inner shadow-black/5"
        }
        ${className}
      `}
    >
      <span
        style={{
          width: thumbSize,
          height: thumbSize,
          transform: `translateX(${
            isDark ? trackWidth - thumbSize - padding * 2 : 0
          }px)`,
        }}
        className={`
          absolute top-1/2 left-[2px] -translate-y-1/2
          flex items-center justify-center rounded-full
          transition-transform duration-300 ease-out
          ${
            isDark
              ? "bg-primary-800 shadow-lg"
              : "bg-white shadow-sm border-t-2 border-l-2 border-white bg-gradient-to-br from-neutral-100 to-neutral-200"
          }
        `}
      >
        {isDark ? (
          <SunIcon
            size={Math.round(thumbSize * 0.55)}
            color="currentColor"
            className="text-beige-500"
          />
        ) : (
          <MoonIcon
            size={Math.round(thumbSize * 0.55)}
            color="currentColor"
            className="text-primary-800"
          />
        )}
      </span>
    </button>
  );
}

"use client";

import { useEffect, useSyncExternalStore } from "react";
import { useThemeStore, type ColorScheme } from "@/store/theme-store";

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;

export function useColorScheme() {
  const colorScheme = useThemeStore((s) => s.colorScheme);
  const setColorScheme = useThemeStore((s) => s.setColorScheme);
  const toggleColorScheme = useThemeStore((s) => s.toggleColorScheme);
  const syncFromSystem = useThemeStore((s) => s.syncFromSystem);

  const mounted = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // همگام‌سازی store با DOM بعد از mount (بار اول)
  useEffect(() => {
    const domIsDark = document.documentElement.classList.contains("dark");
    const storeIsDark = useThemeStore.getState().colorScheme === "dark";
    if (domIsDark !== storeIsDark) {
      useThemeStore.setState({ colorScheme: domIsDark ? "dark" : "light" });
    }
  }, []);

  // گوش دادن به تغییرات سیستم (فقط وقتی کاربر انتخاب دستی نکرده)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("color-scheme");
      if (stored) return;
      const next: ColorScheme = e.matches ? "dark" : "light";
      useThemeStore.setState({ colorScheme: next });
      document.documentElement.classList.toggle("dark", next === "dark");
      document.documentElement.style.colorScheme = next;
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // قبل از mount، از DOM بخون (اسکریپت head قبلاً اجرا شده)
  const initialDark =
    typeof document !== "undefined" &&
    document.documentElement.classList.contains("dark");

  const effectiveScheme: ColorScheme = mounted
    ? colorScheme
    : initialDark
      ? "dark"
      : "light";

  return {
    colorScheme: effectiveScheme,
    isDark: effectiveScheme === "dark",
    isLight: effectiveScheme === "light",
    mounted,
    setColorScheme,
    toggleColorScheme,
    syncFromSystem,
  };
}

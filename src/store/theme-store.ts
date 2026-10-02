import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ColorScheme = "light" | "dark";

interface ThemeState {
  colorScheme: ColorScheme;
  setColorScheme: (scheme: ColorScheme) => void;
  toggleColorScheme: () => void;
  syncFromSystem: () => void;
}

const getSystemScheme = (): ColorScheme => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applySchemeToDOM = (scheme: ColorScheme) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", scheme === "dark");
  root.style.colorScheme = scheme;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      // مقدار پیش‌فرض — اسکریپت head قبل از hydration این رو بازنویسی می‌کنه
      colorScheme: "light",

      setColorScheme: (scheme) => {
        applySchemeToDOM(scheme);
        set({ colorScheme: scheme });
      },

      toggleColorScheme: () => {
        const next = get().colorScheme === "dark" ? "light" : "dark";
        applySchemeToDOM(next);
        set({ colorScheme: next });
      },

      syncFromSystem: () => {
        const scheme = getSystemScheme();
        applySchemeToDOM(scheme);
        set({ colorScheme: scheme });
      },
    }),
    {
      name: "color-scheme",
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        const stored = localStorage.getItem("color-scheme");
        if (!stored) {
          state.syncFromSystem();
        } else {
          applySchemeToDOM(state.colorScheme);
        }
      },
    },
  ),
);

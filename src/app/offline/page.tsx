"use client";

import Link from "next/link";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";

/* ============ آیکون‌ها ============ */
const IconWifiOff = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <path d="M1 1l22 22" />
    <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55" />
    <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39" />
    <path d="M10.71 5.05A16 16 0 0 1 22.58 9" />
    <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88" />
    <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
    <line x1="12" y1="20" x2="12.01" y2="20" />
  </svg>
);

const IconRefresh = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M23 4v6h-6" />
    <path d="M1 20v-6h6" />
    <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10" />
    <path d="M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
  </svg>
);

const IconHome = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

/* ============ Online Status Hook (useSyncExternalStore) ============ */
function subscribeOnline(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

function getOnlineSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  // روی سرور، فرض می‌کنیم آنلاین (تا hydration mismatch نشه)
  return true;
}

function useOnlineStatus() {
  return useSyncExternalStore(
    subscribeOnline,
    getOnlineSnapshot,
    getServerSnapshot,
  );
}

/* ============ کامپوننت اصلی ============ */
export default function OfflinePage() {
  const isOnline = useOnlineStatus();
  const [isRetrying, setIsRetrying] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // برای جلوگیری از hydration mismatch در نمایش وضعیت
  useEffect(() => {
    const timer = setTimeout(() => setHasMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  // اگه آنلاین شد، خودکار برگرد به صفحه اصلی
  useEffect(() => {
    if (!isOnline || !hasMounted) return;

    const timer = setTimeout(() => {
      window.location.href = "/";
    }, 800);

    return () => clearTimeout(timer);
  }, [isOnline, hasMounted]);

  const handleRetry = useCallback(() => {
    setIsRetrying(true);

    // به سیستم اجازه بده UI رو آپدیت کنه
    setTimeout(() => {
      if (navigator.onLine) {
        window.location.href = "/";
      } else {
        setIsRetrying(false);
      }
    }, 600);
  }, []);

  // تا mount نشده، وضعیت رو "آفلاین" نشون بده (چون کاربر توی این صفحه‌ست)
  const displayOnline = hasMounted ? isOnline : false;

  return (
    <main
      aria-labelledby="offline-title"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-16 font-iransans bg-primary-900 overflow-hidden"
    >
      {/* ===== هاله‌های نورانی پس‌زمینه ===== */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(18,58,99,0.7), transparent 50%), radial-gradient(circle at 75% 75%, rgba(161,27,46,0.5), transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* ===== شبکه نقطه‌چین ===== */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(230,223,216,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      {/* ===== خطوط تزئینی ===== */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />

      {/* ===== محتوای اصلی ===== */}
      <div className="container mx-auto max-w-2xl relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/50 via-primary-900/40 to-primary-800/50 backdrop-blur-sm px-6 sm:px-12 py-14 text-center">
          {/* ===== برچسب بالا ===== */}
          <div className="inline-flex items-center gap-2 bg-red-900/30 backdrop-blur-xl border border-red-500/30 rounded-full px-5 py-2 mb-8">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-red-200 text-sm font-medium tracking-wide">
              اتصال قطع شد
            </span>
          </div>

          {/* ===== آیکون Wifi Off ===== */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              {/* هاله قرمز */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-32 h-32 rounded-full bg-red-600/20 blur-3xl" />
              </div>

              {/* دایره آیکون */}
              <div className="relative w-24 h-24 rounded-full border border-red-500/30 bg-red-600/[0.08] backdrop-blur-sm flex items-center justify-center text-red-400">
                <div className="w-12 h-12">
                  <IconWifiOff />
                </div>
              </div>

              {/* حلقه بیرونی */}
              <div
                className="absolute inset-0 rounded-full border border-red-500/20"
                style={{ transform: "scale(1.15)" }}
                aria-hidden="true"
              />
            </div>
          </div>

          {/* ===== تیتر اصلی ===== */}
          <h1
            id="offline-title"
            className="text-3xl sm:text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2] mb-5"
          >
            فعلاً آفلاین هستید،
            <br />
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              ولی نگران نباشید.
            </span>
          </h1>

          {/* ===== توضیح ===== */}
          <p className="text-base sm:text-lg text-beige-300 leading-relaxed max-w-xl mx-auto mb-8">
            اتصال اینترنت شما قطع شده است. لطفاً اتصال خود را بررسی کنید و
            دوباره تلاش کنید. به‌محض برقراری اتصال، به‌صورت خودکار به صفحه اصلی
            بازمی‌گردید.
          </p>

          {/* ===== وضعیت اتصال ===== */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-beige-200/10 bg-primary-900/60 backdrop-blur-sm px-4 py-2 mb-8">
            <span
              className={[
                "w-2 h-2 rounded-full",
                displayOnline
                  ? "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]"
                  : "bg-red-500 shadow-[0_0_10px_rgba(161,27,46,0.8)]",
              ].join(" ")}
              aria-hidden="true"
            />
            <span className="text-xs text-beige-400 font-medium">
              وضعیت:{" "}
              <span
                className={displayOnline ? "text-emerald-300" : "text-red-300"}
              >
                {displayOnline ? "آنلاین شدید" : "آفلاین"}
              </span>
            </span>
          </div>

          {/* ===== دکمه‌ها ===== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              type="button"
              onClick={handleRetry}
              disabled={isRetrying}
              className={[
                "group inline-flex items-center justify-center gap-2.5",
                "bg-red-600 hover:bg-red-500 text-white",
                "rounded-full px-7 py-3",
                "text-sm font-morabba font-bold",
                "border border-red-500/50",
                "shadow-[0_0_30px_rgba(161,27,46,0.3)]",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                "w-full sm:w-auto",
              ].join(" ")}
            >
              <span
                className={isRetrying ? "loader-spin-1 inline-flex" : ""}
                aria-hidden="true"
              >
                <IconRefresh />
              </span>
              <span>{isRetrying ? "در حال تلاش..." : "تلاش مجدد"}</span>
            </button>

            <Link
              href="/"
              className={[
                "inline-flex items-center justify-center gap-2.5",
                "bg-primary-800/40 hover:bg-primary-700/60 text-beige-200",
                "rounded-full px-7 py-3",
                "text-sm font-morabba font-bold",
                "border border-beige-200/15 hover:border-beige-200/30",
                "backdrop-blur-sm",
                "w-full sm:w-auto",
              ].join(" ")}
            >
              <IconHome />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
          </div>

          {/* ===== خط جداکننده ===== */}
          <div
            className="h-px max-w-md mx-auto my-10 bg-gradient-to-r from-transparent via-beige-200/20 to-transparent"
            aria-hidden="true"
          />

          {/* ===== نکات مفید ===== */}
          <div className="text-right max-w-md mx-auto">
            <p className="text-xs text-beige-400 font-morabba font-bold mb-3 text-center">
              چه کارهایی می‌توانید انجام دهید؟
            </p>
            <ul className="space-y-2">
              {[
                "اتصال Wi-Fi یا داده موبایل خود را بررسی کنید",
                "مودم یا روتر را یک بار خاموش و روشن کنید",
                "در صورت استفاده از VPN، آن را موقتاً غیرفعال کنید",
                "چند لحظه صبر کنید و دوباره تلاش کنید",
              ].map((tip, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-xs text-beige-300"
                >
                  <span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"
                    aria-hidden="true"
                  />
                  <span className="leading-relaxed">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* ===== امضا ===== */}
          <div className="mt-12 flex flex-col items-center gap-2">
            <div
              className="w-16 h-px bg-gradient-to-r from-transparent via-red-500/60 to-transparent"
              aria-hidden="true"
            />
            <p className="text-lg font-morabba font-bold text-red-500 mt-2">
              فدورا
            </p>
            <p className="text-[10px] text-beige-600">
              تیم محصول دیجیتال تمام‌کامل
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

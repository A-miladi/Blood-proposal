"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

/* ============ آیکون‌ها ============ */
const IconCompass = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-full h-full"
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
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

const IconArrowLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <path d="M19 12H5M12 19l-7-7 7-7" />
  </svg>
);

const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-4 h-4"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.35-4.35" />
  </svg>
);

const IconGrid = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
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

const IconUser = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconChart = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M3 3v18h18" />
    <path d="M7 14l4-4 4 4 5-5" />
  </svg>
);

const IconBook = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

/* ============ لینک‌های پیشنهادی ============ */
const QUICK_LINKS = [
  {
    href: "/",
    label: "صفحه اصلی",
    description: "شروع دوباره از ابتدا",
    icon: <IconHome />,
    accent: "blue" as const,
  },
  {
    href: "/solution",
    label: "راه‌حل",
    description: "پیشنهاد یکپارچه فدورا",
    icon: <IconGrid />,
    accent: "red" as const,
  },
  {
    href: "/problems",
    label: "چالش‌ها",
    description: "مسائل امروز سازمان",
    icon: <IconChart />,
    accent: "beige" as const,
  },
  {
    href: "/standards",
    label: "استانداردها",
    description: "پشتوانه فنی و بین‌المللی",
    icon: <IconBook />,
    accent: "blue" as const,
  },
];

const ACCENT = {
  blue: {
    text: "text-blue-300",
    border: "border-blue-500/30",
    bg: "bg-blue-600/[0.08]",
    dot: "bg-blue-400",
  },
  red: {
    text: "text-red-300",
    border: "border-red-500/30",
    bg: "bg-red-600/[0.08]",
    dot: "bg-red-400",
  },
  beige: {
    text: "text-beige-300",
    border: "border-beige-500/25",
    bg: "bg-beige-500/[0.05]",
    dot: "bg-beige-400",
  },
};

/* ============ کامپوننت اصلی ============ */
export default function NotFound() {
  const router = useRouter();
  const [isGoingBack, setIsGoingBack] = useState(false);

  const handleGoBack = useCallback(() => {
    setIsGoingBack(true);
    setTimeout(() => {
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    }, 200);
  }, [router]);

  return (
    <main
      aria-labelledby="notfound-title"
      className="relative min-h-screen w-full flex items-center justify-center px-4 py-16 font-iransans bg-primary-900 overflow-hidden"
    >
      {/* ===== هاله‌های نورانی پس‌زمینه ===== */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 25%, rgba(18,58,99,0.7), transparent 50%), radial-gradient(circle at 80% 75%, rgba(161,27,46,0.5), transparent 50%)",
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
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent"
        aria-hidden="true"
      />

      {/* ===== محتوای اصلی ===== */}
      <div className="container mx-auto max-w-3xl relative z-10">
        <div className="relative rounded-3xl overflow-hidden border border-beige-200/10 bg-gradient-to-br from-primary-800/50 via-primary-900/40 to-primary-800/50 backdrop-blur-sm px-6 sm:px-12 py-14 text-center">
          {/* ===== برچسب بالا ===== */}
          <div className="inline-flex items-center gap-2 bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-5 py-2 mb-8">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-blue-400" />
            </span>
            <span className="text-blue-200 text-sm font-medium tracking-wide">
              خطای ۴۰۴ — صفحه یافت نشد
            </span>
          </div>

          {/* ===== عدد ۴۰۴ + آیکون ===== */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
            <span className="text-6xl sm:text-8xl md:text-9xl font-morabba font-bold bg-gradient-to-b from-beige-100 to-beige-500 bg-clip-text text-transparent leading-none">
              ۴
            </span>

            <div className="relative shrink-0">
              {/* هاله آبی */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="w-28 h-28 rounded-full bg-blue-600/25 blur-3xl" />
              </div>

              {/* دایره آیکون */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-blue-500/30 bg-blue-600/[0.08] backdrop-blur-sm flex items-center justify-center text-blue-300">
                <div className="w-10 h-10 sm:w-12 sm:h-12">
                  <IconCompass />
                </div>
              </div>

              {/* حلقه بیرونی */}
              <div
                className="absolute inset-0 rounded-full border border-blue-500/20"
                style={{ transform: "scale(1.15)" }}
                aria-hidden="true"
              />
            </div>

            <span className="text-6xl sm:text-8xl md:text-9xl font-morabba font-bold bg-gradient-to-b from-beige-100 to-beige-500 bg-clip-text text-transparent leading-none">
              ۴
            </span>
          </div>

          {/* ===== تیتر اصلی ===== */}
          <h1
            id="notfound-title"
            className="text-3xl sm:text-4xl md:text-5xl font-morabba font-bold text-beige-50 leading-[1.2] mb-5"
          >
            این صفحه پیدا نشد،
            <br />
            <span className="bg-gradient-to-l from-blue-300 via-beige-100 to-red-400 bg-clip-text text-transparent">
              ولی راه برگشت هست.
            </span>
          </h1>

          {/* ===== توضیح ===== */}
          <p className="text-base sm:text-lg text-beige-300 leading-relaxed max-w-xl mx-auto mb-8">
            آدرسی که دنبالش بودید وجود ندارد، جابجا شده، یا حذف شده است. نگران
            نباشید — می‌توانید از لینک‌های زیر به مسیر درست برگردید.
          </p>

          {/* ===== دکمه‌ها ===== */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
            <button
              type="button"
              onClick={handleGoBack}
              disabled={isGoingBack}
              className={[
                "inline-flex items-center justify-center gap-2.5",
                "bg-blue-600 hover:bg-blue-500 text-white",
                "rounded-full px-7 py-3",
                "text-sm font-morabba font-bold",
                "border border-blue-500/50",
                "shadow-[0_0_30px_rgba(18,58,99,0.4)]",
                "disabled:opacity-60 disabled:cursor-not-allowed",
                "w-full sm:w-auto",
              ].join(" ")}
            >
              <IconArrowLeft />
              <span>{isGoingBack ? "در حال بازگشت..." : "بازگشت"}</span>
            </button>

            <Link
              href="/"
              className={[
                "inline-flex items-center justify-center gap-2.5",
                "bg-red-600 hover:bg-red-500 text-white",
                "rounded-full px-7 py-3",
                "text-sm font-morabba font-bold",
                "border border-red-500/50",
                "shadow-[0_0_30px_rgba(161,27,46,0.3)]",
                "w-full sm:w-auto",
              ].join(" ")}
            >
              <IconHome />
              <span>بازگشت به صفحه اصلی</span>
            </Link>
          </div>

          {/* ===== خط جداکننده ===== */}
          <div
            className="h-px max-w-md mx-auto mb-10 bg-gradient-to-r from-transparent via-beige-200/20 to-transparent"
            aria-hidden="true"
          />

          {/* ===== لینک‌های پیشنهادی ===== */}
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-5">
              <IconSearch />
              <p className="text-xs text-beige-400 font-morabba font-bold">
                شاید دنبال این‌ها بودید
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {QUICK_LINKS.map((link) => {
                const a = ACCENT[link.accent];
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={[
                        "group flex items-center gap-4 rounded-2xl border backdrop-blur-sm px-4 py-4",
                        "border-beige-200/10 hover:border-beige-200/25",
                        "bg-primary-800/30 hover:bg-primary-800/50",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "w-10 h-10 rounded-xl flex items-center justify-center border shrink-0",
                          a.border,
                          a.bg,
                          a.text,
                        ].join(" ")}
                      >
                        {link.icon}
                      </div>
                      <div className="text-right min-w-0 flex-1">
                        <p className="text-sm font-morabba font-bold text-beige-100 leading-tight">
                          {link.label}
                        </p>
                        <p className="text-[11px] text-beige-500 mt-0.5 truncate">
                          {link.description}
                        </p>
                      </div>
                      <span
                        className={`w-1.5 h-1.5 rounded-full shrink-0 ${a.dot}`}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                );
              })}
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

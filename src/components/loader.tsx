"use client";

export const Loader = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="در حال بارگذاری"
      className="fixed inset-0 z-[100] backdrop-blur-xl flex flex-col items-center justify-center gap-6 font-iransans"
    >
      {/* قطره */}
      <div className="loader-drop-wrap relative h-20 w-16">
        <svg
          viewBox="0 0 24 30"
          className="h-full w-full drop-shadow-[0_0_25px_rgba(161,27,46,0.55)]"
        >
          <defs>
            <linearGradient id="dropGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#e24d65" />
              <stop offset="100%" stopColor="#a11b2e" />
            </linearGradient>
          </defs>
          <path
            d="M12 0 C12 0, 2 14, 2 20 A 10 10 0 0 0 22 20 C22 14, 12 0, 12 0 Z"
            fill="url(#dropGrad)"
          />
          <ellipse cx="9" cy="20" rx="2" ry="3" fill="#ffffff" opacity="0.35" />
          <circle cx="9" cy="17" r="0.9" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      {/* متن */}
      <div className="flex flex-col items-center gap-1.5">
        <p className="font-morabba text-sm font-bold text-primary-900 dark:text-beige-100">
          در حال بارگذاری...
        </p>
        <p className="text-[10px] text-primary-500 dark:text-beige-500">
          لطفاً کمی صبر کنید
        </p>
      </div>
    </div>
  );
};

"use client";

import type { CSSProperties } from "react";
import { ProblemsChart } from "./chart";

/* ============ Types ============ */
type Priority = "critical" | "high" | "medium";

type Problem = {
  id: string;
  title: string;
  description: string;
  tag: string;
  priority: Priority;
  solution: string;
};

type StatCard = {
  value: string;
  label: string;
  tone?: "default" | "critical";
};

/* ============ Data ============ */
const PROBLEMS: Problem[] = [
  {
    id: "01",
    title: "وابستگی به فراخوان تلفنی",
    description:
      "فعالیت‌های جذب و پیگیری اهداکننده به تماس تلفنی روزمره وابسته است؛ فرآیندی دستی که ظرفیت کارشناس را محدود می‌کند.",
    tag: "عملیات",
    priority: "high",
    solution: "Call Center Module",
  },
  {
    id: "02",
    title: "بازگشت اهداکننده بار اول",
    description:
      "تنها ۲۹٪ از اهداکنندگان بار اول طی شش ماه بازمی‌گردند. نگهداشت اهداکننده یک چالش واقعی است.",
    tag: "اهداکننده",
    priority: "critical",
    solution: "Donor Journey",
  },
  {
    id: "03",
    title: "خروج از چرخه پس از Deferral",
    description:
      "اهداکننده‌ای که موقتاً نمی‌تواند اهدا کند، ممکن است تاریخ بازگشت را فراموش کند و از چرخه خارج شود.",
    tag: "اهداکننده",
    priority: "high",
    solution: "Deferral Reminder",
  },
  {
    id: "04",
    title: "پیامک بدون هدف‌گذاری",
    description:
      "بدون بخش‌بندی مخاطبان، همه یک پیام یکسان دریافت می‌کنند در حالی که رفتار آن‌ها متفاوت است.",
    tag: "ارتباطات",
    priority: "high",
    solution: "Targeted Communication",
  },
  {
    id: "05",
    title: "کمپین بدون قیف قابل اندازه‌گیری",
    description:
      "سؤال «چند نفر در نهایت خون اهدا کردند؟» بدون قیف تبدیل (Targeted → Donated) قابل پاسخ نیست.",
    tag: "ارتباطات",
    priority: "high",
    solution: "Campaign Funnel",
  },
  {
    id: "06",
    title: "نوبت‌دهی جدای از Journey",
    description:
      "نوبت‌دهی اینترنتی وجود دارد، اما سامانه‌ای مستقل است و به Reminder و Campaign متصل نیست.",
    tag: "نوبت‌دهی",
    priority: "high",
    solution: "Appointment Integration",
  },
  {
    id: "07",
    title: "No-show و ظرفیت هدررفته",
    description:
      "هر نوبتی که به مراجعه منجر نمی‌شود، بخشی از ظرفیت عملیاتی مرکز را از بین می‌برد.",
    tag: "عملیات",
    priority: "high",
    solution: "Waitlist & Slot Release",
  },
  {
    id: "08",
    title: "پراکندگی اطلاعات اهداکننده",
    description:
      "اهداکننده سازمان را از چند تجربه جداگانه می‌شناسد. «One Donor — One Identity» محقق نشده است.",
    tag: "داده",
    priority: "critical",
    solution: "Unified Donor Profile",
  },
  {
    id: "09",
    title: "مدیریت تیم‌های سیار",
    description:
      "درخواست، هماهنگی، ظرفیت و گزارش تیم‌های سیار در ابزارهای مختلف پراکنده است.",
    tag: "عملیات",
    priority: "medium",
    solution: "Mobile Team Module",
  },
  {
    id: "10",
    title: "افت مراجعه در شرایط خاص",
    description:
      "گرما، سرما، تعطیلات و بحران‌ها مراجعه را کاهش می‌دهند و سازمان باید سریع پاسخ دهد.",
    tag: "بحران",
    priority: "critical",
    solution: "Dynamic Campaign Engine",
  },
  {
    id: "11",
    title: "فاصله بین داده و تصمیم",
    description:
      "مدیر برای پاسخ به یک سؤال ساده، مجبور به دریافت گزارش استانی و تحلیل دستی Excel است.",
    tag: "داده",
    priority: "high",
    solution: "Director Dashboard",
  },
  {
    id: "12",
    title: "وابستگی به Excel",
    description:
      "Excel همچنان منبع اصلی گزارش است؛ در حالی که ظرفیت تحلیل کارشناسان محدود است.",
    tag: "داده",
    priority: "high",
    solution: "Operational Reporting",
  },
  {
    id: "13",
    title: "رضایت‌سنجی بدون اقدام",
    description:
      "نتیجه نظرسنجی در یک عدد خلاصه می‌شود و چرخه‌ی بازخورد → اقدام وجود ندارد.",
    tag: "کیفیت",
    priority: "medium",
    solution: "Feedback → Action Loop",
  },
  {
    id: "14",
    title: "همکاری پراکنده با سازمان‌ها",
    description:
      "ارتباط با شرکت‌ها و ادارات خارج از سامانه انجام می‌شود و سابقه و ROI هر همکاری مشخص نیست.",
    tag: "سازمانی",
    priority: "medium",
    solution: "Organization Portal",
  },
  {
    id: "15",
    title: "سایت عمومی صرفاً معرفی",
    description:
      "سایت فعلی نقش «Digital Front Door» را ایفا نمی‌کند؛ جستجو به محتوای ساختاریافته نمی‌رسد.",
    tag: "دیجیتال",
    priority: "medium",
    solution: "Digital Front Door",
  },
  {
    id: "16",
    title: "نادیده گرفتن تفاوت کاربران",
    description:
      "طراحی یکسان برای اهداکننده، کارشناس و مدیران، نیازهای متفاوت آن‌ها را نادیده می‌گیرد.",
    tag: "دیجیتال",
    priority: "critical",
    solution: "Three-Experience Design",
  },
];

const STAT_CARDS: StatCard[] = [
  { value: "۱۶", label: "چالش" },
  { value: "۴", label: "بحرانی", tone: "critical" },
  { value: "۲۹٪", label: "بازگشت" },
  { value: "۱۰۰٪", label: "دستی" },
];

/* ============ Priority Styles ============ */
const PRIORITY_META: Record<
  Priority,
  { label: string; dot: string; ring: string; text: string }
> = {
  critical: {
    label: "بحرانی",
    dot: "bg-red-600 dark:bg-red-500",
    ring: "ring-red-600/40 dark:ring-red-500/40",
    text: "text-red-700 dark:text-red-400",
  },
  high: {
    label: "بالا",
    dot: "bg-amber-500 dark:bg-amber-400",
    ring: "ring-amber-500/40 dark:ring-amber-400/30",
    text: "text-amber-700 dark:text-amber-300",
  },
  medium: {
    label: "متوسط",
    dot: "bg-emerald-600 dark:bg-emerald-400",
    ring: "ring-emerald-600/40 dark:ring-emerald-400/30",
    text: "text-emerald-700 dark:text-emerald-300",
  },
};

/* ============ Component ============ */
export const ProblemsSection = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 py-12 font-iransans lg:px-0">
      <div className="container relative z-10 mx-auto">
        {/* ==== هدر ==== */}
        <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-600/30 bg-red-100/70 px-4 py-1.5 backdrop-blur-xl dark:bg-red-900/30">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
              </span>
              <span className="text-xs font-medium tracking-wide text-red-700 dark:text-red-300">
                بخش اول — مسئله‌شناسی
              </span>
            </div>

            <h2
              id="problems-title"
              className="flex flex-wrap gap-x-2 font-morabba text-3xl font-bold text-primary-900 md:text-4xl dark:text-beige-50"
            >
              <span>امروز با چه چالش‌هایی</span>
              <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                روبرو هستیم؟
              </span>
            </h2>

            <p className="mt-3 text-base leading-relaxed text-primary-700 dark:text-beige-300">
              پیش از ارائه هر راه‌حلی، باید عمق مسئله را ببینیم.
            </p>
          </div>

          {/* Stat Cards */}
          <div className="grid grid-cols-4 gap-2">
            {STAT_CARDS.map((stat) => (
              <div
                key={stat.label}
                className={[
                  "min-w-[80px] rounded-xl border border-primary-900/10 bg-white-50/10 px-4 py-3 text-center backdrop-blur-sm dark:border-beige-200/10 dark:bg-primary-800/40",
                  stat.tone === "critical"
                    ? "ring-1 ring-red-600/30 dark:ring-red-500/30"
                    : "",
                ].join(" ")}
              >
                <p className="font-morabba text-xl font-bold text-red-600 dark:text-red-500">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[10px] text-primary-500 dark:text-beige-400">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==== نمودار توزیع ==== */}
        <div className="mb-2">
          <ProblemsChart
            title="توزیع چالش‌ها بر اساس حوزه"
            totalLabel="۱۶ چالش"
          />
        </div>

        {/* ==== راهنمای اولویت ==== */}
        <div className="mb-5 flex flex-wrap items-center gap-4 text-[11px] text-primary-500 dark:text-beige-400">
          <span className="font-medium text-primary-700 dark:text-beige-300">
            راهنمای اولویت:
          </span>
          {(Object.keys(PRIORITY_META) as Priority[]).map((key) => (
            <span key={key} className="inline-flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full ${PRIORITY_META[key].dot}`}
                aria-hidden="true"
              />
              <span className={PRIORITY_META[key].text}>
                {PRIORITY_META[key].label}
              </span>
            </span>
          ))}
        </div>

        {/* ==== گرید کارت‌ها ==== */}
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => {
            const meta = PRIORITY_META[problem.priority];
            return (
              <li
                key={problem.id}
                className={[
                  "group relative cursor-pointer rounded-xl border border-primary-900/10 bg-white-50/60 backdrop-blur-sm dark:border-beige-200/10 dark:bg-primary-800/40",
                  "p-4 hover:border-red-600/50 dark:hover:border-red-600/50",
                  problem.priority === "critical"
                    ? "ring-1 ring-red-600/20 dark:ring-red-500/20"
                    : "",
                ].join(" ")}
              >
                <div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-red-600/0 to-red-600/0 group-hover:from-red-600/[0.08] group-hover:to-transparent"
                  aria-hidden="true"
                />

                {/* Header: ID + Priority Dot + Tag */}
                <div className="relative mb-2.5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="font-morabba text-2xl font-bold text-primary-300 group-hover:text-red-600/50 dark:text-primary-600/70 dark:group-hover:text-red-600/50"
                      aria-hidden="true"
                    >
                      {problem.id}
                    </span>
                    <span
                      className={`h-1.5 w-1.5 rounded-full ${meta.dot} ${meta.ring} ring-2`}
                      title={`اولویت: ${meta.label}`}
                      aria-label={`اولویت: ${meta.label}`}
                    />
                  </div>
                  <span className="rounded-full border border-primary-900/15 bg-beige-100/60 px-2 py-0.5 text-[10px] text-primary-600 dark:border-primary-700/50 dark:bg-primary-900/60 dark:text-beige-400">
                    {problem.tag}
                  </span>
                </div>

                <h3 className="relative mb-1.5 font-morabba text-sm font-bold leading-snug text-primary-900 group-hover:text-red-700 dark:text-beige-50 dark:group-hover:text-red-400">
                  {problem.title}
                </h3>

                <p className="relative line-clamp-3 text-xs leading-relaxed text-primary-600 dark:text-beige-400">
                  {problem.description}
                </p>

                {/* Solution Link */}
                <div className="relative mt-3 flex items-center gap-1.5 border-t border-primary-900/[0.08] pt-2.5 dark:border-beige-200/[0.06]">
                  <svg
                    className="h-3 w-3 shrink-0 text-red-600/80 dark:text-red-500/70"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                  <span className="truncate text-[10px] text-primary-500 dark:text-beige-500">
                    راه‌حل:{" "}
                    <span className="font-medium text-primary-700 dark:text-beige-300">
                      {problem.solution}
                    </span>
                  </span>
                </div>

                <div
                  className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-red-500/0 to-transparent group-hover:via-red-500/50"
                  aria-hidden="true"
                />
              </li>
            );
          })}
        </ul>

        <div className="mt-10 text-center">
          <p className="inline-block rounded-full border border-primary-900/15 bg-white-50/60 px-5 py-2 text-xs text-primary-600 backdrop-blur-sm dark:border-primary-700/50 dark:bg-primary-800/40 dark:text-beige-400">
            این چالش‌ها نتیجه بررسی{" "}
            <span className="font-medium text-red-700 dark:text-red-400">
              گزارش‌های داخلی
            </span>
            ،{" "}
            <span className="font-medium text-red-700 dark:text-red-400">
              مطالعات علمی ایران
            </span>{" "}
            و{" "}
            <span className="font-medium text-red-700 dark:text-red-400">
              نمونه‌های بین‌المللی
            </span>{" "}
            است.
          </p>
        </div>
      </div>

      <div
        className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

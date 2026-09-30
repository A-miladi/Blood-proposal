"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  {
    href: "/",
    label: "معرفی",
    sublabel: "پروپوزال اصلی",
  },
  {
    href: "/roadmap",
    label: "نقشه راه",
    sublabel: "AI و اجرا",
  },
  {
    href: "/technical",
    label: "فنی",
    sublabel: "امنیت و معماری",
  },
  {
    href: "/showcase",
    label: "محصول",
    sublabel: "۴۰ ماژول",
  },
];

const IconLogo = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M12 21s-7-4.5-7-11a7 7 0 0 1 14 0c0 6.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const IconMenu = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

const IconClose = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 px-4 lg:px-0 right-0 z-50 font-iransans transition-all duration-300",
          scrolled
            ? "bg-primary-900/85 backdrop-blur-xl border-b border-beige-200/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-primary-900/40 backdrop-blur-md border-b border-transparent",
        ].join(" ")}
      >
        <nav
          aria-label="ناوبری اصلی"
          className="max-w-7xl mx-auto h-16 flex items-center justify-between gap-4"
        >
          <Link
            href="/"
            className="group flex items-center gap-3 shrink-0"
            aria-label="صفحه اصلی"
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-red-600/10 border border-red-500/30 text-red-400 group-hover:bg-red-600/20 group-hover:border-red-500/50 transition-colors duration-300">
              <Image src="/favicon.png" alt="اهدای من" width={80} height={80} />
            </div>
            <span className="flex flex-col leading-tight">
              <span className="text-base font-morabba font-bold text-beige-50">
                اهدای من
              </span>
              <span className="text-[10px] text-beige-500">
                سامانه یکپارچه انتقال خون
              </span>
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "relative flex gap-3 items-center px-4 py-3 rounded-xl transition-all duration-300",
                      active
                        ? "bg-blue-600/15 border border-blue-500/30"
                        : "border border-transparent hover:bg-beige-500/[0.05]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        " font-morabba font-bold leading-tight",
                        active
                          ? "text-beige-50"
                          : "text-beige-300 hover:text-beige-100",
                      ].join(" ")}
                    >
                      {item.label}
                    </span>
                    <span
                      className={[
                        "text-xs mt-0.5 leading-tight",
                        active ? "text-blue-300" : "text-beige-500",
                      ].join(" ")}
                    >
                      {`( ${item.sublabel} )`}
                    </span>

                    {active && (
                      <span
                        className="absolute -bottom-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center bg-primary-800/60 border border-beige-200/10 text-beige-200 hover:bg-primary-800 transition-colors duration-300"
          >
            {isOpen ? <IconClose /> : <IconMenu />}
          </button>
        </nav>
      </header>

      <div
        id="mobile-nav"
        aria-hidden={!isOpen}
        className={[
          "fixed inset-0 z-40 md:hidden font-iransans transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
      >
        <div
          className="absolute inset-0 bg-primary-950/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        <div
          className={[
            "absolute top-18 right-0 left-0 mx-4 rounded-2xl border border-beige-200/10 bg-primary-900/95 backdrop-blur-xl p-4",
            "transition-transform duration-300",
            isOpen ? "translate-y-0" : "-translate-y-4",
          ].join(" ")}
        >
          <ul className="space-y-1.5">
            {NAV_ITEMS.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "flex items-center justify-between px-4 py-3 rounded-xl transition-colors duration-200",
                      active
                        ? "bg-blue-600/15 border border-blue-500/30"
                        : "border border-transparent hover:bg-beige-500/[0.05]",
                    ].join(" ")}
                  >
                    <div className="flex flex-col text-right">
                      <span
                        className={[
                          "text-sm font-morabba font-bold",
                          active ? "text-beige-50" : "text-beige-200",
                        ].join(" ")}
                      >
                        {item.label}
                      </span>
                      <span
                        className={[
                          "text-[10px] mt-0.5",
                          active ? "text-blue-300" : "text-beige-500",
                        ].join(" ")}
                      >
                        {item.sublabel}
                      </span>
                    </div>
                    {active && (
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-red-500"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

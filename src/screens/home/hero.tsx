import Image from "next/image";

const HERO_CONTENT = {
  badge: "پروپوزال سامانه یکپارچه سازمان انتقال خون",
  titleLine1: "اهدای من،",
  titleLine2: "یک فرصت زندگی",
  description:
    "پلتفرم یکپارچه‌ی اهداکننده، عملیات و مدیریت سازمان انتقال خون. از کلیک اول تا قطره‌ی آخر، تجربه‌ای هوشمند، یکپارچه و مبتنی بر داده را برای نجات زندگی‌ها رقم می‌زنیم.",
  image: {
    src: "/v1.png",
    alt: "نمایی از پلتفرم یکپارچه اهدای خون",
  },
} as const;

export const HeroSection = () => {
  return (
    <section className="relative flex w-full items-center overflow-hidden rounded-3xl px-4 py-8 font-iransans lg:px-0 lg:py-12">
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-between gap-8 lg:flex-row lg:py-0">
        <div className="flex w-full max-w-2xl flex-col items-start space-y-5 sm:space-y-6 lg:w-1/2">
          {/* badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-500/30 bg-blue-00/20 px-4 py-2 backdrop-blur-xl transition-colors duration-500 hover:border-blue-400/60 sm:px-5 sm:py-2.5 dark:bg-blue-900/30 max-lg:mx-auto">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-500" />
            </span>
            <span className="text-xs font-medium tracking-wide text-primary-800 sm:text-sm dark:text-beige-200">
              {HERO_CONTENT.badge}
            </span>
          </div>

          {/* title */}
          <h1
            id="hero-title"
            className="font-morabba text-4xl font-bold leading-[1.15] sm:text-5xl lg:text-6xl"
          >
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
              {HERO_CONTENT.titleLine1}
            </span>
            <br />
            <span className="mt-2 inline-block font-medium text-primary-800 dark:text-beige-500">
              {HERO_CONTENT.titleLine2}
            </span>
          </h1>

          {/* divider */}
          <div className="relative h-1 w-32" aria-hidden="true">
            <div className="absolute inset-0 rounded-full bg-gradient-to-l from-red-500 to-transparent" />
          </div>

          {/* description */}
          <p className="max-w-xl text-sm font-light leading-relaxed text-primary-700 sm:text-base lg:text-lg dark:text-beige-300">
            {HERO_CONTENT.description}
          </p>
        </div>

        <div
          className="relative flex h-[240px] w-full items-center justify-center sm:h-[320px] lg:h-full lg:w-1/2"
          aria-hidden="true"
        >
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            <Image
              src={HERO_CONTENT.image.src}
              alt={HERO_CONTENT.image.alt}
              width={1200}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-contain drop-shadow-[0_20px_50px_rgba(161,27,46,0.3)]"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 z-10 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"
        aria-hidden="true"
      />
    </section>
  );
};

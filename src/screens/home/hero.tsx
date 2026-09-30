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
    <section
      aria-labelledby="hero-title"
      className="relative w-full rounded-3xl py-8 px-4 lg:px-0 lg:py-12 flex items-center overflow-hidden font-iransans"
    >
      <div className="relative z-10 w-full h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:py-0">
        <div className="w-full lg:w-1/2 max-w-2xl flex flex-col items-start space-y-5 sm:space-y-6">
          <div className="inline-flex items-center gap-3 max-lg:mx-auto bg-blue-900/30 backdrop-blur-xl border border-blue-500/30 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-[0_0_20px_rgba(18,58,99,0.4)] hover:border-blue-400/60 transition-colors duration-500">
            <span className="relative flex w-2.5 h-2.5" aria-hidden="true">
              <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-red-500" />
            </span>
            <span className="text-beige-200 text-xs sm:text-sm font-medium tracking-wide">
              {HERO_CONTENT.badge}
            </span>
          </div>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-morabba font-bold leading-[1.15]"
          >
            <span className="bg-gradient-to-l from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(161,27,46,0.5)]">
              {HERO_CONTENT.titleLine1}
            </span>
            <br />
            <span className="text-beige-500 font-medium mt-2 inline-block">
              {HERO_CONTENT.titleLine2}
            </span>
          </h1>

          <div className="relative w-32 h-1" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-l from-red-500 to-transparent rounded-full" />
            <div className="absolute inset-0 bg-red-500 blur-md opacity-60 rounded-full" />
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-beige-300 max-w-xl leading-relaxed font-light">
            {HERO_CONTENT.description}
          </p>
        </div>

        <div
          className="relative w-full lg:w-1/2 h-[240px] sm:h-[320px] lg:h-full flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] bg-red-600/20 rounded-full blur-[80px]" />
          </div>

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <Image
              src={HERO_CONTENT.image.src}
              alt={HERO_CONTENT.image.alt}
              width={1200}
              height={600}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(161,27,46,0.3)]"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent z-10"
        aria-hidden="true"
      />
    </section>
  );
};

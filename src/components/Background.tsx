export const Background = () => {
  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-full">
      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]">
        <div
          className="absolute inset-0 text-primary-900/80 dark:text-beige-500/80"
          style={{
            backgroundImage: `
              linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-red-600/10 blur-[120px] dark:bg-red-600/30" />

      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[100px] dark:bg-blue-600/20" />

      <div className="absolute -bottom-32 -left-32 h-[300px] w-[300px] rounded-full bg-red-600/10 blur-[100px] dark:bg-red-600/20" />

      <div className="absolute inset-0 bg-gradient-to-l from-beige-100/80 via-transparent to-beige-100/60 dark:from-primary-900/80 dark:via-transparent dark:to-primary-900/60" />
    </div>
  );
};

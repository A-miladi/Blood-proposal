export const Background = () => {
  return (
    <div className="fixed w-full h-screen left-0 top-0 inset-0 z-0">
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(to right, #e6dfd8 1px, transparent 1px),
                              linear-gradient(to bottom, #e6dfd8 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-600/30 rounded-full blur-[120px]"></div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px]"></div>

      <div className="absolute -bottom-32 -left-32 w-[300px] h-[300px] bg-red-600/20 rounded-full blur-[100px]"></div>

      <div className="absolute inset-0 bg-gradient-to-l from-primary-900/80 via-transparent to-primary-900/60"></div>
    </div>
  );
};

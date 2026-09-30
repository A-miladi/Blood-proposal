import { AICapabilitiesSection } from "./ai-section";
import { PageHeader } from "./page-header";
import { PhasesSection } from "./phases-section";
import { BenchmarkSection } from "./benchmark-section";
import { ValueSection } from "./value-section";
import { ClosingSection } from "./closing-section";

export const RoadmapPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <PageHeader
        badge="پیوست — نقشه راه اجرا"
        title="از شناخت تا استقرار ملی،"
        titleAccent="در شش گام."
        description="این صفحه جزئیات فنی، هوشمندی، مسیر اجرا، تجربه جهانی و ارزش پروژه را در یک نگاه ارائه می‌دهد."
        flowchartCenter="نقشه راه"
        flowchart={[
          { id: "1", label: "کشف", sublabel: "۴–۶ هفته" },
          { id: "2", label: "طراحی", sublabel: "۶–۸ هفته" },
          { id: "3", label: "ساخت", short: "MVP", sublabel: "۱۲–۱۶ هفته" },
          { id: "4", label: "پایلوت", sublabel: "۸–۱۲ هفته" },
          { id: "5", label: "ارزیابی", sublabel: "۴ هفته" },
          {
            id: "6",
            label: "مقیاس",
            short: "مقیاس ملی",
            sublabel: "۱۶–۲۴ هفته",
            isResult: true,
          },
        ]}
        stats={[
          { value: "۶", label: "فاز اجرا" },
          { value: "۶", label: "قابلیت هوشمند" },
          { value: "۴", label: "تجربه جهانی" },
          { value: "۶", label: "ذی‌نفع" },
        ]}
      />
      <AICapabilitiesSection />
      <PhasesSection />
      <BenchmarkSection />
      <ValueSection />
      <ClosingSection />
    </main>
  );
};

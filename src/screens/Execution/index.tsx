import { ArchitectureSection } from "./architecture-section";
import { ChangeSection } from "./change-section";
import { KpiSection } from "./kpi-section";
import { PageHeader } from "./page-header";
import { SecuritySection } from "./security-section";

export const ExecutionPage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <PageHeader />
      <KpiSection />
      <SecuritySection />
      <ArchitectureSection />
      <ChangeSection />
    </main>
  );
};

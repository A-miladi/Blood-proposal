import { HeroSection } from "./hero";
import { ProblemsSection } from "./problems/problems";
import { SolutionSection } from "./solution/section";
import { StandardsSection } from "./standards/section";

export const HomeScreen = () => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <StandardsSection />
    </main>
  );
};

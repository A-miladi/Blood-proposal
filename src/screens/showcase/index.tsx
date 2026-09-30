import { ClosingShowcase } from "./closing-showcase";
import { PageHeader } from "./page-header";
import { ProductsShowcase } from "./products-showcase";

export const ShowcasePage = () => {
  return (
    <main className="w-full max-w-7xl mx-auto">
      <PageHeader />
      <ProductsShowcase />
      <ClosingShowcase />
    </main>
  );
};

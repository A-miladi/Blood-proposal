import { Loader } from "@/components/loader";
import { ExecutionPage } from "@/screens/Execution";
import { Suspense } from "react";

export default function Execution() {
  return (
    <Suspense fallback={<Loader />}>
      <ExecutionPage />
    </Suspense>
  );
}

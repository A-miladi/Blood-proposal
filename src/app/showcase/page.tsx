import { Loader } from "@/components/loader";
import { ShowcasePage } from "@/screens/showcase";
import { Suspense } from "react";

export default function Showcase() {
  return (
    <Suspense fallback={<Loader />}>
      <ShowcasePage />
    </Suspense>
  );
}

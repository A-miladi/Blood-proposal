import { Loader } from "@/components/loader";
import { RoadmapPage } from "@/screens/Roadmap";
import { Suspense } from "react";

export default function Roadmap() {
  return (
    <Suspense fallback={<Loader />}>
      <RoadmapPage />
    </Suspense>
  );
}

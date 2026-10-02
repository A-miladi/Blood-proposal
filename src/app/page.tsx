import { Loader } from "@/components/loader";
import { HomeScreen } from "@/screens/home";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <HomeScreen />
    </Suspense>
  );
}

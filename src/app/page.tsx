import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { PainPointsSection } from "@/components/sections/pain-points";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
    </main>
  );
}
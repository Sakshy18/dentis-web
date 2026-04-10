import { SiteFooter } from "@/components/layout/SiteFooter";

import { HomeHeroSection } from "./sections/HomeHeroSection";

export function HomePage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <HomeHeroSection />
      <SiteFooter />
    </div>
  );
}

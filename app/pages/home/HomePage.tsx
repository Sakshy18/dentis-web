import { SiteFooter } from "@/components/layout/SiteFooter";

import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeAboutStatsSection } from "./sections/HomeAboutStatsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";

export function HomePage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <HomeHeroSection />
      <HomeAboutStatsSection />
      <HomeAboutSection />
      <SiteFooter />
    </div>
  );
}

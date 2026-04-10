import { SiteFooter } from "@/components/layout/SiteFooter";

import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeAboutStatsSection } from "./sections/HomeAboutStatsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeServiceSection } from "./sections/HomeServiceSection";

export function HomePage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <HomeHeroSection />
      <HomeAboutStatsSection />
      <HomeAboutSection />
      <HomeServiceSection />
      <SiteFooter />
    </div>
  );
}

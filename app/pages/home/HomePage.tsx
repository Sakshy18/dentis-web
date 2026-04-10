import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeAboutStatsSection } from "./sections/HomeAboutStatsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeServiceSection } from "./sections/HomeServiceSection";

export function HomePage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <div className="pointer-events-none fixed left-1/2 top-[20px] z-50 w-[calc(100%-40px)] max-w-[1400px] -translate-x-1/2">
        <div className="pointer-events-auto">
          <SiteHeader />
        </div>
      </div>
      <HomeHeroSection />
      <HomeAboutStatsSection />
      <HomeAboutSection />
      <HomeServiceSection />
      <SiteFooter />
    </div>
  );
}

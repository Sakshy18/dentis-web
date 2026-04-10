import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FAQSection } from "@/components/ui/FAQSection";
import { HowItWorksSection } from "@/components/ui/HowItWorksSection";
import { ScheduleSection } from "@/components/ui/ScheduleSection";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";

import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeAboutStatsSection } from "./sections/HomeAboutStatsSection";
import { HomeDoctorsSection } from "./sections/HomeDoctorsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeServiceSection } from "./sections/HomeServiceSection";
import { HomeTestimonialsSection } from "./sections/HomeTestimonialsSection";

export function HomePage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <div className="pointer-events-none fixed left-1/2 top-[20px] z-50 w-[calc(100%-20px)] max-w-[1400px] -translate-x-1/2 sm:w-[calc(100%-40px)]">
        <div className="pointer-events-auto">
          <SiteHeader mobileOverlay mobilePanel />
        </div>
      </div>
      <HomeHeroSection />
      <HomeAboutStatsSection />
      <HomeAboutSection />
      <HomeServiceSection />
      <HomeDoctorsSection />
      <WhyChooseUs />
      <HowItWorksSection />
      <HomeTestimonialsSection />
      <FAQSection />
      <ScheduleSection />
      <SiteFooter />
    </div>
  );
}

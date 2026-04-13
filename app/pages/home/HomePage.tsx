import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { FAQSection } from "@/components/ui/FAQSection";
import { HowItWorksSection } from "@/components/ui/HowItWorksSection";
import { ScheduleSection } from "@/components/ui/ScheduleSection";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";

import { HomeAboutSection } from "./sections/HomeAboutSection";
import { HomeAboutStatsSection } from "./sections/HomeAboutStatsSection";
import { HomeDoctorsSection } from "./sections/HomeDoctorsSection";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeServiceSection } from "./sections/HomeServiceSection";
import { HomeTestimonialsSection } from "./sections/HomeTestimonialsSection";

export function HomePage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <MotionFadeIn>
        <HomeHeroSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.03}>
        <HomeAboutStatsSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.06}>
        <HomeAboutSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.09}>
        <HomeServiceSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.12}>
        <HomeDoctorsSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.15}>
        <WhyChooseUs />
      </MotionFadeIn>
      <MotionFadeIn delay={0.18}>
        <HowItWorksSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.21}>
        <HomeTestimonialsSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.24}>
        <FAQSection />
      </MotionFadeIn>
      <MotionFadeIn delay={0.27}>
        <ScheduleSection />
      </MotionFadeIn>
      <SiteFooter />
    </div>
  );
}

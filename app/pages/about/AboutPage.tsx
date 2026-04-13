import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { AboutDoctorsSection } from "./sections/AboutDoctorsSection";
import { AboutFounderSection } from "./sections/AboutFounderSection";
import { AboutGallerySection } from "./sections/AboutGallerySection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";
import { ScheduleSection } from "@/components/ui/ScheduleSection";

export function AboutPage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <main>
        <MotionFadeIn>
          <AboutHeroSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.04}>
          <AboutStorySection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.08}>
          <AboutDoctorsSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.12}>
          <AboutFounderSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.16}>
          <WhyChooseUs />
        </MotionFadeIn>
        <MotionFadeIn delay={0.2}>
          <AboutGallerySection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.24}>
          <ScheduleSection />
        </MotionFadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { ServicesHeroSection } from "./sections/ServicesHeroSection";
import { ServicesPricingSection } from "./sections/ServicesPricingSection";
import { HowItWorksSection } from "@/components/ui/HowItWorksSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ScheduleSection } from "@/components/ui/ScheduleSection";

export function ServicesPage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <main>
        <MotionFadeIn>
          <ServicesHeroSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.05}>
          <ServicesPricingSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.1}>
          <HowItWorksSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.15}>
          <FAQSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.2}>
          <ScheduleSection ctaHref="/pages/services/schedule-appointment" ctaLabel="Schedule Appointment" />
        </MotionFadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

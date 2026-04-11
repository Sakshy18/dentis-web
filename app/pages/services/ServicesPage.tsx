import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ServicesHeroSection } from "./sections/ServicesHeroSection";
import { ServicesPricingSection } from "./sections/ServicesPricingSection";
import { HowItWorksSection } from "@/components/ui/HowItWorksSection";
import { FAQSection } from "@/components/ui/FAQSection";
import { ScheduleSection } from "@/components/ui/ScheduleSection";

export function ServicesPage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px]">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <main>
        <ServicesHeroSection />
        <ServicesPricingSection />
        <HowItWorksSection/>
        <FAQSection/>
        <ScheduleSection/>
      </main>
      <SiteFooter />
    </div>
  );
}

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { CareersBenefitsSection } from "./sections/CareersBenefitsSection";
import { CareersCultureSection } from "./sections/CareersCultureSection";
import { CareersHeroSection } from "./sections/CareersHeroSection";
import { CareersJobsSection } from "./sections/CareersJobsSection";

export function CareersPage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px]">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <main>
        <CareersHeroSection />
        <CareersJobsSection />
        <CareersCultureSection />
        <CareersBenefitsSection />
      </main>
      <SiteFooter />
    </div>
  );
}

import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { AboutDoctorsSection } from "./sections/AboutDoctorsSection";
import { AboutFounderSection } from "./sections/AboutFounderSection";
import { AboutGallerySection } from "./sections/AboutGallerySection";
import { AboutHeroSection } from "./sections/AboutHeroSection";
import { AboutStorySection } from "./sections/AboutStorySection";

export function AboutPage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px]">
        <div className="pointer-events-auto">
          <SiteHeader mobileOverlay mobilePanel />
        </div>
      </div>
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutDoctorsSection />
        <AboutFounderSection />
        <WhyChooseUs />
        <AboutGallerySection />
      </main>
      <SiteFooter />
    </div>
  );
}

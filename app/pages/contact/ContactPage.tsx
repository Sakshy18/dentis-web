import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { ContactHeroSection } from "./sections/ContactHeroSection";
import { ContactMapSection } from "./sections/ContactMapSection";

export function ContactPage() {
  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>
      <main>
        <MotionFadeIn>
          <ContactHeroSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.07}>
          <ContactMapSection />
        </MotionFadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

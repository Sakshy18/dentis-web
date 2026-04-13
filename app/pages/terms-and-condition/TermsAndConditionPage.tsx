import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { LegalShortcutSection } from "@/components/ui/LegalShortcutSection";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { TermsAndConditionContentSection } from "./sections/TermsAndConditionContentSection";

export function TermsAndConditionPage() {
  return (
    <div className="bg-(--background-weak-50)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main>
        <MotionFadeIn>
          <TermsAndConditionContentSection />
        </MotionFadeIn>
        <MotionFadeIn delay={0.05}>
          <LegalShortcutSection />
        </MotionFadeIn>
      </main>

      <SiteFooter />
    </div>
  );
}

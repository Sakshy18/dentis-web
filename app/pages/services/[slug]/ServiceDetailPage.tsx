import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { serviceDetails } from "../data/serviceDetails";
import { ServiceDetailHeroSection } from "./sections/ServiceDetailHeroSection";
import { ServiceOverviewSection } from "./sections/ServiceOverviewSection";
import { ServiceRecommendationsSection } from "./sections/ServiceRecommendationsSection";
import { WhyChooseUs } from "@/components/ui/WhyChooseUs";
import { HowItWorksSection } from "@/components/ui/HowItWorksSection";

type ServiceDetailPageProps = {
  slug: string;
};

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = serviceDetails.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const showHero = Boolean(service.hero);

  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px]">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main className={`bg-(--background-weak-50) pb-[88px] sm:pb-[104px] ${showHero ? "" : "pt-[140px]"}`}>
        {showHero && service.hero ? <ServiceDetailHeroSection hero={service.hero} /> : null}

        {!showHero ? (
          <div className="mx-auto flex w-full max-w-[868px] flex-col gap-[32px] px-[20px] sm:px-[40px] lg:px-0">
            <div className="space-y-[12px]">
              <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                Service Details
              </p>
              <h1 className="text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-(--text-strong-950) sm:text-[56px] sm:tracking-[-1.12px]">
                {service.title}
              </h1>
              <p className="max-w-[760px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
                {service.description}
              </p>
            </div>
          </div>
        ) : null}

        <ServiceOverviewSection service={service} />

        <ServiceRecommendationsSection currentService={service} />
        <HowItWorksSection/>
      </main>

      <SiteFooter />
    </div>
  );
}

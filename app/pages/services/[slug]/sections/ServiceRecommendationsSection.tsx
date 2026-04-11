import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "../../data/serviceDetails";
import { serviceDetails } from "../../data/serviceDetails";

type ServiceRecommendationsSectionProps = {
  currentService: ServiceDetail;
};

export function ServiceRecommendationsSection({
  currentService,
}: ServiceRecommendationsSectionProps) {
  const recommendations = serviceDetails.filter(
    (service) => service.slug !== currentService.slug,
  );

  return (
    <section className="bg-(--background-weak-50)">
      <div className="mx-auto w-full max-w-[1312px] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-0 lg:py-[104px]">
        <div className="mx-auto flex w-full max-w-[620px] flex-col items-center gap-[24px]">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-(--primary-700) px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-(--primary-700)">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--primary-700)">
              Recommendation
            </span>
          </div>

          <h2 className="text-center text-[36px] font-medium leading-tight tracking-[-0.72px] text-(--text-strong-950) sm:text-[48px] sm:leading-[1.4] sm:tracking-[-0.96px]">
            Other Services You
            <br />
            May Need
          </h2>
        </div>

        <div className="mt-[40px] grid gap-[20px] sm:mt-[48px] lg:grid-cols-3 lg:gap-[24px]">
          {recommendations.map((service) => (
            <Link
              className="rounded-[16px] bg-(--background-white-0) p-[8px] transition-transform hover:translate-y-[-2px]"
              href={`/pages/services/${service.slug}`}
              key={service.slug}
            >
              <div className="relative h-[220px] overflow-hidden rounded-[16px] sm:h-[280px] lg:h-[312px]">
                <Image
                  alt={service.title}
                  className={`h-full w-full ${service.recommendationImageClass}`}
                  fill
                  sizes="(max-width: 1023px) 100vw, 420px"
                  src={service.recommendationImage}
                />
              </div>

              <p className="px-[8px] pb-[6px] pt-[16px] text-center text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
                {service.title}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

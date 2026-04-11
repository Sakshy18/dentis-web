import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "../data/serviceDetails";

type ServicePricingCardProps = {
  service: ServiceDetail;
  prioritizeImage?: boolean;
};

export function ServicePricingCard({ service, prioritizeImage = false }: ServicePricingCardProps) {
  return (
    <article
      id={service.slug}
      className="scroll-mt-[120px] grid gap-[8px] rounded-[16px] bg-(--background-white-0) p-[8px] md:grid-cols-[400px_minmax(0,1fr)]"
    >
      <div className="relative h-[300px] overflow-hidden rounded-[16px] bg-(--background-primary-700) sm:h-[420px] md:h-[586px]">
        <Image
          alt={service.title}
          className={`h-full w-full ${service.imageClass}`}
          fill
          loading={prioritizeImage ? "eager" : "lazy"}
          priority={prioritizeImage}
          sizes="(max-width: 767px) 100vw, 400px"
          src={service.image}
        />
      </div>

      <div className="flex min-w-0 flex-col justify-between gap-[24px] p-[16px] sm:p-[24px]">
        <div>
          <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
            {service.title}
          </h2>
          <p className="mt-[8px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
            {service.description}
          </p>
        </div>

        <div className="flex flex-col gap-[12px]">
          {service.treatments.map((treatment, index) => {
            const isLast = index === service.treatments.length - 1;
            return (
              <div
                key={treatment.name}
                className={`flex items-start gap-[20px] ${
                  isLast ? "" : "border-b border-(--text-disable-300) pb-[12px]"
                }`}
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                    {treatment.name}
                  </p>
                  <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                    {treatment.description}
                  </p>
                </div>
                <p className="whitespace-nowrap text-[16px] font-semibold leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                  {treatment.price}
                </p>
              </div>
            );
          })}
        </div>

        <Link
          className="flex h-[40px] w-full items-center justify-center rounded-[99999px] bg-(--button-primary-base) px-[18px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-white-0)"
          href={`/pages/services/${service.slug}`}
        >
          Learn More
        </Link>
      </div>
    </article>
  );
}

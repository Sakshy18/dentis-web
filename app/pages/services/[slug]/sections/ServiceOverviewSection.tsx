import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "../../data/serviceDetails";

const serviceCheckIcon = "/images/svg/service-check.svg";

type ServiceOverviewSectionProps = {
  service: ServiceDetail;
};

export function ServiceOverviewSection({ service }: ServiceOverviewSectionProps) {
  return (
    <section className="bg-(--background-weak-50)">
      <div className="mx-auto grid w-full max-w-[1312px] gap-[24px] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] xl:grid-cols-[535px_737px] xl:items-start xl:gap-[40px] xl:px-0 xl:py-[104px]">
        <div className="relative h-[320px] overflow-hidden rounded-[16px] sm:h-[460px] xl:h-[732px]">
          <Image
            alt={service.title}
            className={`h-full w-full ${service.overview.imageClass}`}
            fill
            loading="eager"
            priority
            sizes="(max-width: 1279px) 100vw, 535px"
            src={service.overview.image}
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="space-y-[16px]">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--primary-700)">
              {service.overview.heading}
            </h2>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
              {service.overview.description}
            </p>
          </div>

          <div className="space-y-[12px]">
            {service.overview.items.map((item) => (
              <div className="flex items-start gap-[12px]" key={item.name}>
                <div className="flex shrink-0 items-start justify-center rounded-[999px] bg-(--primary-50) p-[6px]">
                  <Image alt="" aria-hidden className="h-[12px] w-[12px]" height={12} src={serviceCheckIcon} width={12} />
                </div>
                <div className="flex min-w-0 flex-1 items-start gap-[20px] sm:gap-[56px]">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                      {item.name}
                    </h3>
                    <p className="mt-[4px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
                      {item.description}
                    </p>
                  </div>
                  <p className="whitespace-nowrap text-[16px] font-semibold leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-[16px] rounded-[16px] bg-(--background-white-0) p-[20px] sm:flex-row sm:items-center sm:justify-between sm:gap-[24px] sm:p-[24px]">
            <div className="min-w-0 flex-1">
              <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
                Ready for a healthier smile?
              </p>
              <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
                Book your visit today!
              </p>
            </div>
            <Link
              className="flex h-[48px] items-center justify-center rounded-[99999px] bg-(--button-primary-base) px-[22px] py-[11px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) sm:min-w-[220px] sm:flex-1"
              href="/pages/services/schedule-appointment"
            >
              Schedule Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

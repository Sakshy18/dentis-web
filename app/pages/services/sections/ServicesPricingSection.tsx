import { ServicePricingCard } from "../components/ServicePricingCard";
import { serviceDetails } from "../data/serviceDetails";

export function ServicesPricingSection() {
  return (
    <section
      className="bg-(--background-weak-50) px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:py-[104px]"
      id="services-pricing"
    >
      <div className="mx-auto flex w-full max-w-[868px] flex-col gap-[24px] lg:gap-[36px]">
        {serviceDetails.map((service) => (
          <ServicePricingCard key={service.slug} service={service} />
        ))}
      </div>
    </section>
  );
}

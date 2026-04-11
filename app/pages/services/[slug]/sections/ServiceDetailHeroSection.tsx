import Image from "next/image";
import type { ServiceHero } from "../../data/serviceDetails";

type ServiceDetailHeroSectionProps = {
  hero: ServiceHero;
};

export function ServiceDetailHeroSection({ hero }: ServiceDetailHeroSectionProps) {
  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-(--background-weak-50)">
      <div className="absolute inset-x-0 top-[392px] h-[408px] xl:top-[336px] xl:h-[464px] 2xl:top-[288px] 2xl:h-[512px]">
        <Image
          alt="Service treatment hero"
          className={`h-full w-full ${hero.imageClass}`}
          fill
          priority
          sizes="100vw"
          src={hero.image}
        />
      </div>

      <div className="absolute left-1/2 top-[150px] w-[361px] -translate-x-1/2 sm:hidden">
        <h1 className="text-[32px] font-medium leading-[1.4] tracking-[-0.64px] text-(--text-strong-950)">
          {hero.titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h1>

        <p className="mt-[16px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
          {hero.description}
        </p>
      </div>

      <div className="absolute left-1/2 top-[152px] hidden w-full max-w-[944px] -translate-x-1/2 px-[40px] sm:block xl:hidden">
        <h1 className="text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-(--text-strong-950)">
          {hero.titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="mt-[16px] w-full max-w-[880px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
          {hero.description}
        </p>
      </div>

      <div className="absolute left-1/2 top-[152px] hidden w-full max-w-[1312px] -translate-x-1/2 items-end gap-[60px] px-[40px] xl:flex xl:px-0">
        <h1 className="min-w-0 flex-1 text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-(--text-strong-950)">
          {hero.titleLines.map((line) => (
            <span className="block" key={line}>
              {line}
            </span>
          ))}
        </h1>
        <p className="w-[600px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
          {hero.description}
        </p>
      </div>
    </section>
  );
}

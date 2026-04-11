import Image from "next/image";

const servicesHeroBackground = "/images/png/services-hero-bg.jpg";

export function ServicesHeroSection() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-(--background-weak-50)">
      <div className="absolute inset-x-0 top-[376px] h-[424px] sm:top-[288px] sm:h-[512px]">
        <Image
          alt="Dentist standing in a treatment room"
          className="object-cover object-top -scale-x-100"
          fill
          priority
          sizes="100vw"
          src={servicesHeroBackground}
        />
        <div className="absolute inset-0 bg-black/5" />
      </div>

      <div className="absolute left-1/2 top-[192px] w-full max-w-[1312px] -translate-x-1/2 px-[16px] sm:top-[160px] sm:flex sm:items-end sm:gap-[64px] sm:px-[40px] lg:px-0">
        <h1 className="max-w-[361px] text-[48px] font-medium leading-none tracking-[-0.96px] text-(--text-strong-950) sm:min-w-0 sm:max-w-none sm:flex-1 sm:text-[64px] sm:tracking-[-1.28px] lg:text-[86px] lg:tracking-[-1.72px]">
          Our Service
        </h1>
        <p className="mt-[16px] max-w-[361px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:mt-0 sm:max-w-none sm:w-[520px] lg:w-[600px] lg:text-[18px] lg:tracking-[-0.36px]">
          At the heart of our clinic is a simple mission-to make high-quality dental care accessible, comfortable, and tailored to you.
        </p>
      </div>
    </section>
  );
}

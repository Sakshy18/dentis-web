import Image from "next/image";

const aboutHeroImage = "/images/png/about-hero-desktop.jpg";

export function AboutHeroSection() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-(--background-weak-50)">
      <div className="absolute inset-x-0 top-[376px] h-[424px] sm:top-[288px] sm:h-[512px]">
        <Image
          alt="Dental clinic treatment room"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={aboutHeroImage}
        />
      </div>

      <div className="absolute left-1/2 top-[192px] w-[361px] -translate-x-1/2 sm:top-[160px] sm:flex sm:w-full sm:max-w-[1312px] sm:items-end sm:gap-[64px] sm:px-[40px] lg:px-0">
        <h1 className="text-[48px] font-medium leading-none tracking-[-0.96px] text-(--text-strong-950) sm:min-w-0 sm:flex-1 sm:text-[64px] sm:tracking-[-1.28px] lg:text-[86px] lg:tracking-[-1.72px]">
          About Us
        </h1>
        <p className="mt-[16px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:mt-0 sm:w-[520px] lg:w-[600px] lg:text-[18px] lg:tracking-[-0.36px]">
          <span className="sm:hidden">
            Founded on trust, compassion, and clinical excellence, our clinic is dedicated to delivering reliable dental
            care for every stage of life.
          </span>
          <span className="hidden sm:inline">
            At the heart of our clinic is a simple mission-to make high-quality dental care accessible, comfortable, and
            tailored to you.
          </span>
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

const aboutHeroDesktop = "/images/png/about-hero-desktop.jpg";
const aboutHeroMobile = aboutHeroDesktop;

export function AboutHeroSection() {
  return (
    <section className="relative h-[800px] w-full overflow-hidden bg-[var(--background-weak-50)]">
      <div className="absolute inset-x-0 top-[376px] h-[424px] sm:hidden">
        <Image
          alt="Dental clinic treatment room"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={aboutHeroMobile}
        />
      </div>

      <div className="absolute inset-x-0 top-[288px] hidden h-[512px] sm:block">
        <Image
          alt="Dental clinic treatment room"
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={aboutHeroDesktop}
        />
      </div>

      <div className="absolute left-1/2 top-[192px] w-[361px] -translate-x-1/2 sm:hidden">
        <h1 className="text-[48px] font-medium leading-[1] tracking-[-0.96px] text-[var(--text-strong-950)]">
          About Us
        </h1>
        <p className="mt-[16px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
          Founded on trust, compassion, and clinical excellence, our clinic is dedicated to delivering reliable dental care for every stage of life.
        </p>
      </div>

      <div className="absolute left-1/2 top-[160px] hidden w-full max-w-[1312px] -translate-x-1/2 items-end gap-[64px] px-[40px] sm:flex lg:px-0">
        <h1 className="min-w-0 flex-1 text-[64px] font-medium leading-[1] tracking-[-1.28px] text-[var(--text-strong-950)] lg:text-[86px] lg:tracking-[-1.72px]">
          About Us
        </h1>
        <p className="w-[520px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)] lg:w-[600px] lg:text-[18px] lg:tracking-[-0.36px]">
          At the heart of our clinic is a simple mission-to make high-quality dental care accessible, comfortable, and tailored to you.
        </p>
      </div>
    </section>
  );
}

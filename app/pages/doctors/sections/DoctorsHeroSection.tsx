import Image from "next/image";

const doctorsHeroImage = "/images/png/doctors-hero.jpg";

export function DoctorsHeroSection() {
  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[24px] pt-[100px] sm:px-[40px] sm:pb-0 sm:pt-[160px]">
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-end lg:justify-between lg:gap-[60px]">
          <h1 className="text-[56px] font-medium leading-none tracking-[-1.12px] text-(--text-strong-950) lg:flex-1 lg:text-[86px] lg:tracking-[-1.72px]">
            Doctor List
          </h1>
          <p className="max-w-[600px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:text-[18px] sm:tracking-[-0.36px]">
            Our dentists are highly trained professionals dedicated to delivering gentle, thorough, and personalized
            care for every patient.
          </p>
        </div>
      </div>

      <div className="mt-[32px] sm:mt-[48px]">
        <div className="relative h-[364px] w-full overflow-hidden sm:h-[460px] lg:h-[512px]">
          <Image
            alt="Dentis doctors team standing together"
            className="object-cover object-[center_top]"
            fill
            priority
            sizes="100vw"
            src={doctorsHeroImage}
          />
        </div>
      </div>
    </section>
  );
}

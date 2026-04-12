import Image from "next/image";

const careersHeroImage = "/images/png/careers-hero-team.jpg";

export function CareersHeroSection() {
  return (
    <section className="relative h-[1176px] w-full overflow-hidden bg-(--background-weak-50) sm:h-[800px]">
      <div className="absolute inset-x-0 top-[704px] h-[472px] sm:top-[288px] sm:h-[512px]">
        <Image
          alt="Two dental professionals standing in a clinic"
          className="object-cover object-[center_50%] sm:object-[center_36%]"
          fill
          priority
          sizes="100vw"
          src={careersHeroImage}
        />
      </div>

      <div className="absolute left-1/2 top-[332px] w-[343px] -translate-x-1/2 sm:top-[160px] sm:flex sm:w-full sm:max-w-[1312px] sm:items-end sm:gap-[64px] sm:px-[40px] lg:px-0">
        <h1 className="text-[62px] font-medium leading-none tracking-[-1.24px] text-(--text-strong-950) sm:min-w-0 sm:flex-1 sm:text-[64px] sm:tracking-[-1.28px] lg:text-[86px] lg:tracking-[-1.72px]">
          Career
        </h1>
        <p className="mt-[16px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:mt-0 sm:w-[520px] lg:w-[600px] lg:text-[18px] lg:tracking-[-0.36px]">
          We foster an environment where professionals can grow their skills, feel valued, and make a real difference in
          patients&apos; lives.
        </p>
      </div>
    </section>
  );
}

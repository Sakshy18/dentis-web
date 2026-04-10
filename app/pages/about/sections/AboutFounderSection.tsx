import Image from "next/image";

const founderAvatar = "/images/png/about-founder-avatar.jpg";
const founderLogo = "/images/svg/about-founder-logo.svg";

export function AboutFounderSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary-700)] px-[16px] py-[56px] lg:h-[800px] lg:px-0 lg:py-0">
      <div
        className="pointer-events-none absolute -bottom-[86px] -left-[112px] h-[320px] w-[320px] opacity-70 lg:-bottom-[139px] lg:-left-[180px] lg:h-[480px] lg:w-[480px]"
        style={{ ["--fill-0" as string]: "#3131D8" }}
      >
        <Image alt="" aria-hidden className="h-full w-full" height={480} src={founderLogo} width={480} />
      </div>

      <div className="relative mx-auto flex w-full max-w-[712px] flex-col gap-[24px] lg:pt-[104px]">
        <div className="flex w-fit items-center gap-[4px] rounded-[50px] border border-[var(--text-white-0)] px-[12px] py-[4px] lg:gap-[8px] lg:px-[16px]">
          <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-white-0)] lg:text-[20px] lg:tracking-[-0.4px]">
            •
          </span>
          <span className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--text-white-0)] lg:text-[18px] lg:tracking-[-0.36px]">
            Founder Says
          </span>
        </div>

        <h2 className="text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-soft-400)] lg:text-[48px] lg:tracking-[-0.96px]">
          Our vision is create a place where patients{" "}
          <span className="text-[var(--text-white-0)]">feel genuinely cared for</span>,
          and leave with confidence in their smile.
        </h2>

        <div className="mt-[8px] flex items-center gap-[12px] lg:mt-[80px] lg:gap-[16px]">
          <div className="relative size-[56px] overflow-hidden rounded-[99999px] bg-[var(--background-white-0)] lg:size-[64px]">
            <div className="absolute left-1/2 top-0 h-[88px] w-[58.67px] -translate-x-1/2 lg:h-[100px] lg:w-[66.67px]">
              <Image
                alt="Dr. Mark Leverton"
                className="h-full w-full object-cover"
                height={100}
                src={founderAvatar}
                width={67}
              />
            </div>
          </div>

          <div className="flex flex-col gap-[2px] lg:gap-[4px]">
            <p className="text-[18px] font-medium leading-[1.4] tracking-[-0.36px] text-[var(--text-white-0)] lg:text-[20px] lg:tracking-[-0.4px]">
              Dr. Mark Leverton
            </p>
            <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-disable-300)] lg:text-[18px] lg:tracking-[-0.36px]">
              Founder and Lead Dentist
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

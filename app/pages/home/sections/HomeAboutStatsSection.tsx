import Image from "next/image";

const aboutStatsLogo = "/images/svg/about-stats-logo.svg";

export function HomeAboutStatsSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--background-primary-700)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-[64px] lg:py-[104px]">
      <div className="relative mx-auto flex w-full max-w-[1312px] flex-col items-start gap-[40px] sm:gap-[56px]">
        <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--text-white-0)] px-[16px] py-[4px]">
          <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--text-white-0)]">
            •
          </span>
          <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-white-0)]">
            About Us
          </span>
        </div>

        <p className="max-w-[712px] text-[30px] font-medium leading-[1.35] tracking-[-0.6px] text-[var(--neutral-400)] sm:text-[40px] sm:tracking-[-0.8px] lg:text-[48px] lg:leading-[1.4] lg:tracking-[-0.96px]">
          We believe dental care should be <span className="text-[var(--text-white-0)]">easy</span> and{" "}
          <span className="text-[var(--text-white-0)]">comfortable</span> to you,
          because <span className="text-[var(--text-white-0)]">your health and confidence matter.</span>
        </p>

        <div className="grid w-full gap-[24px] sm:grid-cols-3">
          <div className="flex min-w-0 flex-col gap-[4px]">
            <p className="text-[40px] font-medium leading-[1] tracking-[-0.8px] text-[var(--text-white-0)] sm:text-[48px] sm:tracking-[-0.96px]">
              1k+
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Patients Served
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-[4px]">
            <p className="text-[40px] font-medium leading-[1] tracking-[-0.8px] text-[var(--text-white-0)] sm:text-[48px] sm:tracking-[-0.96px]">
              15+
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Years of Experience
            </p>
          </div>
          <div className="flex min-w-0 flex-col gap-[4px]">
            <p className="text-[40px] font-medium leading-[1] tracking-[-0.8px] text-[var(--text-white-0)] sm:text-[48px] sm:tracking-[-0.96px]">
              95%
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-[-160px] left-[-140px] hidden size-[420px] opacity-80 lg:block">
        <Image alt="" aria-hidden className="h-full w-full" height={420} src={aboutStatsLogo} width={420} />
      </div>
    </section>
  );
}

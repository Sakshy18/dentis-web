import Image from "next/image";

const aboutStatsLogo = "/images/svg/about-stats-logo.svg";

export function HomeAboutStatsSection() {
  return (
    <section className="h-[800px] w-full bg-[var(--background-primary-700)]">
      <div className="relative mx-auto h-full w-full max-w-[1440px] overflow-hidden">
        <div className="absolute left-[355px] top-[104px] flex items-center gap-[8px] rounded-[50px] border border-[var(--text-white-0)] px-[16px] py-[4px]">
          <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--text-white-0)]">
            •
          </span>
          <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-white-0)]">
            About Us
          </span>
        </div>

        <p className="absolute left-[364px] top-[205px] w-[712px] text-[48px] font-medium leading-[1.4] tracking-[-0.96px] text-[var(--neutral-400)]">
          We believe dental care should be{" "}
          <span className="text-[var(--text-white-0)]">easy</span> and{" "}
          <span className="text-[var(--text-white-0)]">comfortable</span> to you,
          because <span className="text-[var(--text-white-0)]">your health and confidence matter.</span>
        </p>

        <div className="absolute bottom-[104px] left-[364px] flex w-[712px] items-start gap-[24px]">
          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <p className="text-[48px] font-medium leading-[1] tracking-[-0.96px] text-[var(--text-white-0)]">
              1k+
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Patients Served
            </p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <p className="text-[48px] font-medium leading-[1] tracking-[-0.96px] text-[var(--text-white-0)]">
              15+
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Years of Experience
            </p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[4px]">
            <p className="text-[48px] font-medium leading-[1] tracking-[-0.96px] text-[var(--text-white-0)]">
              95%
            </p>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-disable-300)]">
              Satisfaction Rate
            </p>
          </div>
        </div>

        <div className="absolute bottom-[-139px] left-[-180px] size-[480px]">
          <Image alt="" aria-hidden className="h-full w-full" height={480} src={aboutStatsLogo} width={480} />
        </div>
      </div>
    </section>
  );
}

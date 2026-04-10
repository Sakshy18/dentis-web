type HowItWorksStep = {
  title: string;
  description: string;
};

type HowItWorksSectionProps = {
  badgeLabel?: string;
  titleLineOne?: string;
  titleLineTwo?: string;
  steps?: HowItWorksStep[];
};

const defaultSteps: HowItWorksStep[] = [
  {
    title: "Book a Schedule",
    description:
      "Easily pick a time that works for you-book online or call, no stress involved",
  },
  {
    title: "Dental Check-Up",
    description:
      "Get your teeth and gums thoroughly examined to spot any issues early.",
  },
  {
    title: "Get Expert Advice",
    description:
      "We explain the condition and give the best options recommendation.",
  },
  {
    title: "Start Your Treatment",
    description: "Begin your journey to a healthier smile with expert care.",
  },
];

function HowItWorksStepCard({
  title,
  description,
  stepNumber,
}: HowItWorksStep & { stepNumber: string }) {
  return (
    <article className="flex w-full items-start gap-[24px] rounded-[16px] bg-[var(--background-white-0)] p-[24px]">
      <div className="min-w-0 flex-1">
        <h3 className="text-[16px] font-semibold leading-[1.6] tracking-[-0.32px] text-[var(--text-strong-950)] sm:text-[20px] sm:leading-[1.4] sm:tracking-[-0.4px]">
          {title}
        </h3>
        <p className="mt-[8px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-sub-500)] sm:text-[18px] sm:tracking-[-0.36px]">
          {description}
        </p>
      </div>
      <p className="w-[44px] shrink-0 text-right text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] sm:w-[130px] sm:text-[16px] sm:tracking-[-0.32px]">
        {stepNumber}
      </p>
    </article>
  );
}

export function HowItWorksSection({
  badgeLabel = "How It Works",
  titleLineOne = "Your Journey to",
  titleLineTwo = "a Healthier Smile",
  steps = defaultSteps,
}: HowItWorksSectionProps) {
  return (
    <section className="w-full bg-[var(--background-weak-50)] py-[64px] sm:px-[40px] sm:py-[88px] lg:px-[64px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[393px] flex-col gap-[40px] px-[48px] sm:max-w-[1312px] sm:gap-[56px] sm:px-0 lg:flex-row lg:items-start lg:gap-[72px]">
        <header className="w-full sm:max-w-[489px] lg:w-[489px] lg:shrink-0">
          <div className="mx-auto flex w-fit items-center gap-[4px] rounded-[50px] border border-[var(--primary-700)] px-[12px] py-[4px] sm:mx-0 sm:gap-[8px] sm:px-[16px]">
            <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--primary-700)] sm:text-[20px] sm:tracking-[-0.4px]">
              •
            </span>
            <span className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--primary-700)] sm:text-[18px] sm:tracking-[-0.36px]">
              {badgeLabel}
            </span>
          </div>
          <h2 className="mt-[16px] text-center text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)] sm:text-left sm:text-[40px] sm:tracking-[-0.8px]">
            <span className="inline sm:block">{titleLineOne} </span>
            <span className="inline sm:block">{titleLineTwo}</span>
          </h2>
        </header>

        <div className="flex min-w-0 flex-1 flex-col gap-[8px] rounded-[16px] bg-[var(--background-weak-50)] p-[8px]">
          {steps.map((step, index) => (
            <HowItWorksStepCard
              key={step.title}
              description={step.description}
              stepNumber={`${index + 1}`.padStart(2, "0")}
              title={step.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

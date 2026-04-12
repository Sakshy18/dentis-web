type BenefitItem = {
  title: string;
  description: string;
  order: string;
};

const benefits: BenefitItem[] = [
  {
    title: "Competitive Salary & Bonuses",
    description: "Enjoy a stable income with performance-based incentives",
    order: "01",
  },
  {
    title: "Professional Growth",
    description: "Access to ongoing training, certifications, and opportunities to specialize",
    order: "02",
  },
  {
    title: "Supportive Work Environment",
    description: "Collaborate with a skilled team in a positive atmosphere",
    order: "03",
  },
  {
    title: "Comprehensive Health Benefits",
    description: "Medical and dental coverage included.",
    order: "04",
  },
];

export function CareersBenefitsSection() {
  return (
    <section className="bg-(--background-weak-50) px-[12px] pb-[80px] pt-[24px] sm:px-[40px] sm:pb-[104px] sm:pt-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[32px] sm:flex-row sm:items-start sm:gap-[72px]">
        <div className="w-full sm:w-[489px]">
          <div className="inline-flex items-center gap-[8px] rounded-[50px] border border-(--background-primary-700) px-[16px] py-[4px]">
            <span className="text-[20px] leading-[1.6] tracking-[-0.4px] text-(--background-primary-700)">•</span>
            <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--background-primary-700) sm:text-[18px] sm:tracking-[-0.36px]">
              Benefit
            </span>
          </div>

          <h2 className="mt-[24px] text-[52px] font-medium leading-[1.08] tracking-[-1.04px] text-(--text-strong-950) sm:text-[48px] sm:leading-[1.4] sm:tracking-[-0.96px]">
            More Than
            <br />
            Just a Job
          </h2>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-[8px]">
          {benefits.map((item) => (
            <article
              className="flex items-start justify-between gap-[16px] rounded-[16px] bg-(--background-white-0) p-[24px]"
              key={item.order}
            >
              <div className="min-w-0">
                <h3 className="text-[20px] font-semibold leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">{item.title}</h3>
                <p className="mt-[8px] max-w-[553px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
                  {item.description}
                </p>
              </div>
              <p className="w-[40px] shrink-0 pt-[2px] text-right text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                {item.order}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

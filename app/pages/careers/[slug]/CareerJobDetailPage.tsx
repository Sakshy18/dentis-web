import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { getCareerJobBySlug } from "../data/jobs";

type CareerJobDetailPageProps = {
  slug: string;
};

export function CareerJobDetailPage({ slug }: CareerJobDetailPageProps) {
  const job = getCareerJobBySlug(slug);

  if (!job) {
    notFound();
  }

  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main className="bg-(--background-weak-50) pb-[80px] pt-[120px] sm:pb-[104px] sm:pt-[244px]">
        <MotionFadeIn className="mx-auto w-full max-w-[860px] px-[16px] sm:px-[24px] lg:px-0">
          <h1 className="text-[48px] font-medium leading-none tracking-[-0.96px] text-(--text-strong-950) sm:text-center">
            {job.title}
          </h1>

          <p className="mt-[16px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:hidden">
            {job.summary}
          </p>

          <section className="mt-[24px] rounded-[16px] bg-(--background-white-0) p-[16px] sm:mt-[48px] sm:p-[24px]">
            <div className="flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">Salary:</p>
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.salary}</p>
              </div>

              <div className="sm:w-[180px]">
                <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">Job Type:</p>
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.jobType}</p>
              </div>

              <div className="sm:w-[180px]">
                <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-[#d92d20]">Deadline:</p>
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[#d92d20]">{job.deadline}</p>
              </div>

              <button
                className="mt-[4px] h-[48px] w-full rounded-[99999px] bg-(--button-primary-base) px-[22px] py-[11px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) sm:mt-0 sm:w-auto"
                type="button"
              >
                Apply this Position
              </button>
            </div>
          </section>

          <section className="mt-[24px] space-y-[24px] sm:mt-[48px]">
            <div>
              <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">{job.introTitle}</h2>
              <p className="mt-[4px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.introBody}</p>
            </div>

            <div>
              <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">What We Offer</h2>
              <ul className="mt-[4px] list-disc pl-[20px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                {job.offerItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">What We Expect</h2>
              <ul className="mt-[4px] list-disc pl-[20px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                {job.expectItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">{job.closingTitle}</h2>
              <p className="mt-[4px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                {job.closingBody}
              </p>
            </div>
          </section>
        </MotionFadeIn>
      </main>

      <SiteFooter />
    </div>
  );
}

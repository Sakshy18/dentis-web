import Image from "next/image";
import Link from "next/link";
import { careerJobs } from "../data/jobs";

const caretDownIcon = "/images/svg/caret-down.svg";
const magnifyingGlassIcon = "/images/svg/careers-magnifying-glass.svg";
const salaryIcon = "/images/svg/careers-salary.svg";
const briefcaseIcon = "/images/svg/careers-briefcase.svg";
const calendarIcon = "/images/svg/careers-calendar.svg";

export function CareersJobsSection() {
  return (
    <section className="bg-(--background-weak-50) px-[12px] pb-[80px] pt-[60px] sm:px-[40px] sm:pb-[104px] sm:pt-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col items-center gap-[48px] sm:gap-[60px]">
        <div className="flex flex-col items-center gap-[24px] text-center">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-(--background-primary-700) px-[16px] py-[4px]">
            <span className="text-[20px] leading-[1.6] tracking-[-0.4px] text-(--background-primary-700)">•</span>
            <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--background-primary-700) sm:text-[18px] sm:tracking-[-0.36px]">
              Job Vacancy
            </p>
          </div>
          <h2 className="w-[280px] text-[48px] font-medium leading-[1.15] tracking-[-0.96px] text-(--text-strong-950) sm:w-[489px] sm:leading-[1.4]">
            Be Part of Something Great
          </h2>
        </div>

        <div className="w-full">
          <div className="flex w-full flex-col gap-[12px] sm:flex-row sm:items-end sm:gap-[24px]">
            <div className="flex-1">
              <p className="mb-[4px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">Job Type</p>
              <div className="flex h-[48px] items-center gap-[4px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px]">
                <p className="flex-1 text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-soft-400)">All Job Type</p>
                <Image alt="" aria-hidden className="h-[8px] w-[14px] shrink-0" height={8} src={caretDownIcon} width={14} />
              </div>
            </div>

            <div className="flex-1">
              <p className="mb-[4px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">Keyword</p>
              <div className="flex h-[48px] items-center gap-[4px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px]">
                <p className="flex-1 text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-soft-400)">Enter Keyword</p>
                <Image alt="" aria-hidden className="h-[20px] w-[20px]" height={20} src={magnifyingGlassIcon} width={20} />
              </div>
            </div>

            <button
              className="h-[48px] w-full rounded-[99999px] bg-(--button-primary-base) px-[22px] py-[11px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) sm:w-[240px]"
              type="button"
            >
              Search Job
            </button>
          </div>

          <div className="mt-[24px] grid grid-cols-1 gap-[14px] sm:mt-[48px] sm:grid-cols-2 sm:gap-[24px] lg:grid-cols-3">
            {careerJobs.map((job) => (
              <Link
                className="block rounded-[10px] border border-(--neutral-300) bg-(--background-white-0) p-[16px] sm:p-[24px]"
                href={`/pages/careers/${job.slug}`}
                key={job.slug}
              >
                <h3 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--background-primary-700)">{job.title}</h3>
                <div className="mt-[24px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[12px]">
                    <Image alt="" aria-hidden className="h-[24px] w-[24px]" height={24} src={salaryIcon} width={24} />
                    <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.salary}</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <Image alt="" aria-hidden className="h-[24px] w-[24px]" height={24} src={briefcaseIcon} width={24} />
                    <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.jobType}</p>
                  </div>
                  <div className="flex items-center gap-[12px]">
                    <Image alt="" aria-hidden className="h-[24px] w-[24px]" height={24} src={calendarIcon} width={24} />
                    <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{job.deadline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-[24px] flex justify-center sm:mt-[48px]">
            <button
              className="rounded-[99999px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[26px] py-[13px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)"
              type="button"
            >
              Load More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

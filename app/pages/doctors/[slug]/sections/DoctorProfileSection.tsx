import Image from "next/image";
import type { DoctorProfile } from "../../data/doctors";

type DoctorProfileSectionProps = {
  doctor: DoctorProfile;
};

export function DoctorProfileSection({ doctor }: DoctorProfileSectionProps) {
  return (
    <section className="px-[16px] pb-[24px] sm:px-[40px] sm:pb-[48px]">
      <div className="mx-auto w-full max-w-[1312px] rounded-[24px] bg-(--background-white-0) p-[16px] sm:p-[24px] lg:grid lg:grid-cols-[460px_minmax(0,1fr)] lg:gap-[28px] lg:p-[32px]">
        <div className="relative h-[380px] overflow-hidden rounded-[16px] bg-(--background-soft-200) sm:h-[520px] lg:h-[600px]">
          <Image
            alt={doctor.name}
            className="object-cover object-top"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 460px"
            src={doctor.desktopImage}
          />
        </div>

        <div className="mt-[20px] lg:mt-0">
          <p className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--button-primary-base)">
            {doctor.role}
          </p>
          <h1 className="mt-[8px] text-[40px] font-medium leading-[1.1] tracking-[-0.8px] text-(--text-strong-950) sm:text-[56px] sm:tracking-[-1.12px]">
            {doctor.name}
          </h1>
          <p className="mt-[12px] max-w-[700px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
            {doctor.summary}
          </p>

          <p className="mt-[20px] text-[16px] font-normal leading-[1.7] tracking-[-0.32px] text-(--text-sub-500)">
            {doctor.bio}
          </p>

          <div className="mt-[24px] grid gap-[16px] sm:grid-cols-2">
            <div className="rounded-[12px] border border-(--stroke-soft-200) bg-(--background-weak-50) p-[16px]">
              <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">Experience</p>
              <p className="mt-[4px] text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">
                {doctor.yearsExperience}+ years
              </p>
            </div>
            <div className="rounded-[12px] border border-(--stroke-soft-200) bg-(--background-weak-50) p-[16px]">
              <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">Languages</p>
              <p className="mt-[4px] text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">
                {doctor.languages.join(", ")}
              </p>
            </div>
          </div>

          <div className="mt-[20px] rounded-[12px] border border-(--stroke-soft-200) p-[16px]">
            <h2 className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
              Focus Areas
            </h2>
            <div className="mt-[12px] flex flex-wrap gap-[8px]">
              {doctor.focusAreas.map((focusArea) => (
                <span
                  className="rounded-[999px] border border-(--stroke-soft-200) px-[12px] py-[6px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)"
                  key={focusArea}
                >
                  {focusArea}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-[16px] rounded-[12px] border border-(--stroke-soft-200) p-[16px]">
            <h2 className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
              Education
            </h2>
            <ul className="mt-[10px] list-disc space-y-[8px] pl-[22px]">
              {doctor.education.map((item) => (
                <li
                  className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)"
                  key={item}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-[16px] rounded-[12px] border border-(--stroke-soft-200) p-[16px]">
            <h2 className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
              Licenses
            </h2>
            <ul className="mt-[10px] space-y-[8px]">
              {doctor.licenses.map((license) => (
                <li
                  className="flex items-center justify-between gap-[12px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-weak-50) px-[12px] py-[8px]"
                  key={`${license.name}-${license.year}`}
                >
                  <span className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">
                    {license.name}
                  </span>
                  <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                    {license.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

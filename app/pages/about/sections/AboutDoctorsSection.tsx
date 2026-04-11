import { DoctorCard, type DoctorCardProps } from "@/components/layout/DoctorCard";
import { doctors as doctorsData } from "@/app/pages/doctors/data/doctors";

const doctors: DoctorCardProps[] = doctorsData.map((doctor) => ({
  role: doctor.role,
  name: doctor.name,
  desktopImage: doctor.desktopImage,
  mobileImage: doctor.mobileImage,
  roleSmall: doctor.roleSmall,
}));

export function AboutDoctorsSection() {
  return (
    <section className="bg-[var(--background-weak-50)] px-[16px] py-[40px] lg:px-[64px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[24px] lg:gap-[60px]">
        <div className="flex flex-col items-center gap-[16px] text-center lg:items-start lg:gap-[24px] lg:text-left">
          <div className="flex items-center gap-[4px] rounded-[50px] border border-[var(--primary-700)] px-[12px] py-[4px] lg:gap-[8px] lg:px-[16px]">
            <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--primary-700)] lg:text-[20px] lg:tracking-[-0.4px]">
              •
            </span>
            <span className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--primary-700)] lg:text-[18px] lg:tracking-[-0.36px]">
              Our Doctors
            </span>
          </div>

          <div className="flex w-full flex-col gap-[8px] lg:flex-row lg:items-start lg:justify-between lg:gap-[360px]">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)] lg:w-[489px] lg:text-[48px] lg:tracking-[-0.96px]">
              Experienced. Caring.
              <br />
              Here for You.
            </h2>
            <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-sub-500)] lg:flex-1 lg:text-[18px] lg:tracking-[-0.36px]">
              Our dentists are highly trained professionals dedicated to delivering gentle, thorough, and personalized care for every patient.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.name} {...doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

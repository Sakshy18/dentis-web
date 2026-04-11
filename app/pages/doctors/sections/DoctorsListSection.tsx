"use client";

import Link from "next/link";
import { useState } from "react";
import { DoctorCard } from "@/components/layout/DoctorCard";
import { doctorFilters, doctors, type DoctorFilter } from "../data/doctors";

export function DoctorsListSection() {
  const [activeFilter, setActiveFilter] = useState<DoctorFilter>("All Dentist");

  const filteredDoctors =
    activeFilter === "All Dentist"
      ? doctors
      : doctors.filter(
          (doctor) => doctor.role === activeFilter || doctor.extraFilters?.includes(activeFilter),
        );

  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[40px] pt-[24px] sm:px-[40px] sm:pb-[104px] sm:pt-[48px]">
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="-mx-[16px] overflow-x-auto px-[16px] sm:mx-0 sm:overflow-visible sm:px-0">
          <div className="flex w-max gap-[8px] sm:w-auto sm:flex-wrap sm:gap-[10px]">
            {doctorFilters.map((filter) => (
              <button
                className={`shrink-0 whitespace-nowrap rounded-[16px] border px-[22px] py-[11px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                  activeFilter === filter
                    ? "border-(--button-primary-base) bg-(--button-primary-base) text-(--text-white-0)"
                    : "border-(--stroke-soft-200) bg-transparent text-(--text-strong-950)"
                }`}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                type="button"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[24px] grid grid-cols-1 gap-[24px] lg:mt-[48px] lg:grid-cols-4">
          {filteredDoctors.map((doctor) => (
            <Link className="block" href={`/pages/doctors/${doctor.slug}`} key={doctor.slug}>
              <DoctorCard
                desktopImage={doctor.desktopImage}
                mobileImage={doctor.mobileImage}
                name={doctor.name}
                role={doctor.role}
                roleSmall={doctor.roleSmall}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

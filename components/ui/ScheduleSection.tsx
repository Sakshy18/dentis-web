"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Calendar } from "@/components/layout/Calendar";
import { isValidEmail } from "@/app/utils/validation";

const scheduleImage = "/images/png/home-schedule-image.jpg";
const scheduleLogo = "/images/svg/home-schedule-logo.svg";

function CalendarIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.6665 1.66675V5.00008" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M13.3335 1.66675V5.00008" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M2.0835 7.2749H17.9168" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
      <path
        d="M17.9168 7.08341V12.7917C17.9168 14.8334 16.8752 16.2501 14.5835 16.2501H5.41683C3.12516 16.2501 2.0835 14.8334 2.0835 12.7917V7.08341C2.0835 5.04175 3.12516 3.62508 5.41683 3.62508H14.5835C16.8752 3.62508 17.9168 5.04175 17.9168 7.08341Z"
        stroke="#99A0AE"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M14.3707 10.2501H14.3782" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M14.3707 12.7501H14.3782" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9.99682 10.2501H10.0043" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M9.99682 12.7501H10.0043" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.62085 10.2501H5.62833" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
      <path d="M5.62085 12.7501H5.62833" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function CaretDownIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 7.5L10 12.5L15 7.5" stroke="#99A0AE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

function FieldLabel({ children }: { children: string }) {
  return (
    <label className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)]">
      {children}
    </label>
  );
}

type ScheduleSectionProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

const treatmentOptions = [
  "Routine Check-Ups & Cleanings",
  "Whitening & Aesthetic Services",
  "Fillings, Crowns & Restorations",
  "Braces & Clear Aligners",
] as const;

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function ScheduleSection({
  ctaHref = "/pages/services/schedule-appointment",
  ctaLabel = "Book a Schedule",
}: ScheduleSectionProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTreatmentOpen, setIsTreatmentOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTreatment, setSelectedTreatment] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const treatmentWrapperRef = useRef<HTMLDivElement>(null);
  const emailInvalid = email.trim().length > 0 && !isValidEmail(email);

  useEffect(() => {
    if (!isCalendarOpen && !isTreatmentOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!calendarWrapperRef.current?.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
      if (!treatmentWrapperRef.current?.contains(event.target as Node)) {
        setIsTreatmentOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isCalendarOpen, isTreatmentOpen]);

  return (
    <section className="bg-[var(--background-weak-50)] px-[16px] py-[40px] sm:px-[20px] sm:py-[56px] lg:px-[16px] lg:py-[40px]">
      <div className="mx-auto rounded-[16px] bg-[var(--background-white-0)] p-[20px] sm:p-[32px] lg:max-w-[1408px] lg:p-[48px]">
        <div className="grid gap-[24px] xl:grid-cols-[700px_minmax(0,1fr)] xl:gap-[56px]">
          <div className="relative h-[420px] overflow-hidden rounded-[16px] bg-[var(--primary-800)] sm:h-[520px] xl:h-[622px]">
            <Image
              alt="Dental visit"
              className="h-full w-full -scale-x-100 object-cover"
              fill
              sizes="(max-width: 1279px) 100vw, 700px"
              src={scheduleImage}
            />
            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-0 left-0 right-0 p-[12px] sm:p-[16px]">
              <div className="rounded-[16px] bg-[var(--background-white-0)] p-[20px] sm:p-[24px]">
                <h3 className="text-[34px] font-medium leading-[1.2] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[36px] sm:leading-[1.4] sm:tracking-[-0.72px]">
                  Book Your Visit Today
                </h3>
                <p className="mt-[10px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
                  Select the time that works best for you. Our team is here to
                  make every visit smooth and worry-free.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[16px] bg-[var(--background-white-0)] p-[8px] lg:p-[24px]">
            <div className="flex flex-col gap-[24px]">
              <Image alt="Dentis mark" height={48} src={scheduleLogo} width={48} />
              <h4 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)]">
                Schedule Dental Care
              </h4>
            </div>

            <form className="mt-[24px] flex flex-col gap-[16px]">
              <div className="flex flex-col gap-[4px]">
                <FieldLabel>Name</FieldLabel>
                <input
                  className="h-[44px] rounded-[8px] border border-[var(--stroke-soft-200)] px-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] placeholder:text-[var(--text-soft-400)] focus:border-[var(--primary-700)] focus:outline-none"
                  placeholder="Put your name here"
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-[4px]">
                <FieldLabel>E-mail</FieldLabel>
                <input
                  aria-invalid={emailInvalid}
                  className={`h-[44px] rounded-[8px] border px-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] placeholder:text-[var(--text-soft-400)] focus:border-[var(--primary-700)] focus:outline-none ${
                    emailInvalid ? "border-[#DC2626]" : "border-[var(--stroke-soft-200)]"
                  }`}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Put your email here"
                  type="email"
                  value={email}
                />
                {emailInvalid ? (
                  <p className="text-[12px] font-normal leading-normal tracking-[-0.24px] text-[#DC2626]">Enter valid email</p>
                ) : null}
              </div>

              <div className="relative flex flex-col gap-[4px]" ref={calendarWrapperRef}>
                <FieldLabel>Date</FieldLabel>
                <button
                  aria-expanded={isCalendarOpen}
                  className="relative h-[44px] w-full rounded-[8px] border border-[var(--stroke-soft-200)] px-[12px] pr-[40px] text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] focus:border-[var(--primary-700)] focus:outline-none"
                  onClick={() => setIsCalendarOpen((prev) => !prev)}
                  type="button"
                >
                  <span className={selectedDate ? "text-[var(--text-strong-950)]" : "text-[var(--text-soft-400)]"}>
                    {selectedDate ? formatDate(selectedDate) : "Select your preferred date"}
                  </span>
                  <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                    <CalendarIcon />
                  </span>
                </button>
                <input name="appointmentDate" type="hidden" value={selectedDate ? selectedDate.toISOString() : ""} />
                {isCalendarOpen ? (
                  <div className="mt-[8px] sm:absolute sm:left-0 sm:right-0 sm:top-[calc(100%+8px)] sm:mt-0 sm:z-30">
                    <Calendar
                      initialMonth={new Date(2026, 0, 1)}
                      onChange={(date) => {
                        setSelectedDate(date);
                        setIsCalendarOpen(false);
                      }}
                      value={selectedDate}
                    />
                  </div>
                ) : null}
              </div>

              <div className="relative flex flex-col gap-[4px]" ref={treatmentWrapperRef}>
                <FieldLabel>Treatment</FieldLabel>
                <button
                  aria-expanded={isTreatmentOpen}
                  className="relative h-[44px] w-full rounded-[8px] border border-[var(--stroke-soft-200)] px-[12px] pr-[40px] text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] focus:border-[var(--primary-700)] focus:outline-none"
                  onClick={() => setIsTreatmentOpen((prev) => !prev)}
                  type="button"
                >
                  <span className={selectedTreatment ? "text-[var(--text-strong-950)]" : "text-[var(--text-soft-400)]"}>
                    {selectedTreatment ?? "Select your treatment"}
                  </span>
                  <span className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2">
                    <CaretDownIcon />
                  </span>
                </button>
                <input name="treatment" type="hidden" value={selectedTreatment ?? ""} />
                {isTreatmentOpen ? (
                  <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 rounded-[10px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] p-[4px] shadow-[0_8px_24px_rgba(14,18,27,0.08)]">
                    {treatmentOptions.map((option) => (
                      <button
                        className={`w-full rounded-[8px] px-[12px] py-[10px] text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
                          option === selectedTreatment
                            ? "bg-[var(--background-weak-50)] text-[var(--text-strong-950)]"
                            : "text-[var(--text-sub-500)] hover:bg-[var(--background-weak-50)]"
                        }`}
                        key={option}
                        onClick={() => {
                          setSelectedTreatment(option);
                          setIsTreatmentOpen(false);
                        }}
                        type="button"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>

              {ctaHref ? (
                <Link
                  className="mt-[14px] flex h-[48px] w-full items-center justify-center rounded-[99999px] bg-[var(--button-primary-base)] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]"
                  href={ctaHref}
                >
                  {ctaLabel}
                </Link>
              ) : (
                <button
                  className="mt-[14px] h-[48px] w-full rounded-[99999px] bg-[var(--button-primary-base)] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]"
                  type="button"
                >
                  {ctaLabel}
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar } from "@/components/layout/Calendar";
import type { DoctorProfile } from "../../data/doctors";

type DoctorAppointmentSectionProps = {
  doctor: DoctorProfile;
};

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
    </svg>
  );
}

function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatSlotRange(time: string) {
  const [hourPart, minutePart] = time.split(":");
  const hour = Number(hourPart);
  const minute = Number(minutePart);

  const start = new Date(2026, 0, 1, hour, minute);
  const end = new Date(2026, 0, 1, hour, minute + 60);

  const formatClock = (date: Date) => {
    const hours24 = date.getHours();
    const hours12 = hours24 % 12 === 0 ? 12 : hours24 % 12;
    return `${String(hours12).padStart(2, "0")}.${String(date.getMinutes()).padStart(2, "0")}`;
  };

  const meridiem = end.getHours() < 12 ? "am" : "pm";
  return `${formatClock(start)} - ${formatClock(end)} ${meridiem}`;
}

export function DoctorAppointmentSection({ doctor }: DoctorAppointmentSectionProps) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date(2026, 0, 14));
  const firstAvailableSlot = useMemo(
    () => doctor.appointmentSlots.find((slot) => slot.status === "available")?.time ?? "",
    [doctor.appointmentSlots],
  );
  const [selectedSlot, setSelectedSlot] = useState(firstAvailableSlot);
  const calendarWrapperRef = useRef<HTMLDivElement>(null);
  const morningSlots = useMemo(
    () => doctor.appointmentSlots.filter((slot) => Number(slot.time.split(":")[0]) < 12),
    [doctor.appointmentSlots],
  );
  const afternoonSlots = useMemo(
    () => doctor.appointmentSlots.filter((slot) => Number(slot.time.split(":")[0]) >= 12),
    [doctor.appointmentSlots],
  );

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!calendarWrapperRef.current?.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    };

    if (isCalendarOpen) {
      document.addEventListener("mousedown", onPointerDown);
    }

    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isCalendarOpen]);

  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[40px] sm:px-[40px] sm:pb-[104px]">
      <div className="mx-auto w-full max-w-[1312px] rounded-[24px] bg-(--background-white-0) p-[16px] sm:p-[24px] lg:p-[32px]">
        <div className="flex flex-col gap-[20px]">
          <div>
            <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.68px] text-(--text-strong-950)">
              Book Appointment with {doctor.name}
            </h2>
            <p className="mt-[8px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
              Select a preferred date and available consultation slot.
            </p>
          </div>

          <div className="grid gap-[16px] lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-[24px]">
            <div className="relative" ref={calendarWrapperRef}>
              <button
                className="flex h-[48px] w-full items-center justify-between rounded-[10px] border border-(--stroke-soft-200) px-[14px] text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)"
                onClick={() => setIsCalendarOpen((prev) => !prev)}
                type="button"
              >
                <span>{formatDate(selectedDate)}</span>
                <CalendarIcon />
              </button>

              {isCalendarOpen ? (
                <div className="absolute left-0 top-[56px] z-30 w-[min(100vw-32px,420px)]">
                  <Calendar
                    disabledDates={doctor.unavailableDates}
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

            <div className="space-y-[14px]">
              <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">
                Time
              </p>
              <div>
                <p className="mb-[8px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                  Morning
                </p>
                <div className="-mx-[2px] overflow-x-auto px-[2px]">
                  <div className="flex w-max gap-[10px]">
                  {morningSlots.map((slot) => {
                    const isSelected = selectedSlot === slot.time;
                    const isDisabled = slot.status === "disabled";

                    return (
                      <button
                        className={`h-[48px] w-[152px] shrink-0 rounded-[8px] border px-[16px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
                          isDisabled
                            ? "cursor-not-allowed border-(--background-soft-200) bg-(--background-soft-200) text-(--text-sub-500)"
                            : isSelected
                              ? "border-(--button-primary-base) bg-(--primary-50) text-(--text-strong-950)"
                              : "border-(--stroke-soft-200) bg-(--background-white-0) text-(--text-strong-950)"
                        }`}
                        disabled={isDisabled}
                        key={slot.time}
                        onClick={() => setSelectedSlot(slot.time)}
                        type="button"
                      >
                        {formatSlotRange(slot.time)}
                      </button>
                    );
                  })}
                  </div>
                </div>
              </div>

              <div>
                <p className="mb-[8px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                  Afternoon
                </p>
                <div className="-mx-[2px] overflow-x-auto px-[2px]">
                  <div className="flex w-max gap-[10px]">
                  {afternoonSlots.map((slot) => {
                    const isSelected = selectedSlot === slot.time;
                    const isDisabled = slot.status === "disabled";

                    return (
                      <button
                        className={`h-[48px] w-[152px] shrink-0 rounded-[8px] border px-[16px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
                          isDisabled
                            ? "cursor-not-allowed border-(--background-soft-200) bg-(--background-soft-200) text-(--text-sub-500)"
                            : isSelected
                              ? "border-(--button-primary-base) bg-(--primary-50) text-(--text-strong-950)"
                              : "border-(--stroke-soft-200) bg-(--background-white-0) text-(--text-strong-950)"
                        }`}
                        disabled={isDisabled}
                        key={slot.time}
                        onClick={() => setSelectedSlot(slot.time)}
                        type="button"
                      >
                        {formatSlotRange(slot.time)}
                      </button>
                    );
                  })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="mt-[8px] h-[52px] w-full rounded-[99999px] bg-(--button-primary-base) text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) sm:w-auto sm:min-w-[280px]"
            type="button"
          >
            Confirm Appointment
          </button>
        </div>
      </div>
    </section>
  );
}

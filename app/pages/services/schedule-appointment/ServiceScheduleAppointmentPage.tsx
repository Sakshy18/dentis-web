 "use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { formatSlotRange } from "@/app/utils/dateTime";
import { isValidEmail } from "@/app/utils/validation";
import { doctors } from "@/app/pages/doctors/data/doctors";
import { serviceDetails } from "@/app/pages/services/data/serviceDetails";
import { AppointmentBookedModal } from "./components/AppointmentBookedModal";
import {
  BackIcon,
  MobileTopBar,
} from "./components/ScheduleAppointmentFormParts";
import { ScheduleAppointmentBookingStep } from "./components/ScheduleAppointmentBookingStep";
import { ScheduleAppointmentPersonalInfoStep } from "./components/ScheduleAppointmentPersonalInfoStep";
import { ScheduleAppointmentSidebar } from "./components/ScheduleAppointmentSidebar";
import type { ExistingPatientInfo, NewPatientInfo, PatientType, StepErrors } from "./components/types";
import { SiteFooter } from "@/components/layout/SiteFooter";

export function ServiceScheduleAppointmentPage() {
  const [patientType, setPatientType] = useState<PatientType>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showTimeSection, setShowTimeSection] = useState(false);
  const [showPersonalInfoStep, setShowPersonalInfoStep] = useState(false);
  const [isBookedModalOpen, setIsBookedModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [slotError, setSlotError] = useState(false);
  const [newPatientInfo, setNewPatientInfo] = useState<NewPatientInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    notes: "",
  });
  const [existingPatientInfo, setExistingPatientInfo] = useState<ExistingPatientInfo>({
    email: "",
    dateOfBirth: "",
    notes: "",
  });
  const [errors, setErrors] = useState<StepErrors>({
    patientType: false,
    service: false,
    doctor: false,
    date: false,
  });
  const formControlsRef = useRef<HTMLDivElement>(null);
  const prefillAppliedRef = useRef(false);
  const searchParams = useSearchParams();

  const serviceOptions = serviceDetails.map((service) => service.title);
  const doctorOptions = doctors.map((doctor) => doctor.name);
  const selectedDoctorProfile = useMemo(
    () => doctors.find((doctor) => doctor.name === selectedDoctor),
    [selectedDoctor],
  );
  const morningSlots = useMemo(
    () => (selectedDoctorProfile?.appointmentSlots ?? []).filter((slot) => Number(slot.time.split(":")[0]) < 12),
    [selectedDoctorProfile],
  );
  const afternoonSlots = useMemo(
    () => (selectedDoctorProfile?.appointmentSlots ?? []).filter((slot) => Number(slot.time.split(":")[0]) >= 12),
    [selectedDoctorProfile],
  );

  useEffect(() => {
    if (!isCalendarOpen && !isDoctorOpen && !isServiceOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!formControlsRef.current?.contains(event.target as Node)) {
        setIsServiceOpen(false);
        setIsDoctorOpen(false);
        setIsCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCalendarOpen, isDoctorOpen, isServiceOpen]);

  useEffect(() => {
    if (prefillAppliedRef.current) return;
    prefillAppliedRef.current = true;

    const prefillDoctor = searchParams.get("doctor");
    const prefillDate = searchParams.get("date");
    const prefillSlot = searchParams.get("slot");

    let hasPrefill = false;

    if (prefillDoctor && doctors.some((doctor) => doctor.name === prefillDoctor)) {
      setSelectedDoctor(prefillDoctor);
      hasPrefill = true;
    }

    if (prefillDate) {
      const parsedDate = new Date(prefillDate);
      if (!Number.isNaN(parsedDate.getTime())) {
        setSelectedDate(parsedDate);
        hasPrefill = true;
      }
    }

    if (prefillSlot) {
      setSelectedSlot(prefillSlot);
      hasPrefill = true;
    }

    if (hasPrefill) {
      setShowTimeSection(true);
    }
  }, [searchParams]);

  const selectedDateLabel = selectedDate
    ? selectedDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
    : "Select date";
  const isNewPatient = patientType === "no";
  const appointmentDateLabel = selectedDate
    ? selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "-";
  const selectedTimeLabel = selectedSlot ? formatSlotRange(selectedSlot) : "-";
  const canBookAppointment = isNewPatient
    ? Boolean(
        newPatientInfo.firstName &&
          newPatientInfo.lastName &&
          isValidEmail(newPatientInfo.email) &&
          newPatientInfo.phone &&
          newPatientInfo.dateOfBirth,
      )
    : Boolean(isValidEmail(existingPatientInfo.email) && existingPatientInfo.dateOfBirth);

  const validateAndContinue = () => {
    const nextErrors = {
      patientType: !patientType,
      service: !selectedService,
      doctor: !selectedDoctor,
      date: !selectedDate,
    };
    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) return;

    if (!showTimeSection) {
      setShowTimeSection(true);
      return;
    }

    if (!selectedSlot) {
      setSlotError(true);
      return;
    }

    setShowPersonalInfoStep(true);
  };

  const clearError = (field: keyof StepErrors) => {
    setErrors((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="min-h-screen bg-(--background-weak-50)">
      <div className="px-[16px] pb-[28px] pt-[14px] sm:px-[20px] sm:pt-[18px] lg:px-[64px] lg:py-[24px]">
        <MotionFadeIn className="mx-auto w-full max-w-[1312px]">
        <MobileTopBar />

        <div className="mt-[24px] grid items-start gap-[24px] lg:mt-0 lg:grid-cols-[minmax(0,780px)_500px] lg:gap-[32px]">
          <div>
            <Link
              className="hidden w-fit items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950) lg:flex"
              href="/pages/services"
            >
              <BackIcon />
              Back
            </Link>

            <h1 className="mt-[20px] text-[44px] font-normal leading-[1.1] tracking-[-0.88px] text-(--text-strong-950) sm:text-[52px] sm:tracking-[-1.04px] lg:mt-[24px] lg:text-[32px] lg:font-medium lg:leading-[1.4] lg:tracking-[-0.64px]">
              Schedule Appointment
            </h1>
            {!showPersonalInfoStep ? (
              <ScheduleAppointmentBookingStep
                afternoonSlots={afternoonSlots}
                disabledDates={selectedDoctorProfile?.unavailableDates}
                doctorOptions={doctorOptions}
                errors={errors}
                formControlsRef={formControlsRef}
                isCalendarOpen={isCalendarOpen}
                isDoctorOpen={isDoctorOpen}
                isServiceOpen={isServiceOpen}
                morningSlots={morningSlots}
                onCalendarToggle={() => {
                  setIsCalendarOpen((prev) => !prev);
                  setIsServiceOpen(false);
                  setIsDoctorOpen(false);
                }}
                onDateSelect={(date) => {
                  setSelectedDate(date);
                  setIsCalendarOpen(false);
                  clearError("date");
                }}
                onDoctorSelect={(option) => {
                  setSelectedDoctor(option);
                  setIsDoctorOpen(false);
                  setSelectedSlot("");
                  clearError("doctor");
                }}
                onDoctorToggle={() => {
                  setIsDoctorOpen((prev) => !prev);
                  setIsServiceOpen(false);
                  setIsCalendarOpen(false);
                }}
                onPatientTypeSelect={(value) => {
                  setPatientType(value);
                  clearError("patientType");
                }}
                onServiceSelect={(option) => {
                  setSelectedService(option);
                  setIsServiceOpen(false);
                  clearError("service");
                }}
                onServiceToggle={() => {
                  setIsServiceOpen((prev) => !prev);
                  setIsDoctorOpen(false);
                  setIsCalendarOpen(false);
                }}
                onSlotSelect={(time) => {
                  setSelectedSlot(time);
                  setSlotError(false);
                }}
                onValidateAndContinue={validateAndContinue}
                patientType={patientType}
                selectedDate={selectedDate}
                selectedDateLabel={selectedDateLabel}
                selectedDoctor={selectedDoctor}
                selectedService={selectedService}
                selectedSlot={selectedSlot}
                serviceOptions={serviceOptions}
                showTimeSection={showTimeSection}
                slotError={slotError}
              />
            ) : (
              <ScheduleAppointmentPersonalInfoStep
                appointmentDateLabel={appointmentDateLabel}
                canBookAppointment={canBookAppointment}
                existingPatientInfo={existingPatientInfo}
                isNewPatient={isNewPatient}
                newPatientInfo={newPatientInfo}
                onBook={() => setIsBookedModalOpen(true)}
                onExistingPatientInfoChange={setExistingPatientInfo}
                onNewPatientInfoChange={setNewPatientInfo}
                onPrevious={() => setShowPersonalInfoStep(false)}
                selectedDoctor={selectedDoctor}
                selectedDoctorImage={selectedDoctorProfile?.mobileImage}
                selectedService={selectedService}
                selectedTimeLabel={selectedTimeLabel}
              />
            )}
          </div>

          <ScheduleAppointmentSidebar />
        </div>
        </MotionFadeIn>
      </div>

      {isBookedModalOpen ? <AppointmentBookedModal onClose={() => setIsBookedModalOpen(false)} /> : null}

      <SiteFooter />
    </div>
  );
}

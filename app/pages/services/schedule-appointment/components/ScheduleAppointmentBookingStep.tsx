import { Calendar } from "@/components/layout/Calendar";
import type { RefObject } from "react";
import {
  AppointmentOption,
  DropdownField,
  SelectField,
  TimeSlotPicker,
} from "./ScheduleAppointmentFormParts";
import { calendarIcon } from "./constants";
import type { PatientType, StepErrors, TimeSlot } from "./types";

type ScheduleAppointmentBookingStepProps = {
  patientType: PatientType;
  selectedService: string | null;
  selectedDoctor: string | null;
  selectedDate: Date | null;
  selectedDateLabel: string;
  selectedSlot: string;
  isServiceOpen: boolean;
  isDoctorOpen: boolean;
  isCalendarOpen: boolean;
  showTimeSection: boolean;
  slotError: boolean;
  errors: StepErrors;
  serviceOptions: string[];
  doctorOptions: string[];
  morningSlots: TimeSlot[];
  afternoonSlots: TimeSlot[];
  formControlsRef: RefObject<HTMLDivElement | null>;
  onValidateAndContinue: () => void;
  onPatientTypeSelect: (value: Exclude<PatientType, null>) => void;
  onServiceSelect: (value: string) => void;
  onDoctorSelect: (value: string) => void;
  onServiceToggle: () => void;
  onDoctorToggle: () => void;
  onCalendarToggle: () => void;
  onDateSelect: (date: Date) => void;
  onSlotSelect: (time: string) => void;
  disabledDates?: string[];
};

export function ScheduleAppointmentBookingStep({
  patientType,
  selectedService,
  selectedDoctor,
  selectedDate,
  selectedDateLabel,
  selectedSlot,
  isServiceOpen,
  isDoctorOpen,
  isCalendarOpen,
  showTimeSection,
  slotError,
  errors,
  serviceOptions,
  doctorOptions,
  morningSlots,
  afternoonSlots,
  formControlsRef,
  onValidateAndContinue,
  onPatientTypeSelect,
  onServiceSelect,
  onDoctorSelect,
  onServiceToggle,
  onDoctorToggle,
  onCalendarToggle,
  onDateSelect,
  onSlotSelect,
  disabledDates,
}: ScheduleAppointmentBookingStepProps) {
  return (
    <form className="mt-[24px] flex flex-col gap-[16px] lg:mt-[32px] lg:gap-[40px]">
      <div className="space-y-[16px]" ref={formControlsRef}>
        <div className="flex flex-col gap-[4px]">
          <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">
            Have you booked an appointment with us before?
          </p>
          <div className="flex gap-[8px] lg:gap-[16px]">
            <AppointmentOption
              description="I am an existing patient"
              onClick={() => onPatientTypeSelect("yes")}
              selected={patientType === "yes"}
              title="Yes"
            />
            <AppointmentOption
              description="I am a new patient"
              onClick={() => onPatientTypeSelect("no")}
              selected={patientType === "no"}
              title="No"
            />
          </div>
          {errors.patientType ? (
            <p className="text-[12px] font-medium leading-[1.6] tracking-[-0.24px] text-[#D92D20]">Please select one option.</p>
          ) : null}
        </div>

        <DropdownField
          isOpen={isServiceOpen}
          label="What can we help you with?"
          onSelect={onServiceSelect}
          onToggle={onServiceToggle}
          options={serviceOptions}
          placeholder="Select service"
          value={selectedService}
        />
        {errors.service ? (
          <p className="mt-[-8px] text-[12px] font-medium leading-[1.6] tracking-[-0.24px] text-[#D92D20]">Please select a service.</p>
        ) : null}

        <DropdownField
          isOpen={isDoctorOpen}
          label="Who would you like to see"
          onSelect={onDoctorSelect}
          onToggle={onDoctorToggle}
          options={doctorOptions}
          placeholder="Select doctor"
          value={selectedDoctor}
        />
        {errors.doctor ? (
          <p className="mt-[-8px] text-[12px] font-medium leading-[1.6] tracking-[-0.24px] text-[#D92D20]">Please select a doctor.</p>
        ) : null}

        <div className="relative">
          <SelectField
            icon={calendarIcon}
            iconClassName="h-[16px] w-[15px]"
            isPlaceholder={!selectedDate}
            label="When would you like for your appointment?"
            onClick={onCalendarToggle}
            value={selectedDateLabel}
          />
          {isCalendarOpen ? (
            <div className="mt-[8px] lg:absolute lg:right-0 lg:top-[calc(100%+12px)] lg:z-30 lg:mt-0 lg:w-[496px]">
              <Calendar
                className="p-[16px] lg:rounded-[20px] lg:p-[32px] lg:shadow-[0_8px_24px_rgba(14,18,27,0.08)]"
                disabledDates={disabledDates}
                initialMonth={new Date(2026, 0, 1)}
                onChange={onDateSelect}
                value={selectedDate}
              />
            </div>
          ) : null}
        </div>
        {errors.date ? (
          <p className="mt-[-8px] text-[12px] font-medium leading-[1.6] tracking-[-0.24px] text-[#D92D20]">
            Please select your appointment date.
          </p>
        ) : null}

        {showTimeSection ? (
          <div className="space-y-[8px] pt-[4px]">
            <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">
              Choose the time of the appointment
            </p>

            <div className="space-y-[8px]">
              <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">Morning</p>
              <div className="flex flex-wrap gap-[8px] lg:gap-[12px]">
                {morningSlots.map((slot) => (
                  <TimeSlotPicker key={slot.time} onSelect={onSlotSelect} selected={selectedSlot === slot.time} slot={slot} />
                ))}
              </div>
            </div>

            <div className="space-y-[8px]">
              <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">Afternoon</p>
              <div className="flex flex-wrap gap-[8px] lg:gap-[12px]">
                {afternoonSlots.map((slot) => (
                  <TimeSlotPicker key={slot.time} onSelect={onSlotSelect} selected={selectedSlot === slot.time} slot={slot} />
                ))}
              </div>
            </div>
            {slotError ? (
              <p className="text-[12px] font-medium leading-[1.6] tracking-[-0.24px] text-[#D92D20]">
                Please select an appointment time slot.
              </p>
            ) : null}
          </div>
        ) : null}
      </div>

      <button
        className={`h-[48px] w-full rounded-[99999px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) lg:mx-auto lg:w-[360px] ${
          showTimeSection && !selectedSlot ? "cursor-not-allowed bg-[#4E63B8]" : "bg-(--button-primary-base)"
        }`}
        disabled={showTimeSection && !selectedSlot}
        onClick={onValidateAndContinue}
        type="button"
      >
        Next
      </button>
    </form>
  );
}

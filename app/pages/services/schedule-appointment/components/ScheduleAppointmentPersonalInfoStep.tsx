import Image from "next/image";
import {
  PersonalInput,
  PersonalTextArea,
  SummaryItem,
} from "./ScheduleAppointmentFormParts";
import type { ExistingPatientInfo, NewPatientInfo } from "./types";

type ScheduleAppointmentPersonalInfoStepProps = {
  isNewPatient: boolean;
  selectedService: string | null;
  appointmentDateLabel: string;
  selectedDoctor: string | null;
  selectedDoctorImage?: string;
  selectedTimeLabel: string;
  newPatientInfo: NewPatientInfo;
  existingPatientInfo: ExistingPatientInfo;
  canBookAppointment: boolean;
  onNewPatientInfoChange: (next: NewPatientInfo) => void;
  onExistingPatientInfoChange: (next: ExistingPatientInfo) => void;
  onPrevious: () => void;
  onBook: () => void;
};

export function ScheduleAppointmentPersonalInfoStep({
  isNewPatient,
  selectedService,
  appointmentDateLabel,
  selectedDoctor,
  selectedDoctorImage,
  selectedTimeLabel,
  newPatientInfo,
  existingPatientInfo,
  canBookAppointment,
  onNewPatientInfoChange,
  onExistingPatientInfoChange,
  onPrevious,
  onBook,
}: ScheduleAppointmentPersonalInfoStepProps) {
  return (
    <div className="mt-[24px] space-y-[40px] lg:mt-[32px]">
      <div className="rounded-[15px] bg-(--background-white-0) p-[24px]">
        <div className="grid gap-[16px] sm:grid-cols-2">
          <SummaryItem label="Service" value={selectedService ?? "-"} />
          <SummaryItem label="Date and Time" value={appointmentDateLabel} />
          <SummaryItem label="Doctor">
            <div className="flex items-center gap-[4px]">
              {selectedDoctorImage ? (
                <Image alt={selectedDoctor ?? "Doctor"} className="size-[24px] rounded-full object-cover" height={24} src={selectedDoctorImage} width={24} />
              ) : null}
              <p className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{selectedDoctor ?? "-"}</p>
            </div>
          </SummaryItem>
          <SummaryItem label="Time" value={selectedTimeLabel} />
        </div>
      </div>

      {isNewPatient ? (
        <div className="space-y-[16px]">
          <div className="grid gap-[16px] sm:grid-cols-2">
            <PersonalInput
              label="First Name"
              onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, firstName: value })}
              placeholder="Put your first name"
              value={newPatientInfo.firstName}
            />
            <PersonalInput
              label="Last Name"
              onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, lastName: value })}
              placeholder="Put your last name"
              value={newPatientInfo.lastName}
            />
          </div>

          <PersonalInput
            label="Email"
            onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, email: value })}
            placeholder="Put your email here"
            type="email"
            value={newPatientInfo.email}
          />

          <div className="grid gap-[16px] sm:grid-cols-2">
            <PersonalInput
              label="Phone Number"
              onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, phone: value })}
              placeholder="Put your phone number"
              value={newPatientInfo.phone}
            />
            <PersonalInput
              label="Date of Birth"
              onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, dateOfBirth: value })}
              placeholder="Select date of birth"
              type="date"
              value={newPatientInfo.dateOfBirth}
            />
          </div>

          <PersonalTextArea
            label="Medical considerations or additional information"
            onChange={(value) => onNewPatientInfoChange({ ...newPatientInfo, notes: value })}
            value={newPatientInfo.notes}
          />
        </div>
      ) : (
        <div className="space-y-[16px]">
          <div className="grid gap-[16px] sm:grid-cols-2">
            <PersonalInput
              label="Email"
              onChange={(value) => onExistingPatientInfoChange({ ...existingPatientInfo, email: value })}
              placeholder="Put your email here"
              type="email"
              value={existingPatientInfo.email}
            />
            <PersonalInput
              label="Date of Birth"
              onChange={(value) => onExistingPatientInfoChange({ ...existingPatientInfo, dateOfBirth: value })}
              placeholder="Select your date of birth"
              type="date"
              value={existingPatientInfo.dateOfBirth}
            />
          </div>
          <PersonalTextArea
            label="Medical considerations or additional information"
            onChange={(value) => onExistingPatientInfoChange({ ...existingPatientInfo, notes: value })}
            value={existingPatientInfo.notes}
          />
        </div>
      )}

      <div className="grid gap-[16px] sm:grid-cols-2">
        <button
          className="h-[48px] rounded-[99999px] border border-(--stroke-soft-200) bg-(--background-white-0) text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)"
          onClick={onPrevious}
          type="button"
        >
          Previous
        </button>
        <button
          className={`h-[48px] rounded-[99999px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) ${
            canBookAppointment ? "bg-(--button-primary-base)" : "cursor-not-allowed bg-[#4E63B8]"
          }`}
          disabled={!canBookAppointment}
          onClick={onBook}
          type="button"
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
}

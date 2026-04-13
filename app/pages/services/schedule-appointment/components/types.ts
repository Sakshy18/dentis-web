export type TimeSlot = {
  time: string;
  status: "available" | "disabled";
};

export type PatientType = "yes" | "no" | null;

export type StepErrors = {
  patientType: boolean;
  service: boolean;
  doctor: boolean;
  date: boolean;
};

export type NewPatientInfo = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  notes: string;
};

export type ExistingPatientInfo = {
  email: string;
  dateOfBirth: string;
  notes: string;
};

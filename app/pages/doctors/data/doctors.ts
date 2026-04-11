export const doctorFilters = [
  "All Dentist",
  "General Dentist",
  "Pediatric Dentist",
  "Cosmetic Dentist",
  "Orthodontics Specialist",
  "Oral Health & Preventive Care Dentist",
] as const;

export type DoctorFilter = (typeof doctorFilters)[number];

export type AppointmentSlot = {
  time: string;
  status: "available" | "disabled";
};

export type DoctorLicense = {
  name: string;
  year: number;
};

export type DoctorProfile = {
  slug: string;
  name: string;
  role: Exclude<DoctorFilter, "All Dentist">;
  roleSmall?: boolean;
  desktopImage: string;
  mobileImage: string;
  summary: string;
  bio: string;
  yearsExperience: number;
  licenses: DoctorLicense[];
  languages: string[];
  focusAreas: string[];
  education: string[];
  appointmentSlots: AppointmentSlot[];
  unavailableDates: string[];
  extraFilters?: DoctorFilter[];
};

export const doctors: DoctorProfile[] = [
  {
    slug: "dr-joanne-rider",
    name: "Dr. Joanne Rider",
    role: "General Dentist",
    desktopImage: "/images/png/about-doctor-1-desktop.jpg",
    mobileImage: "/images/png/about-doctor-1-desktop.jpg",
    summary: "A gentle family dentist focused on preventive care and long-term oral health.",
    bio: "Dr. Joanne Rider combines preventive dentistry with personalized treatment plans. She is known for helping anxious patients feel comfortable while delivering clear, practical care guidance.",
    yearsExperience: 11,
    licenses: [
      { name: "Korean Dental License", year: 2015 },
      { name: "Advanced Restorative Dentistry License", year: 2018 },
    ],
    languages: ["English", "Korean"],
    focusAreas: ["Preventive Dentistry", "Comprehensive Exams", "Smile Maintenance"],
    education: ["DDS - Seoul National University", "Advanced Restorative Care Fellowship"],
    appointmentSlots: [
      { time: "08:00", status: "available" },
      { time: "09:30", status: "available" },
      { time: "11:00", status: "disabled" },
      { time: "13:30", status: "available" },
      { time: "15:00", status: "available" },
      { time: "16:30", status: "disabled" },
    ],
    unavailableDates: ["2026-01-16", "2026-01-17", "2026-01-20", "2026-01-28"],
    extraFilters: ["Cosmetic Dentist"],
  },
  {
    slug: "dr-johnny-haesworth",
    name: "Dr. Johnny Haesworth",
    role: "Pediatric Dentist",
    desktopImage: "/images/png/about-doctor-2-desktop.jpg",
    mobileImage: "/images/png/about-doctor-2-desktop.jpg",
    summary: "Specializes in child-friendly dentistry and early oral development support.",
    bio: "Dr. Johnny Haesworth focuses on making each pediatric visit calm and educational for both children and parents, with emphasis on preventive habits and early intervention.",
    yearsExperience: 8,
    licenses: [
      { name: "Korean Dental License", year: 2017 },
      { name: "Pediatric Dentistry Board License", year: 2020 },
    ],
    languages: ["English"],
    focusAreas: ["Pediatric Exams", "Fluoride & Sealants", "Early Orthodontic Screening"],
    education: ["DDS - Yonsei University", "Pediatric Dentistry Residency"],
    appointmentSlots: [
      { time: "08:30", status: "available" },
      { time: "10:00", status: "available" },
      { time: "11:30", status: "disabled" },
      { time: "13:00", status: "available" },
      { time: "14:30", status: "disabled" },
      { time: "16:00", status: "available" },
    ],
    unavailableDates: ["2026-01-10", "2026-01-11", "2026-01-24"],
  },
  {
    slug: "dr-rachel-watson",
    name: "Dr. Rachel Watson",
    role: "Orthodontics Specialist",
    desktopImage: "/images/png/about-doctor-3-desktop.jpg",
    mobileImage: "/images/png/about-doctor-3-desktop.jpg",
    summary: "Creates precise bite and alignment plans with braces and clear aligners.",
    bio: "Dr. Rachel Watson develops custom orthodontic treatment plans for teens and adults, balancing aesthetics, comfort, and long-term stability.",
    yearsExperience: 10,
    licenses: [
      { name: "Korean Dental License", year: 2014 },
      { name: "Orthodontics Specialist License", year: 2019 },
    ],
    languages: ["English", "Japanese"],
    focusAreas: ["Clear Aligners", "Fixed Braces", "Bite Correction"],
    education: ["DDS - Korea University", "Orthodontics Specialty Program"],
    appointmentSlots: [
      { time: "09:00", status: "available" },
      { time: "10:30", status: "disabled" },
      { time: "12:00", status: "available" },
      { time: "14:00", status: "available" },
      { time: "15:30", status: "available" },
      { time: "17:00", status: "disabled" },
    ],
    unavailableDates: ["2026-01-16", "2026-01-17", "2026-02-01"],
  },
  {
    slug: "dr-mark-leverton",
    name: "Dr. Mark Leverton",
    role: "Oral Health & Preventive Care Dentist",
    roleSmall: true,
    desktopImage: "/images/png/about-doctor-4-desktop.jpg",
    mobileImage: "/images/png/about-doctor-4-desktop.jpg",
    summary: "Leads preventive treatment plans for gum health and long-term dental wellness.",
    bio: "Dr. Mark Leverton provides structured preventive care programs focused on gum stability, oral hygiene, and reducing future restorative procedures.",
    yearsExperience: 13,
    licenses: [
      { name: "Korean Dental License", year: 2012 },
      { name: "Periodontal Preventive Care License", year: 2016 },
    ],
    languages: ["English"],
    focusAreas: ["Gum Health Programs", "Preventive Monitoring", "Oral Hygiene Coaching"],
    education: ["DDS - Hanyang University", "Periodontal Health Certification"],
    appointmentSlots: [
      { time: "08:00", status: "disabled" },
      { time: "09:30", status: "available" },
      { time: "11:00", status: "available" },
      { time: "13:30", status: "disabled" },
      { time: "15:00", status: "available" },
      { time: "16:30", status: "available" },
    ],
    unavailableDates: ["2026-01-03", "2026-01-20"],
  },
  {
    slug: "dr-renard-j-starks",
    name: "Dr. Renard J. Starks",
    role: "Oral Health & Preventive Care Dentist",
    roleSmall: true,
    desktopImage: "/images/png/about-doctor-5-desktop.jpg",
    mobileImage: "/images/png/about-doctor-5-desktop.jpg",
    summary: "Supports preventive oral care with practical treatment pathways for adults.",
    bio: "Dr. Renard J. Starks helps patients build healthy oral routines through evidence-based preventive care and consistent follow-up planning.",
    yearsExperience: 9,
    licenses: [
      { name: "Korean Dental License", year: 2016 },
      { name: "Preventive Dentistry License", year: 2021 },
    ],
    languages: ["English", "Korean"],
    focusAreas: ["Risk-Based Preventive Care", "Plaque Control", "Recall Planning"],
    education: ["DDS - Kyung Hee University", "Preventive Dentistry Fellowship"],
    appointmentSlots: [
      { time: "08:30", status: "available" },
      { time: "10:00", status: "disabled" },
      { time: "11:30", status: "available" },
      { time: "13:00", status: "available" },
      { time: "14:30", status: "disabled" },
      { time: "16:00", status: "available" },
    ],
    unavailableDates: ["2026-01-16", "2026-01-28"],
  },
  {
    slug: "dr-haerin-cole",
    name: "Dr. Haerin Cole",
    role: "General Dentist",
    desktopImage: "/images/png/about-doctor-6-desktop.jpg",
    mobileImage: "/images/png/about-doctor-6-desktop.jpg",
    summary: "Provides restorative and cosmetic-focused care with minimal-discomfort techniques.",
    bio: "Dr. Haerin Cole blends general and aesthetic dentistry to improve oral function and confidence, with conservative and patient-friendly treatment approaches.",
    yearsExperience: 7,
    licenses: [
      { name: "Korean Dental License", year: 2018 },
      { name: "Aesthetic Dentistry Practice License", year: 2022 },
    ],
    languages: ["English", "Korean"],
    focusAreas: ["Restorative Dentistry", "Tooth Bonding", "Cosmetic Touch-Ups"],
    education: ["DDS - Ewha Womans University", "Aesthetic Dentistry Diploma"],
    appointmentSlots: [
      { time: "09:00", status: "available" },
      { time: "10:30", status: "available" },
      { time: "12:00", status: "disabled" },
      { time: "14:00", status: "available" },
      { time: "15:30", status: "disabled" },
      { time: "17:00", status: "available" },
    ],
    unavailableDates: ["2026-01-11", "2026-01-20", "2026-01-28"],
    extraFilters: ["Cosmetic Dentist"],
  },
  {
    slug: "dr-ren-junichi",
    name: "Dr. Ren Junichi",
    role: "Pediatric Dentist",
    desktopImage: "/images/png/about-doctor-7-desktop.jpg",
    mobileImage: "/images/png/about-doctor-7-desktop.jpg",
    summary: "Pediatric specialist focused on preventive care for toddlers and school-age children.",
    bio: "Dr. Ren Junichi emphasizes behavior-friendly pediatric care and age-appropriate treatment plans that support healthy growth and confidence.",
    yearsExperience: 6,
    licenses: [
      { name: "Japan Dental License", year: 2019 },
      { name: "Pediatric Dentistry License", year: 2023 },
    ],
    languages: ["Japanese", "English"],
    focusAreas: ["Child Preventive Care", "Early Caries Management", "Parent Guidance"],
    education: ["DDS - Tokyo Medical and Dental University", "Pediatric Rotation Program"],
    appointmentSlots: [
      { time: "08:00", status: "available" },
      { time: "09:30", status: "available" },
      { time: "11:00", status: "disabled" },
      { time: "13:30", status: "disabled" },
      { time: "15:00", status: "available" },
      { time: "16:30", status: "available" },
    ],
    unavailableDates: ["2026-01-17", "2026-01-24"],
  },
  {
    slug: "dr-marcella-lee",
    name: "Dr. Marcella Lee",
    role: "Orthodontics Specialist",
    desktopImage: "/images/png/about-doctor-8-desktop.jpg",
    mobileImage: "/images/png/about-doctor-8-desktop.jpg",
    summary: "Designs long-term orthodontic plans with detailed progress tracking.",
    bio: "Dr. Marcella Lee provides structured orthodontic care with regular outcome reviews, helping patients achieve stable alignment and functional bite improvement.",
    yearsExperience: 12,
    licenses: [
      { name: "China Dental License", year: 2013 },
      { name: "Orthodontics Specialist License", year: 2017 },
    ],
    languages: ["English", "Mandarin"],
    focusAreas: ["Complex Alignment Cases", "Retention Planning", "Smile Harmonization"],
    education: ["DDS - Peking University School of Stomatology", "Orthodontics Fellowship"],
    appointmentSlots: [
      { time: "08:30", status: "disabled" },
      { time: "10:00", status: "available" },
      { time: "11:30", status: "available" },
      { time: "13:00", status: "available" },
      { time: "14:30", status: "disabled" },
      { time: "16:00", status: "available" },
    ],
    unavailableDates: ["2026-01-16", "2026-01-20", "2026-01-28"],
  },
];

export function getDoctorBySlug(slug: string) {
  return doctors.find((doctor) => doctor.slug === slug);
}

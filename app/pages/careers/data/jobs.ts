export type CareerJob = {
  slug: string;
  title: string;
  salary: string;
  jobType: string;
  deadline: string;
  summary: string;
  introTitle: string;
  introBody: string;
  offerItems: string[];
  expectItems: string[];
  closingTitle: string;
  closingBody: string;
};

export const careerJobs: CareerJob[] = [
  {
    slug: "general-dentist",
    title: "General Dentist",
    salary: "$130,000 – $170,000/year",
    jobType: "Full-time",
    deadline: "June 6, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Join Our Caring Dental Team",
    introBody:
      "We're looking for a dedicated and detail-oriented General Dentist to join our growing practice. This is a full-time role, with standard hours from 8 AM to 5 PM, Monday to Friday. Our clinic prides itself on creating a supportive, patient-centered environment with a strong emphasis on professional development and work satisfaction.",
    offerItems: [
      "Competitive salary with annual performance bonuses",
      "Full medical, dental, and vision coverage",
      "Paid time off and holidays",
      "Support for continuing education and certifications",
      "A collaborative and upbeat team culture",
    ],
    expectItems: [
      "Valid state license as a General Dentist",
      "Strong interpersonal and communication skills",
      "A positive attitude and genuine care for patient comfort and hygiene",
      "Ability to educate patients about oral health and hygiene practices",
      "Minimum of 2 years of clinical experience preferred",
    ],
    closingTitle: "Ready to Make a Difference?",
    closingBody:
      "If you're passionate about dental care and thrive in a team-focused setting, we'd love to hear from you. Apply today and take the next step in your career with us.",
  },
  {
    slug: "dental-hygienist",
    title: "Dental Hygienist",
    salary: "$70,000 – $90,000/year",
    jobType: "Full-time",
    deadline: "July 15, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Join Our Preventive Care Team",
    introBody:
      "We're looking for a licensed Dental Hygienist to support preventive treatments and patient education. The role is full-time and ideal for someone who values gentle care, clinical accuracy, and proactive communication.",
    offerItems: [
      "Stable salary with performance recognition",
      "Medical, dental, and vision insurance",
      "Structured onboarding and mentorship",
      "Continuing education support and certification assistance",
      "Modern equipment and digitally enabled workflow",
    ],
    expectItems: [
      "Valid state license as a Registered Dental Hygienist",
      "Comfort with scaling, polishing, and periodontal charting",
      "Strong patient communication and education skills",
      "Organized clinical documentation habits",
      "At least 1 year of clinic experience preferred",
    ],
    closingTitle: "Ready to Join Our Team?",
    closingBody:
      "If preventive care is your passion and you're excited to grow with a supportive team, we'd love to hear from you.",
  },
  {
    slug: "front-desk-coordinator-a",
    title: "Front Desk Coordinator",
    salary: "$38,000 – $50,000/year",
    jobType: "Full-time",
    deadline: "June 20, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Be the First Warm Welcome",
    introBody:
      "We're hiring a Front Desk Coordinator who can create an exceptional first impression for every patient. This role manages scheduling, patient check-ins, and front-office coordination in a fast-moving clinic environment.",
    offerItems: [
      "Competitive base pay with attendance incentives",
      "Paid time off and public holiday benefits",
      "Dental care discounts for immediate family",
      "Clear growth path into senior operations roles",
      "Friendly, high-collaboration work culture",
    ],
    expectItems: [
      "Excellent verbal communication and phone etiquette",
      "Experience with scheduling and patient record systems",
      "Strong multitasking and time management skills",
      "Professional, empathetic, and calm attitude",
      "1+ year in a receptionist or coordinator role preferred",
    ],
    closingTitle: "Ready to Lead the Front Desk?",
    closingBody:
      "If you're organized, people-focused, and thrive in a service-first role, we'd love to receive your application.",
  },
  {
    slug: "pediatric-dentist",
    title: "Pediatric Dentist",
    salary: "$100,000 – $140,000/year",
    jobType: "Contract",
    deadline: "July 5, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Help Children Smile with Confidence",
    introBody:
      "We're seeking a Pediatric Dentist to deliver age-appropriate care with a compassionate approach. You'll collaborate with assistants and parents to create a safe, educational, and reassuring treatment experience for children.",
    offerItems: [
      "Flexible contract schedule and strong case flow",
      "Dedicated pediatric support team",
      "Access to child-friendly treatment resources",
      "Clinical development opportunities",
      "Supportive leadership and collaborative planning",
    ],
    expectItems: [
      "Valid pediatric dentistry license and credentials",
      "Strong behavior management and communication skills",
      "Comfort with preventive, restorative, and emergency pediatric care",
      "Ability to partner closely with parents and guardians",
      "2+ years of pediatric practice experience preferred",
    ],
    closingTitle: "Ready to Shape Young Smiles?",
    closingBody:
      "If you enjoy creating positive early dental experiences, we'd be excited to welcome you to our pediatric-focused team.",
  },
  {
    slug: "front-desk-coordinator-b",
    title: "Front Desk Coordinator",
    salary: "$38,000 – $50,000/year",
    jobType: "Full-time",
    deadline: "June 22, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Coordinate Daily Clinic Flow",
    introBody:
      "We're looking for a Front Desk Coordinator focused on operational accuracy and patient support. You'll work closely with clinical teams to manage bookings, confirmations, and same-day schedule adjustments.",
    offerItems: [
      "Predictable full-time schedule",
      "Team bonus opportunities based on service quality",
      "Professional training in dental office systems",
      "Paid leave package and health benefits",
      "Collaborative and respectful workplace",
    ],
    expectItems: [
      "Strong attention to detail in scheduling workflows",
      "Comfort handling high-volume patient communication",
      "Confidence with digital office tools and records",
      "Reliable and proactive team mindset",
      "Previous clinic front-desk experience is a plus",
    ],
    closingTitle: "Ready to Keep Care Running Smoothly?",
    closingBody:
      "If you're process-driven and patient-focused, this could be the right role for your next career step.",
  },
  {
    slug: "front-desk-coordinator-c",
    title: "Front Desk Coordinator",
    salary: "$38,000 – $50,000/year",
    jobType: "Full-time",
    deadline: "June 25, 2026",
    summary:
      "We foster an environment where professionals can grow their skills, feel valued, and make a real difference in patients' lives.",
    introTitle: "Support Patients from Check-In to Follow-Up",
    introBody:
      "We're hiring a Front Desk Coordinator to own patient communication and appointment continuity. You'll handle confirmations, post-visit follow-up scheduling, and help ensure every visit feels organized and welcoming.",
    offerItems: [
      "Competitive compensation with growth reviews",
      "Health and wellness coverage package",
      "On-the-job coaching and process training",
      "Paid holidays and leave allowance",
      "Positive and supportive team environment",
    ],
    expectItems: [
      "Strong written and verbal communication",
      "Professional and compassionate patient handling",
      "Ability to prioritize and resolve schedule conflicts",
      "Comfort working in a fast-paced clinic front office",
      "1+ year of customer-facing admin experience preferred",
    ],
    closingTitle: "Ready to Be the Patient Experience Anchor?",
    closingBody:
      "If you're service-minded and thrive on coordination, we'd love to connect and learn more about you.",
  },
];

export function getCareerJobBySlug(slug: string) {
  return careerJobs.find((job) => job.slug === slug);
}

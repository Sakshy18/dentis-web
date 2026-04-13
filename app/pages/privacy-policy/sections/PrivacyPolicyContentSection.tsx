const policySections = [
  {
    title: "Information We Collect",
    description:
      "We collect personal data including your full name, date of birth, address, contact details, medical history, dental records, insurance information, and any other details relevant to your treatment and care.",
  },
  {
    title: "How We Use Your Information",
    description:
      "Your information is used to deliver quality dental services, schedule appointments, manage medical records, process payments, and communicate important updates or reminders related to your care.",
  },
  {
    title: "Data Sharing",
    description:
      "We only share your information when necessary-with dental labs, insurance providers, or as required by law. We never sell your data or use it for unrelated marketing purposes.",
  },
  {
    title: "Data Security",
    description:
      "We use secure systems and industry-standard encryption to protect your personal data. Access is strictly limited to authorized personnel who need it to perform their duties.",
  },
  {
    title: "Your Rights",
    description:
      "You have the right to access your personal data, request corrections, limit how it is used, or ask us to delete it-subject to legal and medical requirements. Contact us any time for assistance.",
  },
  {
    title: "Cookies & Website Data",
    description:
      "If you visit our website, we may collect non-personal data like browser type, pages visited, and IP address through cookies. This helps us improve website performance and user experience.",
  },
  {
    title: "Retention of Data",
    description:
      "We retain patient records for as long as necessary to provide care and meet legal obligations. When no longer needed, your data is securely archived or permanently deleted.",
  },
  {
    title: "Updates to This Policy",
    description:
      "This privacy policy may be updated from time to time. When changes are made, we will post the revised version on our website with the latest revision date clearly shown.",
  },
] as const;

export function PrivacyPolicyContentSection() {
  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[56px] pt-[136px] sm:px-[20px] sm:pb-[72px] sm:pt-[220px]">
      <div className="mx-auto w-full max-w-[900px]">
        <h1 className="text-center text-[40px] font-medium leading-[1] tracking-[-0.8px] text-(--text-strong-950) sm:text-[48px] sm:tracking-[-0.96px]">
          Privacy Policy
        </h1>

        <div className="mt-[48px] flex flex-col gap-[24px] sm:mt-[56px]">
          {policySections.map((section, index) => (
            <article className="flex flex-col gap-[8px]" key={section.title}>
              <h2 className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
                {index + 1}. {section.title}
              </h2>
              <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
                {section.description}
              </p>
            </article>
          ))}

          <p className="pt-[4px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
            If you have any questions about how your data is handled, please contact our privacy team at{" "}
            <a className="text-[#191985]" href="mailto:hello@dental.com">
              hello@dental.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

const termsSections = [
  {
    title: "1. Use of Website",
    lines: [
      "1.1 This website is designed to provide general information about our clinic, services, and oral health topics.",
      "1.2 Users must not misuse the site by knowingly introducing viruses, or attempting unauthorized access to the site or its server.",
      "1.3 We reserve the right to update or change any part of the website without prior notice, and we are not liable if the site is unavailable for any period.",
    ],
  },
  {
    title: "2. Appointment Booking",
    lines: [
      "2.1 Our online booking system is intended to make scheduling appointments easier for patients. However, booking requests are subject to confirmation by our team.",
      "2.2 Users are responsible for providing accurate information, including full name, contact details, and reason for the visit.",
      "2.3 Missed appointments or repeated cancellations without notice may affect your ability to book future appointments.",
    ],
  },
  {
    title: "3. Privacy & Data Collection",
    lines: [
      "3.1 We collect limited personal data through our website to process bookings, send reminders, and improve your service experience.",
      "3.1 All personal data is handled in accordance with our Privacy Policy, which complies with data protection regulations (such as GDPR, if applicable).",
      "3.3 Your information will never be sold, and we only share data with third parties when legally required or necessary to deliver our services.",
    ],
  },
  {
    title: "4. Payment & Insurance",
    lines: [
      "4.1 All services must be paid in full at the time of your appointment unless other arrangements are agreed upon in advance.",
      "4.2 We accept a range of insurance plans; however, it is your responsibility to verify coverage and eligibility with your provider.",
      "4.3 Outstanding payments may incur late fees, and repeated failure to pay may lead to restricted access to non-emergency services.",
    ],
  },
  {
    title: "5. Intellectual Property",
    lines: [
      "5.1 The design, layout, content, and graphics on this website are the property of our dental clinic unless otherwise stated.",
      "5.2 You may not copy, reproduce, or distribute any part of this website without prior written permission.",
      "5.3 Trademarks, logos, and service marks displayed on the site are protected by intellectual property laws and may not be used without authorization.",
    ],
  },
] as const;

export function TermsAndConditionContentSection() {
  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[56px] pt-[136px] sm:px-[20px] sm:pb-[72px] sm:pt-[220px]">
      <div className="mx-auto w-full max-w-[900px]">
        <h1 className="text-center text-[40px] font-medium leading-[1] tracking-[-0.8px] text-(--text-strong-950) sm:text-[48px] sm:tracking-[-0.96px]">
          Terms and Condition
        </h1>

        <div className="mt-[48px] flex flex-col gap-[24px] sm:mt-[56px]">
          {termsSections.map((section) => (
            <article className="flex flex-col gap-[8px]" key={section.title}>
              <h2 className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">
                {section.title}
              </h2>

              <div className="flex flex-col gap-[2px]">
                {section.lines.map((line) => (
                  <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)" key={line}>
                    {line}
                  </p>
                ))}
              </div>
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

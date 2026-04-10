"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "Do I need to book an appointment in advance?",
    answer:
      "Yes, booking ahead helps us prepare and reduce your waiting time. Same-day slots may be available depending on schedule.",
  },
  {
    question: "How long does a typical appointment take?",
    answer:
      "Most visits take 30–60 minutes, depending on the treatment. Our team works efficiently while ensuring you receive thorough and comfortable care.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept major credit/debit cards, digital wallets, and cash. Please contact us for insurance and installment options.",
  },
  {
    question: "Is the treatment safe and painless?",
    answer:
      "Absolutely. We follow strict clinical safety standards and use gentle techniques to keep treatment as comfortable as possible.",
  },
];

function PlusIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.75" stroke="#99A0AE" strokeWidth="1.5" />
      <path d="M12 8V16" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
      <path d="M8 12H16" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function MinusIcon() {
  return (
    <svg
      aria-hidden
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="9.75" stroke="#99A0AE" strokeWidth="1.5" />
      <path d="M8 12H16" stroke="#99A0AE" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number>(1);

  return (
    <section className="bg-[var(--background-weak-50)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-[108px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[860px] flex-col items-center gap-[40px] sm:gap-[56px]">
        <header className="flex w-full max-w-[489px] flex-col items-center gap-[16px] text-center">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              FAQ
            </span>
          </div>

          <h2 className="text-[34px] font-medium leading-[1.35] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:leading-[1.4] sm:tracking-[-0.8px]">
            <span className="block">You got question,</span>
            <span className="block text-[var(--text-soft-400)]">We have answer</span>
          </h2>
        </header>

        <div className="flex w-full flex-col gap-[8px]">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={item.question}
                className="rounded-[16px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)]"
              >
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-start gap-[16px] p-[20px] text-left sm:p-[24px]"
                  onClick={() => setOpenIndex((prev) => (prev === index ? -1 : index))}
                  type="button"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-[20px] font-medium leading-[1.6] tracking-[-0.4px] text-[var(--text-strong-950)]">
                      {item.question}
                    </p>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "mt-[4px] grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span className="shrink-0">{isOpen ? <MinusIcon /> : <PlusIcon />}</span>
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

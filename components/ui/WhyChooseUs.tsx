"use client";

import Image from "next/image";
import { useState } from "react";

const whyImage = "/images/png/home-why-image.jpg";
const whyIcon1 = "/images/svg/home-why-icon-1.svg";
const whyIcon2 = "/images/svg/home-why-icon-2.svg";
const whyIcon3 = "/images/svg/home-why-icon-3.svg";

const items = [
  {
    title: "Experienced & Skilled Dentists",
    description:
      "Our team brings years of hands-on expertise and advanced training to provide care you can trust.",
    icon: whyIcon1,
    iconSize: { w: 33, h: 33 },
  },
  {
    title: "Modern Technology and Facility",
    description:
      "We use up-to-date tools and comfortable spaces to ensure accurate care and a better experience.",
    icon: whyIcon2,
    iconSize: { w: 35, h: 35 },
  },
  {
    title: "Comprehensive Dental Services",
    description:
      "We offer complete and personalized dental care for all ages, meeting every dental need.",
    icon: whyIcon3,
    iconSize: { w: 35, h: 30 },
  },
];

export function WhyChooseUs() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[var(--background-weak-50)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-[64px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col items-center justify-center gap-[56px]">
        <div className="flex w-full flex-col items-center justify-center gap-[16px]">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Why Choose Us
            </span>
          </div>

          <div className="text-center">
            <p className="w-full max-w-[600px] text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:tracking-[-0.8px]">
              Care That Puts You First
            </p>
            <div className="mt-[8px] w-full max-w-[600px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-sub-500)]">
              <p>We combine modern technology and experienced professionals</p>
              <p>to deliver high-quality dental services</p>
            </div>
          </div>
        </div>

        <div className="grid w-full gap-[24px] lg:grid-cols-[1.14fr_1fr]">
          <div className="relative h-[460px] overflow-hidden rounded-[16px] bg-[var(--primary-800)] sm:h-[560px] lg:h-[800px]">
            <Image
              alt=""
              className="object-cover object-[38%_50%]"
              fill
              sizes="(max-width: 1024px) 100vw, 700px"
              src={whyImage}
            />

            <div className="absolute bottom-0 left-0 right-0 p-[12px] sm:p-[16px]">
              <div className="w-full rounded-[16px] bg-[var(--background-white-0)] p-[20px] sm:p-[24px]">
                <h3 className="max-w-[600px] text-[30px] font-medium leading-[1.4] tracking-[-0.6px] text-[var(--text-strong-950)] sm:text-[36px] sm:tracking-[-0.72px]">
                  Expertise You Can Feel Confident In
                </h3>
                <p className="mt-[12px] max-w-[600px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
                  Our dentists bring years of clinical expertise and continuous
                  training to ensure every treatment is safe, precise, and
                  effective.
                </p>
              </div>
            </div>
          </div>

          <div
            className="flex flex-col gap-[12px]"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[16px] p-[20px] transition-colors sm:p-[24px] ${
                  hoveredIndex === null
                    ? index === 0
                      ? "bg-[var(--background-white-0)]"
                      : "bg-transparent"
                    : hoveredIndex === index
                      ? "bg-[var(--background-white-0)]"
                      : "bg-transparent"
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <div className="flex h-full min-h-[180px] flex-col justify-between gap-[20px]">
                  <div
                    className={`flex w-fit items-center rounded-[9999px] ${
                      hoveredIndex === index ? "bg-[var(--background-soft-200)] p-[12px]" : ""
                    }`}
                    style={
                      {
                        "--fill-0": hoveredIndex === index ? "#050515" : "#CACFD8",
                      } as { [key: string]: string }
                    }
                  >
                    <Image
                      alt=""
                      aria-hidden
                      height={item.iconSize.h}
                      src={item.icon}
                      width={item.iconSize.w}
                    />
                  </div>

                  <div>
                    <h4 className="text-[24px] font-semibold leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)]">
                      {item.title}
                    </h4>
                    <p className="mt-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-soft-400)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

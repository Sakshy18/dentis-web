import Image from "next/image";

type TestimonialCard = {
  image: string;
  objectPosition: string;
};

const testimonialCards: TestimonialCard[] = [
  {
    image: "/images/png/home-testimonial-1.jpg",
    objectPosition: "object-[72%_50%]",
  },
  {
    image: "/images/png/home-testimonial-2.jpg",
    objectPosition: "object-[56%_52%]",
  },
  {
    image: "/images/png/home-testimonial-3.jpg",
    objectPosition: "object-center",
  },
  {
    image: "/images/png/home-testimonial-4.jpg",
    objectPosition: "object-center",
  },
  {
    image: "/images/png/home-testimonial-5.jpg",
    objectPosition: "object-[43%_45%]",
  },
];

const groups = [0, 1];

export function HomeTestimonialsSection() {
  return (
    <section className="overflow-hidden bg-[var(--background-weak-50)] px-[20px] py-[64px] md:px-[48px] lg:px-0">
      <div className="mx-auto flex w-full max-w-[1576px] flex-col items-center gap-[56px]">
        <div className="flex w-full flex-col items-center gap-[12px] lg:px-[108px]">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Testimonials
            </span>
          </div>

          <h2 className="text-center text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:tracking-[-0.8px]">
            <span className="block whitespace-nowrap">Trusted by over</span>
            <span className="block whitespace-nowrap text-[var(--text-soft-400)]">
              16,000 happy patient
            </span>
          </h2>
        </div>

        <div className="relative left-1/2 hidden w-screen -translate-x-1/2 overflow-hidden lg:block">
          <div
            className="home-testimonials-marquee flex w-max items-end"
            style={
              {
                "--card-width": "320px",
                "--card-gap": "24px",
                "--card-count": "5",
                "--loop-distance": "calc((var(--card-width) + var(--card-gap)) * var(--card-count))",
                "--loop-duration": "24s",
              } as { [key: string]: string }
            }
          >
            {groups.map((groupIndex) => (
              <div key={`desktop-group-${groupIndex}`} className="flex items-end gap-[24px] pr-[24px]">
                {testimonialCards.map((card, cardIndex) => (
                  <article
                    key={`${card.image}-desktop-${groupIndex}-${cardIndex}`}
                    className="relative h-[480px] w-[320px] shrink-0 overflow-hidden rounded-[12px] bg-[var(--background-soft-200)]"
                  >
                    <Image
                      alt="Happy patient"
                      className={`h-full w-full object-cover ${card.objectPosition}`}
                      height={480}
                      src={card.image}
                      width={320}
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden lg:hidden">
          <div
            className="home-testimonials-marquee-mobile flex w-max items-end"
            style={
              {
                "--card-width": "220px",
                "--card-gap": "12px",
                "--card-count": "5",
                "--loop-distance": "calc((var(--card-width) + var(--card-gap)) * var(--card-count))",
                "--loop-duration": "18s",
              } as { [key: string]: string }
            }
          >
            {groups.map((groupIndex) => (
              <div key={`mobile-group-${groupIndex}`} className="flex items-end gap-[12px] pr-[12px]">
                {testimonialCards.map((card, cardIndex) => (
                  <article
                    key={`${card.image}-mobile-${groupIndex}-${cardIndex}`}
                    className="relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-[12px] bg-[var(--background-soft-200)]"
                  >
                    <Image
                      alt="Happy patient"
                      className={`h-full w-full object-cover ${card.objectPosition}`}
                      height={280}
                      src={card.image}
                      width={220}
                    />
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

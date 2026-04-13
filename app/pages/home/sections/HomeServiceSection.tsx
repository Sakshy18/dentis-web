import Image from "next/image";
import Link from "next/link";

const serviceItems = [
  {
    slug: "routine-checkups-cleanings",
    title: "Routine Check-Ups & Cleanings",
    description:
      "Our routine check-ups include a thorough examination to catch any issues early, while gentle cleanings remove plaque and buildup.",
    image: "/images/png/home-service-1.jpg",
    imageClass: "object-cover",
  },
  {
    slug: "whitening-aesthetic-services",
    title: "Whitening & Aesthetic Services",
    description:
      "Whitening and aesthetic treatments are designed to enhance your smile by reducing stains, discoloration, and minor imperfections.",
    image: "/images/png/home-service-2.jpg",
    imageClass: "object-cover object-[50%_85%]",
  },
  {
    slug: "fillings-crowns-restorations",
    title: "Fillings, Crowns & Restorations",
    description:
      "Restorative treatments repair teeth damaged by decay or injury, restoring their strength, function, and natural appearance.",
    image: "/images/png/home-service-3.jpg",
    imageClass: "object-cover",
  },
  {
    slug: "braces-clear-aligners",
    title: "Braces & Clear Aligners",
    description:
      "These treatments help straighten teeth and improve bite alignment. They support better oral health and a more confident smile",
    image: "/images/png/home-service-4.jpg",
    imageClass: "scale-[1.2] object-cover object-[38%_50%]",
  },
];

const caretRight = "/images/svg/home-service-caret-right.svg";

export function HomeServiceSection() {
  return (
    <section className="bg-[var(--background-weak-50)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-[56px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1328px] flex-col items-center gap-[56px]">
        <div className="w-full max-w-[712px]">
          <div className="mx-auto flex w-fit items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Our Service
            </span>
          </div>

          <div className="mt-[16px] text-center">
            <p className="text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:tracking-[-0.8px]">
              Comprehensive
            </p>
            <p className="text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:tracking-[-0.8px]">
              Care for Every Smile
            </p>
            <p className="mt-[8px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-sub-500)] sm:text-[20px] sm:tracking-[-0.4px]">
              We provide all-around care designed to keep every smile healthy,
              confident, and cared for at every stage.
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[868px] flex-col gap-[20px] sm:gap-[24px] lg:gap-[32px]">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="grid gap-[8px] rounded-[16px] bg-[var(--background-white-0)] p-[8px] md:grid-cols-2"
            >
              <div className="relative h-[220px] min-w-0 overflow-hidden rounded-[16px] bg-[var(--background-primary-700)] sm:h-[256px]">
                <div className="absolute inset-x-0 bottom-0 h-[120%]">
                  <Image
                    alt=""
                    className={`h-full w-full ${item.imageClass}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 430px"
                    src={item.image}
                  />
                </div>
              </div>

              <div className="flex min-w-0 flex-col items-start justify-between gap-[24px] rounded-[10px] p-[16px] sm:p-[24px]">
                <div className="w-full">
                  <h3 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)]">
                    {item.title}
                  </h3>
                  <p className="mt-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
                    {item.description}
                  </p>
                </div>

                <Link
                  className="flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--button-primary-base)]"
                  href={`/pages/services/${item.slug}`}
                >
                  Learn More
                  <span className="flex size-[20px] items-center justify-center">
                    <Image
                      alt=""
                      aria-hidden
                      className="h-[13.75px] w-[7.5px]"
                      height={14}
                      src={caretRight}
                      width={8}
                    />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const serviceItems = [
  {
    title: "Routine Check-Ups & Cleanings",
    description:
      "Our routine check-ups include a thorough examination to catch any issues early, while gentle cleanings remove plaque and buildup.",
    image: "/images/png/home-service-1.jpg",
    imageClass: "object-cover",
  },
  {
    title: "Whitening & Aesthetic Services",
    description:
      "Whitening and aesthetic treatments are designed to enhance your smile by reducing stains, discoloration, and minor imperfections.",
    image: "/images/png/home-service-2.jpg",
    imageClass: "object-cover object-[50%_85%]",
  },
  {
    title: "Fillings, Crowns & Restorations",
    description:
      "Restorative treatments repair teeth damaged by decay or injury, restoring their strength, function, and natural appearance.",
    image: "/images/png/home-service-3.jpg",
    imageClass: "object-cover",
  },
  {
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
    <section className="h-[1624px] w-full bg-[var(--background-weak-50)] px-[56px] py-[104px]">
      <div className="mx-auto flex h-full w-full max-w-[1328px] flex-col items-center gap-[56px]">
        <div className="w-[712px]">
          <div className="mx-auto flex w-fit items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Our Service
            </span>
          </div>

          <div className="mt-[16px] text-center">
            <p className="text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-[var(--text-strong-950)]">
              Comprehensive
            </p>
            <p className="text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-[var(--text-strong-950)]">
              Care for Every Smile
            </p>
            <p className="mt-[8px] text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--text-sub-500)]">
              We provide all-around care designed to keep every smile healthy,
              confident, and cared for at every stage.
            </p>
          </div>
        </div>

        <div className="flex w-[868px] flex-col gap-[32px]">
          {serviceItems.map((item) => (
            <article
              key={item.title}
              className="flex h-[256px] w-[868px] items-center gap-[8px] rounded-[16px] bg-[var(--background-white-0)]"
            >
              <div className="relative h-full min-w-0 flex-1 overflow-hidden rounded-[16px] bg-[var(--background-primary-700)]">
                <div className="absolute bottom-0 left-0 right-0 h-[645px]">
                  <Image
                    alt=""
                    className={`h-full w-full ${item.imageClass}`}
                    fill
                    sizes="430px"
                    src={item.image}
                  />
                </div>
              </div>

              <div className="flex h-full min-w-0 flex-1 flex-col items-start gap-[32px] rounded-[10px] p-[24px]">
                <div className="w-full">
                  <h3 className="text-[34px] font-medium leading-0 tracking-0 text-[var(--text-strong-950)]">
                    <span className="text-[24px] leading-[1.4] tracking-[-0.48px]">
                      {item.title}
                    </span>
                  </h3>
                  <p className="mt-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-sub-500)]">
                    {item.description}
                  </p>
                </div>

                <a
                  className="flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--button-primary-base)]"
                  href="#"
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

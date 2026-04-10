import Image from "next/image";

const aboutLogo = "/images/svg/home-about-logo.svg";
const aboutImageMed = "/images/png/home-about-image-med.jpg";
const aboutImageLarge = "/images/png/home-about-image-large.jpg";

export function HomeAboutSection() {
  return (
    <section className="bg-[var(--background-weak-50)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-[64px] lg:py-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[56px]">
        <div className="flex flex-col items-start gap-[24px] sm:gap-[32px]">
          <div className="relative size-[80px]">
            <Image alt="" aria-hidden className="h-full w-full" height={80} src={aboutLogo} width={80} />
          </div>
          <div className="max-w-[827px] text-[30px] font-medium leading-[1.35] tracking-[-0.6px] text-[var(--text-strong-950)] sm:text-[36px] sm:tracking-[-0.72px] lg:text-[40px] lg:leading-[1.4] lg:tracking-[-0.8px]">
            <p>Dental care should be easy and comfortable</p>
            <p>your health and confidence matter.</p>
          </div>
        </div>

        <div className="grid gap-[32px] lg:grid-cols-2 lg:gap-[40px]">
          <div className="flex min-w-0 flex-col items-start gap-[32px] lg:gap-[56px]">
            <div className="w-full">
              <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--primary-700)]">
                Your Dental Companion
              </p>
              <p className="mt-[16px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-sub-500)]">
                Whether you&apos;re here for a regular check-up or a complete smile
                makeover, we&apos;re committed to providing high-quality care in a
                welcoming and professional environment.
              </p>
            </div>

            <div className="relative h-[300px] w-full overflow-hidden rounded-[8px] sm:h-[360px] lg:h-[400px]">
              <Image
                alt=""
                className="object-cover object-center"
                fill
                sizes="(max-width: 1024px) 100vw, 636px"
                src={aboutImageMed}
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-col items-start gap-[32px] lg:gap-[56px]">
            <div className="w-full">
              <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--primary-700)]">
                Precision Meets Compassion
              </p>
              <p className="mt-[16px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-sub-500)]">
                Using modern equipment and patient-centered approaches, our
                experienced team ensures every treatment is performed with
                precision and care.
              </p>
            </div>

            <div className="relative h-[360px] w-full overflow-hidden rounded-[8px] sm:h-[500px] lg:h-[700px]">
              <Image
                alt=""
                className="object-cover object-[36%_50%]"
                fill
                sizes="(max-width: 1024px) 100vw, 636px"
                src={aboutImageLarge}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

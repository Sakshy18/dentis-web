import Image from "next/image";

const aboutLogo = "/images/svg/home-about-logo.svg";
const aboutImageMed = "/images/png/home-about-image-med.jpg";
const aboutImageLarge = "/images/png/home-about-image-large.jpg";

export function HomeAboutSection() {
  return (
    <section className="h-[1447px] w-full bg-[var(--background-weak-50)]">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        <div className="absolute left-[64px] top-[104px] flex w-[1312px] flex-col items-start gap-[56px]">
          <div className="relative size-[80px]">
            <Image alt="" aria-hidden className="h-full w-full" height={80} src={aboutLogo} width={80} />
          </div>
          <div className="w-[827px] text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-[var(--text-strong-950)]">
            <p>Dental care should be easy and comfortable</p>
            <p>your health and confidence matter.</p>
          </div>
        </div>

        <div className="absolute left-[64px] top-[452px] flex w-[1312px] items-start justify-center gap-[40px]">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[56px]">
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

            <div className="relative h-[400px] w-full overflow-hidden rounded-[8px]">
              <div className="absolute bottom-0 left-1/2 h-[424px] w-[636px] -translate-x-1/2 overflow-hidden">
                <Image
                  alt=""
                  className="absolute left-[-2.77%] top-0 h-full w-[104.62%] max-w-none object-cover"
                  height={424}
                  src={aboutImageMed}
                  width={636}
                />
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col items-start gap-[56px]">
            <div className="h-[135px] w-full">
              <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--primary-700)]">
                Precision Meets Compassion
              </p>
              <p className="mt-[16px] text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-sub-500)]">
                Using modern equipment and patient-centered approaches, our
                experienced team ensures every treatment is performed with
                precision and care.
              </p>
            </div>

            <div className="relative h-[700px] w-full overflow-hidden rounded-[8px]">
              <div className="absolute bottom-0 left-[-207px] h-[700px] w-[1050px]">
                <Image
                  alt=""
                  className="h-full w-full object-cover"
                  height={700}
                  src={aboutImageLarge}
                  width={1050}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

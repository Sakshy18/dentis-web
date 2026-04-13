import Image from "next/image";
import Link from "next/link";

const heroBackground = "/images/png/home-hero-bg.jpg";
const avatarOne = "/images/png/home-hero-avatar-1.jpg";
const avatarTwo = "/images/png/home-hero-avatar-2.jpg";
const avatarThree = "/images/png/home-hero-avatar-3.jpg";

export function HomeHeroSection() {
  return (
    <section className="relative min-h-[800px] w-full overflow-hidden sm:min-h-[860px] lg:h-[944px] lg:min-h-0">
      <div className="absolute inset-0">
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="100vw"
          src={heroBackground}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="relative mx-auto h-[800px] w-full max-w-[393px] sm:hidden">
        <div className="absolute left-[16px] right-[16px] top-[510px] text-[48px] font-medium leading-[1] tracking-[-0.96px] text-[var(--text-white-0)]">
          <p>Healthy Teeth,</p>
          <p>Confident Smile</p>
        </div>

        <div className="absolute bottom-[20px] left-[16px] right-[16px] space-y-[24px]">
          <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]">
            Providing expert dental care tailored to your needs for a healthier,
            brighter smile
          </p>

          <div className="flex items-center gap-[24px]">
            <Link
              className="rounded-[99999px] bg-[var(--button-primary-base)] px-[18px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-white-0)]"
              href="/pages/services/schedule-appointment"
            >
              Book a Schedule
            </Link>

            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
              <div className="flex items-center pr-[16px]">
                {[avatarOne, avatarTwo, avatarThree].map((src, index) => (
                  <div
                    key={src}
                    className={`relative size-[36px] overflow-hidden rounded-[599.4px] border-[1.2px] border-[var(--text-white-0)] ${
                      index < 2 ? "mr-[-16px]" : ""
                    }`}
                  >
                    <Image alt="" className="object-cover" fill sizes="36px" src={src} />
                  </div>
                ))}
              </div>

              <div className="min-w-0 pb-[4px]">
                <p className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--text-disable-300)]">
                  Trusted by
                </p>
                <p className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--text-white-0)]">
                  <span className="text-[16px] font-semibold leading-[1.6] tracking-[-0.32px]">
                    10k+
                  </span>{" "}
                  patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto hidden h-full w-full max-w-[1360px] flex-col justify-end gap-[24px] px-[20px] pb-[48px] pt-[140px] sm:flex sm:px-[40px] sm:pb-[64px] lg:flex-row lg:items-end lg:justify-between lg:gap-[48px] lg:px-[40px] lg:pb-[72px]">
        <div className="max-w-[760px] text-[56px] font-medium leading-[1] tracking-[-1.12px] text-[var(--text-white-0)] lg:text-[86px] lg:tracking-[-1.72px]">
          <p>Healthy Teeth,</p>
          <p>Confident Smile</p>
        </div>

        <div className="w-full max-w-[480px] space-y-[28px] lg:space-y-[40px]">
          <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-white-0)]">
            Providing expert dental care tailored to your needs for a healthier,
            brighter smile
          </p>

          <div className="flex flex-wrap items-start gap-[24px] lg:gap-[40px]">
            <Link
              className="rounded-[99999px] bg-[var(--button-primary-base)] px-[26px] py-[13px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]"
              href="/pages/services/schedule-appointment"
            >
              Book a Schedule
            </Link>

            <div className="flex min-w-[220px] flex-1 items-center gap-[12px]">
              <div className="flex h-[48px] items-center pr-[16px]">
                {[avatarOne, avatarTwo, avatarThree].map((src, index) => (
                  <div
                    key={src}
                    className={`relative size-[40px] overflow-hidden rounded-[666px] border border-[1.333px] border-[var(--text-white-0)] ${
                      index < 2 ? "mr-[-16px]" : ""
                    }`}
                  >
                    <Image
                      alt=""
                      className="object-cover"
                      fill
                      sizes="40px"
                      src={src}
                    />
                  </div>
                ))}
              </div>

              <div className="min-w-0">
                <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-disable-300)]">
                  Trusted by
                </p>
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]">
                  <span className="text-[20px] font-semibold leading-[1.4] tracking-[-0.4px]">
                    10k+
                  </span>{" "}
                  patients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

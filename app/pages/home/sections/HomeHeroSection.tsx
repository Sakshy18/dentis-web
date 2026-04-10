import Image from "next/image";

import { SiteHeader } from "@/components/layout/SiteHeader";

const heroBackground = "/images/png/home-hero-bg.jpg";
const avatarOne = "/images/png/home-hero-avatar-1.jpg";
const avatarTwo = "/images/png/home-hero-avatar-2.jpg";
const avatarThree = "/images/png/home-hero-avatar-3.jpg";

export function HomeHeroSection() {
  return (
    <section className="relative h-[944px] w-full overflow-hidden">
      <div className="absolute left-0 top-[-16px] h-[960px] w-full">
        <Image
          alt=""
          className="object-cover"
          fill
          priority
          sizes="1440px"
          src={heroBackground}
        />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      <div className="absolute left-1/2 top-[20px] z-20 w-[calc(100%-40px)] max-w-[1400px] -translate-x-1/2">
        <SiteHeader />
      </div>

      <div className="absolute left-[40px] top-[522px] flex w-[calc(100%-80px)] max-w-[1360px] items-end justify-between">
        <div className="min-w-0 flex-1 text-[86px] font-medium leading-[1] tracking-[-1.72px] text-[var(--text-white-0)]">
          <p>Healthy Teeth,</p>
          <p>Confident Smile</p>
        </div>

        <div className="flex w-[480px] flex-col items-start justify-center gap-[40px]">
          <p className="w-full text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--text-white-0)]">
            Providing expert dental care tailored to your needs for a healthier,
            brighter smile
          </p>

          <div className="flex w-full items-start gap-[40px]">
            <button className="rounded-[99999px] bg-[var(--button-primary-base)] px-[26px] py-[13px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-[var(--text-white-0)]">
              Book a Schedule
            </button>

            <div className="flex min-w-0 flex-1 items-center gap-[12px]">
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

              <div className="min-w-0 flex-1">
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

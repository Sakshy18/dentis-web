import Image from "next/image";

const copyrightIcon = "/images/svg/footer-copyright-icon.svg";

const menuLinks = [
  "Home",
  "About Us",
  "Service",
  "Doctor",
  "Blog",
  "Career",
  "Contact",
];

const serviceLinks = [
  "Routine Check-Ups & Cleanings",
  "Whitening & Aesthetic Services",
  "Fillings, Crowns & Restorations",
  "Braces & Clear Aligners",
];

const legalLinks = ["Privacy Policy", "Terms and Condition", "404 not found"];

export function SiteFooter() {
  return (
    <footer className="w-full bg-[var(--background-primary-700)] px-[20px] py-[64px] sm:px-[40px] lg:px-[64px]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[56px] overflow-hidden">
        <div className="grid gap-[32px] md:grid-cols-3 md:gap-[20px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-[var(--text-white-0)]">
              Menu
            </h2>
            <div className="flex flex-col gap-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-disable-300)]">
              {menuLinks.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-[var(--text-white-0)]">
              Service
            </h2>
            <div className="flex flex-col gap-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-disable-300)]">
              {serviceLinks.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-[var(--text-white-0)]">
              Legal
            </h2>
            <div className="flex flex-col gap-[12px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-disable-300)]">
              {legalLinks.map((item) => (
                <a key={item} href="#">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-[28px] lg:grid-cols-[1fr_auto_auto] lg:gap-[20px]">
          <div className="flex min-w-0 flex-col gap-[8px]">
            <div className="flex items-center gap-[12px] sm:gap-[16px]">
              <Image
                alt=""
                aria-hidden
                className="h-10 w-10 sm:h-12 sm:w-12"
                height={48}
                src={copyrightIcon}
                width={48}
              />
              <p className="text-[34px] font-medium leading-[1] tracking-[-0.68px] text-[var(--text-white-0)] sm:text-[48px] sm:tracking-[-0.96px]">
                2025. Dental
              </p>
            </div>
            <p className="text-[34px] font-medium leading-[1] tracking-[-0.68px] text-[var(--text-white-0)] sm:text-[48px] sm:tracking-[-0.96px]">
              All rights reserved
            </p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <p className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-[var(--text-white-0)]">
              Local Time
            </p>
            <p className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-disable-300)]">
              08 : 25 : 16 AM
            </p>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--text-disable-300)]">
              (GMT + 9)
            </p>
          </div>

          <p className="max-w-[280px] text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-[var(--text-white-0)] sm:text-[24px] sm:tracking-[-0.48px]">
            430 Gyeongin-ro, Guro District, Seoul, South Korea
          </p>
        </div>
      </div>
    </footer>
  );
}

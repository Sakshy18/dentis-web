import Image from "next/image";
import type { ReactNode } from "react";

const contactIcons = {
  phone: "/images/svg/contact-phone.svg",
  email: "/images/svg/contact-email.svg",
  location: "/images/svg/contact-location.svg",
  clock: "/images/svg/contact-clock.svg",
  facebook: "/images/svg/contact-facebook.svg",
  x: "/images/svg/contact-x.svg",
  instagram: "/images/svg/contact-instagram.svg",
  tiktok: "/images/svg/contact-tiktok.svg",
} as const;

type ContactInputProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: "text" | "email";
};

function ContactInput({ id, label, placeholder, type = "text" }: ContactInputProps) {
  return (
    <div className="flex flex-col gap-[4px]">
      <label
        className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="h-[48px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950) placeholder:text-(--text-soft-400) focus:border-(--primary-700) focus:outline-none"
        id={id}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

function ContactInfoRow({
  icon,
  children,
  iconClassName = "size-[20px]",
}: {
  icon: string;
  children: ReactNode;
  iconClassName?: string;
}) {
  return (
    <div className="flex items-start gap-[8px]">
      <span className="mt-px flex size-[24px] shrink-0 items-center justify-center">
        <Image
          alt=""
          aria-hidden
          className={iconClassName}
          height={24}
          src={icon}
          width={24}
        />
      </span>
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function ContactHeroSection() {
  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[40px] pt-[100px] sm:px-[40px] sm:pb-[104px] sm:pt-[160px]">
      <div className="mx-auto w-full max-w-[1312px]">
        <div className="flex flex-col gap-[24px] lg:flex-row lg:items-end lg:justify-between lg:gap-[64px]">
          <h1 className="text-[56px] font-normal leading-none tracking-[-1.12px] text-(--text-strong-950) lg:flex-1 lg:text-[86px] lg:tracking-[-1.72px]">
            Contact Us
          </h1>
          <p className="max-w-[600px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) lg:text-[18px] lg:tracking-[-0.36px]">
            At the heart of our clinic is a simple mission, to make high-quality dental care accessible,
            comfortable, and personalized to you.
          </p>
        </div>

        <div className="mt-[32px] grid gap-[20px] lg:mt-[48px] lg:grid-cols-[600px_minmax(0,1fr)] lg:gap-[64px]">
          <form className="flex flex-col gap-[16px] rounded-[16px]">
            <div className="grid gap-[16px] sm:grid-cols-2">
              <ContactInput id="first-name" label="First Name" placeholder="Put your first name here" />
              <ContactInput id="last-name" label="Last Name" placeholder="Put your last name here" />
            </div>
            <ContactInput id="email" label="E-mail" placeholder="Put your email here" type="email" />

            <div className="flex flex-col gap-[4px]">
              <label
                className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="min-h-[96px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px] py-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950) placeholder:text-(--text-soft-400) focus:border-(--primary-700) focus:outline-none"
                id="message"
                placeholder="Type your message here..."
              />
            </div>

            <button
              className="mt-[8px] h-[52px] rounded-[99999px] bg-(--button-primary-base) text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0)"
              type="button"
            >
              Send a Message
            </button>
          </form>

          <aside className="flex flex-col gap-[32px] rounded-[16px] bg-(--background-white-0) p-[16px] sm:p-[24px] lg:gap-[64px]">
            <div className="flex flex-col gap-[16px]">
              <ContactInfoRow icon={contactIcons.phone}>
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                  +82-1234-5678
                </p>
              </ContactInfoRow>

              <ContactInfoRow icon={contactIcons.email} iconClassName="h-[16px] w-[20px]">
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                  hello@dental.com
                </p>
              </ContactInfoRow>

              <ContactInfoRow icon={contactIcons.location} iconClassName="h-[21px] w-[17px]">
                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                  430 Gyeongin-ro, Guro District, Seoul, South Korea
                </p>
              </ContactInfoRow>

              <ContactInfoRow icon={contactIcons.clock}>
                <div className="max-w-[429px] space-y-[4px]">
                  <div className="flex items-center justify-between gap-[8px]">
                    <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                      Monday - Friday
                    </p>
                    <p className="whitespace-nowrap text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                      08.00 - 16.00
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-[8px]">
                    <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                      Saturday
                    </p>
                    <p className="whitespace-nowrap text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                      08.00 - 12.00
                    </p>
                  </div>
                </div>
              </ContactInfoRow>
            </div>

            <div className="flex flex-col gap-[8px]">
              <h2 className="text-[34px] font-medium leading-[1.2] tracking-[-0.68px] text-(--text-strong-950) sm:text-[20px] sm:leading-[1.4] sm:tracking-[-0.4px]">
                Stay Connected with Us
              </h2>
              <div className="flex items-center gap-[4px]">
                {[contactIcons.facebook, contactIcons.x, contactIcons.instagram, contactIcons.tiktok].map((icon) => (
                  <a
                    className="flex size-[32px] items-center justify-center rounded-[999px] bg-(--background-soft-200)"
                    href="#"
                    key={icon}
                  >
                    <Image alt="" aria-hidden height={16} src={icon} width={16} />
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";

const shortcutItems = [
  {
    title: "Book Online",
    description: "Easily schedule your appointment anytime with our simple online booking system",
    href: "/pages/services/schedule-appointment",
    icon: "/images/svg/privacy-shortcut-calendar.svg",
    iconWidth: 24,
    iconHeight: 26,
  },
  {
    title: "Meet Our Doctors",
    description: "Get to know the experienced and friendly professionals dedicated to keeping your smile healthy",
    href: "/pages/doctors",
    icon: "/images/svg/privacy-shortcut-stethoscope.svg",
    iconWidth: 26,
    iconHeight: 26,
  },
  {
    title: "Call Us",
    description: "Have questions or need help booking? Reach out directly, our team is happy to assist.",
    href: "/pages/contact",
    icon: "/images/svg/privacy-shortcut-phone.svg",
    iconWidth: 25,
    iconHeight: 25,
  },
  {
    title: "Our Location",
    description: "Find us easily with our clinic's full address and map directions for your next visit.",
    href: "/pages/contact",
    icon: "/images/svg/privacy-shortcut-map-pin.svg",
    iconWidth: 22,
    iconHeight: 28,
  },
] as const;

const caretRightIcon = "/images/svg/privacy-shortcut-caret-right.svg";

export function LegalShortcutSection() {
  return (
    <section className="bg-(--background-weak-50) px-[16px] pb-[64px] sm:px-[20px] sm:pb-[80px]">
      <div className="mx-auto grid w-full max-w-[1400px] gap-[16px] md:grid-cols-2 md:gap-[20px] xl:grid-cols-4 xl:gap-[24px]">
        {shortcutItems.map((item) => (
          <article className="flex h-full flex-col gap-[64px] rounded-[16px] border border-[#CACFD8] bg-(--background-white-0) p-[24px]" key={item.title}>
            <div className="flex h-[64px] w-[64px] items-center justify-center rounded-full border border-[#E1E4EA]">
              <Image alt="" aria-hidden height={item.iconHeight} src={item.icon} width={item.iconWidth} />
            </div>

            <div className="flex flex-1 flex-col gap-[24px]">
              <div className="flex flex-col gap-[12px]">
                <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
                  {item.title}
                </h2>
                <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">
                  {item.description}
                </p>
              </div>

              <Link
                className="inline-flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--button-primary-base)"
                href={item.href}
              >
                Learn More
                <Image alt="" aria-hidden height={14} src={caretRightIcon} width={8} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

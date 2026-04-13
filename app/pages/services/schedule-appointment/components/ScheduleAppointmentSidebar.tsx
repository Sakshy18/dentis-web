import Image from "next/image";
import {
  contactEmailIcon,
  contactLocationIcon,
  contactPhoneIcon,
  logoMark,
  mapImage,
} from "./constants";

export function ScheduleAppointmentSidebar() {
  return (
    <aside className="rounded-[16px] bg-(--background-white-0) p-[16px] lg:h-[966px] lg:p-[48px]">
      <div className="flex h-full flex-col gap-[24px] lg:gap-[40px]">
        <div className="flex items-center gap-[6px]">
          <Image alt="" aria-hidden className="h-[24px] w-[24px]" height={24} src={logoMark} width={24} />
          <span className="text-[16px] font-medium leading-[1.4] tracking-[-0.32px] text-(--text-strong-950)">Dentis</span>
        </div>

        <div className="flex flex-1 flex-col gap-[24px]">
          <div className="space-y-[8px]">
            <p className="text-[20px] font-medium leading-[1.4] tracking-[-0.4px] text-(--text-strong-950)">
              Your Dental Companion
            </p>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
              Using modern equipment and patient-centered approaches, our experienced team ensures every treatment is
              performed with precision and care.
            </p>
          </div>

          <div className="space-y-[12px]">
            <div className="flex items-start gap-[8px]">
              <span className="mt-px flex size-[24px] shrink-0 items-center justify-center">
                <Image alt="" aria-hidden className="size-[20px]" height={24} src={contactPhoneIcon} width={24} />
              </span>
              <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                +82-1234-5678
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <span className="mt-px flex size-[24px] shrink-0 items-center justify-center">
                <Image alt="" aria-hidden className="h-[16px] w-[20px]" height={24} src={contactEmailIcon} width={24} />
              </span>
              <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                hello@dental.com
              </p>
            </div>
            <div className="flex items-start gap-[8px]">
              <span className="mt-px flex size-[24px] shrink-0 items-center justify-center">
                <Image alt="" aria-hidden className="h-[21px] w-[17px]" height={24} src={contactLocationIcon} width={24} />
              </span>
              <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                430 Gyeongin-ro, Guro District, Seoul, South Korea
              </p>
            </div>
          </div>

          <div className="relative h-[220px] overflow-hidden rounded-[10px]">
            <Image
              alt="Map near Dentis clinic"
              className="object-cover object-center"
              fill
              sizes="(max-width: 1023px) 100vw, 404px"
              src={mapImage}
            />
            <a
              className="absolute bottom-[16px] left-1/2 flex h-[40px] w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center rounded-[99999px] bg-(--text-strong-950) px-[16px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-white-0)"
              href="https://maps.google.com/?q=430+Gyeongin-ro,+Guro+District,+Seoul,+South+Korea"
              rel="noopener noreferrer"
              target="_blank"
            >
              Direct to Google Maps
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}

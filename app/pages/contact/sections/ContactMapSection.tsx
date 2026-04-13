import Image from "next/image";

const contactMapImage = "/images/png/contact-map.jpg";

export function ContactMapSection() {
  return (
    <section className="bg-(--background-weak-50)">
      <div className="w-full overflow-hidden rounded-[10px] bg-(--background-white-0)">
        <div className="relative h-[620px] sm:h-[520px] lg:h-[420px]">
          <Image
            alt="Map near Dentis clinic"
            className="object-cover"
            fill
            loading="eager"
            sizes="(max-width: 640px) calc(100vw - 32px), (max-width: 1024px) calc(100vw - 80px), 1312px"
            src={contactMapImage}
          />

          <a
            className="absolute bottom-[16px] left-1/2 flex h-[48px] w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center rounded-[99999px] bg-(--text-strong-950) px-[22px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0) sm:bottom-[24px] sm:w-auto sm:min-w-[209px] lg:bottom-[48px] lg:left-[48px] lg:translate-x-0"
            href="https://maps.google.com/?q=430+Gyeongin-ro,+Guro+District,+Seoul,+South+Korea"
            rel="noopener noreferrer"
            target="_blank"
          >
            Direct to Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}

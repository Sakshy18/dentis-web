import Image from "next/image";

const doctorsDesktop = [
  {
    src: "/images/png/home-doctor-figma-1.png",
    x: 120,
    y: 277,
    innerX: 28,
    innerY: 44,
    innerW: 164,
    innerH: 246,
    shadow: true,
  },
  {
    src: "/images/png/home-doctor-figma-2.png",
    x: 610,
    y: 34,
    innerX: 28,
    innerY: 44,
    innerW: 164,
    innerH: 246,
    shadow: false,
  },
  {
    src: "/images/png/home-doctor-figma-3.png",
    x: 332,
    y: 700,
    innerX: 20,
    innerY: 20,
    innerW: 180,
    innerH: 270,
    shadow: false,
  },
  {
    src: "/images/png/home-doctor-figma-4.png",
    x: 880,
    y: 640,
    innerX: 27,
    innerY: 44,
    innerW: 164,
    innerH: 246,
    shadow: false,
  },
  {
    src: "/images/png/home-doctor-figma-5.png",
    x: 1100,
    y: 147,
    innerX: 27,
    innerY: 44,
    innerW: 164,
    innerH: 246,
    shadow: false,
  },
];

const doctorsMobile = doctorsDesktop.map((doctor) => ({ src: doctor.src }));

export function HomeDoctorsSection() {
  return (
    <section className="overflow-hidden bg-[var(--background-weak-50)] px-[20px] py-[72px] sm:px-[40px] sm:py-[88px] lg:px-0 lg:py-0">
      <div className="mx-auto w-full max-w-[393px] sm:hidden">
        <div className="relative min-h-[944px] w-full">
          <div className="absolute left-1/2 top-[60px] h-[140px] w-[105px] -translate-x-1/2 overflow-hidden rounded-[5.793px] bg-[var(--background-soft-200)]">
            <div className="absolute bottom-0 left-1/2 h-[117px] w-[78px] -translate-x-1/2">
              <Image alt="" className="h-full w-full object-cover" height={117} src={doctorsMobile[1].src} width={78} />
            </div>
          </div>
          <div className="absolute left-[16px] top-[253px] h-[140px] w-[105px] overflow-hidden rounded-[5.793px] bg-[var(--background-soft-200)] shadow-[-1.931px_1.931px_1.931px_0px_rgba(0,0,0,0.1)]">
            <div className="absolute bottom-0 left-1/2 h-[117px] w-[78px] -translate-x-1/2">
              <Image alt="" className="h-full w-full object-cover" height={117} src={doctorsMobile[0].src} width={78} />
            </div>
          </div>
          <div className="absolute right-[20px] top-[195px] h-[140px] w-[105px] overflow-hidden rounded-[5.793px] bg-[var(--background-soft-200)]">
            <div className="absolute bottom-0 left-1/2 h-[117px] w-[78px] -translate-x-1/2">
              <Image alt="" className="h-full w-full object-cover" height={117} src={doctorsMobile[2].src} width={78} />
            </div>
          </div>

          <div className="absolute left-1/2 top-[343px] flex w-[361px] -translate-x-1/2 flex-col items-center gap-[16px]">
            <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[12px] py-[4px]">
              <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--primary-700)]">
                •
              </span>
              <span className="text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[var(--primary-700)]">
                Our Doctors
              </span>
            </div>
            <div className="w-full text-center text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-[var(--text-strong-950)]">
              <p>Experienced. Caring.</p>
              <p>Here for You.</p>
            </div>
          </div>

          <div className="absolute left-[80px] top-[640px] h-[140px] w-[105px] overflow-hidden rounded-[5.793px] bg-[var(--background-soft-200)]">
            <div className="absolute bottom-0 left-1/2 h-[126px] w-[84px] -translate-x-1/2">
              <Image alt="" className="h-full w-full object-cover" height={126} src={doctorsMobile[3].src} width={84} />
            </div>
          </div>
          <div className="absolute right-[40px] top-[709px] h-[140px] w-[105px] overflow-hidden rounded-[5.793px] bg-[var(--background-soft-200)]">
            <div className="absolute bottom-0 left-1/2 h-[117px] w-[78px] -translate-x-1/2">
              <Image alt="" className="h-full w-full object-cover" height={117} src={doctorsMobile[4].src} width={78} />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto hidden w-full max-w-[1312px] flex-col items-center gap-[40px] sm:flex lg:hidden">
        <div className="flex w-full max-w-[489px] flex-col items-center gap-[16px]">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Our Doctors
            </span>
          </div>
          <div className="w-full text-center text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-[var(--text-strong-950)] sm:text-[40px] sm:tracking-[-0.8px]">
            <p>Experienced. Caring.</p>
            <p>Here for You.</p>
          </div>
        </div>

        <div className="grid w-full grid-cols-3 gap-[12px]">
          {doctorsMobile.map((doctor, index) => (
            <div
              key={`${doctor.src}-${index}`}
              className="relative h-[220px] overflow-hidden rounded-[12px] bg-[var(--background-soft-200)] sm:h-[260px]"
            >
              <Image
                alt="Doctor portrait"
                className="object-cover object-bottom"
                fill
                sizes="(max-width: 640px) 45vw, 30vw"
                src={doctor.src}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="relative left-1/2 hidden h-[1024px] w-[1440px] -translate-x-1/2 lg:block">
        {doctorsDesktop.map((doctor) => (
          <div
            key={`${doctor.x}-${doctor.y}`}
            className={`absolute h-[290px] w-[220px] overflow-hidden rounded-[12px] bg-[var(--background-soft-200)] ${doctor.shadow ? "shadow-[-4px_4px_4px_0px_rgba(0,0,0,0.1)]" : ""}`}
            style={{ left: `${doctor.x}px`, top: `${doctor.y}px` }}
          >
            <div
              className="absolute"
              style={{
                left: `${doctor.innerX}px`,
                top: `${doctor.innerY}px`,
                width: `${doctor.innerW}px`,
                height: `${doctor.innerH}px`,
              }}
            >
              <Image
                alt=""
                className="h-full w-full object-cover"
                height={doctor.innerH}
                src={doctor.src}
                width={doctor.innerW}
              />
            </div>
          </div>
        ))}

        <div className="absolute left-[476px] top-[428px] flex w-[489px] flex-col items-center gap-[16px]">
          <div className="flex items-center gap-[8px] rounded-[50px] border border-[var(--primary-700)] px-[16px] py-[4px]">
            <span className="text-[20px] font-normal leading-[1.6] tracking-[-0.4px] text-[var(--primary-700)]">
              •
            </span>
            <span className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-[var(--primary-700)]">
              Our Doctors
            </span>
          </div>

          <div className="w-full text-center text-[40px] font-medium leading-[1.4] tracking-[-0.8px] text-[var(--text-strong-950)]">
            <p>Experienced. Caring.</p>
            <p>Here for You.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

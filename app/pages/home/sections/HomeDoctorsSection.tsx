import Image from "next/image";

const doctors = [
  { src: "/images/png/home-doctor-1.png", x: 120, y: 277, innerX: 28, innerY: 44, innerW: 164, innerH: 246, shadow: true },
  { src: "/images/png/home-doctor-2.png", x: 610, y: 34, innerX: 28, innerY: 44, innerW: 164, innerH: 246, shadow: false },
  { src: "/images/png/home-doctor-3.png", x: 332, y: 700, innerX: 20, innerY: 20, innerW: 180, innerH: 270, shadow: false },
  { src: "/images/png/home-doctor-4.png", x: 880, y: 640, innerX: 27, innerY: 44, innerW: 164, innerH: 246, shadow: false },
  { src: "/images/png/home-doctor-5.png", x: 1100, y: 147, innerX: 27, innerY: 44, innerW: 164, innerH: 246, shadow: false },
];

export function HomeDoctorsSection() {
  return (
    <section className="h-[1024px] w-full bg-[var(--background-weak-50)]">
      <div className="relative mx-auto h-full w-full max-w-[1440px]">
        {doctors.map((doctor) => (
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

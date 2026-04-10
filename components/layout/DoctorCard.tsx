import Image from "next/image";

export type DoctorCardProps = {
  role: string;
  name: string;
  desktopImage: string;
  mobileImage: string;
  roleSmall?: boolean;
};

export function DoctorCard({
  role,
  name,
  desktopImage,
  mobileImage,
  roleSmall = false,
}: DoctorCardProps) {
  return (
    <>
      <article className="relative h-[480px] w-full overflow-hidden rounded-[12px] bg-[var(--background-soft-200)] lg:hidden">
        <div className="absolute bottom-0 left-1/2 h-[440px] w-[293px] -translate-x-1/2">
          <Image
            alt={name}
            className="object-cover"
            fill
            sizes="(max-width: 1023px) 293px"
            src={mobileImage}
          />
        </div>
        <div className="absolute bottom-[16px] left-1/2 w-[329px] -translate-x-1/2 rounded-[8px] bg-[var(--background-white-0)] p-[16px]">
          <p
            className={`font-normal leading-[1.6] text-[var(--text-sub-500)] ${
              roleSmall
                ? "text-[12px] tracking-[-0.24px]"
                : "text-[14px] tracking-[-0.28px]"
            }`}
          >
            {role}
          </p>
          <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-[var(--text-strong-950)]">
            {name}
          </p>
        </div>
      </article>

      <article className="relative hidden h-[386px] overflow-hidden rounded-[16px] bg-[var(--background-soft-200)] lg:block">
        <div className="absolute bottom-0 left-1/2 h-[360px] w-[240px] -translate-x-1/2">
          <Image
            alt={name}
            className="object-cover"
            fill
            sizes="240px"
            src={desktopImage}
          />
        </div>
        <div className="absolute bottom-0 left-1/2 w-[290px] -translate-x-1/2 p-[16px]">
          <div className="rounded-[12px] bg-[var(--background-white-0)] px-[16px] py-[12px]">
            <p
              className={`font-normal leading-[1.6] text-[var(--text-sub-500)] ${
                roleSmall
                  ? "text-[12px] tracking-[-0.24px]"
                  : "text-[14px] tracking-[-0.28px]"
              }`}
            >
              {role}
            </p>
            <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-[var(--text-strong-950)]">
              {name}
            </p>
          </div>
        </div>
      </article>
    </>
  );
}

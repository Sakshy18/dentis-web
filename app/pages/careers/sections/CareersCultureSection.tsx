import Image from "next/image";

const purposeImage = "/images/png/careers-purpose-team.jpg";
const workplaceImage = "/images/png/careers-workplace-team.jpg";

export function CareersCultureSection() {
  return (
    <section className="bg-(--background-weak-50) px-[12px] pb-[80px] pt-[40px] sm:px-[40px] sm:pb-[104px] sm:pt-[64px]">
      <div className="mx-auto grid w-full max-w-[1312px] grid-cols-1 gap-[40px] sm:grid-cols-2 sm:items-end">
        <div className="flex w-full min-w-0 flex-col gap-[32px] sm:gap-[40px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--background-primary-700)">
              Grow Your Career with Purpose
            </h2>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
              Join a supportive dental team that values integrity, collaboration, and continuous professional development.
            </p>
          </div>

          <div className="relative h-[216px] w-full overflow-hidden rounded-[10px] sm:h-[400px]">
            <Image
              alt="Dental professionals greeting a child and parent in a clinic"
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 636px"
              src={purposeImage}
            />
          </div>

          <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) sm:px-[4px] sm:pt-[48px] lg:pt-[96px]">
            For details on available positions, or a conversation about joining us, feel free to reach out to our
            recruitment team at: <span className="text-(--background-primary-700)">recruitment@dental.com</span>.
          </p>
        </div>

        <div className="flex w-full min-w-0 flex-col gap-[16px] sm:gap-[56px]">
          <div className="flex flex-col gap-[16px]">
            <h2 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--background-primary-700)">
              A Workplace Built on Trust and Care
            </h2>
            <p className="text-[18px] font-normal leading-[1.6] tracking-[-0.36px] text-(--text-sub-500)">
              We foster a respectful and inclusive environment where your skills are valued and your growth is
              encouraged.
            </p>
          </div>

          <div className="relative h-[364px] w-full overflow-hidden rounded-[10px] sm:h-[720px]">
            <Image
              alt="Dental team meeting around a desk"
              className="object-cover"
              fill
              sizes="(max-width: 640px) 100vw, 636px"
              src={workplaceImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const aboutStoryLeftDesktop = "/images/png/about-story-left-desktop.jpg";
const aboutStoryRightDesktop = "/images/png/about-story-right-desktop.jpg";
const aboutStoryLeftMobile = aboutStoryLeftDesktop;
const aboutStoryRightMobile = aboutStoryRightDesktop;

function AboutStoryColumn({
  title,
  description,
  imageDesktop,
  imageMobile,
  imageHeightClass,
}: {
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile: string;
  imageHeightClass: string;
}) {
  return (
    <div className="flex w-full flex-col gap-[16px] lg:w-[636px] lg:gap-[56px]">
      <div className="flex flex-col gap-[4px] lg:gap-[16px]">
        <h2 className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-[var(--primary-700)] lg:text-[24px] lg:font-medium lg:leading-[1.4] lg:tracking-[-0.48px]">
          {title}
        </h2>
        <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[var(--text-sub-500)] lg:text-[18px] lg:tracking-[-0.36px]">
          {description}
        </p>
      </div>

      <div className={`relative overflow-hidden rounded-[8px] ${imageHeightClass}`}>
        <Image
          alt=""
          className="object-cover lg:hidden"
          fill
          sizes="(max-width: 1023px) 100vw"
          src={imageMobile}
        />
        <Image
          alt=""
          className="hidden object-cover lg:block"
          fill
          sizes="(min-width: 1024px) 636px"
          src={imageDesktop}
        />
      </div>
    </div>
  );
}

export function AboutStorySection() {
  return (
    <section className="bg-[var(--background-weak-50)] px-[16px] py-[40px] lg:px-[64px] lg:pb-[104px] lg:pt-[64px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[32px] lg:flex-row lg:items-start lg:gap-[40px]">
        <AboutStoryColumn
          description="Founded with a vision to provide reliable and compassionate dental care, our clinic began as a small practice dedicated to serving the local community."
          imageDesktop={aboutStoryLeftDesktop}
          imageHeightClass="h-[230px] lg:h-[400px]"
          imageMobile={aboutStoryLeftMobile}
          title="Driven by care, guided by integrity"
        />
        <AboutStoryColumn
          description="Over the years, we've grown-welcoming more patients, expanding our services, and embracing modern technology-while staying true to our roots."
          imageDesktop={aboutStoryRightDesktop}
          imageHeightClass="h-[410px] lg:h-[720px]"
          imageMobile={aboutStoryRightMobile}
          title="Built on trust, care, and a passion"
        />
      </div>
    </section>
  );
}

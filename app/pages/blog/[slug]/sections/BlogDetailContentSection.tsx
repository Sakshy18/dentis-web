import Image from "next/image";
import type { BlogPost } from "../../data/blogPosts";

const shareIcon = "/images/svg/blog-share-figma.svg";
const socialIcons = [
  { alt: "Facebook", src: "/images/svg/contact-facebook.svg" },
  { alt: "X", src: "/images/svg/contact-x.svg" },
  { alt: "Instagram", src: "/images/svg/contact-instagram.svg" },
  { alt: "TikTok", src: "/images/svg/contact-tiktok.svg" },
] as const;

const defaultHeadings = [
  "Healthy habits start before the first tooth shows",
  "Let them lead, but don't let go just yet.",
  "A healthy diet is just as important as a toothbrush",
] as const;

type BlogDetailContentSectionProps = {
  post: BlogPost;
};

export function BlogDetailContentSection({ post }: BlogDetailContentSectionProps) {
  const intro = post.content[0] ?? post.excerpt;
  const detailParagraphs = Array.from({ length: 3 }, (_, index) => post.content[index + 1] ?? post.excerpt);

  return (
    <section className="px-[12px] pb-[72px] pt-[40px] sm:px-[20px] sm:pb-[104px] sm:pt-[64px]">
      <div className="mx-auto grid w-full max-w-[1312px] grid-cols-1 gap-[28px] lg:grid-cols-[868px_60px] lg:justify-center lg:gap-[92px]">
        <div className="flex flex-col gap-[24px] text-[16px] leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
          <p>{intro}</p>

          {detailParagraphs.map((paragraph, index) => (
            <article className="flex flex-col gap-[12px]" key={`${post.slug}-detail-${index + 1}`}>
              <h2 className="text-[16px] font-semibold leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
                {index + 1}. {defaultHeadings[index] ?? `Key insight ${index + 1}`}
              </h2>
              <p>{paragraph}</p>
            </article>
          ))}

          <p>
            No matter your child's age, staying consistent with dental care routines and regular checkups lays the
            groundwork for a lifetime of healthy smiles.
          </p>

          <div className="mt-[8px] rounded-[10px] bg-(--background-white-0) p-[16px] sm:mt-[12px] sm:p-[24px]">
            <div className="flex flex-col gap-[16px] sm:flex-row sm:items-end sm:justify-between sm:gap-[24px]">
              <div className="max-w-[348px]">
                <h3 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
                  Stay Up to Date
                </h3>
                <p className="mt-[8px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
                  Be the first to know about our special offers and expert dental tips, delivered straight to you
                </p>
              </div>

              <div className="w-full sm:max-w-[472px]">
                <label className="sr-only" htmlFor="blog-detail-subscribe-email">
                  Enter your email
                </label>
                <div className="flex items-center gap-[8px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) p-[8px] pl-[16px] sm:pl-[24px]">
                  <input
                    className="w-full bg-transparent text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-soft-400) outline-none"
                    id="blog-detail-subscribe-email"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <button
                    className="shrink-0 rounded-[99999px] bg-(--button-primary-base) px-[18px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-white-0)"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <aside className="hidden flex-col items-start gap-[16px] lg:flex">
          <button
            aria-label="Share this article"
            className="inline-flex h-[32px] w-[32px] items-center justify-center"
            type="button"
          >
            <Image alt="" aria-hidden className="h-[32px] w-[32px]" height={32} loading="lazy" sizes="32px" src={shareIcon} width={32} />
          </button>

          <span className="h-px w-[32px] bg-[#CACFD8]" />

          <div className="flex flex-col gap-[12px]">
            {socialIcons.map((icon) => (
              <button
                aria-label={icon.alt}
                className="relative inline-flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#CACFD8]"
                key={icon.alt}
                type="button"
              >
                <Image
                  alt=""
                  aria-hidden
                  className="relative z-10 h-[16px] w-[16px]"
                  height={16}
                  loading="lazy"
                  sizes="16px"
                  src={icon.src}
                  width={16}
                />
              </button>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

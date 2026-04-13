import Image from "next/image";
import Link from "next/link";
import { featuredBlogPost } from "../data/blogPosts";

export function BlogHeroSection() {
  return (
    <section className="px-[12px] pb-[40px] pt-[116px] sm:px-[20px] sm:pb-[56px] sm:pt-[160px] lg:pt-[180px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[24px] lg:gap-[32px]">
        <div className="flex flex-col gap-[12px] lg:flex-row lg:items-end lg:justify-between">
          <h1 className="text-[48px] font-medium leading-none tracking-[-0.96px] text-(--text-strong-950) lg:text-[86px] lg:tracking-[-1.72px]">
            Blog
          </h1>
          <p className="max-w-[600px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500) lg:text-[18px] lg:tracking-[-0.36px]">
            {featuredBlogPost.heroSubtitle}
          </p>
        </div>

        <article className="overflow-hidden rounded-[16px] bg-(--background-white-0) lg:grid lg:grid-cols-[692px_1fr]">
          <div className="h-[173px] w-full overflow-hidden rounded-[12px] lg:h-[500px] lg:rounded-none lg:rounded-l-[16px]">
            <Image
              alt={featuredBlogPost.title}
              className="h-full w-full object-cover lg:scale-[1.08]"
              height={500}
              loading="eager"
              priority
              sizes="(max-width: 1024px) 100vw, 692px"
              src={featuredBlogPost.image}
              width={692}
            />
          </div>

          <div className="flex h-full flex-col justify-between gap-[20px] p-[16px] lg:p-[24px]">
            <div className="flex flex-col gap-[12px] lg:gap-[16px]">
              <h2 className="text-[28px] font-medium leading-[1.2] tracking-[-0.56px] text-(--text-strong-950) lg:text-[48px] lg:leading-none lg:tracking-[-0.96px]">
                <Link className="hover:opacity-85 transition-opacity" href={`/pages/blog/${featuredBlogPost.slug}`}>
                  {featuredBlogPost.title}
                </Link>
              </h2>

              <div className="flex items-center gap-[8px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-primary-700) lg:text-[16px] lg:tracking-[-0.32px]">
                <span>{featuredBlogPost.dateLabel}</span>
                <span className="h-[6px] w-[6px] rounded-full bg-(--text-primary-700)" />
                <span>{featuredBlogPost.readTime}</span>
              </div>

              <div className="flex items-center gap-[8px]">
                <div className="size-[20px] overflow-hidden rounded-full bg-(--background-weak-50) lg:size-[32px]">
                  <Image
                    alt=""
                    aria-hidden
                    className="h-full w-full object-cover"
                    height={32}
                    loading="lazy"
                    sizes="32px"
                    src={featuredBlogPost.authorAvatar}
                    width={32}
                  />
                </div>
                <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500) lg:text-[16px] lg:tracking-[-0.32px]">
                  {featuredBlogPost.authorName}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[16px] lg:gap-[24px]">
              <div className="flex flex-wrap items-center gap-[8px]">
                {featuredBlogPost.tags.map((tag) => (
                  <span
                    className="rounded-[999px] bg-[#E9EFFF] px-[12px] py-[3px] text-[12px] font-normal leading-[1.6] tracking-[-0.24px] text-[#191985] lg:px-[16px] lg:py-[4px] lg:text-[18px] lg:tracking-[-0.36px]"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500) lg:text-[16px] lg:tracking-[-0.32px]">
                {featuredBlogPost.excerpt}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { blogCategories, blogFeedPosts } from "../data/blogPosts";

const searchIcon = "/images/svg/careers-magnifying-glass.svg";

export function BlogArticlesSection() {
  return (
    <section className="px-[12px] pb-[72px] pt-[48px] sm:px-[20px] sm:pb-[104px] sm:pt-[80px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[48px] sm:gap-[60px]">
        <div className="flex flex-col gap-[16px] lg:flex-row lg:items-center lg:justify-between">
          <div className="-mx-[12px] flex gap-[12px] overflow-x-auto px-[12px] pb-[2px] scrollbar-hide sm:mx-0 sm:px-0">
            {blogCategories.map((category, index) => (
              <button
                className={`shrink-0 rounded-[16px] border px-[18px] py-[10px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] sm:px-[26px] sm:py-[13px] sm:text-[16px] sm:tracking-[-0.32px] ${
                  index === 0
                    ? "border-(--button-primary-base) bg-(--button-primary-base) text-(--text-white-0)"
                    : "border-(--stroke-soft-200) bg-(--background-white-0) text-(--text-strong-950)"
                }`}
                key={category}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="w-full max-w-none rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) p-[12px] lg:w-[320px] lg:max-w-[320px]">
            <label className="sr-only" htmlFor="blog-search">
              Search article
            </label>
            <div className="flex items-center gap-[8px]">
              <input
                className="h-[22px] w-full bg-transparent text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-soft-400) outline-none"
                id="blog-search"
                placeholder="Search article"
                type="text"
              />
              <Image alt="" aria-hidden className="h-[16px] w-[16px]" height={16} loading="lazy" src={searchIcon} width={16} />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-[40px] sm:gap-[48px]">
          <div className="grid w-full grid-cols-1 gap-[16px] sm:gap-[24px] lg:grid-cols-3">
            {blogFeedPosts.map((post) => (
              <article className="overflow-hidden rounded-[16px] bg-(--background-white-0)" key={post.slug}>
                <Link className="block h-[220px] overflow-hidden sm:h-[260px]" href={`/pages/blog/${post.slug}`}>
                  <Image
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
                    height={260}
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 421px"
                    src={post.image}
                    width={421}
                  />
                </Link>

                <div className="flex flex-col gap-[8px] p-[16px] sm:p-[24px]">
                  <h3 className="text-[24px] font-medium leading-[1.4] tracking-[-0.48px] text-(--text-strong-950)">
                    <Link className="hover:opacity-85 transition-opacity" href={`/pages/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h3>

                  <div className="flex items-center gap-[8px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-primary-700)">
                    <span>{post.dateLabel}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <button
            className="rounded-[99999px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[26px] py-[13px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)"
            type="button"
          >
            Load More Article
          </button>
        </div>
      </div>
    </section>
  );
}

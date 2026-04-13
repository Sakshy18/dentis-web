import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../../data/blogPosts";

type BlogDetailRelatedArticlesSectionProps = {
  posts: BlogPost[];
};

export function BlogDetailRelatedArticlesSection({ posts }: BlogDetailRelatedArticlesSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="px-[12px] pb-[72px] sm:px-[20px] sm:pb-[104px]">
      <div className="mx-auto flex w-full max-w-[1312px] flex-col gap-[32px] sm:gap-[48px]">
        <div className="flex items-end justify-between">
          <h2 className="text-[32px] font-medium leading-[1.4] tracking-[-0.64px] text-(--text-strong-950)">Related Articles</h2>
          <Link
            className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950) transition-opacity hover:opacity-75"
            href="/pages/blog"
          >
            See All
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-[16px] sm:gap-[24px] lg:grid-cols-3">
          {posts.map((post) => (
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
                  <Link className="transition-opacity hover:opacity-80" href={`/pages/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                <div className="flex items-center gap-[8px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[#191985]">
                  <span>{post.dateLabel}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

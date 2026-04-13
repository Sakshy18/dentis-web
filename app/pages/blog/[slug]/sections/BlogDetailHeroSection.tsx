import Image from "next/image";
import type { BlogPost } from "../../data/blogPosts";

type BlogDetailHeroSectionProps = {
  post: BlogPost;
};

export function BlogDetailHeroSection({ post }: BlogDetailHeroSectionProps) {
  return (
    <section className="pt-[116px] sm:pt-[156px]">
      <div className="mx-auto w-full max-w-[1312px] px-[12px] pb-[20px] sm:px-[20px] sm:pb-[28px]">
        <h1 className="text-[34px] font-medium leading-[1.4] tracking-[-0.68px] text-(--text-strong-950) sm:text-[40px] sm:tracking-[-0.8px]">
          {post.title}
        </h1>

        <div className="mt-[10px] flex flex-wrap items-center gap-x-[14px] gap-y-[8px]">
          <div className="flex items-center gap-[8px] text-[#191985]">
            <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px]">{post.dateLabel}</p>
            <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px]">•</span>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px]">{post.readTime}</p>
          </div>

          <div className="flex items-center gap-[8px]">
            <div className="size-[28px] overflow-hidden rounded-[99999px] bg-(--background-white-0)">
              <Image
                alt=""
                aria-hidden
                className="h-full w-full object-cover"
                height={28}
                loading="lazy"
                sizes="28px"
                src={post.authorAvatar}
                width={28}
              />
            </div>
            <p className="text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">{post.authorName}</p>
          </div>
        </div>
      </div>

      <div className="h-[260px] w-full overflow-hidden sm:h-[512px]">
        <Image
          alt={post.title}
          className="h-full w-full object-cover"
          height={512}
          loading="eager"
          priority
          sizes="100vw"
          src={post.image}
          width={1440}
        />
      </div>
    </section>
  );
}

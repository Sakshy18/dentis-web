import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { getBlogPostBySlug, getRelatedBlogPosts } from "../data/blogPosts";
import { BlogDetailContentSection } from "./sections/BlogDetailContentSection";
import { BlogDetailHeroSection } from "./sections/BlogDetailHeroSection";
import { BlogDetailRelatedArticlesSection } from "./sections/BlogDetailRelatedArticlesSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

type BlogDetailPageProps = {
  slug: string;
};

export function BlogDetailPage({ slug }: BlogDetailPageProps) {
  const post = getBlogPostBySlug(slug);
  const relatedPosts = getRelatedBlogPosts(slug, 3);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-(--background-weak-50)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main>
        <MotionFadeIn>
          <BlogDetailHeroSection post={post} />
        </MotionFadeIn>
        <MotionFadeIn delay={0.06}>
          <BlogDetailContentSection post={post} />
        </MotionFadeIn>
        <MotionFadeIn delay={0.1}>
          <BlogDetailRelatedArticlesSection posts={relatedPosts} />
        </MotionFadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

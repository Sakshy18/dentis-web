import { blogPosts } from "../data/blogPosts";
import { BlogDetailPage } from "./BlogDetailPage";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function Page({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogDetailPage slug={slug} />;
}

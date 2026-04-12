import { careerJobs } from "../data/jobs";
import { CareerJobDetailPage } from "./CareerJobDetailPage";

type CareerJobPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return careerJobs.map((job) => ({ slug: job.slug }));
}

export default async function Page({ params }: CareerJobPageProps) {
  const { slug } = await params;
  return <CareerJobDetailPage slug={slug} />;
}

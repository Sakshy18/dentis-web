import { serviceDetails } from "../data/serviceDetails";
import { ServiceDetailPage } from "./ServiceDetailPage";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export default async function Page({ params }: ServicePageProps) {
  const { slug } = await params;
  return <ServiceDetailPage slug={slug} />;
}

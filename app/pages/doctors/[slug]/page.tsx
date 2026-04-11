import { doctors } from "../data/doctors";
import { DoctorDetailPage } from "./DoctorDetailPage";

type DoctorPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return doctors.map((doctor) => ({ slug: doctor.slug }));
}

export default async function Page({ params }: DoctorPageProps) {
  const { slug } = await params;
  return <DoctorDetailPage slug={slug} />;
}

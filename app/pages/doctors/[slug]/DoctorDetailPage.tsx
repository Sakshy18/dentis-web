import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";
import { getDoctorBySlug } from "../data/doctors";
import { DoctorAppointmentSection } from "./sections/DoctorAppointmentSection";
import { DoctorProfileSection } from "./sections/DoctorProfileSection";

type DoctorDetailPageProps = {
  slug: string;
};

export function DoctorDetailPage({ slug }: DoctorDetailPageProps) {
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="bg-(--background-white-0)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main className="bg-(--background-weak-50) pb-[40px] pt-[100px] sm:pb-[104px] sm:pt-[160px]">
        <MotionFadeIn>
          <DoctorProfileSection doctor={doctor} />
        </MotionFadeIn>
        <MotionFadeIn delay={0.08}>
          <DoctorAppointmentSection doctor={doctor} />
        </MotionFadeIn>
      </main>

      <SiteFooter />
    </div>
  );
}

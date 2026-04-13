import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MotionFadeIn } from "@/components/ui/MotionFadeIn";

const notFoundIllustration = "/images/png/404-illus.png";

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-(--background-weak-50)">
      <div className="pointer-events-none fixed left-1/2 top-0 z-50 w-full -translate-x-1/2 px-[12px] pt-[12px] sm:top-[32px] sm:w-[calc(100%-40px)] sm:max-w-[1400px] sm:px-0 sm:pt-0">
        <div className="pointer-events-auto">
          <SiteHeader mobilePanel />
        </div>
      </div>

      <main className="px-[16px] pb-[48px] pt-[120px] sm:px-[20px] sm:pt-[140px]">
        <MotionFadeIn className="mx-auto w-full max-w-[560px]">
          <section className="flex flex-col items-center gap-[40px] sm:min-h-[calc(100vh-188px)] sm:justify-center">
          <div className="flex flex-col items-center gap-[8px]">
            <Image
              alt="404 mark with tooth illustration"
              height={301}
              priority
              src={notFoundIllustration}
              style={{ height: "auto", width: "auto" }}
              width={320}
            />

            <h1 className="text-center text-[32px] font-bold leading-[1.4] tracking-[-0.64px] text-(--button-primary-base)">
              Page Not Found
            </h1>
          </div>

          <div className="flex w-full flex-col items-center gap-[24px]">
            <p className="max-w-[560px] text-center text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
              We couldn&apos;t find the page you&apos;re looking for. It might have been moved, deleted, or never existed.
              Let&apos;s get you back on track
            </p>

            <Link
              className="inline-flex h-[52px] items-center justify-center rounded-[99999px] bg-(--button-primary-base) px-[26px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0)"
              href="/pages/home"
            >
              Back to Home
            </Link>
          </div>
          </section>
        </MotionFadeIn>
      </main>
      <SiteFooter />
    </div>
  );
}

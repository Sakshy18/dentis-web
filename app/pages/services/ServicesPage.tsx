import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

export function ServicesPage() {
  return (
    <div className="bg-[var(--background-white-0)]">
      <div className="mx-auto w-[1440px] py-[20px]">
        <SiteHeader />
      </div>
      <main className="mx-auto flex h-[720px] w-[1440px] items-center justify-center">
        <h1 className="text-[64px] font-medium leading-[1] tracking-[-1.28px] text-[var(--text-strong-950)]">
          Services
        </h1>
      </main>
      <SiteFooter />
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { serviceDetails } from "@/app/pages/services/data/serviceDetails";

const logoMark = "/images/svg/site-logo.svg";
const caretDown = "/images/svg/caret-down.svg";

const menuItems = [
  { label: "Home", href: "/pages/home" },
  { label: "Service", href: "/pages/services", hasCaret: true },
  { label: "Doctor", href: "/pages/home#doctors" },
  { label: "About Us", href: "/pages/about" },
  { label: "Blog", href: "#" },
  { label: "Career", href: "#" },
];

type SiteHeaderProps = {
  mobileOverlay?: boolean;
  mobilePanel?: boolean;
};

export function SiteHeader({ mobileOverlay = false, mobilePanel = false }: SiteHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);

  const isPathActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isServicesPath = pathname === "/pages/services" || pathname.startsWith("/pages/services/");

  useEffect(() => {
    setIsServiceDropdownOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isServiceDropdownOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        setIsServiceDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [isServiceDropdownOpen]);

  return (
    <div className="relative" ref={headerRef}>
      <nav
        className={`mx-auto flex h-[64px] w-full items-center justify-between rounded-[50px] px-[16px] py-[12px] sm:px-[20px] lg:max-w-[1400px] lg:px-[24px] ${
          mobileOverlay
            ? "bg-transparent lg:bg-[var(--background-white-0)]"
            : "bg-[var(--background-white-0)]"
        }`}
      >
        <div
          className="flex items-center gap-[8px] rounded-[8px]"
          style={mobileOverlay ? { ["--fill-0" as string]: "#FFFFFF" } : undefined}
        >
          <Link className="flex items-center gap-[8px]" href="/pages/home">
            <Image alt="Dentis logo" className="h-4 w-4" height={16} src={logoMark} width={16} />
            <p
              className={`text-[18px] font-medium leading-[1.6] tracking-[-0.36px] ${
                mobileOverlay ? "text-[var(--text-white-0)] lg:text-[var(--text-strong-950)]" : "text-[var(--text-strong-950)]"
              }`}
            >
              Dentis
            </p>
          </Link>
        </div>

        <div className="hidden items-center justify-center gap-[24px] rounded-[8px] px-[4px] py-[7px] lg:flex xl:gap-[32px]">
          {menuItems.map((item) => {
            const isActive = isPathActive(item.href);

            if (item.hasCaret) {
              return (
                <button
                  aria-controls="services-dropdown"
                  aria-expanded={isServiceDropdownOpen}
                  className={`flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                    isActive || isServiceDropdownOpen ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                  }`}
                  key={item.label}
                  onClick={() => setIsServiceDropdownOpen((prev) => !prev)}
                  type="button"
                >
                  {item.label}
                  <span className="flex h-5 w-5 items-center justify-center">
                    <Image
                      alt=""
                      aria-hidden
                      className={`h-[7.5px] w-[13.75px] transition-transform ${isServiceDropdownOpen ? "rotate-180" : ""}`}
                      height={8}
                      src={caretDown}
                      width={14}
                    />
                  </span>
                </button>
              );
            }

            return (
              <Link
                key={item.label}
                className={`flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                  isActive ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                }`}
                href={item.href}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {mobilePanel ? (
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="flex size-[36px] items-center justify-center rounded-[99999px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] lg:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            type="button"
          >
            <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
            <span className="flex h-[12px] w-[14px] flex-col justify-between">
              <span className="block h-[1.6px] w-full rounded-full bg-[var(--text-strong-950)]" />
              <span className="block h-[1.6px] w-full rounded-full bg-[var(--text-strong-950)]" />
              <span className="block h-[1.6px] w-full rounded-full bg-[var(--text-strong-950)]" />
            </span>
          </button>
        ) : (
          <button className="rounded-[99999px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] px-[14px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] sm:px-[18px]">
            Contact Us
          </button>
        )}

        <button className="hidden rounded-[99999px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] px-[14px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-strong-950)] lg:block lg:px-[18px]">
          Contact Us
        </button>
      </nav>

      {isServiceDropdownOpen ? (
        <div
          className="absolute left-1/2 top-[76px] z-50 hidden w-[min(980px,calc(100vw-48px))] -translate-x-1/2 rounded-[20px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] p-[14px] shadow-[0_12px_28px_rgba(0,0,0,0.12)] lg:block"
          id="services-dropdown"
        >
          <div className="grid grid-cols-3 gap-[12px]">
            <Link
              className="relative col-span-1 row-span-2 overflow-hidden rounded-[14px]"
              href="/pages/services#services-pricing"
              onClick={() => setIsServiceDropdownOpen(false)}
            >
              <Image
                alt="All services"
                className="object-cover"
                fill
                sizes="(max-width: 1200px) 30vw, 280px"
                src={serviceDetails[0].image}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div className="absolute bottom-[14px] left-[14px] right-[14px] rounded-[10px] bg-white/90 px-[12px] py-[10px]">
                <p className="text-[16px] font-semibold leading-[1.4] tracking-[-0.32px] text-[var(--text-strong-950)]">
                  All Services
                </p>
                <p className="text-[13px] font-medium leading-[1.6] tracking-[-0.26px] text-[var(--text-sub-500)]">
                  View complete pricing section
                </p>
              </div>
            </Link>

            {serviceDetails.map((service) => (
              <Link
                className="flex items-center gap-[10px] rounded-[14px] border border-[var(--stroke-soft-200)] p-[8px] transition-colors hover:bg-[var(--background-weak-50)]"
                href={`/pages/services/${service.slug}`}
                key={service.slug}
                onClick={() => setIsServiceDropdownOpen(false)}
              >
                <div className="relative hidden h-[72px] w-[94px] overflow-hidden rounded-[10px] xl:block">
                  <Image
                    alt={service.title}
                    className={`h-full w-full ${service.imageClass}`}
                    fill
                    sizes="94px"
                    src={service.image}
                  />
                </div>
                <div className="min-w-0">
                  <p className="line-clamp-2 text-[15px] font-medium leading-[1.4] tracking-[-0.3px] text-[var(--text-strong-950)]">
                    {service.title}
                  </p>
                  <p className="mt-[3px] text-[13px] font-medium leading-[1.6] tracking-[-0.26px] text-[var(--text-sub-500)]">
                    Open detail page
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      {mobilePanel && isMenuOpen ? (
        <div className="absolute left-0 right-0 top-[76px] z-50 rounded-[20px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] p-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] lg:hidden">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    className={`block rounded-[10px] px-[12px] py-[10px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                      isPathActive(item.href) ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                    }`}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>

                  {item.hasCaret ? (
                    <div className="mb-[8px] ml-[16px] mt-[-2px] flex flex-col gap-[2px]">
                      <Link
                        className={`rounded-[8px] px-[8px] py-[8px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] ${
                          isServicesPath ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                        }`}
                        href="/pages/services#services-pricing"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        All Services
                      </Link>
                      {serviceDetails.map((service) => (
                        <Link
                          className={`rounded-[8px] px-[8px] py-[8px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] ${
                            pathname === `/pages/services/${service.slug}`
                              ? "text-[var(--text-strong-950)]"
                              : "text-[var(--text-sub-500)]"
                          }`}
                          href={`/pages/services/${service.slug}`}
                          key={service.slug}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            <button className="mt-[12px] rounded-[99999px] bg-[var(--button-primary-base)] px-[18px] py-[9px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-[var(--text-white-0)]">
              Contact Us
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

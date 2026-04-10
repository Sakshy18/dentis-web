"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const pathname = usePathname();

  const isPathActive = (href: string) => {
    if (!href.startsWith("/")) return false;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="relative">
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
            return (
              <Link
                key={item.label}
                className={`flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                  isActive ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                }`}
                href={item.href}
              >
                {item.label}
                {item.hasCaret ? (
                  <span className="flex h-5 w-5 items-center justify-center">
                    <Image
                      alt=""
                      aria-hidden
                      className="h-[7.5px] w-[13.75px]"
                      height={8}
                      src={caretDown}
                      width={14}
                    />
                  </span>
                ) : null}
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

      {mobilePanel && isMenuOpen ? (
        <div className="absolute left-0 right-0 top-[76px] z-50 rounded-[20px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] p-[20px] shadow-[0_10px_24px_rgba(0,0,0,0.08)] lg:hidden">
            <div className="flex flex-col">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  className={`rounded-[10px] px-[12px] py-[10px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                    isPathActive(item.href) ? "text-[var(--text-strong-950)]" : "text-[var(--text-sub-500)]"
                  }`}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
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

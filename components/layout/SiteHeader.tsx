import Image from "next/image";

const logoMark = "/images/svg/site-logo.svg";
const caretDown = "/images/svg/caret-down.svg";

const menuItems = ["Home", "Service", "Doctor", "About Us", "Blog", "Career"];

export function SiteHeader() {
  return (
    <nav className="mx-auto flex h-[64px] w-[1400px] items-center justify-between rounded-[50px] bg-[var(--background-white-0)] px-[24px] py-[12px]">
      <div className="flex items-center gap-[8px] rounded-[8px]">
        <Image alt="Dentis logo" className="h-4 w-4" height={16} src={logoMark} width={16} />
        <p className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-[var(--text-strong-950)]">
          Dentis
        </p>
      </div>

      <div className="flex items-center justify-center gap-[32px] rounded-[8px] px-[4px] py-[7px]">
        {menuItems.map((item) => {
          const isActive = item === "Home";
          const isService = item === "Service";
          return (
            <a
              key={item}
              className={`flex items-center gap-[8px] text-[16px] font-medium leading-[1.6] tracking-[-0.32px] ${
                isActive
                  ? "text-[var(--text-strong-950)]"
                  : "text-[var(--text-sub-500)]"
              }`}
              href="#"
            >
              {item}
              {isService ? (
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
            </a>
          );
        })}
      </div>

      <button className="rounded-[99999px] border border-[var(--stroke-soft-200)] bg-[var(--background-white-0)] px-[18px] py-[9px] text-[32px] font-medium leading-0 tracking-0 text-[var(--text-strong-950)]">
        <span className="text-[14px] leading-[1.6] tracking-[-0.28px]">
          Contact Us
        </span>
      </button>
    </nav>
  );
}

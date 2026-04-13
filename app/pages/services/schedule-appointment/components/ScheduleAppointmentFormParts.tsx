"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { formatSlotRange } from "@/app/utils/dateTime";
import { isValidEmail } from "@/app/utils/validation";
import { caretDownIcon, logoMark } from "./constants";
import type { TimeSlot } from "./types";

export function BackIcon() {
  return (
    <svg aria-hidden fill="none" height="20" viewBox="0 0 20 20" width="20" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12.5 15L7.5 10L12.5 5"
        stroke="var(--text-strong-950)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function MobileTopBar() {
  return (
    <div className="flex items-center justify-between lg:hidden">
      <Link className="flex items-center gap-[8px]" href="/pages/home">
        <Image alt="Dentis logo" className="h-[16px] w-[16px]" height={16} src={logoMark} width={16} />
        <span className="text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)">Dentis</span>
      </Link>
      <button
        aria-label="Open menu"
        className="flex size-[36px] items-center justify-center rounded-[99999px] border border-(--stroke-soft-200) bg-(--background-soft-200)"
        type="button"
      >
        <span className="flex h-[12px] w-[14px] flex-col justify-between">
          <span className="block h-[1.6px] w-full rounded-full bg-(--text-sub-500)" />
          <span className="block h-[1.6px] w-full rounded-full bg-(--text-sub-500)" />
          <span className="block h-[1.6px] w-full rounded-full bg-(--text-sub-500)" />
        </span>
      </button>
    </div>
  );
}

export function AppointmentOption({
  title,
  description,
  selected,
  onClick,
}: {
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      className={`flex min-h-[80px] flex-1 flex-col items-center justify-center rounded-[8px] border bg-(--background-white-0) px-[12px] py-[12px] text-center ${
        selected ? "border-2 border-(--button-primary-base) bg-[#F4F7FF]" : "border border-(--stroke-sub-300)"
      }`}
      onClick={onClick}
      type="button"
    >
      <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">{title}</span>
      <span className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)">{description}</span>
    </button>
  );
}

export function SelectField({
  label,
  value,
  icon,
  iconClassName = "h-[8px] w-[14px]",
  onClick,
  isPlaceholder = true,
}: {
  label: string;
  value: string;
  icon: string;
  iconClassName?: string;
  onClick?: () => void;
  isPlaceholder?: boolean;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">{label}</p>
      <button
        className="flex h-[44px] items-center gap-[4px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px]"
        onClick={onClick}
        type="button"
      >
        <span
          className={`min-w-0 flex-1 text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
            isPlaceholder ? "text-(--text-soft-400)" : "text-(--text-strong-950)"
          }`}
        >
          {value}
        </span>
        <Image alt="" aria-hidden className={iconClassName} height={20} src={icon} width={20} />
      </button>
    </div>
  );
}

export function DropdownField({
  label,
  placeholder,
  value,
  isOpen,
  options,
  onToggle,
  onSelect,
}: {
  label: string;
  placeholder: string;
  value: string | null;
  isOpen: boolean;
  options: string[];
  onToggle: () => void;
  onSelect: (option: string) => void;
}) {
  return (
    <div className="relative flex flex-col gap-[4px]">
      <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">{label}</p>
      <button
        className="flex h-[44px] items-center gap-[4px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px]"
        onClick={onToggle}
        type="button"
      >
        <span
          className={`min-w-0 flex-1 text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
            value ? "text-(--text-strong-950)" : "text-(--text-soft-400)"
          }`}
        >
          {value ?? placeholder}
        </span>
        <Image
          alt=""
          aria-hidden
          className={`h-[8px] w-[14px] transition-transform ${isOpen ? "rotate-180" : ""}`}
          height={20}
          src={caretDownIcon}
          width={20}
        />
      </button>
      {isOpen ? (
        <div className="absolute left-0 right-0 top-[calc(100%+8px)] z-30 rounded-[10px] border border-(--stroke-soft-200) bg-(--background-white-0) p-[4px] shadow-[0_8px_24px_rgba(14,18,27,0.08)]">
          {options.map((option) => (
            <button
              className={`w-full rounded-[8px] px-[12px] py-[10px] text-left text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
                option === value
                  ? "bg-(--background-weak-50) text-(--text-strong-950)"
                  : "text-(--text-sub-500) hover:bg-(--background-weak-50)"
              }`}
              key={option}
              onClick={() => onSelect(option)}
              type="button"
            >
              {option}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function TimeSlotPicker({
  slot,
  selected,
  onSelect,
}: {
  slot: TimeSlot;
  selected: boolean;
  onSelect: (time: string) => void;
}) {
  const isDisabled = slot.status === "disabled";

  return (
    <button
      className={`rounded-[8px] px-[24px] py-[8px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] ${
        isDisabled
          ? "cursor-not-allowed bg-(--background-soft-200) text-(--text-sub-500)"
          : selected
            ? "border border-(--button-primary-base) bg-[#F4F7FF] text-(--text-strong-950)"
            : "border border-(--text-disable-300) bg-(--background-white-0) text-(--text-strong-950)"
      }`}
      disabled={isDisabled}
      onClick={() => onSelect(slot.time)}
      type="button"
    >
      {formatSlotRange(slot.time)}
    </button>
  );
}

export function SummaryItem({ label, value, children }: { label: string; value?: string; children?: ReactNode }) {
  return (
    <div className="w-full min-w-[200px] flex-1 space-y-[4px]">
      <p className="text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-[#555]">{label}</p>
      {children ?? (
        <p className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">{value}</p>
      )}
    </div>
  );
}

export function PersonalInput({
  label,
  value,
  placeholder,
  onChange,
  type = "text",
  errorMessage,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
  type?: "text" | "email" | "date";
  errorMessage?: string;
}) {
  const emailInvalid = type === "email" && value.trim().length > 0 && !isValidEmail(value);
  const resolvedErrorMessage = errorMessage ?? (emailInvalid ? "Enter valid email" : undefined);

  return (
    <div className="flex flex-col gap-[4px]">
      <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">{label}</p>
      <input
        aria-invalid={Boolean(resolvedErrorMessage)}
        className={`h-[44px] rounded-[8px] border bg-(--background-white-0) px-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950) placeholder:text-(--text-soft-400) focus:border-(--button-primary-base) focus:outline-none ${
          resolvedErrorMessage ? "border-[#DC2626]" : "border-(--stroke-soft-200)"
        }`}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        type={type}
        value={value}
      />
      {resolvedErrorMessage ? (
        <p className="text-[12px] font-normal leading-normal tracking-[-0.24px] text-[#DC2626]">{resolvedErrorMessage}</p>
      ) : null}
    </div>
  );
}

export function PersonalTextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-[4px]">
      <p className="text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-strong-950)">{label}</p>
      <textarea
        className="min-h-[90px] rounded-[8px] border border-(--stroke-soft-200) bg-(--background-white-0) px-[12px] py-[12px] text-[14px] font-normal leading-[1.6] tracking-[-0.28px] text-(--text-strong-950) placeholder:text-(--text-soft-400) focus:border-(--button-primary-base) focus:outline-none"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Enter a description"
        value={value}
      />
    </div>
  );
}

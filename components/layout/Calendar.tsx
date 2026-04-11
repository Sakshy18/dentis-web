"use client";

import { useMemo, useState } from "react";

const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] as const;

type CalendarProps = {
  value: Date | null;
  onChange: (date: Date) => void;
  disabledDates?: string[];
  initialMonth?: Date;
  className?: string;
};

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isSameDay(a: Date | null, b: Date) {
  if (!a) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getMonthGrid(displayMonth: Date) {
  const year = displayMonth.getFullYear();
  const month = displayMonth.getMonth();
  const firstDay = new Date(year, month, 1);
  const mondayOffset = (firstDay.getDay() + 6) % 7;
  const gridStart = new Date(year, month, 1 - mondayOffset);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(gridStart);
    date.setDate(gridStart.getDate() + index);
    return date;
  });
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      {direction === "left" ? (
        <path d="M11.667 5L6.66699 10L11.667 15" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      ) : (
        <path d="M8.33301 5L13.333 10L8.33301 15" stroke="#111111" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
      )}
    </svg>
  );
}

export function Calendar({
  value,
  onChange,
  disabledDates = [],
  initialMonth,
  className = "",
}: CalendarProps) {
  const [displayMonth, setDisplayMonth] = useState<Date>(
    value ?? initialMonth ?? new Date(),
  );

  const disabledDateSet = useMemo(() => new Set(disabledDates), [disabledDates]);
  const dates = useMemo(() => getMonthGrid(displayMonth), [displayMonth]);

  return (
    <div
      className={`w-full rounded-[16px] border border-(--stroke-soft-200) bg-(--background-white-0) p-[24px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <button
          aria-label="Previous month"
          className="flex size-[20px] items-center justify-center"
          onClick={() =>
            setDisplayMonth(
              (current) => new Date(current.getFullYear(), current.getMonth() - 1, 1),
            )
          }
          type="button"
        >
          <ArrowIcon direction="left" />
        </button>
        <p className="text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-strong-950)">
          {displayMonth.toLocaleString("en-US", { month: "long", year: "numeric" })}
        </p>
        <button
          aria-label="Next month"
          className="flex size-[20px] items-center justify-center"
          onClick={() =>
            setDisplayMonth(
              (current) => new Date(current.getFullYear(), current.getMonth() + 1, 1),
            )
          }
          type="button"
        >
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="mt-[24px]">
        <div className="grid grid-cols-7 gap-y-[8px]">
          {weekDays.map((day) => (
            <p
              className="text-center text-[18px] font-medium leading-[1.6] tracking-[-0.36px] text-(--text-strong-950)"
              key={day}
            >
              {day}
            </p>
          ))}

          {dates.map((date) => {
            const inCurrentMonth =
              date.getMonth() === displayMonth.getMonth() &&
              date.getFullYear() === displayMonth.getFullYear();
            const isDisabled = disabledDateSet.has(toDateKey(date));
            const isSelected = isSameDay(value, date);
            const isMuted = !inCurrentMonth || isDisabled;

            return (
              <button
                className={`mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-[999px] text-[14px] leading-[1.6] tracking-[-0.28px] ${
                  isSelected
                    ? "bg-(--background-weak-50) font-medium text-(--button-primary-base)"
                    : isMuted
                      ? "font-normal text-(--text-soft-400)"
                      : "font-normal text-(--text-strong-950) hover:bg-(--background-weak-50)"
                } ${isMuted ? "cursor-not-allowed" : ""}`}
                disabled={isMuted}
                key={toDateKey(date)}
                onClick={() => onChange(date)}
                type="button"
              >
                {date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

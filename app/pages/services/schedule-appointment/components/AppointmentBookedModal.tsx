import Link from "next/link";

function BlueTickIcon() {
  return (
    <span className="flex size-[56px] items-center justify-center rounded-full bg-[#EEF2FF]">
      <svg aria-hidden fill="none" height="28" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7L10 17L5 12" stroke="#3131D8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.4" />
      </svg>
    </span>
  );
}

type AppointmentBookedModalProps = {
  onClose: () => void;
};

export function AppointmentBookedModal({ onClose }: AppointmentBookedModalProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/35 px-[16px]">
      <div className="w-full max-w-[420px] rounded-[16px] bg-(--background-white-0) p-[24px] sm:p-[28px]">
        <div className="flex flex-col items-center text-center">
          <BlueTickIcon />
          <h2 className="mt-[16px] text-[28px] font-medium leading-[1.3] tracking-[-0.56px] text-(--text-strong-950)">
            Appointment Booked
          </h2>
          <p className="mt-[10px] text-[16px] font-normal leading-[1.6] tracking-[-0.32px] text-(--text-sub-500)">
            Your booking is confirmed.
          </p>
          <Link
            className="mt-[28px] flex h-[48px] w-full items-center justify-center rounded-[99999px] bg-(--button-primary-base) text-[16px] font-medium leading-[1.6] tracking-[-0.32px] text-(--text-white-0)"
            href="/pages/home"
          >
            Return to Home
          </Link>
          <button
            className="mt-[18px] text-[14px] font-medium leading-[1.6] tracking-[-0.28px] text-(--text-sub-500)"
            onClick={onClose}
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

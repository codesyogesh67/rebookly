import Link from "next/link";
import type { BookingService } from "./booking-data";

type Props = {
  slug: string;
  businessName: string;
  selectedService: BookingService | null;
  selectedDate: string | null;
  selectedTime: string | null;
  fullName: string;
};

export default function BookingSummary({
  slug,
  businessName,
  selectedService,
  selectedDate,
  selectedTime,
  fullName,
}: Props) {
  const isReady =
    selectedService &&
    selectedDate &&
    selectedTime &&
    fullName.trim().length > 0;

  return (
    <aside className="site-card sticky top-24 p-6">
      <div className="mb-5">
        <h2 className="site-heading text-xl">Booking summary</h2>
        <p className="site-muted mt-2 text-sm">
          Review the selected appointment details.
        </p>
      </div>

      <div className="space-y-4">
        <SummaryRow label="Business" value={businessName} />
        <SummaryRow
          label="Service"
          value={selectedService?.name ?? "Not selected"}
        />
        <SummaryRow label="Duration" value={selectedService?.duration ?? "—"} />
        <SummaryRow label="Date" value={selectedDate ?? "Not selected"} />
        <SummaryRow label="Time" value={selectedTime ?? "Not selected"} />
        <SummaryRow label="Client" value={fullName || "Not entered"} />
        <SummaryRow
          label="Price"
          value={selectedService ? `$${selectedService.price}` : "—"}
        />
      </div>

      <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <p className="text-sm leading-6 text-white/60">
          {isReady
            ? "The booking is ready to continue to the confirmation screen."
            : "Complete the selections on the left to prepare the booking request."}
        </p>
      </div>

      <Link
        href={isReady ? `/b/${slug}/confirm` : "#"}
        className={`site-btn-primary site-btn-lg mt-6 w-full ${
          !isReady ? "pointer-events-none opacity-60" : ""
        }`}
      >
        Confirm booking
      </Link>
    </aside>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-3 text-sm last:border-b-0 last:pb-0">
      <span className="text-white/45">{label}</span>
      <span className="text-right font-medium text-white/85">{value}</span>
    </div>
  );
}

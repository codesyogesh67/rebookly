type Props = {
  status: "confirmed" | "pending" | "cancelled";
};

const statusMap = {
  confirmed: {
    label: "Confirmed",
    className: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  pending: {
    label: "Pending",
    className: "border-amber-400/20 bg-amber-400/10 text-amber-300",
  },
  cancelled: {
    label: "Cancelled",
    className: "border-red-400/20 bg-red-400/10 text-red-300",
  },
};

export default function AppointmentStatusBadge({ status }: Props) {
  const current = statusMap[status];

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${current.className}`}
    >
      {current.label}
    </span>
  );
}

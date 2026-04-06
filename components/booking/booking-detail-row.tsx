type Props = {
  label: string;
  value: string;
};

export default function BookingDetailRow({ label, value }: Props) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/8 pb-4 last:border-b-0 last:pb-0">
      <span className="text-sm text-white/50">{label}</span>
      <span className="text-right text-sm font-medium text-white/90">
        {value}
      </span>
    </div>
  );
}

type Props = {
  slots: string[];
  selectedTime: string | null;
  onSelect: (time: string) => void;
};

export default function TimeSlotGrid({ slots, selectedTime, onSelect }: Props) {
  return (
    <section className="site-card p-6">
      <div className="mb-5">
        <h2 className="site-heading text-xl">Choose a time</h2>
        <p className="site-muted mt-2 text-sm">
          Available appointment times for the selected date.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {slots.map((slot) => {
          const isSelected = selectedTime === slot;

          return (
            <button
              key={slot}
              type="button"
              onClick={() => onSelect(slot)}
              className={[
                "rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200",
                isSelected
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]",
              ].join(" ")}
            >
              {slot}
            </button>
          );
        })}
      </div>
    </section>
  );
}

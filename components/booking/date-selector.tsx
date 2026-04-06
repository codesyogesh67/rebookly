type Props = {
  dates: string[];
  selectedDate: string | null;
  onSelect: (date: string) => void;
};

export default function DateSelector({ dates, selectedDate, onSelect }: Props) {
  return (
    <section className="site-card p-6">
      <div className="mb-5">
        <h2 className="site-heading text-xl">Choose a date</h2>
        <p className="site-muted mt-2 text-sm">
          Pick a day that works best for the appointment.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        {dates.map((date) => {
          const isSelected = selectedDate === date;

          return (
            <button
              key={date}
              type="button"
              onClick={() => onSelect(date)}
              className={[
                "rounded-2xl border px-4 py-3 text-sm font-medium transition-all duration-200",
                isSelected
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/20 hover:bg-white/[0.06]",
              ].join(" ")}
            >
              {date}
            </button>
          );
        })}
      </div>
    </section>
  );
}

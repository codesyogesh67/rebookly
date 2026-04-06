type BookingFormValues = {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

type Props = {
  values: BookingFormValues;
  onChange: (field: keyof BookingFormValues, value: string) => void;
};

export default function ClientDetailsForm({ values, onChange }: Props) {
  return (
    <section className="site-card p-6">
      <div className="mb-5">
        <h2 className="site-heading text-xl">Your details</h2>
        <p className="site-muted mt-2 text-sm">
          Enter client information to complete the booking request.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-medium text-white/80">Full name</label>
          <input
            value={values.fullName}
            onChange={(e) => onChange("fullName", e.target.value)}
            placeholder="Enter full name"
            className="h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-white/80">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="Enter email address"
            className="h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-white/80">Phone</label>
          <input
            value={values.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            placeholder="Enter phone number"
            className="h-12 rounded-2xl border border-white/10 bg-white/[0.03] px-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-medium text-white/80">
            Notes (optional)
          </label>
          <textarea
            value={values.notes}
            onChange={(e) => onChange("notes", e.target.value)}
            placeholder="Any extra information for the appointment"
            rows={4}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-white/25"
          />
        </div>
      </div>
    </section>
  );
}

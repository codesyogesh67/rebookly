import Link from "next/link";
import { CalendarCheck2, MapPin, Sparkles } from "lucide-react";
import {
  bookingProfile,
  mockAppointment,
} from "./booking-data";
import BookingDetailRow from "./booking-detail-row";
import AppointmentStatusBadge from "./appointment-status-badge";

type Props = {
  slug: string;
};

export default function ConfirmationPage({ slug }: Props) {
  const profile = {
    ...bookingProfile,
    slug,
  };

  return (
    <main className="site-bg min-h-screen">
      <section className="site-container py-10 md:py-16">
        <div className="mx-auto max-w-4xl space-y-8">
          <div className="site-card p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="flex items-start gap-4">
                <div className="site-icon-box h-14 w-14 rounded-2xl">
                  <CalendarCheck2 className="h-6 w-6" />
                </div>

                <div className="space-y-3">
                  <AppointmentStatusBadge status={mockAppointment.status} />

                  <div>
                    <h1 className="site-heading text-3xl font-semibold md:text-4xl">
                      Booking confirmed
                    </h1>
                    <p className="site-muted mt-2 max-w-2xl text-sm leading-6 md:text-base">
                      Your appointment has been successfully scheduled with{" "}
                      {profile.businessName}. A confirmation email and reminder
                      can be connected later when backend logic is added.
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href={`/b/${slug}/manage`}
                className="site-btn-secondary site-btn-sm"
              >
                Manage booking
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
            <div className="space-y-8">
              <div className="site-card p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="site-heading text-2xl font-semibold">
                    Appointment details
                  </h2>
                  <p className="site-muted mt-2 text-sm">
                    Review the appointment summary below.
                  </p>
                </div>

                <div className="space-y-4">
                  <BookingDetailRow
                    label="Booking ID"
                    value={mockAppointment.id}
                  />
                  <BookingDetailRow
                    label="Service"
                    value={mockAppointment.serviceName}
                  />
                  <BookingDetailRow
                    label="Duration"
                    value={mockAppointment.duration}
                  />
                  <BookingDetailRow
                    label="Date"
                    value={mockAppointment.date}
                  />
                  <BookingDetailRow
                    label="Time"
                    value={mockAppointment.time}
                  />
                  <BookingDetailRow
                    label="Price"
                    value={`$${mockAppointment.price}`}
                  />
                  <BookingDetailRow
                    label="Client"
                    value={mockAppointment.clientName}
                  />
                  <BookingDetailRow
                    label="Email"
                    value={mockAppointment.clientEmail}
                  />
                  <BookingDetailRow
                    label="Phone"
                    value={mockAppointment.clientPhone}
                  />
                </div>

                {mockAppointment.notes ? (
                  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-2 text-sm font-medium text-white/85">
                      Notes
                    </div>
                    <p className="text-sm leading-6 text-white/60">
                      {mockAppointment.notes}
                    </p>
                  </div>
                ) : null}
              </div>

              <div className="site-card p-6 md:p-8">
                <div className="mb-5 flex items-center gap-3">
                  <div className="site-icon-box">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h2 className="site-heading text-xl font-semibold">
                    What happens next
                  </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-medium text-white/90">
                      Confirmation
                    </div>
                    <p className="site-muted mt-2 text-sm leading-6">
                      Client sees the confirmed appointment instantly.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-medium text-white/90">
                      Reminder
                    </div>
                    <p className="site-muted mt-2 text-sm leading-6">
                      Later you can plug in SMS or email reminders.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <div className="text-sm font-medium text-white/90">
                      Rebooking
                    </div>
                    <p className="site-muted mt-2 text-sm leading-6">
                      Rebookly can later nudge repeat clients automatically.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="site-card p-6">
                <div className="mb-5">
                  <h3 className="site-heading text-xl font-semibold">
                    Business
                  </h3>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-base font-semibold text-white">
                      {profile.businessName}
                    </div>
                    <div className="site-muted mt-1 text-sm">
                      {profile.category}
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-white/65">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <span>{profile.location}</span>
                  </div>

                  <p className="site-muted text-sm leading-6">
                    {profile.description}
                  </p>
                </div>
              </div>

              <div className="site-card p-6">
                <div className="space-y-3">
                  <Link
                    href={`/b/${slug}`}
                    className="site-btn-primary site-btn-lg w-full"
                  >
                    Book another appointment
                  </Link>

                  <Link
                    href={`/b/${slug}/manage`}
                    className="site-btn-secondary site-btn-lg w-full"
                  >
                    View manage page
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendarClock, Mail, Phone, ScissorsLineDashed } from "lucide-react";
import { bookingProfile, mockAppointment, timeSlots } from "./booking-data";
import BookingDetailRow from "./booking-detail-row";
import AppointmentStatusBadge from "./appointment-status-badge";

type Props = {
  slug: string;
};

export default function ManageBookingPage({ slug }: Props) {
  const [selectedTime, setSelectedTime] = useState(mockAppointment.time);

  const profile = {
    ...bookingProfile,
    slug,
  };

  return (
    <main className="site-bg min-h-screen">
      <section className="site-container py-10 md:py-16">
        <div className="mx-auto max-w-5xl space-y-8">
          <div className="site-card p-6 md:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div className="space-y-3">
                <AppointmentStatusBadge status={mockAppointment.status} />

                <div>
                  <h1 className="site-heading text-3xl font-semibold md:text-4xl">
                    Manage your booking
                  </h1>
                  <p className="site-muted mt-2 max-w-2xl text-sm leading-6 md:text-base">
                    View appointment details, preview a reschedule flow, or
                    cancel the booking. This is frontend-only for now.
                  </p>
                </div>
              </div>

              <Link
                href={`/b/${slug}/confirm`}
                className="site-btn-secondary site-btn-sm"
              >
                Back to confirmation
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="space-y-8">
              <div className="site-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="site-icon-box">
                    <CalendarClock className="h-4 w-4" />
                  </div>
                  <h2 className="site-heading text-2xl font-semibold">
                    Current appointment
                  </h2>
                </div>

                <div className="space-y-4">
                  <BookingDetailRow
                    label="Service"
                    value={mockAppointment.serviceName}
                  />
                  <BookingDetailRow label="Date" value={mockAppointment.date} />
                  <BookingDetailRow label="Time" value={selectedTime} />
                  <BookingDetailRow
                    label="Duration"
                    value={mockAppointment.duration}
                  />
                  <BookingDetailRow
                    label="Price"
                    value={`$${mockAppointment.price}`}
                  />
                  <BookingDetailRow
                    label="Client"
                    value={mockAppointment.clientName}
                  />
                </div>
              </div>

              <div className="site-card p-6 md:p-8">
                <div className="mb-6 flex items-center gap-3">
                  <div className="site-icon-box">
                    <ScissorsLineDashed className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="site-heading text-2xl font-semibold">
                      Reschedule preview
                    </h2>
                    <p className="site-muted mt-2 text-sm">
                      Choose a new time to simulate the rescheduling experience.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {timeSlots.map((slot) => {
                    const isSelected = selectedTime === slot;

                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={
                          isSelected
                            ? "site-btn-primary site-btn-sm w-full"
                            : "site-btn-secondary site-btn-sm w-full"
                        }
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    className="site-btn-primary site-btn-lg"
                  >
                    Save new time
                  </button>

                  <button
                    type="button"
                    className="site-btn-secondary site-btn-lg"
                  >
                    Keep original booking
                  </button>
                </div>
              </div>

              <div className="site-card p-6 md:p-8">
                <div className="mb-6">
                  <h2 className="site-heading text-2xl font-semibold">
                    Cancellation preview
                  </h2>
                  <p className="site-muted mt-2 text-sm">
                    Later this can trigger cancellation rules, refund handling,
                    and notification workflows.
                  </p>
                </div>

                <div className="rounded-3xl border border-red-400/15 bg-red-400/5 p-5">
                  <p className="text-sm leading-6 text-white/70">
                    Canceling this appointment would free the slot and notify
                    the business. For now, this is only a UI preview.
                  </p>

                  <button
                    type="button"
                    className="mt-4 inline-flex min-h-[3rem] items-center justify-center rounded-full border border-red-400/20 bg-red-400/10 px-5 text-sm font-semibold text-red-300 transition hover:bg-red-400/15"
                  >
                    Cancel appointment
                  </button>
                </div>
              </div>
            </div>

            <aside className="space-y-6">
              <div className="site-card p-6">
                <div className="mb-5">
                  <h3 className="site-heading text-xl font-semibold">
                    Contact business
                  </h3>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Mail className="mt-0.5 h-4 w-4 text-white/65" />
                    <div>
                      <div className="text-sm font-medium text-white/90">
                        Email
                      </div>
                      <div className="site-muted mt-1 text-sm">
                        hello@glowstudio.com
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                    <Phone className="mt-0.5 h-4 w-4 text-white/65" />
                    <div>
                      <div className="text-sm font-medium text-white/90">
                        Phone
                      </div>
                      <div className="site-muted mt-1 text-sm">
                        (212) 555-0194
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="site-card p-6">
                <div className="mb-4">
                  <h3 className="site-heading text-xl font-semibold">
                    Rebookly note
                  </h3>
                </div>

                <p className="site-muted text-sm leading-6">
                  This page is the perfect bridge into real backend work later:
                  appointment lookup, secure manage links, reschedule rules, and
                  cancellation logic.
                </p>
              </div>

              <div className="site-card p-6">
                <div className="space-y-3">
                  <Link
                    href={`/b/${slug}`}
                    className="site-btn-secondary site-btn-lg w-full"
                  >
                    Back to booking page
                  </Link>

                  <Link
                    href={`/b/${slug}/confirm`}
                    className="site-btn-primary site-btn-lg w-full"
                  >
                    View confirmation page
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

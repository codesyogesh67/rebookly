"use client";

import { useMemo, useState } from "react";
import BusinessHeader from "./business-header";
import ServiceList from "./service-list";
import DateSelector from "./date-selector";
import TimeSlotGrid from "./time-slot-grid";
import ClientDetailsForm from "./client-details-form";
import BookingSummary from "./booking-summary";
import { bookingDates, bookingProfile, services } from "./booking-data";

type Props = {
  slug: string;
};

type BookingFormValues = {
  fullName: string;
  email: string;
  phone: string;
  notes: string;
};

export default function BookingPage({ slug }: Props) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(
    services[0]?.id ?? null
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(
    bookingDates[0] ?? null
  );
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const [formValues, setFormValues] = useState<BookingFormValues>({
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const selectedService = useMemo(
    () => services.find((service) => service.id === selectedServiceId) ?? null,
    [selectedServiceId]
  );

  const profile = {
    ...bookingProfile,
    slug,
  };

  function handleFormChange(field: keyof BookingFormValues, value: string) {
    setFormValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <div className="site-container py-10 md:py-14">
        <div className="space-y-8">
          <BusinessHeader
            businessName={profile.businessName}
            category={profile.category}
            location={profile.location}
            description={profile.description}
          />

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px]">
            <div className="space-y-8">
              <ServiceList
                services={services}
                selectedServiceId={selectedServiceId}
                onSelect={setSelectedServiceId}
              />

              <DateSelector
                dates={bookingDates}
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
              />

              <TimeSlotGrid
                slots={[
                  "9:00 AM",
                  "10:00 AM",
                  "11:30 AM",
                  "1:00 PM",
                  "2:30 PM",
                  "4:00 PM",
                  "5:30 PM",
                ]}
                selectedTime={selectedTime}
                onSelect={setSelectedTime}
              />

              <ClientDetailsForm
                values={formValues}
                onChange={handleFormChange}
              />
            </div>

            <div>
              <BookingSummary
                slug={slug}
                businessName={profile.businessName}
                selectedService={selectedService}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                fullName={formValues.fullName}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

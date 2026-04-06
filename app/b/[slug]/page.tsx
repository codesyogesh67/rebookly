import BookingPage from "@/components/booking/booking-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function PublicBookingRoute({ params }: Props) {
  const { slug } = await params;

  return <BookingPage slug={slug} />;
}

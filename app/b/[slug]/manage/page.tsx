import ManageBookingPage from "@/components/booking/manage-booking-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookingManageRoute({ params }: Props) {
  const { slug } = await params;

  return <ManageBookingPage slug={slug} />;
}

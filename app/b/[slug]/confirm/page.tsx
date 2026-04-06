import ConfirmationPage from "@/components/booking/confirmation-page";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BookingConfirmRoute({ params }: Props) {
  const { slug } = await params;

  return <ConfirmationPage slug={slug} />;
}

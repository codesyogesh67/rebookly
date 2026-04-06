import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PersonalCare Pro",
  description: "Booking system for personal care professionals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="indigo">
      <body>{children}</body>
    </html>
  );
}

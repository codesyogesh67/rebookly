export type BookingProfile = {
  slug: string;
  businessName: string;
  category: string;
  location: string;
  description: string;
};

export type BookingService = {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: number;
};

export type MockAppointment = {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceName: string;
  duration: string;
  price: number;
  date: string;
  time: string;
  notes?: string;
  status: "confirmed" | "pending" | "cancelled";
};

export const bookingProfile: BookingProfile = {
  slug: "glow-studio",
  businessName: "Glow Studio",
  category: "Skincare & Facials",
  location: "New York, NY",
  description:
    "Premium skincare treatments with a calm, modern booking experience.",
};

export const services: BookingService[] = [
  {
    id: "classic-facial",
    name: "Classic Facial",
    description: "Deep cleanse, exfoliation, and hydration for refreshed skin.",
    duration: "60 min",
    price: 95,
  },
  {
    id: "hydra-glow",
    name: "Hydra Glow Facial",
    description: "A hydration-focused treatment for smoother, brighter skin.",
    duration: "75 min",
    price: 135,
  },
  {
    id: "acne-reset",
    name: "Acne Reset Treatment",
    description: "Targeted facial treatment designed for acne-prone skin.",
    duration: "50 min",
    price: 110,
  },
];

export const bookingDates = [
  "Mon, Apr 6",
  "Tue, Apr 7",
  "Wed, Apr 8",
  "Thu, Apr 9",
  "Fri, Apr 10",
  "Sat, Apr 11",
];

export const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:30 AM",
  "1:00 PM",
  "2:30 PM",
  "4:00 PM",
  "5:30 PM",
];

export const mockAppointment: MockAppointment = {
  id: "apt_001",
  clientName: "Sophia Carter",
  clientEmail: "sophia@example.com",
  clientPhone: "(212) 555-0182",
  serviceName: "Hydra Glow Facial",
  duration: "75 min",
  price: 135,
  date: "Thu, Apr 9",
  time: "2:30 PM",
  notes: "Sensitive skin. Prefer fragrance-free products.",
  status: "confirmed",
};

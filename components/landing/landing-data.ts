import type { LucideIcon } from "lucide-react";
import {
  Calendar,
  Users,
  Link2,
  RefreshCw,
  Shield,
  Star,
  Scissors,
  Sparkles,
  Heart,
  Droplets,
  PenTool,
  Brush,
} from "lucide-react";

export type LandingFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type LandingNiche = {
  id: string;
  label: string;
  icon: LucideIcon;
};

export type PricingPlan = {
  name: string;
  price: string;
  desc: string;
  features: string[];
  cta: string;
  popular: boolean;
};

export const landingFeatures: LandingFeature[] = [
  {
    icon: Link2,
    title: "One Link, All Clients",
    desc:
      "Share a permanent booking URL. Clients book, rebook, and check history — all on their own.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    desc:
      "Set working hours, breaks, and staff availability. The calendar handles the rest.",
  },
  {
    icon: Users,
    title: "Client Memory",
    desc:
      "Every visit, preference, and note saved automatically. Know your clients better than ever.",
  },
  {
    icon: RefreshCw,
    title: "Rebooking Engine",
    desc:
      "Identify clients who haven't returned. Send gentle reminders. Keep chairs full.",
  },
  {
    icon: Shield,
    title: "Simple Client Access",
    desc:
      "No passwords. Just phone number + 4-digit code. Fast, mobile-friendly, zero friction.",
  },
  {
    icon: Star,
    title: "Multi-Niche Ready",
    desc:
      "Barbers, nail techs, lash artists, tattoo artists — one platform, perfectly adapted.",
  },
];

export const landingNiches: LandingNiche[] = [
  { id: "barber", label: "Barber Shop", icon: Scissors },
  { id: "nail-salon", label: "Nail Salon", icon: Sparkles },
  { id: "hair-salon", label: "Hair Salon", icon: Star },
  { id: "lash-brow", label: "Lash & Brow", icon: Heart },
  { id: "skincare", label: "Skincare / Facial", icon: Droplets },
  { id: "waxing", label: "Waxing", icon: Sparkles },
  { id: "tattoo", label: "Tattoo Artist", icon: PenTool },
  { id: "makeup", label: "Makeup Artist", icon: Brush },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    price: "Free",
    desc: "For solo professionals just getting started",
    features: [
      "Up to 50 clients",
      "1 staff member",
      "Basic booking page",
      "Appointment management",
      "Client history",
    ],
    cta: "Get started free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$29",
    desc: "For growing businesses that need more power",
    features: [
      "Unlimited clients",
      "Up to 3 staff",
      "Custom booking URL",
      "Rebooking reminders",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Start free trial",
    popular: true,
  },
  {
    name: "Studio",
    price: "$59",
    desc: "For busy studios with multiple team members",
    features: [
      "Everything in Pro",
      "Unlimited staff",
      "Multiple locations",
      "Custom branding",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

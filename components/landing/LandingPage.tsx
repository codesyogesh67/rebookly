import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Users,
  Link2,
  RefreshCw,
  Shield,
  Star,
  Check,
  ChevronRight,
  Scissors,
  Sparkles,
  Heart,
  Droplets,
  PenTool,
  Brush,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const niches = [
  { id: "barber", label: "Barber Shop", icon: Scissors },
  { id: "nail-salon", label: "Nail Salon", icon: Sparkles },
  { id: "hair-salon", label: "Hair Salon", icon: Star },
  { id: "lash-brow", label: "Lash & Brow", icon: Heart },
  { id: "skincare", label: "Skincare / Facial", icon: Droplets },
  { id: "waxing", label: "Waxing", icon: Sparkles },
  { id: "tattoo", label: "Tattoo Artist", icon: PenTool },
  { id: "makeup", label: "Makeup Artist", icon: Brush },
];

const features = [
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

const pricingPlans = [
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

function LandingNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">PersonalCare Pro</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-neutral-300 transition hover:text-white"
          >
            Features
          </a>
          <a
            href="#who-its-for"
            className="text-sm text-neutral-300 transition hover:text-white"
          >
            Who it&apos;s for
          </a>
          <a
            href="#pricing"
            className="text-sm text-neutral-300 transition hover:text-white"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-white hover:bg-white/10 hover:text-white"
            >
              Sign in
            </Button>
          </Link>

          <Link href="/register">
            <Button className="rounded-full bg-white text-black hover:bg-neutral-200">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_35%)]" />
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-neutral-300">
            <Sparkles className="h-4 w-4" />
            Built for personal care professionals
          </div>

          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            The booking system your clients actually love
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-300">
            Share your booking link once. Let clients handle the rest. Reduce
            scheduling chaos and keep every client in one place.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/register">
              <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-neutral-200">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/b/demo-studio">
              <Button
                variant="outline"
                className="h-12 rounded-full border-white/20 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"
              >
                See demo booking page
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <p className="mt-4 text-sm text-neutral-400">
            No credit card required · Free for up to 50 clients
          </p>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="mt-4 text-neutral-300">
            A simpler booking system for personal care professionals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-neutral-300">
                  {feature.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function NichesSection() {
  return (
    <section id="who-its-for" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Who it&apos;s for
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built for every personal care business
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {niches.map((niche) => {
            const Icon = niche.icon;

            return (
              <div
                key={niche.id}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-white">{niche.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section id="pricing" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-neutral-400">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-neutral-300">
            Start free, upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 ${
                plan.popular
                  ? "border-white bg-white text-black"
                  : "border-white/10 bg-white/5 text-white"
              }`}
            >
              {plan.popular && (
                <div className="mb-4 inline-flex rounded-full bg-black px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>

              <div className="mt-4 flex items-end gap-2">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Free" && (
                  <span
                    className={
                      plan.popular ? "text-neutral-600" : "text-neutral-400"
                    }
                  >
                    /month
                  </span>
                )}
              </div>

              <p
                className={`mt-4 ${
                  plan.popular ? "text-neutral-700" : "text-neutral-300"
                }`}
              >
                {plan.desc}
              </p>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`mt-8 h-11 w-full rounded-full ${
                  plan.popular
                    ? "bg-black text-white hover:bg-neutral-800"
                    : "bg-white text-black hover:bg-neutral-200"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="border-t border-white/10">
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 text-center md:p-14">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Make rebooking effortless for your regulars
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-300">
            Join hundreds of personal care professionals who&apos;ve simplified
            their scheduling forever.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <Button className="h-12 rounded-full bg-white px-6 text-black hover:bg-neutral-200">
                Get started for free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-neutral-400 md:flex-row">
        <div className="flex items-center gap-2 text-white">
          <Scissors className="h-4 w-4" />
          <span className="font-medium">PersonalCare Pro</span>
        </div>

        <p>© 2026 PersonalCare Pro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <LandingNav />
      <HeroSection />
      <FeaturesSection />
      <NichesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}

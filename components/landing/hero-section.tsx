import Link from "next/link";
import { ArrowRight, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="site-hero-glow absolute inset-0" />

      <div className="site-container py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="site-pill mb-6 px-4 py-2 text-sm">
            <Sparkles className="h-4 w-4" />
            Built for personal care professionals
          </div>

          <h1 className="site-heading text-4xl font-semibold tracking-tight md:text-6xl">
            The booking system your clients actually love
          </h1>

          <p className="site-secondary-text mt-6 max-w-2xl text-lg leading-8">
            Share your booking link once. Let clients handle the rest. Reduce
            scheduling chaos and keep every client in one place.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link href="/register">
              <Button className="site-btn-primary h-12 px-6">
                Start free trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>

            <Link href="/b/demo-studio">
              <Button className="site-btn-secondary h-12 bg-transparent px-6">
                See demo booking page
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <p className="site-muted mt-4 text-sm">
            No credit card required · Free for up to 50 clients
          </p>
        </div>
      </div>
    </section>
  );
}

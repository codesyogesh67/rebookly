import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="site-section">
      <div className="site-container py-24">
        <div className="site-card p-10 text-center md:p-14">
          <h2 className="site-heading text-3xl font-semibold tracking-tight md:text-5xl">
            Make rebooking effortless for your regulars
          </h2>

          <p className="site-secondary-text mx-auto mt-5 max-w-2xl">
            Join hundreds of personal care professionals who&apos;ve simplified
            their scheduling forever.
          </p>

          <div className="mt-8">
            <Link href="/register">
              <Button className="site-btn-primary h-12 px-6">
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

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { pricingPlans } from "@/components/landing/landing-data";

export default function PricingSection() {
  return (
    <section id="pricing" className="site-section">
      <div className="site-container py-24">
        <div className="max-w-2xl">
          <p className="site-muted text-sm font-medium uppercase tracking-[0.2em]">
            Pricing
          </p>
          <h2 className="site-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="site-secondary-text mt-4">
            Start free, upgrade when you&apos;re ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.name}
                className={
                  isPopular
                    ? "site-popular-card p-8"
                    : "site-card p-8 text-white"
                }
              >
                {isPopular && (
                  <div className="site-popular-badge mb-4 px-3 py-1 text-xs font-semibold">
                    Most popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold">{plan.name}</h3>

                <div className="mt-4 flex items-end gap-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Free" && (
                    <span
                      className={
                        isPopular ? "text-neutral-600" : "text-neutral-400"
                      }
                    >
                      /month
                    </span>
                  )}
                </div>

                <p
                  className={`mt-4 ${
                    isPopular ? "text-neutral-700" : "site-secondary-text"
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
                  className={
                    isPopular
                      ? "mt-8 h-11 w-full rounded-full bg-black text-white hover:bg-neutral-800"
                      : "site-btn-primary mt-8 h-11 w-full"
                  }
                >
                  {plan.cta}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

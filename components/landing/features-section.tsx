import { landingFeatures } from "@/components/landing/landing-data";

export default function FeaturesSection() {
  return (
    <section id="features" className="site-section">
      <div className="site-container py-24">
        <div className="max-w-2xl">
          <p className="site-muted text-sm font-medium uppercase tracking-[0.2em]">
            Features
          </p>
          <h2 className="site-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Everything you need, nothing you don&apos;t
          </h2>
          <p className="site-secondary-text mt-4">
            A simpler booking system for personal care professionals.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {landingFeatures.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="site-card site-card-hover p-6"
              >
                <div className="site-icon-box mb-4 h-12 w-12">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="site-heading text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="site-secondary-text mt-3 leading-7">
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

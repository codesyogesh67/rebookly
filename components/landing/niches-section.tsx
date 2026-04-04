import { landingNiches } from "@/components/landing/landing-data";

export default function NichesSection() {
  return (
    <section id="who-its-for" className="site-section">
      <div className="site-container py-24">
        <div className="max-w-2xl">
          <p className="site-muted text-sm font-medium uppercase tracking-[0.2em]">
            Who it&apos;s for
          </p>
          <h2 className="site-heading mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Built for every personal care business
          </h2>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingNiches.map((niche) => {
            const Icon = niche.icon;

            return (
              <div
                key={niche.id}
                className="site-card site-card-hover flex items-center gap-4 rounded-[var(--radius-lg)] p-5"
              >
                <div className="site-icon-box h-12 w-12">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-medium">{niche.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { MapPin, Sparkles } from "lucide-react";

type Props = {
  businessName: string;
  category: string;
  location: string;
  description: string;
};

export default function BusinessHeader({
  businessName,
  category,
  location,
  description,
}: Props) {
  return (
    <section className="site-card p-6 md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div className="flex items-start gap-4">
          <div className="site-icon-box h-14 w-14 rounded-2xl">
            <Sparkles className="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
                {category}
              </span>
            </div>

            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {businessName}
              </h1>
              <div className="mt-2 flex items-center gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>

            <p className="max-w-2xl text-sm leading-6 text-white/65 md:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

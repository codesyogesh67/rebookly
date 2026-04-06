import { Clock3 } from "lucide-react";
import type { BookingService } from "./booking-data";

type Props = {
  services: BookingService[];
  selectedServiceId: string | null;
  onSelect: (serviceId: string) => void;
};

export default function ServiceList({
  services,
  selectedServiceId,
  onSelect,
}: Props) {
  return (
    <section className="site-card p-6">
      <div className="mb-5">
        <h2 className="site-heading text-xl">Choose a service</h2>
        <p className="site-muted mt-2 text-sm">
          Select the treatment your client wants to book.
        </p>
      </div>

      <div className="grid gap-4">
        {services.map((service) => {
          const isSelected = selectedServiceId === service.id;

          return (
            <button
              key={service.id}
              type="button"
              onClick={() => onSelect(service.id)}
              className={[
                "text-left rounded-2xl border p-4 transition-all duration-200",
                isSelected
                  ? "border-white/30 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.08)]"
                  : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]",
              ].join(" ")}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {service.name}
                    </h3>
                    {isSelected && (
                      <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] font-medium text-white/80">
                        Selected
                      </span>
                    )}
                  </div>

                  <p className="text-sm leading-6 text-white/60">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-white/55">
                    <Clock3 className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>

                <div className="shrink-0 text-base font-semibold text-white">
                  ${service.price}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}

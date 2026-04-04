import { Scissors } from "lucide-react";

export default function Footer() {
  return (
    <footer className="site-section">
      <div className="site-container flex flex-col items-center justify-between gap-4 py-8 text-sm md:flex-row">
        <div className="flex items-center gap-2">
          <Scissors className="h-4 w-4" />
          <span className="font-medium">PersonalCare Pro</span>
        </div>

        <p className="site-muted">
          © 2026 PersonalCare Pro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

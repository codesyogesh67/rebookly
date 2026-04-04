import Link from "next/link";
import { Scissors } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingNav() {
  return (
    <header className="site-outline-nav sticky top-0 z-50">
      <div className="site-container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="site-icon-box h-10 w-10">
            <Scissors className="h-5 w-5" />
          </div>
          <span className="text-lg font-semibold">PersonalCare Pro</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="site-muted text-sm transition hover:text-white"
          >
            Features
          </a>
          <a
            href="#who-its-for"
            className="site-muted text-sm transition hover:text-white"
          >
            Who it&apos;s for
          </a>
          <a
            href="#pricing"
            className="site-muted text-sm transition hover:text-white"
          >
            Pricing
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/login">
            <Button
              variant="ghost"
              className="text-white hover:bg-[rgba(var(--surface-3))] hover:text-white"
            >
              Sign in
            </Button>
          </Link>

          <Link href="/register">
            <Button className="site-btn-primary px-5">Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

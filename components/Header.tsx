import Link from "next/link";
import { navigationItems } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <div className="bg-[var(--surface)]/95 sticky top-0 z-50 divide-y xl:divide-none">
      <header className="w-full relative">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-4 p-4">
          {/* Left: Logo / Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-semibold">
              Vanza Labs
            </Link>
          </div>

          {/* Right: Navigation & Buttons */}
          <div className="ml-auto flex items-center gap-2 md:gap-4">
            {/* Desktop Navigation */}
            {navigationItems.length > 0 && (
              <nav className="hidden items-center gap-4 text-sm sm:gap-6 md:flex">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
}

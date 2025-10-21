import { Moon } from "lucide-react";
import Link from "next/link";
import { navigationItems } from "@/lib/navigation";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <div className="bg-[var(--bg-color)]/95 sticky top-0 z-50 divide-y xl:divide-none">
      <header className="w-full relative">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center gap-4 p-4">
          {/* Left: Logo / Brand */}
          <div className="flex items-center gap-2">
            <Link href="/" className="text-lg font-semibold">
              Aibek.xyz
            </Link>
          </div>

          {/* Right: Navigation & Buttons */}
          <div className="ml-auto flex items-center gap-2 md:gap-4">
            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-4 text-sm sm:gap-6 md:flex">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Theme Icon (Static) */}
            <button
              className="inline-flex items-center justify-center size-9 border border-[var(--border-color)] bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-all duration-200"
              type="button"
              aria-label="Theme icon"
              disabled
            >
              <Moon size={16} />
            </button>

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </div>
      </header>
    </div>
  );
}

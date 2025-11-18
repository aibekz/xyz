"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navigationItems } from "@/lib/navigation";

// Reusable mobile link component
interface MobileLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

function MobileLink({ href, children, onClick }: MobileLinkProps) {
  return (
    <Link
      href={href}
      className="text-[var(--text-color)]/70 hover:text-[var(--text-color)] hover:bg-[var(--bg-secondary)] transition-colors px-4 py-2"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}

export default function MobileMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Don't render if there are no navigation items
  if (navigationItems.length === 0) {
    return null;
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="inline-flex items-center justify-center size-9 border border-[var(--border-color)] bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-all duration-200 md:hidden"
        type="button"
        aria-label="Toggle menu"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute right-4 top-full w-48 bg-[var(--bg-color)] border border-[var(--border-color)] shadow-lg z-50">
          <nav className="flex flex-col p-1">
            {navigationItems.map((item) => (
              <MobileLink
                key={item.href}
                href={item.href}
                onClick={closeMobileMenu}
              >
                {item.label}
              </MobileLink>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}

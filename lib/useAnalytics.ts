"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (
      command: "config" | "event" | "js" | "set",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
  }
}

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

/**
 * Custom hook to track page views on route changes in Next.js App Router.
 * Only tracks route changes, not the initial page load (which is handled by GA4 initialization).
 */
export function useAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const prevPathnameRef = useRef<string | null>(null);

  useEffect(() => {
    if (!GA_ID) return;
    if (typeof window.gtag !== "function") return;

    // Skip tracking on initial mount (GA4 already tracks initial page load)
    if (prevPathnameRef.current === null) {
      prevPathnameRef.current = pathname;
      return;
    }

    // Only track if pathname actually changed
    if (prevPathnameRef.current === pathname) return;

    prevPathnameRef.current = pathname;

    const queryString = searchParams.toString();
    const url = queryString ? `${pathname}?${queryString}` : pathname;

    // Track page view on route change
    window.gtag("event", "page_view", {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);
}

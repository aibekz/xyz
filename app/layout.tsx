import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "next/third-parties/google";
import { Suspense } from "react";
import AnalyticsProvider from "./analytics-provider";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Vanza Labs",
  description:
    "Vanza Labs",
  keywords: ["Vanza Labs", "Vanza Labs, Inc."],
  authors: [{ name: "Vanza Labs, Inc.", url: "https://vanzalabs.com" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased ${ibmPlexSans.variable} bg-[var(--bg-color)] text-[var(--text-color)] font-sans`}
      >
        <ThemeProvider>
          <div className="flex min-h-screen h-fit flex-col">
            <Header />
            <main className="grow">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
        {/* Google Analytics - Only load if GA_ID is configured */}
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {/* Track route changes in App Router */}
        <Suspense fallback={null}>
          <AnalyticsProvider />
        </Suspense>
        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}

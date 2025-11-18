import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

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
      </body>
    </html>
  );
}

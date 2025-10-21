import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  title: "Aibek – Software Engineer",
  description:
    "I'm Aibek – a Software Engineer building web applications to provide immense value and impact in areas I'm passionate about.",
  keywords: ["Aibek.me", "Aibek.xyz"],
  authors: [{ name: "Aibek", url: "https://aibek.me" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`antialiased ${ibmPlexSans.variable} bg-[var(--bg-color)] text-[var(--text-color)] font-sans`}
      >
        <div className="flex min-h-screen h-fit flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

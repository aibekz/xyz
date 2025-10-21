import type { ReactNode } from "react";
import Breadcrumb from "./Breadcrumb";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageLayoutProps {
  children: ReactNode;
  breadcrumbItems: BreadcrumbItem[];
  className?: string;
}

export default function PageLayout({
  children,
  breadcrumbItems,
  className = "",
}: PageLayoutProps) {
  return (
    <div
      className={`mx-auto flex grow flex-col gap-y-6 px-4 max-w-4xl ${className}`}
    >
      <Breadcrumb items={breadcrumbItems} />
      <section className="flex flex-col gap-y-8 min-h-[calc(100vh-12rem)]">
        {children}
      </section>
    </div>
  );
}

import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function NotFound() {
  return (
    <PageLayout
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "404" }]}
    >
      <div className="w-full flex-1 border border-dashed border-[var(--text-color)]/30 flex flex-col items-center justify-center text-[var(--text-color)]/70 gap-4">
        <h3 className="text-2xl font-semibold">404 Not Found</h3>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-4 py-2 border bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-colors"
        >
          Go to Home Page
        </Link>
      </div>
    </PageLayout>
  );
}

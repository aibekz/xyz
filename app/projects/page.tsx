import PageLayout from "@/components/PageLayout";

export default function Projects() {
  return (
    <PageLayout
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Projects" }]}
    >
      <div className="w-full flex-1 border border-dashed border-[var(--text-color)]/30 flex items-center justify-center text-[var(--text-color)]/70">
        Projects Content
      </div>
    </PageLayout>
  );
}

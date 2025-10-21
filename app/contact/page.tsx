import PageLayout from "@/components/PageLayout";

export default function Contact() {
  return (
    <PageLayout
      breadcrumbItems={[{ label: "Home", href: "/" }, { label: "Contact" }]}
    >
      <div className="w-full flex-1 border border-dashed border-[var(--text-color)]/30 flex items-center justify-center text-[var(--text-color)]/70">
        Contact Content
      </div>
    </PageLayout>
  );
}

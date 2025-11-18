import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout breadcrumbItems={[]}>
      <div className="w-full flex-1 border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)]">
        <h3 className="text-3xl sm:text-5xl font-semibold">Vanza Labs</h3>
      </div>
    </PageLayout>
  );
}

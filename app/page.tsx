import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout breadcrumbItems={[]}>
      <div className="w-full flex-1 border border-[var(--text-color)]/30 flex items-center justify-center text-[var(--text-color)]/70">
        Home Content
      </div>
    </PageLayout>
  );
}

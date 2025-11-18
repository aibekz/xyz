import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout breadcrumbItems={[]}>
      <div className="w-full flex-1 border border-[var(--border-subtle)] flex items-center justify-center relative">
        <div className="relative z-10">
          <h3 className="text-3xl sm:text-5xl font-semibold">VANZA LABS</h3>
        </div>
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          aria-hidden="true"
        >
          <span 
            className="text-[20rem] sm:text-[30rem] opacity-10 text-[var(--text-color)] select-none"
            style={{ lineHeight: 1 }}
          >
            V
          </span>
        </div>
      </div>
    </PageLayout>
  );
}

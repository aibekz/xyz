import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--text-color)]/70">
      {items.map((item, index) => (
        <div key={`${item.label}-${index}`} className="flex items-center gap-2">
          {index > 0 && <span>/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[var(--link-color)] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[var(--text-color)]">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}

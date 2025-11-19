import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="py-4 ">
      <div className="mx-auto max-w-4xl flex items-center justify-between gap-y-2 px-4">
        {/* Left: Footer Text */}
        <div className="text-sm text-[var(--text-color)]/70 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Vanza Labs, Inc.</p>
        </div>

        {/* Right: Social / Contact Links */}
        <ul className="flex gap-2">
          <li>
            <Link
              href="https://github.com/vanzalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-9 border border-[var(--border-color)] bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
          </li>
          <li>
            <Link
              href="https://x.com/vanzalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-9 border border-[var(--border-color)] bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-all duration-200"
              aria-label="X"
            >
              <FaXTwitter size={18} />
            </Link>
          </li>
          <li>
            <Link
              href="https://linkedin.com/company/vanzalabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center size-9 border border-[var(--border-color)] bg-[var(--bg-color)] hover:bg-[var(--text-color)]/10 hover:text-[var(--text-color)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

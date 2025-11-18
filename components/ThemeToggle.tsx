"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        className="inline-flex items-center justify-center size-9 border border-[var(--border-subtle)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-all duration-200"
        type="button"
        aria-label="Theme toggle"
        disabled
      >
        <Moon size={16} />
      </button>
    );
  }

  const getIcon = () => {
    if (theme === "system") {
      return <Monitor size={16} />;
    }
    return theme === "light" ? <Sun size={16} /> : <Moon size={16} />;
  };

  const getNextTheme = () => {
    if (theme === "light") return "dark";
    if (theme === "dark") return "system";
    return "light";
  };

  const getAriaLabel = () => {
    if (theme === "system") return "Switch to light theme";
    if (theme === "light") return "Switch to dark theme";
    return "Switch to system theme";
  };

  return (
    <button
      className="inline-flex items-center justify-center size-9 border border-[var(--border-subtle)] bg-[var(--surface)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] transition-all duration-200"
      type="button"
      aria-label={getAriaLabel()}
      onClick={() => setTheme(getNextTheme())}
      title={`Current: ${theme}${theme === "system" ? ` (${systemTheme})` : ""}`}
    >
      {getIcon()}
    </button>
  );
}

export const navigationItems = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type NavigationItem = (typeof navigationItems)[number];

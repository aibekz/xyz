export const navigationItems = [] as const;

export type NavigationItem = (typeof navigationItems)[number];

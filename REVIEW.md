# Project Review

## Architecture and Structure
- Uses Next.js App Router with a shared layout that wraps the header, footer, and theme provider for consistent theming and navigation across pages (`app/layout.tsx`).
- Page scaffolding is centralized in a reusable `PageLayout` component that renders breadcrumbs and vertical spacing for each route (`components/PageLayout.tsx`).
- Navigation items are defined in a single source of truth (`lib/navigation.ts`) and reused in both the desktop header and mobile menu, preventing duplication.

## Frontend Implementation
- The theme system relies on `next-themes` and OKLCH design tokens, applied via CSS custom properties and exposed through a custom hook for component-level consumption (`components/ThemeProvider.tsx`, `app/globals.css`, `lib/useThemeColors.ts`, `lib/colors.ts`).
- Header and navigation provide responsive behavior: a desktop menu and a collapsible mobile menu with accessible toggle controls (`components/Header.tsx`, `components/MobileMenu.tsx`).
- Placeholder page bodies (`app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`) indicate routing is wired but content still needs to be authored.

## Issues and Recommendations
1. **Disabled social buttons with incorrect accessibility labels** – The footer renders GitHub and LinkedIn buttons that are disabled and reuse the "Theme toggle" aria-label, which is misleading for screen readers (`components/Footer.tsx`). Replace them with actual anchor links or remove the disabled controls until destinations are ready, and set accurate labels.
2. **Breadcrumb flexibility** – Breadcrumb rendering treats any non-last segment with `href` as navigable, but the current pages pass only two items. Consider adding support for automatic inclusion of the current page name and an accessible landmark role on the breadcrumb nav (`components/Breadcrumb.tsx`).
3. **Theme tokens duplication risk** – The design token definitions rely on matching values across CSS variables and TypeScript palettes. Keeping `app/globals.css` and `lib/colors.ts` synchronized is manual; introducing a single source (e.g., generating CSS variables from the TypeScript palette) would reduce drift.
4. **Content placeholders** – All pages currently display placeholder text inside bordered containers. Filling these with actual content or at least section headings would make the deployed site immediately useful to visitors (`app/page.tsx`, `app/about/page.tsx`, `app/projects/page.tsx`, `app/contact/page.tsx`).

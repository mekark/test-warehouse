"use client";

import { ReactNode, useSyncExternalStore } from "react";

/**
 * Breakpoints each layout variant is visible at. They mirror the Tailwind
 * classes the variant wrapper already uses (sm = 640px, desktop = 1024px).
 */
const QUERIES = {
  phone: "(max-width: 639px)",
  tablet: "(min-width: 640px) and (max-width: 1023px)",
  desktop: "(min-width: 1024px)",
  fromTablet: "(min-width: 640px)",
  belowDesktop: "(max-width: 1023px)",
} as const;

type ShowAtProps = {
  show: keyof typeof QUERIES;
  /** The wrapper's own Tailwind visibility classes stay, so the server HTML and first paint are unchanged. */
  className?: string;
  children: ReactNode;
};

/**
 * Sections ship separate phone / tablet / desktop layouts. The server HTML
 * contains all of them (each CSS-hidden where it doesn't apply), so the first
 * paint and no-JS output are identical to before. Once hydrated, only the
 * layout that matches the screen stays mounted: the hidden copies (extra
 * headings, forms, duplicate ids, hundreds of DOM nodes) are dropped.
 */
export default function ShowAt({ show, className, children }: ShowAtProps) {
  const query = QUERIES[show];

  const matches = useSyncExternalStore(
    (onChange) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    () => window.matchMedia(query).matches,
    // Server and hydration render: keep every variant so markup matches the HTML.
    () => true,
  );

  if (!matches) return null;

  return <div className={className}>{children}</div>;
}

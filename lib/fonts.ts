import { Inter, Manrope, Space_Grotesk } from "next/font/google";

// Shared font instances: declaring a font once keeps a single set of
// @font-face rules and font files instead of one per component.

// Variable font: one file covers every weight used on the site.
export const manrope = Manrope({
  subsets: ["latin"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

export const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["700"],
});

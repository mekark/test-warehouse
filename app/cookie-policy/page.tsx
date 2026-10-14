import type { Metadata } from "next";
import { CookiePolicyPage } from "@/components/legal/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Mekark",
  description:
    "Read how Mekark uses cookies and similar technologies, including Google Tag Manager, analytics, and live chat on the website.",
};

export default function CookiePolicyRoute() {
  return <CookiePolicyPage />;
}

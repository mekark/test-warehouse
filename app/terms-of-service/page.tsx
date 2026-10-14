import type { Metadata } from "next";
import { TermsOfServicePage } from "@/components/legal/TermsOfServicePage";

export const metadata: Metadata = {
  title: "Terms of Service | Mekark",
  description:
    "Read the Terms of Service for using the Mekark website, including permitted use, enquiries, intellectual property, and legal disclaimers.",
};

export default function TermsOfServiceRoute() {
  return <TermsOfServicePage />;
}

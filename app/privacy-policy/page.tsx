import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/components/legal/PrivacyPolicyPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Mekark",
  description:
    "Learn how Mekark collects, uses, and protects personal information submitted through the website, enquiry forms, and contact channels.",
};

export default function PrivacyPolicyRoute() {
  return <PrivacyPolicyPage />;
}

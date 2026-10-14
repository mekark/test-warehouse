import {
  LegalDocumentPage,
  type LegalSection,
} from "./LegalDocumentPage";

const LAST_UPDATED = "October 14, 2026";

const SECTIONS: readonly LegalSection[] = [
  {
    title: "1. What Are Cookies?",
    body: [
      "Cookies are small text files stored on your device when you visit a website. They help websites function properly, remember preferences, and understand how visitors use the Site.",
      "This Cookie Policy explains how Mekark Structure India Private Limited (“Mekark”, “we”, “us”, or “our”) uses cookies and similar technologies on mekark.com and related pages (the “Site”).",
    ],
  },
  {
    title: "2. Types of Cookies We Use",
    body: ["We use the following categories of cookies and similar technologies:"],
    list: [
      "Strictly necessary cookies: required for core Site functionality, security, and load balancing. These cannot be disabled through normal Site use without affecting functionality.",
      "Analytics cookies: help us understand how visitors use the Site, which pages are viewed, and how users interact with forms. We use Google Tag Manager (GTM-5SBMM86H), which may load analytics or measurement tags configured by Mekark.",
      "Functional cookies: enable enhanced features such as live chat through Tawk.to, allowing you to communicate with our team while browsing the Site.",
      "Performance cookies: may be set by content delivery or font providers to optimize page loading and display.",
    ],
  },
  {
    title: "3. Third-Party Cookies",
    body: [
      "Some cookies are placed by third-party services embedded on the Site. These providers may collect information about your browsing activity according to their own policies. Third parties currently used on the Site include:",
    ],
    list: [
      "Google Tag Manager / Google (analytics and marketing tags as configured);",
      "Tawk.to (live chat widget);",
      "Google Maps (when map embeds are displayed on contact pages).",
    ],
  },
  {
    title: "4. How Long Cookies Are Stored",
    body: [
      "Session cookies expire when you close your browser. Persistent cookies remain on your device for a set period or until you delete them. Retention periods vary by cookie type and provider.",
    ],
  },
  {
    title: "5. Managing Cookies",
    body: [
      "You can control or delete cookies through your browser settings. Most browsers allow you to block all cookies, block third-party cookies only, or delete existing cookies.",
      "Please note that disabling certain cookies may affect Site functionality, including form tracking, chat support, or embedded maps.",
      "To opt out of Google Analytics specifically (if enabled via GTM), you may use Google’s opt-out tools or browser add-ons provided by Google.",
    ],
  },
  {
    title: "6. Do Not Track",
    body: [
      "Some browsers offer a “Do Not Track” (DNT) signal. There is no uniform industry standard for responding to DNT signals. The Site does not currently respond differently based on DNT settings.",
    ],
  },
  {
    title: "7. Updates to This Policy",
    body: [
      "We may update this Cookie Policy when we change technologies, add new tools, or update legal requirements. The “Last updated” date at the top reflects the latest version.",
    ],
  },
  {
    title: "8. More Information",
    body: [
      "For details on how we handle personal information collected through cookies and forms, see our Privacy Policy. For general Site usage rules, see our Terms of Service.",
    ],
  },
  {
    title: "9. Contact Us",
    body: ["Questions about this Cookie Policy can be sent to:"],
    contact: true,
  },
];

export function CookiePolicyPage() {
  return (
    <LegalDocumentPage
      title="Cookie Policy"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ]}
    />
  );
}

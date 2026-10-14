import {
  LegalDocumentPage,
  type LegalSection,
} from "./LegalDocumentPage";

const LAST_UPDATED = "October 14, 2026";

const SECTIONS: readonly LegalSection[] = [
  {
    title: "1. Introduction",
    body: [
      "Mekark Structure India Private Limited (“Mekark”) respects your privacy. Our Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit mekark.com and related pages (collectively, the “Site”) or otherwise interact with us through enquiry forms, contact channels, or other features available.",
      "By accessing or using our Site or submitting personal information, you acknowledge that you have read and understood our Privacy Policy. If you do not agree, please refrain from using the Site or submitting your personal information.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect the following categories of information, depending on how you interact or use our site:",
    ],
    list: [
      "Contact details: name, email address, phone number, company name, and job title that you provide to us;",
      "Project information: location, building type, scope, timeline, budget range, and messages you provide voluntarily in enquiry or contact forms or any other project related forms;",
      "Career information: resume/CV details such as professional experience, skill sets, employment history and experience, and other related documents submitted through careers pages;",
      "Technical data: IP address, browser type, device information, pages viewed, referring URLs, approximate location derived from IP and other such information collected automatically when you access or use our site;",
      "Communications: records of your emails, calls, WhatsApp messages, or live chat conversations, enquiries and other correspondence you make when you contact us;",
      "Cookies and similar technologies: as described in our Cookie Policy.",
    ],
  },
  {
    title: "3. How We Use Information",
    body: ["We use personal information to:"],
    list: [
      "Respond to enquiries, quote requests, and contact form submissions;",
      "Evaluate career applications and communicate with applicants about recruitment;",
      "Provide information about Mekark services, projects, and capabilities;",
      "Improve the Site functionality, user experience, and effective marketing activities;",
      "Measure form engagement and understand Site performance through analytics tools;",
      "Maintain security of our Site, prevent fraud, and comply with legal and regulatory requirements; and",
      "Communicate with you about the projects or follow-ups you have requested.",
    ],
  },
  {
    title: "4. Legal Basis for Processing",
    body: [
      "Depending on context, we process personal information based on your consent, for our legitimate business interests (such as responding to enquiries and improving the Site), performance of steps before entering a contract, or compliance with applicable law, including the Information Technology Act, 2000 and rules thereunder, and the Digital Personal Data Protection Act, 2023 (DPDP Act), as applicable.",
    ],
  },
  {
    title: "5. How We Share Information",
    body: [
      "We do not sell your personal information. We may, as reasonably necessary, share information with:",
    ],
    list: [
      "Service providers who assist with hosting, analytics, email delivery, CRM, recruitment tools, or live chat (such as Google Tag Manager (GTM), Google Analytics if configured via GTM, and Tawk.to);",
      "Professional advisers, auditors, or legal counsel when reasonably necessary for legal and compliance purposes;",
      "Government authorities, courts, or regulators when required by law or necessary to protect our rights and business interests; and",
      "Affiliated entities within the Mekark group, where relevant, to respond to your request or any other communication.",
    ],
    footer: [
      "We have documented safeguards in place with third parties handling personal information on our behalf so that they process it only for authorised purposes.",
    ],
  },
  {
    title: "6. International Transfers",
    body: [
      "Some of our service providers may process data on servers located outside India. Where personal data is transferred internationally, we take reasonable steps to ensure appropriate safeguards consistent with applicable law.",
    ],
  },
  {
    title: "7. Data Retention",
    body: [
      "We retain personal information only as long as necessary for the purposes described in this Privacy Policy, including responding to enquiries, managing client or vendor relationships, handling recruitment, meeting legal requirements, and resolving disputes.",
      "Enquiry and contact records are typically retained for a reasonable business period unless a longer retention period is required by law or an active project relationship.",
    ],
  },
  {
    title: "8. Security",
    body: [
      "We implement reasonable administrative, technical, and organisational measures designed to protect personal information against unauthorised access, loss, misuse, or alteration. However, no website or transmission over the internet can be guaranteed to be completely secure, but we strive to keep it secure to the extent possible.",
    ],
  },
  {
    title: "9. Your Rights",
    body: [
      "Subject to applicable law, including the DPDP Act, you may have the right to:",
    ],
    list: [
      "Request access to personal information we hold about you;",
      "Request correction of inaccurate or incomplete information;",
      "Withdraw consent where processing is consent-based;",
      "Request erasure or restriction of processing in certain circumstances;",
      "Lodge a complaint with the relevant data protection authority in India or any other competent authority should a need arise.",
    ],
  },
  {
    title: "10. Children’s Privacy",
    body: [
      "The Site is intended for business and professional use. We do not knowingly or intend to collect personal information from children under 18. If you believe a child has provided us personal data, please contact us so we can take appropriate action.",
    ],
  },
  {
    title: "11. Third-Party Links",
    body: [
      "The Site may link to third-party websites such as social media platforms, maps, blogs, or partner sites. This Policy does not apply to those third parties. We encourage you to review their privacy policies separately.",
    ],
  },
  {
    title: "12. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. The “Last updated” date placed at the beginning of this Privacy Policy document indicates the latest revision. Material changes will be posted on this page. Continued use of the Site after updates constitutes acceptance of the revised Policy.",
    ],
  },
  {
    title: "13. Contact Us",
    body: [
      "For privacy-related questions, data access requests, or complaints, contact:",
    ],
    contact: true,
  },
];

export function PrivacyPolicyPage() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
      relatedLinks={[
        { label: "Cookie Policy", href: "/cookie-policy" },
        { label: "Terms of Service", href: "/terms-of-service" },
      ]}
    />
  );
}

import Link from "next/link";
import {
  LegalDocumentPage,
  type LegalSection,
} from "./LegalDocumentPage";
const FOOTNOTE_150_DAYS_ID = "footnote-150-days";

const LAST_UPDATED = "October 14, 2026";

const SECTIONS: readonly LegalSection[] = [
  {
    number: "1",
    title: "Acceptance of Terms",
    id: "acceptance-of-terms",
    body: [
      "These Terms of Service (“Terms”) govern your access to and use of the website operated by Mekark Structure India Private Limited (“Mekark”), including mekark.com and related pages (collectively, the “Site”).",
      "By accessing or using the Site, you agree to be bound by these Terms. If you do not agree, please refrain from using the Site.",
    ],
  },
  {
    number: "2",
    title: "About Mekark",
    id: "about-mekark",
    body: [
      "Mekark is an engineering, procurement, and construction (EPC) company providing industrial and commercial building solutions, including pre-engineered buildings (PEB), civil construction, MEP, solar, and related services.",
      "The information on the Site is provided for general business and marketing purposes. It does not constitute a binding offer, contract, or professional advice unless expressly agreed in a separate written agreement.",
    ],
  },
  {
    number: "3",
    title: "Permitted Use",
    id: "permitted-use",
    body: [
      "You may use the Site to learn about Mekark’s services, view project information, submit enquiries, and contact us for legitimate business purposes.",
      "While using the site, you agree not to:",
    ],
    list: [
      "Use the Site in any way that violates applicable laws or regulations in India or your jurisdiction;",
      "Attempt to gain unauthorised access to the Site, its servers, or connected systems;",
      "Introduce malware, automated scraping tools, or other harmful or disruptive code;",
      "Copy, reproduce, or republish Site content without our prior written consent; and/or",
      "Misrepresent your identity or affiliation when submitting forms or communications.",
    ],
  },
  {
    number: "4",
    title: "Enquiries and Form Submissions",
    id: "enquiries-and-form-submissions",
    body: [
      "When you submit an enquiry, contact form, career application, or other information through the Site, you confirm that the information you provide is accurate to the best of your knowledge.",
      "Submitting a form does not create a client relationship or project contract. Mekark will review your submission and may contact you using the details provided. Response times may vary based on the nature of enquiry and availability.",
      "You are responsible for ensuring that any personal or business information you share is appropriate for transmission through the Site.",
    ],
  },
  {
    number: "5",
    title: "Intellectual Property",
    id: "intellectual-property",
    body: [
      "All content on the Site, including text, graphics, logos, images, videos, layouts, trademarks, and design elements, is owned by Mekark or its licensors and is protected by applicable intellectual property laws.",
      "You may view and download the site content for personal and non-commercial reference only. You may not modify, distribute, sell, or create derivative works by using the Site content without our express written permission.",
    ],
  },
  {
    number: "6",
    title: "Project Information and Disclaimers",
    id: "project-information-and-disclaimers",
    body: [
      "Project images, case studies, timelines, capacities, certifications, and performance metrics shown on our Site are illustrative only and may represent completed projects, representative examples, or marketing summaries.",
      "Actual project outcomes depend on project site conditions, scope, approvals, materials, and contractual terms. Nothing on our Site guarantees specific results, delivery dates, or pricing.",
      "Marketing claims marked with an asterisk (*) on the Site, including the “150 Days*” design-to-handover turnaround, are subject to the terms in Section 6.1 below.",
      "The Site may contain links to third-party websites or resources. Mekark is not responsible for the content, policies, or practices of those third parties.",
    ],
  },
  {
    number: "6.1",
    title: "150 Days* Design-to-Handover Turnaround",
    id: FOOTNOTE_150_DAYS_ID,
    highlight: true,
    body: [
      "The “150 Days*” design-to-handover turnaround shown on the Site is an indicative benchmark only. It applies to select standard-scope industrial, warehouse, and pre-engineered building (PEB) projects where the project built-up area (sq. ft.), scope, drawings, statutory and client approvals, and site conditions align with Mekark’s defined fast-track delivery model.",
      "Actual timelines vary with built-up area (sq. ft.), structural complexity, design revisions, soil and site conditions, approval timelines, material availability, weather, labour availability, and the terms of the signed contract.",
      "Nothing on the Site is a binding commitment, guarantee, or offer to complete any project within 150 days unless expressly agreed in writing in a signed agreement between Mekark and the client.",
      "All performance figures, statistics, capacities, and timelines on the Site are illustrative or based on past projects and may not apply to every engagement. All propositions made are subject to these Terms.",
    ],
  },
  {
    number: "7",
    title: "Disclaimer of Warranties",
    id: "disclaimer-of-warranties",
    body: [
      "The Site is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, Mekark disclaims all warranties, whether express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
      "We do not guarantee that the Site will be uninterrupted, error-free, or free from security vulnerabilities.",
    ],
  },
  {
    number: "8",
    title: "Limitation of Liability",
    id: "limitation-of-liability",
    body: [
      "To the maximum extent permitted by applicable law, Mekark and its directors, officers, employees, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use our Site.",
      "Our total liability for any claim relating to the Site shall not exceed INR 5,000 or the amount you paid to access the Site (if any), whichever is greater, except where liability cannot be excluded under applicable law.",
    ],
  },
  {
    number: "9",
    title: "Indemnity",
    id: "indemnity",
    body: [
      "You agree to indemnify and hold harmless Mekark, its directors, officers, employees, and affiliates from any claims, losses, liabilities, or expenses (including reasonable legal fees) arising from your misuse of the Site or breach of these Terms.",
    ],
  },
  {
    number: "10",
    title: "Privacy",
    id: "privacy",
    body: [
      <>
        Your use of the Site is also subject to our Privacy Policy at{" "}
        <Link
          href="/privacy-policy"
          className="font-semibold text-[#ed1c24] hover:underline"
        >
          /privacy-policy
        </Link>
        , which explains how we collect, use, and protect personal
        information. Please review the Privacy Policy before submitting any of
        your personal data through the Site.
      </>,
    ],
  },
  {
    number: "11",
    title: "Changes to These Terms",
    id: "changes-to-these-terms",
    body: [
      "We may update these Terms from time to time. The “Last updated” date at the top of this page will reflect the latest revision. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
  {
    number: "12",
    title: "Governing Law and Jurisdiction",
    id: "governing-law-and-jurisdiction",
    body: [
      "These Terms are governed by the laws of India. Any dispute arising out of or relating to the Site or these Terms shall be subject to the exclusive jurisdiction of the courts at Chennai, Tamil Nadu, India.",
    ],
  },
  {
    number: "13",
    title: "Contact Us",
    id: "contact-us",
    body: ["If you have questions about these Terms, please contact:"],
    contact: true,
  },
];

export function TermsOfServicePage() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      lastUpdated={LAST_UPDATED}
      sections={SECTIONS}
      relatedLinks={[
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Cookie Policy", href: "/cookie-policy" },
      ]}
    />
  );
}

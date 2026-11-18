import { ReactNode } from "react";

type EnquiryFormButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

/**
 * "Request an Estimate" CTA. A plain anchor to #enquiry-form (smooth scrolling
 * comes from CSS), so it works before hydration, without JavaScript, and can
 * never be left disabled or dead.
 */
export default function EnquiryFormButton({
  children,
  className = "",
  showArrow = false,
}: EnquiryFormButtonProps) {
  return (
    <a href="#enquiry-form" className={className}>
      {children}
      {showArrow && <span className="ml-3 text-[22px]">→</span>}
    </a>
  );
}

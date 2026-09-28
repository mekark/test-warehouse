"use client";

import { ReactNode } from "react";
import { useEnquiryRedirect } from "@/hooks/useEnquiryRedirect";

type EnquiryFormButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export default function EnquiryFormButton({
  children,
  className = "",
  showArrow = false,
}: EnquiryFormButtonProps) {
  const { isRedirecting, redirectToEnquiryForm } = useEnquiryRedirect();

  return (
    <button
      type="button"
      onClick={redirectToEnquiryForm}
      disabled={isRedirecting}
      className={className}
    >
      {children}
      {showArrow && <span className="ml-3 text-[22px]">→</span>}
    </button>
  );
}

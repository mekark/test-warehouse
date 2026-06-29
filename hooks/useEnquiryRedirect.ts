"use client";

import { useCallback, useState } from "react";

export function useEnquiryRedirect(delay = 280, resetDelay = 900) {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToEnquiryForm = useCallback(() => {
    if (isRedirecting) return;

    setIsRedirecting(true);

    window.setTimeout(() => {
      document
        .getElementById("enquiry-form")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });

      window.setTimeout(() => {
        setIsRedirecting(false);
      }, resetDelay);
    }, delay);
  }, [isRedirecting, delay, resetDelay]);

  return { isRedirecting, redirectToEnquiryForm };
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useEnquiryRedirect } from "@/hooks/useEnquiryRedirect";

type EnquiryFormButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  lightRedirect?: boolean;
};

export default function EnquiryFormButton({
  children,
  className = "",
  showArrow = false,
  lightRedirect = false,
}: EnquiryFormButtonProps) {
  const { isRedirecting, redirectToEnquiryForm } = useEnquiryRedirect();

  return (
    <motion.button
      type="button"
      onClick={redirectToEnquiryForm}
      disabled={isRedirecting}
      whileHover={!isRedirecting ? { scale: 1.03 } : undefined}
      whileTap={!isRedirecting ? { scale: 0.97 } : undefined}
      animate={
        isRedirecting
          ? lightRedirect
            ? {
                scale: [1, 0.96, 1.02, 1],
                backgroundColor: [
                  "#ffffff",
                  "#111111",
                  "#111111",
                  "#ffffff",
                ],
                color: ["#ED2024", "#ffffff", "#ffffff", "#ED2024"],
              }
            : { scale: [1, 0.96, 1.02, 1] }
          : {}
      }
      transition={{ duration: 0.75, ease: "easeInOut" }}
      className={className}
    >
      {children}
      {showArrow && (
        <motion.span
          className="ml-3 text-[22px]"
          animate={
            isRedirecting
              ? { x: [0, 10, 0], opacity: [1, 0.6, 1] }
              : { x: 0, opacity: 1 }
          }
          transition={{ duration: 0.75, ease: "easeInOut" }}
        >
          →
        </motion.span>
      )}
    </motion.button>
  );
}

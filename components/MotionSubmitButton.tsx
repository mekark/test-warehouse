"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionSubmitButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  children: ReactNode;
  isSubmitting?: boolean;
};

export default function MotionSubmitButton({
  children,
  className = "",
  isSubmitting = false,
  disabled,
  ...props
}: MotionSubmitButtonProps) {
  const isDisabled = disabled || isSubmitting;

  return (
    <motion.button
      {...props}
      disabled={isDisabled}
      whileHover={!isDisabled ? { scale: 1.02 } : undefined}
      whileTap={!isDisabled ? { scale: 0.97 } : undefined}
      animate={
        isSubmitting
          ? { opacity: [1, 0.72, 1], scale: [1, 0.99, 1] }
          : { opacity: 1, scale: 1 }
      }
      transition={
        isSubmitting
          ? { duration: 1.1, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.2 }
      }
      className={className}
    >
      {children}
    </motion.button>
  );
}

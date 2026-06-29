"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

type MotionLinkButtonProps = Omit<HTMLMotionProps<"a">, "children"> & {
  children: ReactNode;
};

export default function MotionLinkButton({
  children,
  className = "",
  ...props
}: MotionLinkButtonProps) {
  return (
    <motion.a
      {...props}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

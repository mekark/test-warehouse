import { AnchorHTMLAttributes, ReactNode } from "react";

type MotionLinkButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export default function MotionLinkButton({
  children,
  className = "",
  ...props
}: MotionLinkButtonProps) {
  return (
    <a {...props} className={className}>
      {children}
    </a>
  );
}

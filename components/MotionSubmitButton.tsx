import { ButtonHTMLAttributes, ReactNode } from "react";

type MotionSubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
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
    <button {...props} disabled={isDisabled} className={className}>
      {children}
    </button>
  );
}

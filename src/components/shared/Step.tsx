import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/Step.module.css";

interface StepProps extends ComponentPropsWithoutRef<"div"> {
  step: number;
  isActive?: boolean;
}

export default function Step({
  className = "",
  step,
  isActive,
  ...props
}: StepProps) {
  return (
    <div
      className={`${style.step} ${className}`}
      data-active={isActive}
      {...props}
    >
      {step}
    </div>
  );
}

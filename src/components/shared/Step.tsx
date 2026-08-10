import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/Step.module.css";

interface StepProps extends ComponentPropsWithoutRef<"div"> {
  step: number;
  isActive?: boolean;
}

export default function Step({ step, isActive, ...props }: StepProps) {
  return (
    <div className={style.step} data-active={isActive} {...props}>
      {step}
    </div>
  );
}

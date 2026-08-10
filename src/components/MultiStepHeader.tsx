import type { ComponentPropsWithoutRef } from "react";
import Step from "./shared/Step";
import style from "./styles/MultiStepHeader.module.css";

interface MultiStepHeaderProps extends ComponentPropsWithoutRef<"header"> {
  currentStep: number;
}

export default function MultiStepHeader({
  currentStep,
  ...props
}: MultiStepHeaderProps) {
  return (
    <header className={style.header} {...props}>
      <ol arial-label="All form steps">
        {[1, 2, 3, 4].map((n) => {
          return currentStep === n ? (
            <Step
              key={n}
              aria-current={n === currentStep && "step"}
              isActive={currentStep === n}
              step={n}
            />
          ) : (
            <Step key={n} step={n} />
          );
        })}
      </ol>
    </header>
  );
}

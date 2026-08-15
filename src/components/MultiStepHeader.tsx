import type { ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../context/multiStepForm";
import Step from "./shared/Step";
import { allSteps } from "../constants/multiStepForm";
import style from "./styles/MultiStepHeader.module.css";

export default function MultiStepHeader({
  ...props
}: ComponentPropsWithoutRef<"header">) {
  const { state } = useMultiStepFormContext();
  const stepsArr = Array.from(
    { length: allSteps - 1 },
    (_, index) => index + 1,
  );

  return (
    <header className={style.header} {...props}>
      <ol arial-label="All form steps">
        {stepsArr.map((n) => {
          return state.currentStep === n ? (
            <Step
              key={n}
              aria-current={n === state.currentStep && "step"}
              isActive={state.currentStep === n}
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

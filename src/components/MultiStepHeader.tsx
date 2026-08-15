import type { ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../context/multiStepForm";
import { allSteps } from "../constants/multiStepForm";
import Step from "./shared/Step";
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
          return (
            <div>
              {state.currentStep === n ? (
                <Step
                  key={n}
                  aria-current={n === state.currentStep && "step"}
                  isActive={state.currentStep === n}
                  step={n}
                />
              ) : (
                <Step key={n} step={n} />
              )}

              <ListItemDetails currentStep={n} />
            </div>
          );
        })}
      </ol>
    </header>
  );
}

function ListItemDetails({ currentStep }: { currentStep: number }) {
  const detailsFromStep: Record<number, string> = {
    1: "Your info",
    2: "Select plan",
    3: "Add-ons",
    4: "Summary",
  };

  return (
    <div className={style["list_items_details"]}>
      <span>Step {currentStep}</span>
      <h3>{detailsFromStep[currentStep]}</h3>
    </div>
  );
}

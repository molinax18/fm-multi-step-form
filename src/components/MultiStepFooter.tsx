import type { ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../context/multiStepForm";
import { allSteps } from "../constants/multiStepForm";
import Button from "./shared/Button";
import style from "./styles/MultiStepFooter.module.css";

export default function MultiStepFooter({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  const { state, goToPrevStep } = useMultiStepFormContext();

  return (
    <footer className={`${style.footer} ${className}`} {...props}>
      <nav>
        {state.currentStep > 1 && (
          <Button btnTheme="semi" onClick={goToPrevStep}>
            Go Back
          </Button>
        )}

        {state.currentStep !== allSteps && (
          <Button
            className={style["next_button"]}
            type="submit"
            form="multiStepForm"
          >
            Next Step
          </Button>
        )}
      </nav>
    </footer>
  );
}

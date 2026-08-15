import type { ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../context/multiStepForm";
import { allSteps } from "../constants/multiStepForm";
import Button from "./shared/Button";
import style from "./styles/MultiStepFooter.module.css";

export default function MultiStepFooter({
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  const { state, onPrevStep } = useMultiStepFormContext();

  return (
    <footer className={style.footer} {...props}>
      <nav>
        {state.currentStep > 1 && (
          <Button btnTheme="semi" onClick={onPrevStep}>
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

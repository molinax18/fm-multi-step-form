import type { ComponentPropsWithoutRef } from "react";
import Button from "./shared/Button";
import style from "./styles/MultiStepFooter.module.css";

interface MultiStepFooterProps extends ComponentPropsWithoutRef<"footer"> {
  currentStep: number;
}

export default function MultiStepFooter({
  currentStep,
  ...props
}: MultiStepFooterProps) {
  return (
    <footer className={style.footer} {...props}>
      <nav>
        {currentStep > 1 && <Button btnTheme="semi">Go Back</Button>}

        <Button className={style["next_button"]}>Next Step</Button>
      </nav>
    </footer>
  );
}

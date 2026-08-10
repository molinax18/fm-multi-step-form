import type { ComponentPropsWithoutRef } from "react";
import Button from "./shared/Button";
import style from "./styles/MultiStepFooter.module.css";

interface MultiStepFooterProps extends ComponentPropsWithoutRef<"footer"> {
  currentStep: number;
}

export default function MultiStepFooter({
  className = "",
  currentStep,
  ...props
}: MultiStepFooterProps) {
  return (
    <footer className={`${style.footer} ${className}`} {...props}>
      <nav>
        {currentStep > 1 && <Button btnTheme="semi">Go Back</Button>}
        <Button>Next Step</Button>
      </nav>
    </footer>
  );
}

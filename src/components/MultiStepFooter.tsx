import type { ComponentPropsWithoutRef } from "react";
import { useMultiStepFormContext } from "../context/multiStepForm";
import Button from "./shared/Button";
import style from "./styles/MultiStepFooter.module.css";

export default function MultiStepFooter({
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  const { state } = useMultiStepFormContext();

  return (
    <footer className={style.footer} {...props}>
      <nav>
        {state.currentStep > 1 && <Button btnTheme="semi">Go Back</Button>}

        <Button className={style["next_button"]}>Next Step</Button>
      </nav>
    </footer>
  );
}

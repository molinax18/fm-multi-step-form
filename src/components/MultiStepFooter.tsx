import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/MultiStepFooter.module.css";

export default function MultiStepFooter({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"footer">) {
  return (
    <footer className={`${style.footer}${className}`} {...props}>
      <nav>
        <button>Next step</button>
      </nav>
    </footer>
  );
}

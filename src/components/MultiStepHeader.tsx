import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/MultiStepHeader.module.css";

export default function MultiStepHeader({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"header">) {
  return (
    <header className={`${style.header} ${className}`} {...props}>
      <ol arial-label="All form steps">
        <li aria-current="step">1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ol>
    </header>
  );
}

import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/Button.module.css";

type ButtonTheme = "fill" | "semi";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  btnTheme?: ButtonTheme;
}

export default function Button({
  children,
  type = "button",
  btnTheme = "fill",
  ...props
}: ButtonProps) {
  return (
    <button
      className={style.button}
      type={type}
      data-theme={btnTheme}
      {...props}
    >
      {children}
    </button>
  );
}

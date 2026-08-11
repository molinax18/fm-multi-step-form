import type { ComponentPropsWithoutRef } from "react";
import style from "./styles/Switch.module.css";

interface SwitchProps extends ComponentPropsWithoutRef<"input"> {
  name: string;
  id: string;
  onSwitch: () => void;
}

export default function Switch({ name, id, onSwitch, ...props }: SwitchProps) {
  return (
    <label htmlFor={id} className={style.switch}>
      <input
        type="checkbox"
        checked
        name={name}
        id={id}
        onChange={onSwitch}
        {...props}
      />
    </label>
  );
}

import { useId, type ComponentPropsWithoutRef } from "react";
import style from "./styles/Input.module.css";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  label?: string;
  error: string | null;
  name: string;
}

export default function Input({
  name,
  label,
  error,
  id,
  ...props
}: InputProps) {
  const defaultId = useId();
  const inputId = id ?? defaultId;

  return (
    <div>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        name={name}
        data-error={error}
        className={style.input}
        {...props}
      />
      {error && <span>{error}</span>}
    </div>
  );
}

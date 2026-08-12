import type { ComponentPropsWithoutRef } from "react";
import type { AddonType } from "../types/multiStepForm";
import { useMultiStepFormContext } from "../context/multiStepForm";
import style from "./styles/AddonCheckboxInput.module.css";

interface AddonCheckboxInputProps extends ComponentPropsWithoutRef<"input"> {
  addonName: string;
  name: AddonType;
  description: string;
  price: number;
  checked: boolean;
  onChangeAddon: (addon: AddonType) => void;
}

export default function AddonCheckboxInput({
  addonName,
  name,
  description,
  price,
  checked,
  onChangeAddon,
  ...props
}: AddonCheckboxInputProps) {
  const { state } = useMultiStepFormContext();
  const formattedTime = state.timeBilling === "monthly" ? "mo" : "yr";

  return (
    <label htmlFor={name} className={style["addon_checkbox_input_container"]}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={checked}
        onChange={() => onChangeAddon(name)}
        {...props}
      />

      <div>
        <h4>{addonName}</h4>

        <p>{description}</p>
      </div>

      <span>
        +${price}/{formattedTime}
      </span>
    </label>
  );
}

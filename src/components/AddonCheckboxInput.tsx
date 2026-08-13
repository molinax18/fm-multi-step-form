import type { ComponentPropsWithoutRef } from "react";
import type { AddonType, BillingTimeType } from "../types/multiStepForm";
import style from "./styles/AddonCheckboxInput.module.css";
import { formattedBillingTime } from "../utils/formattedBillingTime";

interface AddonCheckboxInputProps extends ComponentPropsWithoutRef<"input"> {
  addonName: string;
  name: AddonType;
  billingTime: BillingTimeType;
  description: string;
  price: number;
  checked: boolean;
  onChangeAddon: (addon: AddonType) => void;
}

export default function AddonCheckboxInput({
  addonName,
  name,
  billingTime,
  description,
  price,
  checked,
  onChangeAddon,
  ...props
}: AddonCheckboxInputProps) {
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
        +${price}/{formattedBillingTime(billingTime)}
      </span>
    </label>
  );
}

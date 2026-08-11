import type { ComponentPropsWithoutRef } from "react";
import type { PlanType, TimeBillingType } from "./forms/PlanForm";
import style from "./styles/PlanRadioInput.module.css";

interface PlanRadioInputProps extends ComponentPropsWithoutRef<"input"> {
  planName: string;
  name: PlanType;
  image: string;
  price: number;
  checked: boolean;
  timeBilling: TimeBillingType;
  onChangePlan: (newPlan: PlanType) => void;
}

export default function PlanRadioInput({
  planName,
  name,
  image,
  price,
  checked,
  timeBilling,
  onChangePlan,
  ...props
}: PlanRadioInputProps) {
  const formattedTime = timeBilling === "monthly" ? "mo" : "yr";

  return (
    <label htmlFor={name} className={style["input_radio_plan_container"]}>
      <img src={image} alt={`${planName} plan illustration`} />
      <div>
        <h4>{planName}</h4>
        <p>
          ${price}/{formattedTime}
        </p>
      </div>
      <input
        type="radio"
        name={name}
        checked={checked}
        id={name}
        {...props}
        onChange={() => onChangePlan(name)}
      />
    </label>
  );
}

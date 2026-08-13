import type { ComponentPropsWithoutRef } from "react";
import type { PlanType, BillingTimeType } from "../types/multiStepForm";
import { formattedBillingTime } from "../utils/formattedBillingTime";
import style from "./styles/PlanRadioInput.module.css";

interface PlanRadioInputProps extends ComponentPropsWithoutRef<"input"> {
  planName: string;
  name: PlanType;
  image: string;
  price: number;
  checked: boolean;
  billingTime: BillingTimeType;
  onChangePlan: (newPlan: PlanType) => void;
}

export default function PlanRadioInput({
  planName,
  name,
  image,
  price,
  checked,
  billingTime,
  onChangePlan,
  ...props
}: PlanRadioInputProps) {
  return (
    <label htmlFor={name} className={style["plan_radio_input_container"]}>
      <img src={image} alt={`${planName} plan illustration`} />
      <div>
        <h4>{planName}</h4>
        <p>
          ${price}/{formattedBillingTime(billingTime)}
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

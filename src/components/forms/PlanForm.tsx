import type { BillingTimeType } from "../../types/multiStepForm";
import { useMultiStepFormContext } from "../../context/multiStepForm";
import PlanRadioInput from "../PlanRadioInput";
import Switch from "../shared/Switch";
import style from "./styles/PlanForm.module.css";

import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";

export default function PlanForm() {
  const {
    state: { billingTime, plan },
    onBillingTime,
    onChangePlan,
  } = useMultiStepFormContext();

  return (
    <article className={`step_container ${style["plan_form"]}`}>
      <header>
        <h2 className="step_title">Select your plan</h2>

        <p>You have the option of monthly or yearly billing</p>
      </header>

      <form>
        <fieldset>
          <PlanRadioInput
            planName="Arcade"
            name="arcade"
            price={9}
            billingTime={billingTime}
            image={arcadeImg}
            checked={plan === "arcade"}
            onChangePlan={onChangePlan}
          />

          <PlanRadioInput
            planName="Advanced"
            name="advanced"
            price={12}
            billingTime={billingTime}
            image={advancedImg}
            checked={plan === "advanced"}
            onChangePlan={onChangePlan}
          />

          <PlanRadioInput
            planName="Pro"
            name="pro"
            price={9}
            billingTime={billingTime}
            image={proImg}
            checked={plan === "pro"}
            onChangePlan={onChangePlan}
          />
        </fieldset>

        <PlanBillingSwitch
          billingTime={billingTime}
          onBillingTime={onBillingTime}
        />
      </form>
    </article>
  );
}

function PlanBillingSwitch({
  billingTime,
  onBillingTime,
}: {
  billingTime: BillingTimeType;
  onBillingTime: () => void;
}) {
  return (
    <div className={style["plan_form_switch"]}>
      <label htmlFor="billingTime" data-active={billingTime === "monthly"}>
        Monthly
      </label>

      <Switch
        name={billingTime}
        id={billingTime}
        onSwitch={onBillingTime}
        checked={billingTime === "yearly"}
      />

      <label htmlFor="billingTime" data-active={billingTime === "yearly"}>
        Yearly
      </label>
    </div>
  );
}

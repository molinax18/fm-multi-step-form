import { useState } from "react";
import InputRadioPlan from "../InputRadioPlan";
import Switch from "../shared/Switch";
import style from "./styles/PlanForm.module.css";

import arcadeImg from "../../assets/images/icon-arcade.svg";
import advancedImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";

export type TimeBillingType = "monthly" | "yearly";
export type PlanType = "arcade" | "advanced" | "pro";

export default function PlanForm() {
  const [timeBilling, setTimeBilling] = useState<TimeBillingType>("monthly");
  const [plan, setPlan] = useState<PlanType>("arcade");

  const onSwitch = () => {
    setTimeBilling((prev) => (prev === "monthly" ? "yearly" : "monthly"));
  };
  const onChangePlan = (newPlan: PlanType) => {
    setPlan(newPlan);
  };

  return (
    <article className={`form ${style["plan_form"]}`}>
      <header>
        <h2 className="step_title">Select your plan</h2>

        <p>You have the option of monthly or yearly billing</p>
      </header>

      <form>
        <fieldset>
          <InputRadioPlan
            planName="Arcade"
            name="arcade"
            price={9}
            timeBilling={timeBilling}
            image={arcadeImg}
            checked={plan === "arcade"}
            onChangePlan={onChangePlan}
          />

          <InputRadioPlan
            planName="Advanced"
            name="advanced"
            price={12}
            timeBilling={timeBilling}
            image={advancedImg}
            checked={plan === "advanced"}
            onChangePlan={onChangePlan}
          />

          <InputRadioPlan
            planName="Pro"
            name="pro"
            price={9}
            timeBilling={timeBilling}
            image={proImg}
            checked={plan === "pro"}
            onChangePlan={onChangePlan}
          />
        </fieldset>

        <PlanBillingSwitch timeBilling={timeBilling} onSwitch={onSwitch} />
      </form>
    </article>
  );
}

function PlanBillingSwitch({
  timeBilling,
  onSwitch,
}: {
  timeBilling: TimeBillingType;
  onSwitch: () => void;
}) {
  return (
    <div className={style["plan_form_switch"]}>
      <label htmlFor="timeBilling" data-active={timeBilling === "monthly"}>
        Monthly
      </label>
      
      <Switch
        name={timeBilling}
        id="timeBilling"
        onSwitch={onSwitch}
        checked={timeBilling === "yearly"}
      />
      
      <label htmlFor="timeBilling" data-active={timeBilling === "yearly"}>
        Yearly
      </label>
    </div>
  );
}

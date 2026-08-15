import type { AddonType } from "../types/multiStepForm";
import { prices } from "../constants/multiStepForm";
import { useMultiStepFormContext } from "../context/multiStepForm";
import { formattedBillingTime } from "../utils/formattedBillingTime";
import style from "./styles/MultiStepCheck.module.css";

export default function MultiStepCheck() {
  const {
    state: { billingTime, plan, addons },
    onBillingTime,
    onNextStep,
  } = useMultiStepFormContext();

  const totalPrice =
    prices[billingTime].plan[plan] +
    addons.reduce((acc, a) => acc + prices[billingTime].addons[a], 0);

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    onNextStep();
  };

  return (
    <article className="step_container">
      <form
        id="multiStepForm"
        className={style["multi_step_check"]}
        onSubmit={onSubmit}
      >
        <header>
          <h2 className="step_title">Finishing up</h2>

          <p>Double-check everything looks OK before confirming.</p>
        </header>
        <div>
          <ul>
            <li className={style["multi_step_check_plan_option"]}>
              <div>
                <h3>
                  {plan.replace(plan[0], plan[0].toUpperCase())} ({billingTime})
                </h3>

                <button type="button" onClick={onBillingTime}>
                  Change
                </button>
              </div>
              <span>
                ${prices[billingTime].plan[plan]}/
                {formattedBillingTime(billingTime)}
              </span>
            </li>
            <hr />
            {addons.map((a) => {
              return (
                <li key={a} className={style["multi_step_check_addon_option"]}>
                  <h4>{addonName(a)}</h4>
                  <span>
                    ${prices[billingTime].addons[a]}/
                    {formattedBillingTime(billingTime)}
                  </span>
                </li>
              );
            })}
          </ul>

          <footer>
            <span>Total (per {billingTime})</span>
            <span>
              ${totalPrice}/{formattedBillingTime(billingTime)}
            </span>
          </footer>
        </div>
      </form>
    </article>
  );
}

function addonName(addon: AddonType) {
  switch (addon) {
    case "online":
      return "Online service";
    case "profile":
      return "Customizable profile";
    case "storage":
      return "Larger storage";

    default:
      return "Undefined";
  }
}

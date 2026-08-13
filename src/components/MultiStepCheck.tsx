import { prices } from "../constants/multiStepForm";
import { useMultiStepFormContext } from "../context/multiStepForm";
import { formattedBillingTime } from "../utils/formattedBillingTime";
import style from "./styles/MultiStepCheck.module.css";

export default function MultiStepCheck() {
  const {
    state: { billingTime, plan, addons },
  } = useMultiStepFormContext();
  const totalPrice =
    prices[billingTime].plan[plan] +
    addons.reduce((acc, a) => acc + prices[billingTime].addons[a], 0);

  return (
    <article className={`step_container ${style["multi_step_check"]}`}>
      <header>
        <h2 className="step_title">Finishing up</h2>

        <p>Double-check everything looks OK before confirming.</p>
      </header>
      <div>
        <ul>
          <li className={style["multi_step_check_plan_option"]}>
            <div>
              <h3>
                {plan} ({billingTime})
              </h3>

              <button>Change</button>
            </div>
            <span>
              ${prices[billingTime].plan[plan]}/
              {formattedBillingTime(billingTime)}
            </span>
          </li>
          <hr />
          {addons.map((a) => {
            return (
              <li key={a}>
                <h4>{a}</h4>
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
    </article>
  );
}

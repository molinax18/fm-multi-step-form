import { useMultiStepFormContext } from "../../context/multiStepForm";
import AddonCheckboxInput from "../AddonCheckboxInput";
import style from "./styles/AddonsForm.module.css";

export default function AddonsForm() {
  const {
    state: { addons, billingTime },
    onChangeAddon,
    onNextStep,
  } = useMultiStepFormContext();

  const onSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    onNextStep();
  };

  return (
    <article className={`step_container ${style["addons_form"]}`}>
      <header>
        <h2 className="step_title">Pick add-ons</h2>

        <p>Add-ons help enhance your gaming experience</p>
      </header>

      <form id="multiStepForm" onSubmit={onSubmit}>
        <fieldset>
          <AddonCheckboxInput
            name="online"
            price={10}
            checked={addons.some((a) => a === "online")}
            addonName="Online service"
            billingTime={billingTime}
            description="Access to multiplayer games"
            onChangeAddon={onChangeAddon}
          />

          <AddonCheckboxInput
            name="storage"
            price={20}
            checked={addons.some((a) => a === "storage")}
            addonName="Larger Storage"
            billingTime={billingTime}
            description="Extra 1TB of cloud save"
            onChangeAddon={onChangeAddon}
          />

          <AddonCheckboxInput
            name="profile"
            price={20}
            checked={addons.some((a) => a === "profile")}
            addonName="Customizable profile"
            billingTime={billingTime}
            description="Custom theme on your profile"
            onChangeAddon={onChangeAddon}
          />
        </fieldset>
      </form>
    </article>
  );
}

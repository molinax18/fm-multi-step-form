import { useState } from "react";
import type { AddonType } from "../../types/multiStepForm";
import AddonCheckboxInput from "../AddonCheckboxInput";
import style from "./styles/AddonsForm.module.css";

export default function AddonsForm() {
  const [addons, setAddons] = useState<Array<AddonType>>([]);
  const onChangeAddon = (addon: AddonType) => {
    const hasAddon = addons.some((a) => a === addon);

    if (hasAddon) {
      const newAddons = addons.filter((a) => a !== addon);
      setAddons(newAddons);
      return;
    }

    setAddons((prev) => [...prev, addon]);
  };

  return (
    <article className={`form ${style["addons_form"]}`}>
      <header>
        <h2 className="step_title">Pick add-ons</h2>

        <p>Add-ons help enhance your gaming experience</p>
      </header>

      <form>
        <fieldset>
          <AddonCheckboxInput
            name="online"
            price={10}
            checked={addons.some((a) => a === "online")}
            addonName="Online service"
            description="Access to multiplayer games"
            onChangeAddon={onChangeAddon}
          />

          <AddonCheckboxInput
            name="storage"
            price={20}
            checked={addons.some((a) => a === "storage")}
            addonName="Larger Storage"
            description="Extra 1TB of cloud save"
            onChangeAddon={onChangeAddon}
          />

          <AddonCheckboxInput
            name="profile"
            price={20}
            checked={addons.some((a) => a === "profile")}
            addonName="Customizable profile"
            description="Custom theme on your profile"
            onChangeAddon={onChangeAddon}
          />
        </fieldset>
      </form>
    </article>
  );
}

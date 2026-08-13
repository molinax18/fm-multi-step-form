import { useState } from "react";
import { MultiStepFormContextProvider } from "../context/multiStepForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import PlanForm from "./forms/PlanForm";
import AddonsForm from "./forms/AddonsForm";
import MultiStepCheck from "./MultiStepCheck";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(4);

  const renderForm = () => {
    if (step === 1) {
      return <PersonalInfoForm />;
    }

    if (step === 2) {
      return <PlanForm />;
    }

    if (step === 3) {
      return <AddonsForm />;
    }

    if (step === 4) {
      return <MultiStepCheck />;
    }

    return <span>No forms available</span>;
  };

  return (
    <section className={style["form_container"]}>
      <MultiStepHeader currentStep={step} />
      <MultiStepFormContextProvider>
        {renderForm()}
      </MultiStepFormContextProvider>
      <MultiStepFooter currentStep={step} />
    </section>
  );
}

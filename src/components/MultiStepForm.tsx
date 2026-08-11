import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import PlanForm from "./forms/PlanForm";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  const renderForm = () => {
    if (step === 1) {
      return <PersonalInfoForm />;
    }

    if (step === 2) {
      return <PlanForm />;
    }

    return <span>No forms available</span>;
  };

  return (
    <section className={style["form_container"]}>
      <MultiStepHeader currentStep={step} />
      
      {renderForm()}
      
      <MultiStepFooter currentStep={step} />
    </section>
  );
}

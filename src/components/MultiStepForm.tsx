import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(1);

  return (
    <section className={style["form_container"]}>
      <MultiStepHeader currentStep={step} />
      <PersonalInfoForm />
      <MultiStepFooter currentStep={step} />
    </section>
  );
}

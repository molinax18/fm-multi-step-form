import { useState } from "react";
import PersonalInfoForm from "./forms/PersonalInfo";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  const [step, setStep] = useState(2);

  return (
    <section className={style["form_container"]}>
      <MultiStepHeader currentStep={step} />
      <article>
        <PersonalInfoForm />
      </article>
      <MultiStepFooter currentStep={step} />
    </section>
  );
}

import PersonalInfoForm from "./forms/PersonalInfo";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  return (
    <section className={style["form_container"]}>
      <MultiStepHeader />
      <article>
        <PersonalInfoForm />
      </article>
      <MultiStepFooter />
    </section>
  );
}

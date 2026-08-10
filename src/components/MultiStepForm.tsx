import PersonalInfoForm from "./forms/PersonalInfo";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";

export default function MultiStepForm() {
  return (
    <section>
      <MultiStepHeader />
      <PersonalInfoForm />
      <MultiStepFooter />
    </section>
  );
}

import {
  MultiStepFormContextProvider,
  useMultiStepFormContext,
} from "../context/multiStepForm";
import MultiStepFooter from "./MultiStepFooter";
import MultiStepHeader from "./MultiStepHeader";
import MultiStepCheck from "./MultiStepCheck";
import MultiStepSuccess from "./MultiStepSuccess";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import PlanForm from "./forms/PlanForm";
import AddonsForm from "./forms/AddonsForm";
import style from "./styles/MultiStepForm.module.css";

export default function MultiStepForm() {
  return (
    <section className={style["form_container"]}>
      <MultiStepFormContextProvider>
        <MultiStepHeader />
        <div>
          <RenderForms />

          <MultiStepFooter className={style["form_container_footer"]} />
        </div>
      </MultiStepFormContextProvider>
    </section>
  );
}

function RenderForms() {
  const { state } = useMultiStepFormContext();

  switch (state.currentStep) {
    case 1:
      return <PersonalInfoForm />;
    case 2:
      return <PlanForm />;
    case 3:
      return <AddonsForm />;
    case 4:
      return <MultiStepCheck />;
    case 5:
      return <MultiStepSuccess />;
    default:
      return <span>No forms available</span>;
  }
}

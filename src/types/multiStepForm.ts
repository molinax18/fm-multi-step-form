export type BillingTimeType = "monthly" | "yearly";
export type PlanType = "arcade" | "advanced" | "pro";
export type AddonType = "online" | "storage" | "profile";

export type PersonalInfoType = {
  name: string;
  email: string;
  phone: string;
};

export type PersonalInfoField = keyof PersonalInfoType;

export type MultiStepFormValues = {
  personalInfo: PersonalInfoType;
  plan: PlanType;
  billingTime: BillingTimeType;
  addons: Array<AddonType>;
  currentStep: number;
};

export type FormAction =
  | { type: "SET_PERSONAL_INFO"; payload: PersonalInfoType }
  | {
      type: "UPDATE_PERSONAL_INFO_FIELD";
      payload: { field: PersonalInfoField; value: string };
    }
  | { type: "SET_PLAN"; payload: PlanType }
  | { type: "TOGGLE_BILLING_TIME" }
  | { type: "GO_TO_NEXT_STEP" }
  | { type: "GO_TO_PREV_STEP" }
  | { type: "TOGGLE_ADDON"; payload: AddonType };

export interface MultiStepFormContextProps {
  state: MultiStepFormValues;
  setPlan: (plan: PlanType) => void;
  toggleBillingTime: () => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  setPersonalInfo: (data: PersonalInfoType) => void;
  updatePersonalInfoField: (field: PersonalInfoField, value: string) => void;
  toggleAddon: (addon: AddonType) => void;
}

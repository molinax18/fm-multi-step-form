import type { Dispatch, SetStateAction } from "react";

export type BillingTimeType = "monthly" | "yearly";
export type PlanType = "arcade" | "advanced" | "pro";
export type AddonType = "online" | "storage" | "profile";

export type PersonalInfoType = {
  name: string;
  email: string;
  phone: string;
};

export type MultiStepFormValues = {
  personalInfo: PersonalInfoType;
  plan: PlanType;
  billingTime: BillingTimeType;
  addons: Array<AddonType>;
  currentStep: number;
};

export interface MultiStepFormContextProps {
  state: MultiStepFormValues;
  setState: Dispatch<SetStateAction<MultiStepFormValues>>;
  onChangePlan: (plan: PlanType) => void;
  onBillingTime: () => void;
  onNextStep: () => void;
  addPersonalInfo: (data: PersonalInfoType) => void;
}

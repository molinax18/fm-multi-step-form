import type { Dispatch, SetStateAction } from "react";

export type TimeBillingType = "monthly" | "yearly";
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
  timeBilling: TimeBillingType;
  addons: Array<AddonType>;
};

export interface MultiStepFormContextProps {
  state: MultiStepFormValues;
  setState: Dispatch<SetStateAction<MultiStepFormValues>>;
}

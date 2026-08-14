import type { MultiStepFormValues } from "../types/multiStepForm";

export const allSteps = 4;

export const initialContextValue: MultiStepFormValues = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: "arcade",
  billingTime: "monthly",
  addons: ["online"],
  currentStep: 4,
};

export const prices = {
  monthly: {
    plan: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    addons: {
      online: 1,
      storage: 2,
      profile: 2,
    },
  },
  yearly: {
    plan: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
    addons: {
      online: 10,
      storage: 20,
      profile: 20,
    },
  },
};

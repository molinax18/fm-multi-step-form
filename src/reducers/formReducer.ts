import type { FormAction, MultiStepFormValues } from "../types/multiStepForm";

export const formReducer = (
  state: MultiStepFormValues,
  action: FormAction,
): MultiStepFormValues => {
  switch (action.type) {
    case "SET_PERSONAL_INFO":
      return { ...state, personalInfo: action.payload };
    case "SET_PLAN":
      return { ...state, plan: action.payload };
    case "TOGGLE_BILLING_TIME":
      return {
        ...state,
        billingTime: state.billingTime === "monthly" ? "yearly" : "monthly",
      };
    case "GO_TO_NEXT_STEP":
      return { ...state, currentStep: state.currentStep + 1 };
    case "GO_TO_PREV_STEP":
      return { ...state, currentStep: state.currentStep - 1 };
    case "TOGGLE_ADDON": {
      const hasAddon = state.addons.some((a) => a === action.payload);
      if (hasAddon) {
        return {
          ...state,
          addons: state.addons.filter((a) => a !== action.payload),
        };
      }
      return { ...state, addons: [...state.addons, action.payload] };
    }
    default:
      return state;
  }
};

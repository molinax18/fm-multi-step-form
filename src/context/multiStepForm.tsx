/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer, type ReactNode } from "react";
import type {
  AddonType,
  MultiStepFormContextProps,
  PersonalInfoType,
  PlanType,
} from "../types/multiStepForm";
import { initialContextValue } from "../constants/multiStepForm";
import { formReducer } from "../reducers/formReducer";

export const MultiStepFormContext =
  createContext<MultiStepFormContextProps | null>(null);

export function MultiStepFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(formReducer, initialContextValue);

  const toggleBillingTime = () => {
    dispatch({ type: "TOGGLE_BILLING_TIME" });
  };

  const setPlan = (newPlan: PlanType) => {
    dispatch({ type: "SET_PLAN", payload: newPlan });
  };

  const goToNextStep = () => {
    dispatch({ type: "GO_TO_NEXT_STEP" });
  };

  const setPersonalInfo = (data: PersonalInfoType) => {
    dispatch({ type: "SET_PERSONAL_INFO", payload: data });
  };

  const toggleAddon = (addon: AddonType) => {
    dispatch({ type: "TOGGLE_ADDON", payload: addon });
  };

  const goToPrevStep = () => {
    dispatch({ type: "GO_TO_PREV_STEP" });
  };

  return (
    <MultiStepFormContext.Provider
      value={{
        state,
        toggleBillingTime,
        setPlan,
        goToNextStep,
        setPersonalInfo,
        toggleAddon,
        goToPrevStep,
      }}
    >
      {children}
    </MultiStepFormContext.Provider>
  );
}

export function useMultiStepFormContext() {
  const context = useContext(MultiStepFormContext);

  if (!context) {
    throw new Error("useMultiStepFormContext must be used within a provider");
  }

  return context;
}

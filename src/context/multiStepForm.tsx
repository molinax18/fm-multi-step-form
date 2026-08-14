/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  MultiStepFormContextProps,
  MultiStepFormValues,
  PersonalInfoType,
  PlanType,
} from "../types/multiStepForm";
import { initialContextValue } from "../constants/multiStepForm";

export const MultiStepFormContext =
  createContext<MultiStepFormContextProps | null>(null);

export function MultiStepFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<MultiStepFormValues>(initialContextValue);

  function onBillingTime() {
    setState((prev) => ({
      ...prev,
      billingTime: prev.billingTime === "monthly" ? "yearly" : "monthly",
    }));
  }

  function onChangePlan(newPlan: PlanType) {
    setState((prev) => ({
      ...prev,
      plan: newPlan,
    }));
  }

  function onNextStep() {
    setState((prev) => ({ ...prev, currentStep: prev.currentStep + 1 }));
  }

  function addPersonalInfo(data: PersonalInfoType) {
    setState((prev) => ({ ...prev, personalInfo: data }));
  }

  return (
    <MultiStepFormContext.Provider
      value={{
        state,
        setState,
        onBillingTime,
        onChangePlan,
        onNextStep,
        addPersonalInfo,
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

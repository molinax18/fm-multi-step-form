/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from "react";
import type {
  MultiStepFormContextProps,
  MultiStepFormValues,
} from "../types/multiStepForm";

export const initialValues: MultiStepFormValues = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
  },
  plan: "arcade",
  timeBilling: "monthly",
  addons: ["online"],
};

export const MultiStepFormContext =
  createContext<MultiStepFormContextProps | null>(null);

export function MultiStepFormContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, setState] = useState<MultiStepFormValues>(initialValues);

  return (
    <MultiStepFormContext.Provider value={{ state, setState }}>
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

import type { BillingTimeType } from "../types/multiStepForm";

export function formattedBillingTime(timeBilling: BillingTimeType) {
  return timeBilling === "monthly" ? "mo" : "yr";
}

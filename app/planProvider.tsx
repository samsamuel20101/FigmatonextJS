"use client";

import React, { createContext, useState } from "react";

export interface currentPlanType {
  customer: string,
  level: string,
  price: number,
  expireDate: Date,
}

const usePlanState = (props?: currentPlanType) =>
  useState(props);

export const PlanContext = createContext<ReturnType<
  typeof usePlanState
> | null>(null);

const PlanProvider = ({ children, props }: { children: React.ReactNode, props?: currentPlanType }) => {
  const [currentPlan, setCurrentPlan] = usePlanState(props);

  return (
    <PlanContext.Provider value={[currentPlan, setCurrentPlan]}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;
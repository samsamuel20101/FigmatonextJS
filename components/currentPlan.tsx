'use client'

import { PlanContext, currentPlanType } from "@/app/planProvider";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { useContext } from "react";

const CurrentPlan = () => {
  const [currentPlan] = useContext<currentPlanType | any>(PlanContext)
  const monthList = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ]
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-start pb-3 border-b-1 text-medium font-bold">
        <h2>Current Plan</h2>
      </div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col items-start">
          <h1 className="text-xl font-bold">{currentPlan.level}</h1>
          <div className="flex flex-row gap-1 items-center">
            <h1 className="text-2xl font-bold text-primary">{`$ ${currentPlan.price}`}</h1>
            <span>/month</span>
          </div>
          <p className="text-xs text-foreground-400">{`Your plan renews on ${monthList[currentPlan.expireDate.getMonth()]} ${currentPlan.expireDate.getDate()}, ${currentPlan.expireDate.getFullYear()}`}</p>
        </div>
        <div className="flex flex-col justify-between h-full">
          <Button href="/settings/billing/plans" as={Link} color="primary" radius="full" size="sm">Update Plan</Button>
          <Button color="danger" variant="bordered" radius="full" size="sm">Cancel Plan</Button>
        </div>
      </div>
    </div>
  )
}

export default CurrentPlan;

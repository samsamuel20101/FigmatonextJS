'use client'

import { Button } from "@nextui-org/button"
import { CheckCircleIcon, TaxIcon } from "./icons"
import { useContext } from "react"
import { PlanContext, currentPlanType } from "@/app/planProvider"

const planDisplay = [
  {
    title: 'Starter',
    price: 40,
    savePerMonth: 35,
  },
  {
    title: 'Premium',
    price: 80,
    savePerMonth: 75,
  },
  {
    title: 'Enterprise',
    price: 130,
    savePerMonth: 110,
  }
]
const plans = [
  'starter', 'premium', 'enterprise'
]

const PlanCard = ({ plan, key }: { plan: string, key: string }) => {
  const [currentPlan, setCurrentPlan] = useContext<currentPlanType | any>(PlanContext)
  const handleSubscribe = () => {
    setCurrentPlan({
      customer: 'Mykola Semen',
      level: planDisplay[plans.indexOf(plan)].title,
      price: planDisplay[plans.indexOf(plan)].price,
      expireDate: new Date(),
    })
  }
  return (
    <div key={key} className="flex flex-col items-start gap-4 max-w-[262px] w-full">
      <div className="flex flex-col items-start text-medium font-medium">
        <h1>{planDisplay[plans.indexOf(plan)].title}</h1>
        <div className="flex flex-row gap-1 items-center">
          <h1 className="text-3xl font-bold text-primary">{`$ ${planDisplay[plans.indexOf(plan)].price}`}</h1>
          <span>/month</span>
        </div>
        <h1>{`$${planDisplay[plans.indexOf(plan)].savePerMonth} per month if pay yearly.`}</h1>
      </div>
      {
        planDisplay[plans.indexOf(plan)].title == currentPlan.level
          ? (
            <Button isDisabled radius="full" fullWidth color="primary" size="md" variant='bordered'>
              Current Plan
            </Button>
          )
          : (
            <Button onClick={handleSubscribe} radius="full" fullWidth color="primary" size="md" variant='solid'>
              Subscribe
            </Button>
          )
      }
      <div className="flex flex-col justify-between items-start gap-2 text-sm leading-4">
        <h1 className="text-primary font-medium">Everything necessary to get started</h1>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon width={18} height={18} className="min-w-[18px]" />
          <h1>10.000 Credits</h1>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon width={18} height={18} className="min-w-[18px]" />
          <h1>Facebook adspy</h1>
        </div>
        <div className="flex flex-row gap-1 items-center ">
          <CheckCircleIcon width={18} height={18} className="min-w-[18px]" />
          <h1>Magic Search powered by Ai</h1>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon width={18} height={18} className="min-w-[18px]" />
          <h1>Instagram & Snapchat Influencer promotion</h1>
        </div>
        <div className="flex flex-row gap-1 items-center">
          <CheckCircleIcon width={18} height={18} className="min-w-[18px]" />
          <h1>Chrome extension</h1>
        </div>
      </div>
    </div>
  )
}

export default PlanCard;

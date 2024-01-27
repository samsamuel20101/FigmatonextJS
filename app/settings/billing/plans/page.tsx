import { BackIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import PlanCard from "@/components/planCard";
import { Link } from "@nextui-org/link";

export default function BillingPage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-2xl font-bold">Plans</h2>
        <div className="flex flex-col gap-8 max-w-4xl">
          <div className="flex flex-row items-center justify-start gap-8 h-full">
            <PlanCard plan="starter" key='plan_card_starter' />
            <PlanCard plan="premium" key='plan_card_premium' />
            <PlanCard plan="enterprise" key='plan_card_enterprise' />
          </div>
          <div className="flex">
            <div>
                <Button 
                href="/settings/billing"
                as={Link}
                radius="full" fullWidth color="default" size="md" variant="bordered" startContent={<BackIcon />}>
                  Go Back
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
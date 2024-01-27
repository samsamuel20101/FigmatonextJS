import { BinIcon, CreditCardIcon, DotIcon, VisaIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";
import { Link } from "@nextui-org/link";
import CurrentPlan from "@/components/currentPlan";

export default function BillingPage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h2 className="text-2xl font-bold">Billing & Plans</h2>
        <div className="flex flex-col gap-8">
          <CurrentPlan />
          <div className="flex flex-col gap-4">
            <div className="flex items-start pb-3 border-b-1 text-medium font-bold">
              <h2>Payment Method</h2>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-3">
                <VisaIcon />
                <h1>Visa</h1>
                <div className="flex flex-row items-center gap-1">
                  {['', '', '', ''].map((item: string, index: number) => <DotIcon key={'dot_icon_' + index} />)}
                </div>
                <span>0126</span>
                <Chip color="default" radius="full" size="sm" className="text-xs leading-3 font-medium text-white">Default</Chip>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <h1>Expires 01/2025</h1>
                <BinIcon />
              </div>
            </div>
            <div className="flex items-center">
                <Button href="/settings/billing/add-payment" as={Link} radius="full" color="primary" size="md" variant="solid" startContent={<CreditCardIcon />}>
                  Add Payment method
                </Button>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start pb-3 border-b-1 text-medium font-bold">
              <h2>Shipping and Tax Info</h2>
            </div>
            <div className="grid grid-cols-2 justify-between items-start text-sm font-medium">
              <div className="flex flex-row items-center gap-3">
                <h1>Shipping Address</h1>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <h1>7662 Hegmann Wall Apt.124 Pollichchester, IA 13008-3640, New MacUnited State</h1>
              </div>
            </div>
            <div className="grid grid-cols-2 justify-between items-start text-sm font-medium">
              <div className="flex flex-row items-center gap-3">
                <h1>Tax Info</h1>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <h1>NL1234567889B12</h1>
              </div>
            </div>
            <div className="flex items-center">
                <Button  href="/settings/billing/update-info" as={Link} radius="full" color="primary" size="md" variant="solid" startContent={<CreditCardIcon />}>
                  Update Shipping and Tax
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
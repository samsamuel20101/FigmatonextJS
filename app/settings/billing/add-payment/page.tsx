import { Input } from "@nextui-org/input";
import { BackIcon, CreditCardIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Link } from "@nextui-org/link";

export default function BillingPage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-2xl font-bold">Billing & Plans</h2>
        <div className="grid xl:grid-cols-2 grid-cols-1">
          <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-start pb-6 border-b-1 text-medium font-bold">
              <h2>Shipping Address</h2>
            </div>
            <div className="flex flex-col w-full gap-4">
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Card Number
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="374245455400126"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <div className="flex flex-row gap-4 justify-center items-center">
                <Input
                  type="Password"
                  label={
                    <div className="text-base font-medium">
                      Expire Date
                    </div>
                  }
                  radius="sm"
                  variant="bordered"
                  placeholder="******"
                  labelPlacement="outside"
                  className="max-w-sm w-full"
                />
                <Input
                  type="password"
                  label={
                    <div className="text-base font-medium">
                      CVV
                    </div>
                  }
                  radius="sm"
                  variant="bordered"
                  placeholder="******"
                  labelPlacement="outside"
                  className="max-w-sm w-full"
                />
              </div>
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Country
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <div className="flex flex-col items-start gap-2">
                <div className="flex flex-row text-sm">
                  <Checkbox size="lg"><p className="text-sm font-medium">Use as default payment method</p></Checkbox>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between gap-4">
              <Button radius="full" fullWidth color="primary" size="md" variant="solid" startContent={<CreditCardIcon />}>
                Add Payment Method
              </Button>
              <div>
                <Button href="/settings/billing" as={Link} radius="full" fullWidth color="default" size="md" variant="bordered" startContent={<BackIcon />}>
                  Go Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
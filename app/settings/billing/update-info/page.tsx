import { Input } from "@nextui-org/input";
import { BackIcon, TaxIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
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
                    Country
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Address Line 1
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Address Line 2
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    City
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    State
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Zip
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
            </div>
            <div className="flex flex-row justify-between gap-4">
              <Button radius="full" fullWidth color="primary" size="md" variant="solid" startContent={<TaxIcon />}>
                Save Changes
              </Button>
              <div>
                <Button href="/settings/billing" as={Link} radius="full" fullWidth color="default" size="md" variant="bordered" startContent={<BackIcon />}>
                  Go Back
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-start pb-6 border-b-1 text-medium font-bold">
              <h2>Tax Info</h2>
            </div>
            <div className="flex flex-col w-full gap-4">
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Email
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="John@mail.com"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Phone Number
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="John@mail.com"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    ID Type
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
              <Input
                type="string"
                label={
                  <div className="text-base font-medium">
                    Tax Number
                  </div>
                }
                radius="sm"
                variant="bordered"
                placeholder="Netherlands"
                labelPlacement="outside"
                className="max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
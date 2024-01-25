import { Input } from "@nextui-org/input";
import { BinIcon, DotIcon, EditIcon, VisaIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import { Chip } from "@nextui-org/chip";

export default function BillingPage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h2 className="text-lg font-bold">Billing & Plans</h2>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex items-start pb-3 border-b-1 text-medium font-medium">
              <h2>Current Plan</h2>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-col items-start">
                <h1 className="text-xl font-bold">Premium</h1>
                <div className="flex flex-row gap-1 items-center">
                  <h1 className="text-2xl font-bold text-primary">$80</h1>
                  <span>/month</span>
                </div>
                <p className="text-xs text-foreground-400">Your plan renews on February 11, 2024</p>
              </div>
              <div className="flex flex-col justify-between h-full">
                <Button color="primary" radius="full" size="sm">Update Plan</Button>
                <Button color="danger" variant="bordered" radius="full" size="sm">Cancel Plan</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4 gap-6">
            <div className="flex items-start pb-3 border-b-1 text-medium font-medium">
              <h2>Current Plan</h2>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row items-center gap-3">
                <VisaIcon />
                <h1>Visa</h1>
                <div className="flex flex-row items-center gap-1">
                  {['', '', '', ''].map(() => <DotIcon />)}
                </div>
                <span>0126</span>
                <Chip color="default" radius="full" size="sm" className="text-xs leading-3 font-medium text-white">Default</Chip>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <h1>Expires 01/2025</h1>
                <BinIcon />
              </div>
            </div>
          </div>

        </div>
        <Input
          type="email"
          label={
            <div className="text-base font-medium">
              Email
            </div>
          }
          radius="sm"
          variant="bordered"
          placeholder="John@mail.com"
          labelPlacement="outside"
          className="max-w-md w-full"
        />
        <Input
          type="phone"
          label={
            <div className="text-base font-medium">
              Phone Number
            </div>
          }
          autoComplete="none"
          radius="sm"
          variant="bordered"
          placeholder="+3197010265159"
          labelPlacement="outside"
          className="max-w-md w-full"
        />
        <Input
          type="password"
          label={
            <div className="text-base font-medium">
              Change Password
            </div>
          }
          autoComplete="off"
          radius="sm"
          variant="bordered"
          placeholder="****"
          labelPlacement="outside"
          className="max-w-md w-full"
        />
        <div className="flex items-center">
          <Button radius="full" color="primary" size="md" variant="solid" startContent={<EditIcon />}>
            Upload Security Info
          </Button>
        </div>
      </div>
    </div>
  )
}
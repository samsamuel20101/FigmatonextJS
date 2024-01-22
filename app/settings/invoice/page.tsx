import { Input } from "@nextui-org/input";
import { EditIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";

export default function InvoicePage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h2 className="text-lg font-bold">invoice page (initial)</h2>
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
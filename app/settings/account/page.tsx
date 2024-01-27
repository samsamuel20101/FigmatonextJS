"use client"

import { Input } from "@nextui-org/input";
import { CloudUploadIcon, EditIcon } from "@/components/icons";
import { Select, SelectItem } from "@nextui-org/select";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import AdminAvatar from "@/public/admin_avatar.png"

export default function AccountPage() {
  const selectData = [
    { key: 'key1', value: 'select1', label: 'select 1' },
    { key: 'key2', value: 'select2', label: 'select 2' },
    { key: 'key3', value: 'select3', label: 'select 3' },
    { key: 'key4', value: 'select4', label: 'select 4' },
    { key: 'key5', value: 'select5', label: 'select 5' },
    { key: 'key1', value: 'select6', label: 'select 6' },
  ]
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full max-w-md">
        <h2 className="text-2xl font-bold">Profile Info</h2>
        <Input
          type="string"
          label={
            <div className="text-base font-medium">
              First Name
            </div>
          }
          radius="sm"
          variant="bordered"
          placeholder="John"
          labelPlacement="outside"
          className="max-w-md w-full"
        />
        <Input
          type="url"
          label={
            <div className="text-base font-medium">
              Last Name
            </div>
          }
          radius="sm"
          variant="bordered"
          placeholder="Week"
          labelPlacement="outside"
          className="max-w-md w-full"
        />
        <Select
          // key={r}
          radius='sm'
          size="md"
          label={
            <h1 className="text-base ml-2 font-bold text-foreground-700">Country</h1>
          }
          variant="bordered"
          placeholder="Select Country"
          labelPlacement="outside"
          // defaultSelectedKeys={["select2"]}
          className="max-w-md w-full"
        >
          {selectData.map((data) => (
            <SelectItem key={data.value + 'country'} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          // key={r}
          radius='sm'
          size="md"
          label={
            <h1 className="text-base ml-2 font-bold text-foreground-700">Time Zone</h1>
          }
          variant="bordered"
          placeholder="Select your Time Zone"
          labelPlacement="outside"
          // defaultSelectedKeys={["select2"]}
          className="max-w-md w-full"
        >
          {selectData.map((data) => (
            <SelectItem key={data.value + 'timezone'} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          // key={r}
          radius='sm'
          size="md"
          label={
            <h1 className="text-base ml-2 font-bold text-foreground-700">Language</h1>
          }
          variant="bordered"
          placeholder="Select your Language"
          labelPlacement="outside"
          // defaultSelectedKeys={["select2"]}
          className="max-w-md w-full"
        >
          {selectData.map((data) => (
            <SelectItem key={data.value + 'language'} value={data.value}>
              {data.label}
            </SelectItem>
          ))}
        </Select>
        <div className="flex items-center">
          <Button radius="full" color="primary" size="md" variant="solid" startContent={<EditIcon />}>
            Upload Profile Info
          </Button>
        </div>
      </div>
      <div className="flex flex-col w-40 gap-3">
        <Image src={AdminAvatar} alt="admin-avatar" className="rounded-lg" />
        <div className="flex items-center w-40">
          <Button radius="full" color="primary" size="md" variant="solid" className="w-40" startContent={<CloudUploadIcon />}>
            Upload Image
          </Button>
        </div>
      </div>
    </div>
  )
}
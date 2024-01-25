import { Input } from "@nextui-org/input";
import { EditIcon } from "@/components/icons";
import { Button } from "@nextui-org/button";
import InvoiceTable from "@/components/invoiceTable";

const rows = [
	{
		key: "1",
		invoiceId: "06B4DF6A-0001",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "2",
		invoiceId: "06B4DF6A-0002",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "3",
		invoiceId: "06B4DF6A-0003",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "4",
		invoiceId: "06B4DF6A-0004",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "5",
		invoiceId: "06B4DF6A-0005",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "6",
		invoiceId: "06B4DF6A-0006",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "7",
		invoiceId: "06B4DF6A-0007",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "8",
		invoiceId: "06B4DF6A-0008",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "9",
		invoiceId: "06B4DF6A-0009",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "10",
		invoiceId: "06B4DF6A-00010",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
	{
		key: "10",
		invoiceId: "06B4DF6A-00011",
		paymentDate: "11:33 AM, Mon, 24 Nov 2023",
		paymentMethod: { name: "Visa", number: 4242424242424242 },
    amount: 80
	},
];

export default function InvoicePage() {
  return (
    <div className="flex flex-row gap-40 w-full pt-8">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-xl font-bold">Invoice History</h2>
          <Button radius="full" color="primary" size="md" variant="solid" startContent={<EditIcon />}>
            Upload Security Info
          </Button>
        </div>
        <InvoiceTable rows={rows}/>
      </div>
    </div>
  )
}
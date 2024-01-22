import { SearchIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import TicketTable from "@/components/ticketTable";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import TicketIcon from "@/components/TicketIcon"
import TicketToggleView from "@/components/ticketToggleView";
import { Chip } from "@nextui-org/chip";
import Image from "next/image";
import TicketCard from "@/components/TicketCard";
import ChattingBlock from "@/components/ChattingBlock";

const rows = [
	{
		key: "1",
		ticketId: "#9842873",
		source: { link: "#", email: "support1@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola1@test.com" },
		status: "New Ticket",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "2",
		ticketId: "#9842874",
		source: { link: "#", email: "support2@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola2@test.com" },
		status: "In Progress",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "3",
		ticketId: "#9842875",
		source: { link: "#", email: "support3@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola3@test.com" },
		status: "Human Review",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "4",
		ticketId: "#9842873",
		source: { link: "#", email: "support1@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola1@test.com" },
		status: "New Ticket",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "5",
		ticketId: "#9842874",
		source: { link: "#", email: "support2@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola2@test.com" },
		status: "In Progress",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "6",
		ticketId: "#9842875",
		source: { link: "#", email: "support3@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola3@test.com" },
		status: "Closed",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "7",
		ticketId: "#9842873",
		source: { link: "#", email: "support1@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola1@test.com" },
		status: "New Ticket",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "8",
		ticketId: "#9842874",
		source: { link: "#", email: "support2@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola2@test.com" },
		status: "In Progress",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "9",
		ticketId: "#9842875",
		source: { link: "#", email: "support3@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola3@test.com" },
		status: "Closed",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "10",
		ticketId: "#9842873",
		source: { link: "#", email: "support1@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola1@test.com" },
		status: "Closed",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
	{
		key: "10",
		ticketId: "#9842873",
		source: { link: "#", email: "support1@test.com" },
		customer: { name: "Mykola Semen", country: "Netherlands", email: "mykola1@test.com" },
		status: "Human Review",
		allClasifications: "Where is my order?",
		lastUpdate: { message: "Thank you for reaching out to us regarding...", elapsedTime: 3 },
		totalValue: 4587.00,
	},
];

export default function CreateTicket() {

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-between">
				<h1 className={title()}>Tickets</h1>
				<div className="flex flex-row gap-2">
					<ThemeSwitch />
					<Input
						key='rounded-full'
						radius='full'
						type="text"
						size="sm"
						placeholder="Search"
						className="max-w-[220px]"
						startContent={
							<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
						}
					/>
				</div>
			</div>
			<div className="flex flex-row justify-between gap-8 w-full h-[670px] min-h-full">
				<ChattingBlock />
				<div className="flex flex-col flex-grow gap-4">
					<div className="w-64 h-72 p-4 rounded-lg shadow-lg bg-foreground-50">contact card</div>
					<div className="w-64 h-96 p-4 rounded-lg shadow-lg bg-foreground-50">order card</div>
				</div>
			</div>
		</div>
	);
}

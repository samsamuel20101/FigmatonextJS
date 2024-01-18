"use client"

import { SearchIcon } from "@/components/icons";
import { title } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import TicketTable from "@/components/ticketTable";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import TicketIcon from "@/components/TicketIcon"
import TicketToggleView from "@/components/ticketToggleView";
import { useState } from "react";
import TicketCard from "@/components/TicketCard";
import Link from "next/link";

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

export default function Tickets() {
	const [selected, setSelected] = useState("table")
	const newTicket = rows.filter(row => row.status === "New Ticket")
	const inProgress = rows.filter(row => row.status === "In Progress")
	const humanReview = rows.filter(row => row.status === "Human Review")
	const closed = rows.filter(row => row.status === "Closed")
	return (
		<div className="flex flex-col gap-2">
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
			<div className="flex flex-row justify-between font-bold text-xl">
				<div >New Tickets (12)</div>
				<div className="flex flex-row gap-3">
					<TicketToggleView selected={selected} setSelected={setSelected}/>
					<Button href={"/tickets/create"} as={Link} radius="full" color="primary" variant="solid" startContent={<TicketIcon />}>
						Create Ticket
					</Button>
				</div>
			</div>
			{selected == "table"
			? (
				<TicketTable rows={rows} />
			)
			: (
				<div className="flex flex-row justify-between gap-4">
					<div className="flex flex-col gap-4 w-full">
						<div className="flex flex-row justify-between py-3 px-6 text-primary w-full bg-primary-100 rounded-xl">
							<div className="flex gap-2">
								<TicketIcon />
								New Tickets
							</div>
							<span className="font-bold">{newTicket.length}</span>
						</div>
						{newTicket.map((item, i) => <TicketCard key={item.key +'_ticket_'+ i} ticket={item} />)}
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div className="flex flex-row justify-between py-3 px-6 text-warning w-full bg-warning-100 rounded-xl">
							<div className="flex gap-2">
								<TicketIcon />
								In Progress
							</div>
							<span className="font-bold">{inProgress.length}</span>
						</div>
						{inProgress.map((item, i) => <TicketCard key={item.key +'_ticket_'+ i} ticket={item} />)}
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div className="flex flex-row justify-between py-3 px-6 text-danger w-full bg-danger-100 rounded-xl">
							<div className="flex gap-2">
								<TicketIcon />
								Human Review
							</div>
							<span className="font-bold">{humanReview.length}</span>
						</div>
						{humanReview.map((item, i) => <TicketCard key={item.key +'_ticket_'+ i} ticket={item} />)}
					</div>
					<div className="flex flex-col gap-4 w-full">
						<div className="flex flex-row justify-between py-3 px-6 text-success w-full bg-success-100 rounded-xl">
							<div className="flex gap-2">
								<TicketIcon />
								Closed
							</div>
							<span className="font-bold">{closed.length}</span>
						</div>
						{closed.map((item, i) => <TicketCard key={item.key +'_ticket_'+ i} ticket={item} />)}
					</div>
				</div>
			)
			}
			
			
		</div>
	);
}

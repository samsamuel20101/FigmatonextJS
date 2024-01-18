import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Card from "@/components/card";
import { Input } from "@nextui-org/input";
import { SearchIcon } from "@/components/icons";
import CsatCard from "@/components/csatCard";
import TicketTable from "@/components/ticketTable";
import { ThemeSwitch } from "@/components/theme-switch";
import RegionCard from "@/components/resionCard";

export interface cardProps {
	name: string,
	earn: number,
	increases: number,
	color: string,
	paramName: string,
	days: number,
}

const statusData = [
	{
		name: 'Total Sales',
		earn: 589981,
		increases: 16.45,
		color: 'green',
		paramName: 'sales',
		days: 7,
	}, {
		name: 'Total Orders',
		earn: 360,
		increases: 16.45,
		color: 'red',
		paramName: 'orders',
		days: 7,
	}, {
		name: 'Total Tickets',
		earn: 34143,
		increases: 16.45,
		color: 'green',
		paramName: 'tickets',
		days: 7,
	}, {
		name: 'Unsolved Tickets',
		earn: 11,
		increases: 0,
		color: 'gray',
		paramName: 'tickets',
		days: 7,
	},
]

const rows = [
  {
    key: "1",
    ticketId: "#9842873",
    source: {link:"#", email:"support1@test.com"},
    customer: {name: "Mykola Semen", country: "Netherlands", email:"mykola1@test.com"},
    status: "New Ticket",
    allClasifications: "Where is my order?",
    lastUpdate: {message: "Thank you for reaching out...", elapsedTime: 3},
    totalValue: 4587.00,
  },
  {
    key: "2",
    ticketId: "#9842874",
    source: {link:"#", email:"support2@test.com"},
    customer: {name: "Mykola Semen", country: "Netherlands", email:"mykola2@test.com"},
    status: "In Progress",
    allClasifications: "Where is my order?",
    lastUpdate: {message: "Thank you for reaching out...", elapsedTime: 3},
    totalValue: 4587.00,
  },
  {
    key: "3",
    ticketId: "#9842875",
    source: {link:"#", email:"support3@test.com"},
    customer: {name: "Mykola Semen", country: "Netherlands", email:"mykola3@test.com"},
    status: "Human Review",
    allClasifications: "Where is my order?",
    lastUpdate: {message: "Thank you for reaching out...", elapsedTime: 3},
    totalValue: 4587.00,
  },
];

export default function Home() {

	return (
		<section className="flex flex-col justify-between w-full gap-6 py-8">
			<div className="flex justify-between">
				<h1 className={title()}>Dashboard</h1>
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

			<div className="flex flex-row justify-between items-center gap-4 ">
				{statusData.map((item, i) => (
					<Card key={"card" + i} props={item} />
				))}
			</div>

			<div className="flex flex-row items-stretch gap-8 ">
				<div className="flex flex-col w-full justify-between items-start gap-4 ">
					<h1 className="text-2xl font-bold">Region</h1>
					<RegionCard />
				</div>
				<div className="flex flex-col w-full justify-between items-start gap-4 ">
					<h1 className="text-2xl font-bold">CSAT</h1>
					<CsatCard />
				</div>
			</div>

			<div className="flex flex-col max-w-full w-full items-start gap-1">
				<h1 className="text-2xl font-bold">Latest Tickets</h1>
				<div className="flex flex-row w-full justify-between items-center gap-4 ">
					<TicketTable rows={rows}/>
				</div>
			</div>



		</section>
	);
}

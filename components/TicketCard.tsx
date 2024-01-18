import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Tooltip } from "@nextui-org/tooltip";
import { Divider } from "@nextui-org/divider";
import ShopifyIcon from '@/public/shopify.svg'
import MailIcon from '@/public/mail.svg'
import NetherlandsFlag from '@/public/Netherlands.svg'
import EyeIcon from '@/components/EyeIcon'
import EditIcon from '@/components/EditIcon'
import DeleteIcon from '@/components/DeleteIcon'
const TicketCard = ({ ticket }: { ticket: any }) => {
	const colorList = [
		'primary', 'warning', 'danger', 'success'
	]
	const ticketList = [
		"New Ticket", "In Progress", "Human Review", "Closed", 
	]
	return (
		<div className="relative">
			<div className={`w-full absolute rounded-lg h-8 z-0 -translate-y-1 bg-${colorList[ticketList.indexOf(ticket.status)]}`} />
			<div className="relative flex flex-col gap-1 w-full shadow-lg rounded-lg p-3 text-sm font-bold bg-foreground-50 z-10 translate-y-0.5">
				<div className="mb-5">{ticket.ticketId}</div>
				<div className="flex flex-row justify-between items-start">
					<div>Woocommerce</div>
					<div className="flex flex-row justify-center items-center gap-2">
						<Link href={ticket.source.link} size="md">
							<Image src={ShopifyIcon} width={16} height={16} alt="shopify" />
						</Link>
						<Link href={`mailto:${ticket.source.email}`} size="md">
							<Image src={MailIcon} width={16} height={16} alt="inbox" />
						</Link>
					</div>
				</div>
				<Divider className="py-[1px] my-2" />
				<div className="flex flex-col justify-center items-start">
					<div className="flex felx-row justify-center items-center gap-2">
						<h1>{ticket.customer.name}</h1>
						<Image src={NetherlandsFlag} alt={ticket.customer.country} title="Netherlands (NL)" width={16} height={16} />
					</div>
					<div className="text-foreground-400 font-normal">{ticket.customer.email}</div>
				</div>
				<div>{ticket.allClasifications}</div>
				<div className="leading-6 flex flex-col gap-2">
					<div className="text-xs font-normal">{ticket.lastUpdate.message}</div>
					<div className="text-foreground-400 text-xs font-normal">{`${ticket.lastUpdate.elapsedTime} hours ago`}</div>
				</div>
				<div className="flex flex-row justify-between items-center mt-2">
					<div>Total Value</div>
					<div>{ticket.totalValue.toLocaleString('en-US', {
						style: 'currency',
						currency: 'USD',
					})}</div>
				</div>
				<Divider className="py-[1px] my-2" />
				<div className="flex flex-row justify-between items-center">
					<div className="text-sm text-foreground-400 font-normal">04/01/2323</div>
					<div className="relative flex items-center justify-center gap-2">
						<Tooltip content="Details">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EyeIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit ticket">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EditIcon />
							</span>
						</Tooltip>
						<Tooltip color="danger" content="Delete ticket">
							<span className="text-lg text-danger cursor-pointer active:opacity-50">
								<DeleteIcon />
							</span>
						</Tooltip>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TicketCard
import { cardProps } from "@/app/page"
import { Link } from "@nextui-org/link"
import Image from "next/image"
import ChevronBtm from '@/public/chevron-bottom.svg'
import CoinDollorIcon from '@/public/coin-dollar.svg'
import ShoppingCartIcon from '@/public/shopping-cart.svg'
import TicketsIcon from '@/public/tickets.svg'
import TicketIcon from '@/public/ticket-one.svg'
import formatNumber from "./formatNum"

const Card = ({ props }: { props: cardProps }) => {
	const { name, earn, increases, color, paramName, days } = props

	const nameList = [
		'Total Sales', 'Total Orders', 'Total Tickets', 'Unsolved Tickets'
	]

	const avatarList = [
		CoinDollorIcon, ShoppingCartIcon, TicketsIcon, TicketIcon
	]

	const reportText = () => {
		return `${paramName} in last ${days} days`
	}

	const increaseNum = () => {
		return increases != 0
			? `+${increases}%`
			: `0.00%`
	}

	const increaseColor = () => {
		const colors = [
			'green', 'red', 'gray'
		]
		const colorList = [
			'text-green-400', 'text-red-500', 'text-gray-400'
		]
		return colorList[colors.indexOf(color)]
	}

	return (
		<div className="w-full min-w-64 h-40 p-4 rounded-md shadow-2xl flex flex-col items-start justify-between bg-background dark:bg-foreground-200">
			<div className="relative w-full flex justify-between items-center">
				{name}
				<div className="absolute right-0 top-0 bg-[#06F] p-1 rounded-md">
					<Image src={avatarList[nameList.indexOf(name)]} alt={name} width={24} height={24} />
				</div>
			</div>
			<div className="flex flex-col">
				<div className="flex flex-row items-end gap-2">
					<h1 className="text-2xl font-bold">{paramName == "sales" ? '$' + formatNumber(earn) : formatNumber(earn)}</h1>
					<h1 className={increaseColor()}>{increaseNum()}</h1>
				</div>
				<h1 className="flex flex-row">{reportText()}</h1>
			</div>
			<Link href="#" size="md" className="relative w-full" showAnchorIcon anchorIcon={(
				<Image className="bg-[#06F] absolute rounded-md bg-blend-multiply right-0" src={ChevronBtm} alt="chevronBtm" />
			)}>View Details</Link>
		</div>
	)
}

export default Card
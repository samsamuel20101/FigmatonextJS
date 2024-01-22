import { Divider } from "@nextui-org/divider"
import Image from "next/image"
import { DeleteIcon, EditIcon, ShopifyIcon } from "./icons"
import avatar from "@/public/Logo-small.svg"
import { Button } from "@nextui-org/button"

const ChatbotCard = (props: {
	title: string,
	logo?: string,
	chatId: string,
	integrations: string,
	date: string,
	badgeColor: string,
}) => {

	const {title, logo, chatId, integrations, date, badgeColor} = props

	return (
		<div className="h-full relative rounded-md pl-2">
			<div className={`absolute z-0 h-full ${badgeColor} w-12 rounded-xl -translate-x-2`} />
			<div className="relative bg-foreground-50 dark:bg-foreground-200 shadow-lg w-full h-full rounded-xl flex flex-col p-4 pr-6">
				<div className="flex items-center gap-3 text-lg font-bold">
					{logo == 'shopify'
						? <ShopifyIcon />
						: <Image src={avatar} alt="small logo" />
					}

					<p>{title}</p>
				</div>
				<Divider className="my-4" />
				<div className="flex flex-col gap-4 w-full font-medium">
					<div className="flex flex-col gap-3 w-full">
						<h1 className="font-bold">Chat ID</h1>
						<p>{chatId}</p>
					</div>
					<div className="flex flex-col gap-3 w-full">
						<h1 className="font-bold">Integrations</h1>
						<div className="flex flex-row gap-3 items-center">
							{integrations == "shopify" && (
								<div className="flex flex-row gap-2 items-center text-medium">
									<ShopifyIcon />
									<h2>Shopify</h2>
								</div>
							)}
						</div>
					</div>
				</div>
				<Divider className="my-4" />
				<div className="flex flex-row justify-between items-center w-full h-6">
					<div>{date}</div>
					<div className="flex flex-row justify-between items-center gap-2">
						<Button size="md" isIconOnly radius="full" className="bg-transparent">
							<EditIcon color="#0066ff" />
						</Button>
						<Button size="md" isIconOnly radius="full" className="bg-transparent">
							<DeleteIcon color="#f42626" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatbotCard
import { DeleteIcon, EditIcon, SearchIcon, ShopifyIcon } from "@/components/icons"
import { title } from "@/components/primitives"
import { ThemeSwitch } from "@/components/theme-switch"
import { Input } from "@nextui-org/input"
import Image from "next/image"
import avatar from "@/public/Logo-small.svg"
import { Divider } from "@nextui-org/divider"
import ChatbotCard from "@/components/chatbotCard"

const chatCardData = [
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Shopify Assistant",
		logo: "shopify",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-green-500"
	},
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Shopify Assistant",
		logo: "shopify",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-green-500"
	},
	{
		title: "Shopify Assistant",
		logo: "shopify",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-green-500"
	},
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Shopify Assistant",
		logo: "shopify",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-green-500"
	},
	{
		title: "Ecomm Assistant",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-primary"
	},
	{
		title: "Shopify Assistant",
		logo: "shopify",
		chatId: "1c162ec2-b1cc-4676-a5c2-5aa509bd44a5",
		integrations: "shopify",
		date: "04/01/2023",
		badgeColor: "bg-green-500"
	},
]

const ChatbotPage = () => {
	return (
		<div className="flex flex-col gap-4 w-full h-full">
			<div className="flex justify-between">
				<h1 className={title()}>Chatbots</h1>
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
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{chatCardData.map((item, i) => 
					<ChatbotCard key={item.chatId + i} {...item}/>
				)}
				<div className="h-full relative rounded-md pl-2">
					<div className="absolute z-0 h-full bg-primary w-12 rounded-xl -translate-x-2" />
					<div className="relative bg-foreground-50 dark:bg-foreground-200 shadow-lg w-full h-full rounded-xl flex flex-col p-4 pr-6">
						<div className="flex items-center gap-3 text-lg font-bold">
							<Image src={avatar} alt="small logo" />
							<p>Ecomm Assistant</p>
						</div>
						<Divider className="my-4" />
						<div className="flex flex-col gap-4 w-full font-medium">
							<div className="flex flex-col gap-3 w-full">
								<h1 className="font-bold">Chat ID</h1>
								<p>1c162ec2-b1cc-4676-a5c2-5aa509bd44a5</p>
							</div>
							<div className="flex flex-col gap-3 w-full">
								<h1 className="font-bold">Integrations</h1>
								<div className="flex flex-row gap-2 items-center text-medium">
									<ShopifyIcon />
									<h2>Shopify</h2>
								</div>
							</div>
						</div>
						<Divider className="my-4" />
						<div className="flex flex-row justify-between items-center w-full h-6">
							<div>04/01/2023</div>
							<div className="flex flex-row justify-between items-center gap-4">
								<EditIcon  color="#0066ff" />
								<DeleteIcon color="#f42626"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ChatbotPage
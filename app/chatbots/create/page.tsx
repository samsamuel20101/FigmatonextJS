"use client"

import { useState } from "react";
import { Select, SelectItem } from "@nextui-org/select"
import { Input, Textarea } from "@nextui-org/input";
import { Tabs, Tab } from "@nextui-org/tabs";
import { Slider } from "@nextui-org/slider";
import { Button } from "@nextui-org/button";
import { Key } from '@react-types/shared';
import {
	BehaviorIcon,
	ChatbotIcon,
	CirclePositiveIcon,
	ConnectionIcon,
	CrossCloseIcon,
	EmojiSmileIcon,
	IntegrationsIcon,
	NewChatIcon,
	SearchIcon,
	SettingsIcon,
	ShopifyIcon,
	SpeakHumanIcon,
	WoocommerceIcon,
	EditIcon,
	DeleteIcon
} from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { title } from "@/components/primitives";
import SendIcon from "@/components/SendIcon";
import smallLogo from "@/public/Logo-small.svg";
import Image from "next/image";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

export default function Chatbots() {
	const [selected, setSelected] = useState<string | Key>("chatbot")
	const [integrationSelected, setIntegrationSelected] = useState<string | Key>("shopify")
	const [avatar, setAvatar] = useState(smallLogo)
	const [code, setCode] = useState(`<script>\n	CHATBOT_ID = 'vn31QRiZCUu9QYp25MzAi';\n</script>\n<script async type="text/javascript" src="https://cdn.ecomassist.ai/static/chatbot.js">\n</script>`)
	const selectData = [
		{ key: 'key1', value: 'select1', label: 'select 1' },
		{ key: 'key2', value: 'select2', label: 'select 2' },
		{ key: 'key3', value: 'select3', label: 'select 3' },
		{ key: 'key4', value: 'select4', label: 'select 4' },
		{ key: 'key5', value: 'select5', label: 'select 5' },
		{ key: 'key1', value: 'select6', label: 'select 6' },
	]
	return (
		<div className="flex flex-col gap-4 h-full w-full">
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
			<div className="flex flex-row gap-4 min-w-[800px] w-full">
				<div className="flex flex-col w-3/5 gap-4">
					<h1 className="text-xl font-bold">Settings</h1>
					<div className="bg-foreground-50 dark:bg-foreground-100 shadow-lg p-4 rounded-lg w-full h-full min-w-min">
						<Tabs
							aria-label="Options"
							color="primary"
							variant="underlined"
							selectedKey={selected}
							onSelectionChange={setSelected}

						>
							<Tab
								key="chatbot"
								title={
									<div className="flex items-center space-x-2">
										<ChatbotIcon />
										<span>Chatbot</span>
									</div>
								}
							>
								<div className="flex flex-col gap-4 my-8">
									<Select
										// key={r}
										radius='sm'
										size="md"
										label={
											<h1 className="text-base ml-2 font-bold text-foreground-700">Headline</h1>
										}
										variant="bordered"
										placeholder="Chat with our AI"
										labelPlacement="outside"
										// defaultSelectedKeys={["select2"]}
										className="max-w-md w-full"
									>
										{selectData.map((data) => (
											<SelectItem key={data.value} value={data.value}>
												{data.label}
											</SelectItem>
										))}
									</Select>
									<Select
										// key={r}
										radius='sm'
										size="md"
										label={
											<h1 className="text-base ml-2 font-bold text-foreground-700">Description</h1>
										}
										variant="bordered"
										placeholder="Ask any questions you have"
										labelPlacement="outside"
										// defaultSelectedKeys={["select2"]}
										className="max-w-md w-full"
									>
										{selectData.map((data) => (
											<SelectItem key={data.value} value={data.value}>
												{data.label}
											</SelectItem>
										))}
									</Select>
									<Textarea
										labelPlacement="outside"
										maxRows={3}
										label={
											<h1 className="text-base ml-2 font-bold text-foreground-700">Welcome Message</h1>
										}
										variant="bordered"
										placeholder="Enter your description (Max rows 3)"
										className="max-w-md w-full"
									/>
									<div className="flex items-center gap-2">
										<Button isIconOnly radius="full" className="bg-transparent">
											<CirclePositiveIcon className="text-primary" />
										</Button>
										<Button size="sm" radius="md" isIconOnly className="bg-primary" />
										<Button size="sm" radius="md" isIconOnly className="bg-warning" />
										<Button size="sm" radius="md" isIconOnly className="bg-danger" />
									</div>
									<Select
										// key={r}
										radius='sm'
										size="md"
										label={
											<h1 className="text-base ml-2 font-bold text-foreground-700">Popup Message</h1>
										}
										variant="bordered"
										placeholder="Chat with our AI"
										labelPlacement="outside"
										// defaultSelectedKeys={["select2"]}
										className="max-w-md w-full"
									>
										{selectData.map((data) => (
											<SelectItem key={data.value} value={data.value}>
												{data.label}
											</SelectItem>
										))}
									</Select>
									<Select
										// key={r}
										radius='sm'
										size="md"
										label={
											<h1 className="text-base ml-2 font-bold text-foreground-700">Suggested Message</h1>
										}
										variant="bordered"
										placeholder="Chat with our AI"
										labelPlacement="outside"
										// defaultSelectedKeys={["select2"]}
										className="max-w-md w-full"
									>
										{selectData.map((data) => (
											<SelectItem key={data.value} value={data.value}>
												{data.label}
											</SelectItem>
										))}
									</Select>
									<div className="flex items-center font-bold text-foreground-700">
										<Button isIconOnly radius="full" className="bg-transparent">
											<CirclePositiveIcon className="text-primary" />
										</Button>
										<h1>Add Message</h1>
									</div>
								</div>
							</Tab>
							<Tab
								key="behavior"
								title={
									<div className="flex items-center space-x-2">
										<BehaviorIcon />
										<span>Behavior</span>
									</div>
								}
							>
								<div className="flex flex-col gap-4 my-8">
									<Textarea
										labelPlacement="outside"
										minRows={5}
										maxRows={5}
										variant="bordered"
										label={
											<h1 className="text-lg font-bold ml-2 text-foreground-700">Personality</h1>
										}
										placeholder="Ecom Bot welcomes users with a warm and approachable demeanor. Conversations with Ecom Bot feel like chatting with a knowledgeable friend who is always ready to assist. (Max rows 5)"
										className="max-w-md w-full text-base"
									/>
									<div className="flex flex-col justify-center items-start gap-3 w-full max-w-md">
										<h1 className="text-lg font-bold">Tone of Voice</h1>
										<p>Select a color from list or add a custom color</p>
										<Slider
											size="sm"
											step={0.01}
											maxValue={1}
											minValue={0}
											aria-label="Temperature"
											defaultValue={0.2}
											className="max-w-md"
										/>
										<div className="w-full flex flex-row justify-between items-center text-lg font-bold">
											<h1>Formal</h1>
											<h1>Casual</h1>
										</div>
									</div>
									<div className="flex flex-col justify-center items-start gap-3 w-full max-w-md mt-4">
										<h1 className="text-lg font-bold">Creativity</h1>
										<p>Select a color from list or add a custom color</p>
										<Slider
											size="sm"
											step={0.01}
											maxValue={1}
											minValue={0}
											aria-label="Temperature"
											defaultValue={0.2}
											className="max-w-md"
										/>
										<div className="w-full flex flex-row justify-between items-center text-lg font-bold">
											<h1>Reserved</h1>
											<h1>Inventive</h1>
											<h1>Creative</h1>
										</div>
									</div>
								</div>
							</Tab>
							<Tab
								key="integrations"
								title={
									<div className="flex items-center space-x-2">
										<IntegrationsIcon />
										<span>Integrations</span>
									</div>
								}
							>
								<Tabs
									aria-label="Options"
									selectedKey={integrationSelected}
								// onSelectionChange={setIntegrationSelected}
								>
									<Tab
										key="shopify"
										title={
											<div className="flex flex-col gap-4 py-2">
												<div className="flex items-center space-x-2">
													<ShopifyIcon />
													<span className="text-base font-bold">Shopify</span>
												</div>
												<div className="max-w-[183px] whitespace-break-spaces text-start">Boost your Shopify store&apos;s performance.</div>
											</div>
										}
										className="h-[102px]"
									>
										<div className="flex flex-col gap-6 w-full pt-8">
											<div className="flex flex-col gap-4 w-full max-w-md">
												<Input
													type="string"
													label={
														<div className="text-base font-medium pl-2">
															Store name
														</div>
													}
													radius="sm"
													variant="bordered"
													placeholder="My Shopify Store"
													labelPlacement="outside"
													className="max-w-md w-full"
												/>
												<Input
													type="url"
													label={
														<div className="text-base font-medium pl-2">
															Store URL
														</div>
													}
													radius="sm"
													variant="bordered"
													placeholder="My Shopify Store"
													labelPlacement="outside"
													className="max-w-md w-full"
												/>
											</div>
											<div className="text-2xl font-bold">Shopify Connection</div>
											<div className="flex flex-col gap-4 w-full max-w-md">
												<Input
													type="string"
													label={
														<div className="text-base font-medium pl-2">
															Store name
														</div>
													}
													radius="sm"
													variant="bordered"
													placeholder="My Shopify Store"
													labelPlacement="outside"
													className="max-w-md w-full"
												/>
												<Input
													type="url"
													label={
														<div className="text-base font-medium pl-2">
															Store URL
														</div>
													}
													radius="sm"
													variant="bordered"
													placeholder="My Shopify Store"
													labelPlacement="outside"
													className="max-w-md w-full"
												/>
											</div>
											<div>
												<Button radius="full" color="primary" size="md" variant="solid" startContent={<ConnectionIcon />}>
													Test Connection
												</Button>
											</div>
										</div>
									</Tab>
									<Tab
										key="woocommerce"
										title={
											<div className="flex flex-col gap-4 py-2">
												<div className="flex items-center space-x-2">
													<WoocommerceIcon />
													<span className="text-base font-bold">Woocommerce</span>
												</div>
												<div className="max-w-[183px] whitespace-break-spaces text-start">Coming Soon</div>
											</div>

										}
										className="h-[102px]"
									>
										Woocommerce
									</Tab>

								</Tabs>
							</Tab>
							<Tab
								key="settings"
								title={
									<div className="flex items-center space-x-2">
										<SettingsIcon />
										<span>Settings</span>
									</div>
								}
							>
								<div className="flex flex-col gap-4 my-8">
									<Input
										type="url"
										label={
											<div className="text-base font-medium pl-1">
												Chatbot name
											</div>
										}
										radius="sm"
										variant="bordered"
										placeholder="My Shopify Store"
										labelPlacement="outside"
										className="max-w-md w-full"
									/>
									<div className="flex flex-col gap-2">
										<h1 className="text-base font-medium pl-1">Chatbot Avatar</h1>
										<div className="flex flex-row gap-4 items-center">
											<Button radius="full" color="primary" size="md" variant="solid" startContent={<EditIcon />}>
												upload Image
											</Button>
											<Image src={avatar} alt="avatar" width={62} height={62} className="border-2 p-1 rounded-md" />
										</div>
									</div>
									<div>
										<p max-width="120px" className="bg-foreground text-background text-sm max-w-md rounded-md">
											<AceEditor
												height="200px"
												value={code}
												mode="javascript"
												theme="monokai"
												fontSize="16px"
												highlightActiveLine={true}
												onChange={newCode => console.log(newCode)}
												wrapEnabled
												setOptions={{
													enableLiveAutocompletion: true,
													showLineNumbers: false,
													tabSize: 2
												}}
											/>
										</p>
									</div>
									<div className="flex flex-col gap-2">
										<h1 className="text-md font-medium">Chat ID</h1>
										<span className="text-sm">1c162ec2-b1cc-4676-a5c2-5aa509bd44a5</span>
									</div>
									<div>
										<Button radius="full" color="danger" size="md" variant="solid" startContent={<DeleteIcon />}>
											Delete
										</Button>
									</div>
								</div>
							</Tab>
						</Tabs>
					</div>
				</div>
				<div className="flex flex-col w-2/5 gap-4">
					<h1 className="text-xl font-bold">Chat Bot</h1>
					<div className="bg-foreground-50 dark:bg-foreground-100 shadow-lg rounded-lg w-full h-full">
						<div className="flex flex-col h-full w-full">
							<div className="h-[185px] w-full rounded-t-lg flex flex-col items-center bg-primary p-6 gap-6 text-foreground-50">
								<h1 className="text-2xl font-bold">Chat with out AI</h1>
								<h3 className="text-medium">Ask any question you have</h3>
								<div className="flex flex-row w-full justify-between items-center gap-4 font-bold">
									<Button size="sm" radius="full" className="w-full bg-foreground-50 text-primary flex flex-row justify-center gap-2 items-center font-bold" startContent={<NewChatIcon width={24} height={24} />}>New Chat</Button>
									<Button size="sm" radius="full" className="w-full bg-foreground-50 text-primary flex flex-row justify-center gap-2 items-center font-bold" startContent={<SpeakHumanIcon width={24} height={24} />}>Speak to Human</Button>
								</div>
							</div>
							<div className="relative flex flex-col h-full w-full min-h-[480px]">
								<div className="absolute left-0 right-0 bottom-0 p-4">
									<Input
										radius="sm"
										size="sm"
										variant="bordered"
										className="w-full h-12"
										endContent={
											<div className="flex flex-row gap-3 m-2">
												<EmojiSmileIcon className="text-primary" />
												<SendIcon className="text-primary" />
											</div>
										}
										placeholder="Type your message here..."
									/>
								</div>
								<div className="w-full h-full flex flex-col p-2">Chatting Pane</div>
							</div>
						</div>
					</div>
					<div className="relative h-12">
						<Button size="md" isIconOnly radius="full" className="bg-transparent absolute right-0">
							<CrossCloseIcon />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

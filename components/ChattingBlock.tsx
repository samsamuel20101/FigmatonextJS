'use client'

import { Tooltip } from "@nextui-org/tooltip"
import { Button } from "@nextui-org/button"
import dynamic from "next/dynamic"
import BlobIcon from "./BlobIcon"
import SendIcon from "./SendIcon"
import { ConnectionIcon, DeleteIcon, EditIcon, EmojiSmileIcon, TranslateIcon } from "./icons"
import { Textarea } from "@nextui-org/input"
import { useEffect, useRef, useState } from "react"
import { Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/dropdown"
import ChevronIcon from "./ChevronIcon"
import { chattinglogType } from "./chatbotChatting"

const ChattingLogPane = dynamic(() => import("./chattingLog"), { ssr: false })

const initialChattingLog = [
	{
		sender: 'bot',
		body: "Hello and welcome to our chatbot! I am able to assist you with any questions regarding our webshop, products and orders.",
		time: new Date('Mon Jan 22 2024 03:11:27 GMT-1000 (Hawaii-Aleutian Standard Time)').toLocaleTimeString(),
		sent: true,
		checked: true
	},
	{
		sender: 'man',
		body: "Hello and welcome to our chatbot! I am able to assist you with any questions regarding our webshop, products and orders.",
		time: new Date('Mon Jan 22 2024 03:12:12 GMT-1000 (Hawaii-Aleutian Standard Time)').toLocaleTimeString(),
		sent: true,
		checked: true
	},
] as chattinglogType[]

const ChattingBlock = () => {

	const sendBtnRef = useRef<HTMLButtonElement | null>(null)
	const inputRef = useRef<HTMLTextAreaElement | null>(null)
	const [chattingLog, setChattingLog] = useState(initialChattingLog)
	const [newMessage, setNewMessage] = useState('')

	const handleKeydown = (e: any) => {
		if (e.keyCode == 13) {
			e.preventDefault()
			sendBtnRef && sendBtnRef.current && sendBtnRef.current.click()
			inputRef && inputRef.current && inputRef.current.focus()
		}
	}
	const handleSubmit = () => {
		if (newMessage.trim() != '') {
			const newMessageList = [...chattingLog, {
				sender: 'man',
				body: newMessage.trim(),
				time: new Date('Mon Jan 22 2024 03:12:12 GMT-1000 (Hawaii-Aleutian Standard Time)').toLocaleTimeString(),
				sent: true,
				checked: true
			}]
			setChattingLog(newMessageList)
			setNewMessage('')
		}
	}
	return (
		<div className="flex flex-col flex-grow justify-between h-full min-h-fit max-w-6xl w-full shadow-lg">
			<div className="flex flex-row justify-between text-base p-4 bg-primary-100 font-medium rounded-t-xl">
				<div className="text-primary">New Ticket: #2212</div>
				<div className="flex flex-row gap-1 items-center">
					<h1>Change Status</h1>
					<Dropdown className='w-full bg-foreground-100' placement="bottom-end">
						<DropdownTrigger>
							<Button isIconOnly size="sm" radius="full" className="p-0 bg-transparent">
								<ChevronIcon className="-rotate-90" width={16} height={16} />
							</Button>
						</DropdownTrigger>
						<DropdownMenu aria-label="NextUI dropdown component" disabledKeys={["", ""]}>
							<DropdownItem key="option-1">Option 1</DropdownItem>
							<DropdownItem key="option-2">Option 2</DropdownItem>
							<DropdownItem key="option-3">Option 3</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</div>
			<div className="flex flex-col justify-between p-4 gap-5 border-b-2 bg-foreground-50 dark:bg-foreground-100">
				<div className="text-2xl font-bold">Sipping Questions</div>
				<div className="flex flex-row justify-between">
					<div>Tue, Nov 28, 2023 at 10:21 AM</div>
					<div className="relative flex items-center justify-center gap-2">
						<Tooltip content="Edit Ticket">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<EditIcon />
							</span>
						</Tooltip>
						<Tooltip content="Edit ticket">
							<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
								<BlobIcon />
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
			<div className="flex flex-col relative h-full w-full bg-foreground-50 dark:bg-foreground-100">
				<div className="absolute bottom-0 w-full">
					<div className="w-full m-0 px-4">
						{/* <div className="w-full rounded-lg p-2 bg-foreground-200 h-32">hello</div> */}
						<Textarea
							ref={inputRef}
							variant="bordered"
							maxRows={5}
							minRows={5}
							value={newMessage}
							onChange={e => setNewMessage(e.target.value)}
							classNames={{ inputWrapper: 'bg-foreground-300', innerWrapper: 'flex flex-col gap-1' }}
							endContent={
								<div className="flex flex-row gap-2">
									<h1 className="leading-4 text-lg font-bold text-foreground">B</h1>
									<div className="text-foreground">
										<ConnectionIcon width={18} height={18} />
									</div>
									<div className="text-foreground">
										<EmojiSmileIcon width={18} height={18} />
									</div>
									<div className="text-foreground">
										<TranslateIcon width={20} height={20} />
									</div>
								</div>
							}
							onKeyDown={handleKeydown}
						/>
					</div>
					<div className="w-full relative flex flex-row-reverse">
						<Button
							ref={sendBtnRef}
							radius="full"
							className="m-4"
							startContent={<SendIcon />}
							onClick={handleSubmit}
						>
							Send Message
						</Button>
					</div>
				</div>
				<ChattingLogPane className="w-full h-96 flex flex-col p-8 gap-6 overflow-y-scroll scrollbar-hide" chattingLog={chattingLog} />
			</div>
		</div>
	)
}

export default ChattingBlock
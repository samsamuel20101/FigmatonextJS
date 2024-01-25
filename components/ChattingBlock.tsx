'use client'

import { Tooltip } from "@nextui-org/tooltip"
import EyeIcon from "./EyeIcon"
import { Button } from "@nextui-org/button"
import { title } from "./primitives"
import BlobIcon from "./BlobIcon"
import SendIcon from "./SendIcon"
import { ConnectionIcon, DeleteIcon, EditIcon, EmojiSmileIcon, TranslateIcon } from "./icons"
import { Textarea } from "@nextui-org/input"
import { Dispatch, useRef, useState } from "react"
import { ScrollShadow } from "@nextui-org/scroll-shadow"

const message = [
	{
		speaker: 'bot',
		description: 'Hello, How can i assist you today?'
	}
] as messageType[]

interface messageType {
	speaker: string,
	description: string
}

const ChattingBlock = () => {

	const sendBtnRef = useRef<HTMLButtonElement | null>(null)
	const inputRef = useRef<HTMLTextAreaElement | null>(null)
	const [messageList, setMessageList] = useState(message)
	const [newMessage, setNewMessage] = useState('')
	const handleKeydown = (e: any) => {
		if (e.keyCode == 13) {
			e.preventDefault()
			sendBtnRef && sendBtnRef.current && sendBtnRef.current.click()
			inputRef && inputRef.current && inputRef.current.focus()
		}
	}
	const handleSubmit = () => {
		const newMessageList = [...messageList, {
			speaker: 'human',
			description: newMessage
		}]
		setMessageList(newMessageList)
		setNewMessage('')
	}
	return (
		<div className="flex flex-col flex-grow justify-between h-full min-h-fit max-w-6xl w-full shadow-lg">
			<div className="flex flex-row justify-between text-base p-4 bg-primary-100 rounded-t-xl">
				<div>New Ticket: #2212</div>
				<div>Change Status</div>
			</div>
			<div className="flex flex-col justify-between p-4 gap-5 border-b-1 bg-foreground-200">
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
			<div className="flex flex-col relative h-full w-full bg-foreground-100">
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
				<ScrollShadow className="h-96 p-8" hideScrollBar>
					<div className="flex flex-col gap-4 min-h-full h-full w-full">
						{messageList.map((item, key) => (
							<div key={item.description + key} >
								<div className="p-2 rounded-lg bg-foreground-50 shadow-md m-auto">
									{item.description}
								</div>
							</div>
						))}
					</div>
				</ScrollShadow>
			</div>
		</div>
	)
}

export default ChattingBlock
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { EmojiSmileIcon, NewChatIcon, SpeakHumanIcon } from "./icons"
import SendIcon from "./SendIcon"
import { useRef, useState } from "react"
import dynamic from "next/dynamic"

const ChattingLogPane = dynamic(() => import("./chattingLog"), { ssr: false })

export interface chattinglogType {
  sender: string,
  body: string,
  time: string,
  sent: boolean,
  checked: boolean
}
const initialChattingLog = [
  {
    sender: 'bot',
    body: 'Hi, there! How Can I help you today? I am Stark! Happy to help 😉',
    time: new Date('Mon Jan 22 2024 03:11:27 GMT-1000 (Hawaii-Aleutian Standard Time)').toLocaleTimeString(),
    sent: true,
    checked: true
  },
  {
    sender: 'man',
    body: 'I am looking for a speaker.',
    time: new Date('Mon Jan 22 2024 03:12:12 GMT-1000 (Hawaii-Aleutian Standard Time)').toLocaleTimeString(),
    sent: true,
    checked: true
  },
] as chattinglogType[]
const ChatbotChatting = () => {

  const [chattingLog, setChattingLog] = useState(initialChattingLog)
  const [newMessage, setNewMessage] = useState('')
  const sendBtnRef = useRef<HTMLButtonElement | null>(null)
  const inputRef = useRef<HTMLInputElement | null>(null)
  const chatContainerRef = useRef<HTMLDivElement | null>(null)

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
        time: new Date().toLocaleTimeString(),
        sent: true,
        checked: false
      }] as chattinglogType[]
      setChattingLog(newMessageList)
      setNewMessage('')
    }
  }


  return (
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
              ref={inputRef}
              radius="sm"
              size="sm"
              variant="bordered"
              value={newMessage}
              onValueChange={prev => setNewMessage(prev)}
              onKeyDown={handleKeydown}
              className="w-full h-12"
              endContent={
                <div className="flex flex-row">
                  <Button isIconOnly size="sm" className="bg-transparent" startContent={<EmojiSmileIcon className="text-primary" />} />
                  <Button onClick={handleSubmit} isIconOnly size="sm" ref={sendBtnRef} className="bg-transparent" startContent={<SendIcon className="text-primary" />} />
                </div>
              }
              placeholder="Type your message here..."
            />
          </div>
          <ChattingLogPane className="w-full h-[420px] flex flex-col px-4 py-8 gap-6 overflow-y-scroll scrollbar-hide" chattingLog={chattingLog} />
        </div>
      </div>
    </div>
  )
}

export default ChatbotChatting;

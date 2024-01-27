"use client"

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import CheckIcon from "@/public/check.svg"
import { SidebarSmallDarkLogo, SidebarSmallLightLogo } from './icons';
import { chattinglogType } from './chatbotChatting';

const ChattingLogPane = ({ className, chattingLog }: {
  className: string,
  chattingLog: chattinglogType[]
}) => {
  const {theme} = useTheme()
	const chatContainerRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		if (chatContainerRef.current) {
			chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
		}
	}, [chattingLog]);
  return (
    <div ref={chatContainerRef} className={className}>
      {chattingLog.map((item: chattinglogType, index: number) =>
        item.sender == 'bot' ? (
          <div key={index + '_bot_msg'} className="flex flex-row items-start gap-3 max-w-lg">
            {theme === "light"
              ? <SidebarSmallDarkLogo className='min-w-[44px]'/>
              : <SidebarSmallLightLogo className='min-w-[44px]'/>
            }
            <div className="flex flex-col items-start p-3 gap-3 rounded-md bg-foreground-200 whitespace-pre-wrap">
              <h1 className="text-medium font-medium leading-8">{item.body}</h1>
              <div className="flex w-full justify-between items-center">
                <h1 className="text-sm font-normal text-foreground-600">{item.time}</h1>
                <div className="flex flex-row justify-start w-11 translate-x-4">
                  <Image src={CheckIcon} alt="check-icon" width={16} height={16} className={`transition-all duration-500 ease-in-out ${!item.sent && `w-0`}`} />
                  <Image src={CheckIcon} alt="check-icon" width={16} height={16} className={`-translate-x-[60%] transition-all duration-500 ease-in-out ${!item.sent && `w-0`}`} />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div key={index + '_man_msg'} className="rounded-lg bg-foreground-200 whitespace-pre-wrap max-w-lg right-0 self-end">
            <div className="flex flex-col items-start p-3 gap-1 rounded-md bg-foreground-200 whitespace-pre-wrap">
              <h1 className="text-medium font-medium leading-8">{item.body}</h1>
              <div className="flex w-full justify-between items-center">
                <p className="text-sm font-normal text-foreground-600">{item.time}</p>
                <div className="flex flex-row justify-start w-11 translate-x-4">
                  <Image src={CheckIcon} alt="check-icon" width={16} height={16} className={`transition-all duration-500 ease-in-out ${!item.sent && `w-0`}`} />
                  <Image src={CheckIcon} alt="check-icon" width={16} height={16} className={`-translate-x-[60%] transition-all duration-500 ease-in-out ${!item.sent && `w-0`}`} />
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  )
}

export default ChattingLogPane;

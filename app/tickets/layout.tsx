'use client'

import { useContext } from "react";
import { SidebarContext } from "../sidebarProvider";
import TicketHiddenMenu from "@/components/ticketHiddenMenu";

export default function TicketsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [sidebarStatus, setSidebarStatus] = useContext(SidebarContext)
	return (
		<section className="flex flex-row justify-between items-stretch w-full h-full">
			<div className={`${sidebarStatus?`translate-x-none`:`-translate-x-full`} transition-all duration-300 ease-in-out flex flex-col w-60 h-full shadow-lg`}>
				<TicketHiddenMenu />
			</div>
			<div className={`${!sidebarStatus && `-ml-60`} transition-all duration-300 ease-in-out flex flex-col justify-between w-full h-full gap-6 p-8`}>
				{children}
			</div>
		</section>
	);
}

import Image from "next/image"
import React, { useContext } from "react"

import SideMenu from "./sideMenu"

import LogoImage from "@/public/logo.png"
import ChevronBtm from '@/public/chevron-bottom.svg'
import AdminLogo from '@/public/admin_avatar.png'
import { SidebarSmallLightLogo } from "./icons"
import { SidebarContext } from "@/app/sidebarProvider"

const Sidebar = () => {
	const [sidebarStatus, setSidebarStatus] = useContext(SidebarContext)
	// console.log(sidebarStatus)
	return (
		<aside className="flex flex-col justify-between items-center py-8 bg-[#002E66] rounded-r-2xl max-h-screen overflow-x-hidden">
			<div className="w-full flex flex-col items-center">
				{sidebarStatus ? <SidebarSmallLightLogo /> : <div className="h-[57px]"><Image src={LogoImage} alt="logo" width={162} className="object-cover" /></div>}
				<div className="relative w-full">
					<SideMenu collapsed={sidebarStatus} />
				</div>
			</div>
			<div className="flex flex-col w-full items-center gap-4">
				<div className="flex flex-row justify-between items-center gap-2">
					<Image src={AdminLogo} alt="admin_avatar" width={42} height={42} className="rounded-full" />
					<div className={sidebarStatus ? 'hidden' : 'text-gray-300'}>
						<h1>Enano</h1>
						<h1 className="text-xs">Project Manager</h1>
					</div>
					<Image src={ChevronBtm} className={sidebarStatus ? 'hidden' : ''} alt="admin" width={32} height={32} />
				</div>
				<div className="flex flex-row justify-between gap-5 max-w-32 items-center">
					<h1 className={`text-gray-300 transition-all duration-300 ease-in-out ${sidebarStatus && `hidden`}`}>Collapse Menu</h1>
					<button onClick={() => setSidebarStatus(!sidebarStatus)} >
						<Image className={`bg-blue-500 rounded-md bg-blend-multiply ${sidebarStatus ? `rotate-0` : `rotate-180`}`} width={24} height={24} src={ChevronBtm} alt="chevronBtm" />
					</button>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
import Image from "next/image"
import { Link } from "@nextui-org/link"
import React, { Dispatch } from "react"

import SideMenu from "./sideMenu"

import LogoImage from "@/public/logo.png"
import LogoSmallImage from '@/public/Logo-small.svg'
import ChevronBtm from '@/public/chevron-bottom.svg'
import AdminLogo from '@/public/admin_avatar.png'

const Sidebar = ({ collapsed, setSidebarCollapsed } : {setSidebarCollapsed: React.Dispatch<React.SetStateAction<any>>, collapsed:boolean}) => {
	return (
		<aside className="flex flex-col justify-between items-center py-8 bg-[#002E66] rounded-r-2xl max-h-screen">
			<div className="w-full flex flex-col items-center">
				<Image src={collapsed ? LogoSmallImage : LogoImage} alt="logo" width={collapsed ? 44 : 162} />
				<div className="relative w-full">
					<SideMenu className='absolute top-0' collapsed={collapsed} />
				</div>
			</div>
			<div className="flex flex-col w-full items-center gap-4">
				<div className="flex flex-row justify-between items-center gap-2">
					<Image src={AdminLogo} alt="admin_avatar" width={42} height={42} className="rounded-full" />
					<div className={collapsed ? 'hidden' : 'text-gray-300'}>
						<h1>Enano</h1>
						<h1 className="text-xs">Project Manager</h1>
					</div>
					<Image src={ChevronBtm} className={collapsed ? 'hidden' : ''} alt="admin" width={32} height={32} />
				</div>
				<div className="flex flex-row max-w-32 justify-between items-center">
					<h1 className={`text-gray-300 transition-all duration-300 ease-in-out ${collapsed && `hidden`}`}>Collapse Menu</h1>
					<button onClick={setSidebarCollapsed} >
						<Image className={`bg-blue-500 rounded-md bg-blend-multiply ${collapsed ? `rotate-0`:`rotate-180`}`} width={24} height={24} src={ChevronBtm} alt="chevronBtm" />
					</button>
				</div>
			</div>
		</aside>
	)
}

export default Sidebar
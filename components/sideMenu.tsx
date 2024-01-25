'use client'

import Image from 'next/image'
import DashboardIcon from '@/public/dashboard.svg'
import TicketsIcon from '@/public/tickets.svg'
import ChatbotsIcon from '@/public/comments.svg'
import OrdersIcon from '@/public/list.svg'
import CustomersIcon from '@/public/team-1.svg'
import SettingsIcon from '@/public/settings-1.svg'
import { Link } from '@nextui-org/link'
import { usePathname } from 'next/navigation'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/dropdown";
import { Button } from '@nextui-org/button'

const SideMenu = ({ className, collapsed }: { className?: string, collapsed: boolean }) => {
	const pathname = usePathname()
	// console.log(pathname.slice(1).split('/').includes('tickets'))
	const checkingUrl = (key: string) => {
		if (key.split('/').length != 1) {
			const pathList = pathname.slice(1).split('/')
			const keyList = key.split('/')
			return pathList[0] == keyList[0] && pathList[1] == keyList[1]
		}
		else if (pathname.slice(1).split('/').length < 2 && pathname.slice(1).split('/')[0] == key) return true
		return false
	}
	const openCheck = (key: string) => {
		if (pathname.slice(1).split('/')[0] == key) return true
		return false
	}
	return (
		<div className={'absolute top-0 w-full mt-11'}>
			<ul className={`menu bg-[#002E66] text-white p-0 m-0 [&_li>*]:rounded-l-lg [&_li>*]:rounded-r-none top-0 ${collapsed ? `w-full` : `w-[267px]`}`}>
				<li>
					<Link href={'/'} className={`${pathname == '/' && `bg-[#06F] hover:bg-[#06F] flex`} text-white`}>
						<Image src={DashboardIcon} alt="dashboard icon" />
						<span className={collapsed ? 'hidden' : ''}>Dashboard</span>
					</Link>
				</li>
				<li>
					{collapsed
						? (
							<Dropdown className='ml-16 w-full -translate-y-12 bg-foreground-100'>
								<DropdownTrigger>
									<Button className={`${openCheck('tickets') ? `bg-primary hover:bg-primary`:`bg-transparent`} flex justify-start`} >
										<Image src={TicketsIcon} alt="ticket icon" className=''/>
									</Button>
								</DropdownTrigger>
								<DropdownMenu aria-label="NextUI dropdown component" disabledKeys={["", ""]}>
									<DropdownItem key="tickets"><Link href={'/tickets'}>Open Tickets</Link></DropdownItem>
									<DropdownItem key="tickets/gallery"><Link href={'/tickets/gallery'}>Tickets with Orders</Link></DropdownItem>
									<DropdownItem key="tickets/create"><Link href={'/tickets/create'}>Closed Tickets</Link></DropdownItem>
								</DropdownMenu>
							</Dropdown>
						)
						: (
							<details open={openCheck('tickets')} className="dropdown dropdown-right ">
								<summary className={`${openCheck('tickets') && `bg-[#06F] hover:bg-[#06F]`} `}>
									<Image src={TicketsIcon} alt="ticket icon" />
									<span className={collapsed ? 'hidden' : ''}>Tickets</span>
								</summary>
								<ul className={`bg-[#3E4A69] ${collapsed ? `p-2 shadow menu dropdown-content z-[1] [&_li>*]:rounded-l-lg [&_li>*]:rounded-r-none w-52` : ``}`}>
									<li><Link href={'/tickets'} className={`${checkingUrl('tickets') && `bg-[#06F] hover:bg-[#06F]`} text-white`}>Open Tickets</Link></li>
									<li><Link href={'/tickets/gallery'} className={`${checkingUrl('tickets/gallery') && ` bg-[#06F] hover:bg-[#06F]`} text-white`}>Tickets with Orders</Link></li>
									<li><Link href={'/tickets/create'} className={`${checkingUrl('tickets/create') && ` bg-[#06F] hover:bg-[#06F]`} text-white`}>Closed Tickets</Link></li>
								</ul>
							</details>
						)
					}

				</li>
				<li >
					{collapsed
						? (
							<Dropdown className="ml-16 w-full -translate-y-12 bg-foreground-100">
								<DropdownTrigger>
									<Button className={`${openCheck('chatbots') ? `bg-primary hover:bg-primary`:`bg-transparent`} flex justify-start`} >
										<Image src={ChatbotsIcon} alt="ticket icon" className=''/>
									</Button>
								</DropdownTrigger>
								<DropdownMenu aria-label="NextUI dropdown component" disabledKeys={["", ""]}>
									<DropdownItem key="chatbots/create"><Link href={'/chatbots/create'}>Create a Chatbot</Link></DropdownItem>
									<DropdownItem key="chatbots"><Link href={'/chatbots'}>Tickets with Orders</Link></DropdownItem>
									{/* <DropdownItem key="tickets/create"><Link href={'/tickets/create'}>Closed Tickets</Link></DropdownItem> */}
								</DropdownMenu>
							</Dropdown>
						)
						: (
							<details open={openCheck('chatbots')} className="dropdown dropdown-right">
								<summary className={`${openCheck('chatbots') && `bg-[#06F] hover:bg-[#06F]`} `}>
									<Image src={ChatbotsIcon} alt="chatbots icon" />
									<span className={collapsed ? 'hidden' : ''}>Chatbots</span>
								</summary>
								<ul className={`bg-[#3E4A69] ${collapsed ? `p-2 shadow menu dropdown-content z-[1] [&_li>*]:rounded-l-lg [&_li>*]:rounded-r-none w-52` : ``}`}>
									<li><Link href={'/chatbots/create'} className={`${checkingUrl('chatbots/create') && ` bg-[#06F] hover:bg-[#06F]`} text-white`}>Create a Chatbot</Link></li>
									<li><Link href={'/chatbots'} className={`${checkingUrl('chatbots') && ` bg-[#06F] hover:bg-[#06F]`} text-white`}>Tickets with Orders</Link></li>
									{/* <li><Link href={'/chatbots'} className={`${checkingUrl('chatbots') && ` bg-[#06F]`} text-white`}>Closed Tickets</Link></li> */}
								</ul>
							</details>
						)
					}
				</li>
				<li>
					<Link href={'/orders'} className={`${checkingUrl('orders') && `bg-[#06F] hover:bg-[#06F] flex`} text-white`}>
						<Image src={OrdersIcon} alt="orders icon" />
						<span className={collapsed ? 'hidden' : ''}>Orders</span></Link>
				</li>
				<li>
					<Link href={'/customers'} className={`${checkingUrl('customers') && `bg-[#06F] hover:bg-[#06F] flex`} text-white`}>
						<Image src={CustomersIcon} alt="customers icon" />
						<span className={collapsed ? 'hidden' : ''}>Customers</span></Link>
				</li>
				<li>
					<Link href={'/settings'} className={`${openCheck('settings') && `bg-[#06F] hover:bg-[#06F] flex`} text-white`}>
						<Image src={SettingsIcon} alt="settings icon" />
						<span className={collapsed ? 'hidden' : ''}>Settings</span>
					</Link>
				</li>
			</ul>
		</div>
	)
}

export default SideMenu
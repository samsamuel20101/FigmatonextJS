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

const SideMenu = ({ className, collapsed }: { className: string, collapsed: boolean }) => {
    const pathname = usePathname()
    // console.log(pathname.slice(1).split('/').includes('tickets'))
    return (
        <div className={className + 'w-full mt-11'}>
            <ul className={`menu bg-[#002E66] text-white p-0 m-0 rounded-box top-0 transition-width duration-1000 ease-in-out ${collapsed ? `` : `w-[267px]`}`}>
                <li className='bg-[#06F] rounded-tl-lg rounded-bl-lg flex justify-center'>
                    <Link href={'/'} className='text-white'>
                        <Image src={DashboardIcon} alt="dashboard icon" />
                        <span className={collapsed ? 'hidden' : ''}>Dashboard</span>
                    </Link>
                </li>
                <li>
                    <details open={pathname.slice(1).split('/').includes('tickets')} className="dropdown dropdown-right">
                        <summary>
                            <Image src={TicketsIcon} alt="ticket icon" />
                            <span className={collapsed ? 'hidden' : ''}>Tickets</span>
                        </summary>
                        <ul className={`bg-[#3E4A69] ${collapsed ? `p-2 shadow menu dropdown-content z-[1] rounded-box w-52` : ``}`}>
                            <li><Link href={'/tickets/'} className='text-white'>Open Tickets</Link></li>
                            <li><Link href={'/tickets/gallery'} className='text-white'>Tickets with Orders</Link></li>
                            <li><Link href={'/tickets/create'} className='text-white'>Closed Tickets</Link></li>
                        </ul>
                    </details>
                </li>
                <li>
                    <details open={pathname.slice(1).split('/').includes('chatbots')} className="dropdown dropdown-right">
                        <summary>
                            <Image src={ChatbotsIcon} alt="chatbots icon" />
                            <span className={collapsed ? 'hidden' : ''}>Chatbots</span>
                        </summary>
                        <ul className={`bg-[#3E4A69] ${collapsed ? `p-2 shadow menu dropdown-content z-[1] rounded-box w-52` : ``}`}>
                            <li><Link href={'/chatbots/create'} className='text-white'>Create a Chatbot</Link></li>
                            <li><Link href={'/chatbots'} className='text-white'>Tickets with Orders</Link></li>
                            <li><Link href={'/chatbots'} className='text-white'>Closed Tickets</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link href={'/orders'} className='text-white'><Image src={OrdersIcon} alt="orders icon" /><span className={collapsed ? 'hidden' : ''}>Orders</span></Link></li>
                <li><Link href={'/customers'} className='text-white'><Image src={CustomersIcon} alt="customers icon" /><span className={collapsed ? 'hidden' : ''}>Customers</span></Link></li>
                <li><Link href={'/settings'} className='text-white'><Image src={SettingsIcon} alt="settings icon" /><span className={collapsed ? 'hidden' : ''}>Settings</span></Link></li>
            </ul>
        </div>
    )
}

export default SideMenu
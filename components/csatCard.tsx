'use client'

import { useEffect, useState } from 'react'
import TodayMeter from '@/public/today.png'
import MonthMeter from '@/public/month.png'
import mask from '@/public/Switch1.svg'
import Image from 'next/image'
import customersIcon from '@/public/customers.svg'
import MeterProgress from '@/public/meterProgress.png'
import MeterStep from '@/public/meterStep.png'
import MeterProgBg from '@/public/meterProgressBack.png'

export interface csatProps {
	title: string,
	increases: number,
	originalNum: number,
	percents: number,
	meter: any
}

const CSATdata = [
	{
		title: 'Today',
		increases: 1430,
		originalNum: 2360,
		percents: 80,
		meter: TodayMeter
	},
	{
		title: 'This Month',
		increases: 234563,
		originalNum: 341674,
		percents: 50,
		meter: MonthMeter
	},
] as csatProps[]

const CsatCard = () => {
	const [percent1, setPercent1] = useState(0)
	const [percent2, setPercent2] = useState(0)
	const [time, setTime] = useState(0)
	const timeStep = 50
	useEffect(() => {
    let interval: any
    interval = setInterval(() => {
      if (time < timeStep) {
        setPercent1(CSATdata[0].percents*(time + 1)/timeStep)
        setPercent2(CSATdata[1].percents*(time + 1)/timeStep)
				setTime(prev => prev+1)
      }
    }, 20);
    return () => clearInterval(interval);
  }, [percent1,percent2])

	return (
		<div className="w-full h-[312px] p-6 flex flex-col justify-start gap-10 items-start rounded-2xl shadow-2xl bg-foreground-100">
			{CSATdata.map((item, index) => (
				<div key={'csat_' + index} className="flex flex-row justify-around items-center w-full">
					<div className='flex flex-col gap-1'>
						<h1 className='text-lg font-bold' key={'csat_' + index}>{item.title}</h1>
						<h1>
							<span className='text-green-400 font-bold'>{item.increases + ' '}</span>
							from
							<span className='text-blue-600 font-bold'>{' ' + item.originalNum}</span>
						</h1>
						<div className='flex flex-row gap-1'><Image src={customersIcon} alt='customers' /> customers satisfied</div>
					</div>
					<div className='relative w-44 h-[84px] flex flex-col items-center m-4'>
						<div className='w-40 h-20 overflow-hidden pt-1 absolute bottom-0'>
							<div className="relative w-full h-full">
								<Image 
									src={MeterProgBg} 
									alt='today-meter' 
									width={250} 
									height={250} 
									style={{rotate: `${index == 0 ? percent1*3.6 : percent2*3.6}deg`}} 
									className='absolute transition-transform duration-1000 ease-in'
								/>
									<Image 
									src={MeterProgress} 
									alt='today-meter' 
									width={250} 
									height={250} 
									style={{rotate: `${index == 0 ? percent1*1.8 : percent2*1.8}deg`}} 
									className='transition-transform duration-1000 ease-in'
								/>
							</div>
						</div>
						<div className="relative w-50 h-full">
							<Image src={MeterStep} alt='Meter step'  className='w-44 h-full' />
						</div>
						<div className="absolute -bottom-2 text-xl text-black font-bold">{`${index == 0 ? Math.round(percent1) : Math.round(percent2)}%`}</div>
						<div className="absolute w-full h-full">
							<div className="relative w-full h-full flex justify-center text-sm font-bold">
								<div className="absolute -bottom-1 -left-6">0%</div>
								<div className="absolute top-1 left-0">25%</div>
								<div className="absolute -top-6">50%</div>
								<div className="absolute top-1 right-0">75%</div>
								<div className="absolute -bottom-1 -right-9">100%</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CsatCard

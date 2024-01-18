import TodayMeter from '@/public/today.png'
import MonthMeter from '@/public/month.png'
import Image from 'next/image'
import customersIcon from '@/public/customers.svg'

export interface csatProps {
	title: string,
	increases: number,
	originalNum: number,
	percents: number,
	meter: any
}

const CsatCard = () => {
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
	return (
		<div className="w-full h-[312px] p-6 flex flex-col justify-between rounded-2xl shadow-2xl bg-background dark:bg-gradient-to-l from-foreground to-foreground-200">
			{CSATdata.map((item, i) => (
				<div key={'csat_' + i} className="flex flex-row justify-between items-center">
					<div className='flex flex-col gap-1'>
						<h1 className='text-lg font-bold' key={'csat_' + i}>{item.title}</h1>
						<h1>
							<span className='text-green-400 font-bold'>{item.increases + ' '}</span>
							from
							<span className='text-blue-600 font-bold'>{' ' + item.originalNum}</span>
						</h1>
						<div className='flex flex-row gap-1'><Image src={customersIcon} alt='customers' /> customers satisfied</div>
					</div>
					<Image src={item.meter} className='scale-75' width={250} alt='meter' />
				</div>
			))}
		</div>
	)
}

export default CsatCard
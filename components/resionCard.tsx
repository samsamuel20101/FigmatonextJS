import WorldMap from '@/public/worldMap.png'
import Image from 'next/image'

const RegionCard = () => {
	return (
		<div className="w-full h-[312px] p-0 flex flex-col justify-between rounded-2xl shadow-2xl bg-background dark:bg-foreground">
			<Image src={WorldMap} alt='world map' className='object-cover' width={522} height={312}/>
		</div>
	)
}

export default RegionCard
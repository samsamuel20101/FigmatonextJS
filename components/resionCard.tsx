'use client'

import dynamic from "next/dynamic";
import { Dispatch, SetStateAction, useLayoutEffect, useRef, useState } from "react";

const MapComponent = dynamic(() => import("@/components/mapChart"), { ssr: false })
export interface pointerType {
	x: number,
	y: number
}
const initialPointer = {
	x: 0,
	y:0
} as pointerType
const RegionCard = () => {
  const [globalMousePos, setGlobalMousePos] = useState<pointerType>(initialPointer);
	const mapRef = useRef(null)
	const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

	return (
		<div className="w-full h-[312px] p-0 flex flex-col justify-between rounded-2xl shadow-2xl bg-background dark:bg-foreground">
			<div className='object-cover w-full h-full rounded-2xl overflow-hidden'>	
				<MapComponent globalMousePos={globalMousePos} setGlobalMousePos ={setGlobalMousePos}/>
			</div>
		</div>
	)
}

export default RegionCard
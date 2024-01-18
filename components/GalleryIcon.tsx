import {SVGProps} from "react";
type IconSvgProps = SVGProps<SVGSVGElement>;
export default function GalleryIcon(props:IconSvgProps) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 20 20"
			width="1em"
			{...props}
		>
			<path 
				id="Vector" 
				d="M2.625 12.875C2.625 12.0466 3.29657 11.375 4.125 11.375H5.625C6.45343 11.375 7.125 12.0466 7.125 12.875V14.375C7.125 15.2034 6.45343 15.875 5.625 15.875H4.125C3.29657 15.875 2.625 15.2034 2.625 14.375V12.875Z" 
				stroke="currentColor" 
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth={1.5} 
			/>
			<path 
				id="Vector_2" 
				d="M10.875 12.875C10.875 12.0466 11.5466 11.375 12.375 11.375H13.875C14.7034 11.375 15.375 12.0466 15.375 12.875V14.375C15.375 15.2034 14.7034 15.875 13.875 15.875H12.375C11.5466 15.875 10.875 15.2034 10.875 14.375V12.875Z" 
				stroke="currentColor" 
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth={1.5} 
			/>
			<path 
				id="Vector_3" 
				d="M2.625 4.625C2.625 3.79657 3.29657 3.125 4.125 3.125H5.625C6.45343 3.125 7.125 3.79657 7.125 4.625V6.125C7.125 6.95343 6.45343 7.625 5.625 7.625H4.125C3.29657 7.625 2.625 6.95343 2.625 6.125V4.625Z" 
				stroke="currentColor" 
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth={1.5} 
			/>
			<path 
				id="Vector_4" 
				d="M10.875 4.625C10.875 3.79657 11.5466 3.125 12.375 3.125H13.875C14.7034 3.125 15.375 3.79657 15.375 4.625V6.125C15.375 6.95343 14.7034 7.625 13.875 7.625H12.375C11.5466 7.625 10.875 6.95343 10.875 6.125V4.625Z" 
				stroke="currentColor" 
				strokeLinejoin="round"
				strokeLinecap="round"
				strokeWidth={1.5} 
			/>
		</svg>
	);
}
import {SVGProps} from "react";
type IconSvgProps = SVGProps<SVGSVGElement>;
export default function ListIcon(props:IconSvgProps) {
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
				d="M19 7H10M19 12H10M19 17H10M7 7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7C5 6.44772 5.44772 6 6 6C6.55228 6 7 6.44772 7 7ZM7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12ZM7 17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16C6.55228 16 7 16.4477 7 17Z" 
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
			/>
		</svg>
	);
}
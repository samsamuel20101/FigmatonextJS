import {SVGProps} from "react";
type IconSvgProps = SVGProps<SVGSVGElement>;
export default function SendIcon(props:IconSvgProps) {
	return (
		<svg
			aria-hidden="true"
			fill="none"
			focusable="false"
			height="1em"
			role="presentation"
			viewBox="0 0 24 24"
			width="1em"
			{...props}
		>
			<path 
				id="Vector" 
				d="M9.50928 13.9907L12.9289 20.0899C13.348 20.8374 14.4516 20.746 14.742 19.9398L20.3171 4.46253C20.6039 3.6663 19.8336 2.896 19.0374 3.18281L3.56013 8.7579C2.75393 9.0483 2.66254 10.152 3.40999 10.571L9.50928 13.9907ZM9.50928 13.9907L11.7563 11.7436" 
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth={1.5}
			/>
		</svg>
	);
}
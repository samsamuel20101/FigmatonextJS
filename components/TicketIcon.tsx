import {SVGProps} from "react";

type IconSvgProps = SVGProps<SVGSVGElement>;

const TicketIcon = (props: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1.4em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1.4em"
    {...props}
  >
    <path 
      id="Vector" 
      d="M7.5 9V11M7.5 13V15M7.5 17V18M7.5 7V6M10.5 15H17M10.5 12H14M19 18H5C3.89543 18 3 17.1046 3 16V15C3 14.4477 3.47452 14.0207 3.95897 13.7555C4.57933 13.4159 5 12.7571 5 12C5 11.2429 4.57933 10.5841 3.95897 10.2445C3.47452 9.97928 3 9.55229 3 9V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V9C21 9.55229 20.5255 9.97928 20.041 10.2445C19.4207 10.5841 19 11.2429 19 12C19 12.7571 19.4207 13.4159 20.041 13.7555C20.5255 14.0207 21 14.4477 21 15V16C21 17.1046 20.1046 18 19 18Z" 
      stroke="currentColor" 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TicketIcon
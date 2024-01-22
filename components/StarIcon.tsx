import {SVGProps} from "react";
type IconSvgProps = SVGProps<SVGSVGElement>;
export default function StarIcon(props:IconSvgProps) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height="20"
      role="presentation"
      viewBox="0 0 20 20"
      width="20"
      {...props}
    >
      <path
        // id="Vector"
        d="M13.6749 7.48081C14.1971 7.10108 13.9285 6.27494 13.2828 6.27494H10.7464C10.1645 6.27494 9.64984 5.8976 9.47477 5.34267L8.63577 2.68257C8.43977 2.06105 7.56024 2.06105 7.36417 2.68257L6.52519 5.34267C6.35017 5.8976 5.83549 6.27494 5.25361 6.27494H2.71714C2.07145 6.27494 1.80285 7.10108 2.32508 7.48081L4.58412 9.12341C5.07233 9.47835 5.26115 10.1171 5.04446 10.6804L4.06445 13.2283C3.82603 13.8483 4.54167 14.3975 5.0788 14.0068L7.21577 12.4527C7.68331 12.1126 8.31671 12.1126 8.78424 12.4527L10.9212 14.0068C11.4583 14.3975 12.174 13.8483 11.9355 13.2283L10.9555 10.6804C10.7388 10.1171 10.9276 9.47835 11.4158 9.12341L13.6749 7.48081Z"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
      />
    </svg>
  );
}
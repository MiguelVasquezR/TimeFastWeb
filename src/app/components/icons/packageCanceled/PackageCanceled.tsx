import * as React from "react";

interface SvgIconProps {
  width: number;
  height: number;
  fillBox: string;
}

const SvgIcon = ({ width, height, fillBox }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 528 560"
  >
    <path
      fill={fillBox}
      d="M50.7 58.5 0 160h208V32H93.7c-18.2 0-34.8 10.3-43 26.5M240 160h208L397.3 58.5c-8.2-16.2-24.8-26.5-43-26.5H240zm208 32H0v224c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64z"
    ></path>
    <g clipPath="url(#clip0_0_1)">
      <path
        fill="red"
        d="m471.438 521.133-104.571-104.57C358.117 428.789 353 443.789 353 460c0 41.406 33.594 75 75 75 16.211 0 31.211-5.117 43.438-13.867m17.695-17.695C497.883 491.211 503 476.211 503 460c0-41.406-33.594-75-75-75-16.211 0-31.211 5.117-43.437 13.867zM328 460a100.003 100.003 0 0 1 100-100 100.003 100.003 0 0 1 100 100 100.003 100.003 0 0 1-100 100 100.003 100.003 0 0 1-100-100"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_0_1">
        <path fill="#fff" d="M328 360h200v200H328z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;

import * as React from "react";

interface SvgIconProps {
  width: number;
  height: number;
  fill: string;
}

const SvgIcon = ({ width, height, fill }: SvgIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 32 32"
  >
    <g clipPath="url(#clip0_54_127)">
      <path
        fill={fill}
        d="M16 32a16 16 0 1 0 0-32 16 16 0 0 0 0 32m7.063-18.937-8 8a1.494 1.494 0 0 1-2.12 0l-4-4a1.5 1.5 0 0 1 2.119-2.119L14 17.88l6.938-6.943a1.5 1.5 0 0 1 2.119 2.119z"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_54_127">
        <path fill="#fff" d="M0 0h32v32H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;

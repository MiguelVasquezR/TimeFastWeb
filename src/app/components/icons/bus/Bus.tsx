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
    viewBox="0 0 200 160"
  >
    <g clipPath="url(#clip0_54_32)">
      <path
        fill={fill}
        d="M35 0c-8.281 0-15 6.719-15 15v15H5c-2.75 0-5 2.25-5 5s2.25 5 5 5h80c2.75 0 5 2.25 5 5s-2.25 5-5 5H15c-2.75 0-5 2.25-5 5s2.25 5 5 5h60c2.75 0 5 2.25 5 5s-2.25 5-5 5H5c-2.75 0-5 2.25-5 5s2.25 5 5 5h60c2.75 0 5 2.25 5 5s-2.25 5-5 5H20v40c0 16.562 13.438 30 30 30 16.563 0 30-13.438 30-30h40c0 16.562 13.438 30 30 30s30-13.438 30-30h10a9.99 9.99 0 0 0 10-10 9.99 9.99 0 0 0-10-10V74.156A20 20 0 0 0 184.156 60L160 35.844A20 20 0 0 0 145.844 30H130V15c0-8.281-6.719-15-15-15zm135 74.156V80h-40V50h15.844zM50 115a15 15 0 1 1 .001 30A15 15 0 0 1 50 115m85 15a15.001 15.001 0 1 1 30.002 0A15.001 15.001 0 0 1 135 130"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_54_32">
        <path fill="#fff" d="M0 0h200v160H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default SvgIcon;

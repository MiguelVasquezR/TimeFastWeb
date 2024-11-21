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
    viewBox="0 0 46 46"
  >
    <path
      fill={fill}
      d="M5.15 2.941 0 13.25h21.125v-13H9.516A4.9 4.9 0 0 0 5.15 2.941M24.374 13.25H45.5L40.35 2.941A4.9 4.9 0 0 0 35.985.25H24.375zM45.5 16.5H0v22.75c0 3.585 2.915 6.5 6.5 6.5H39c3.585 0 6.5-2.915 6.5-6.5z"
    ></path>
  </svg>
);

export default SvgIcon;

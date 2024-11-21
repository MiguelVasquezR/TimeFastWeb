import * as React from "react";

interface WaitPointProps {
  width: number;
  height: number;
  fill: string;
  isActive: boolean;
}

const SvgIcon = ({ width, height, fill, isActive }: WaitPointProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="12"
      fill={fill}
      className={isActive ? "animate-pulse" : ""}
    ></circle>
  </svg>
);

export default SvgIcon;

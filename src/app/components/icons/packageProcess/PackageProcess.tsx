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
    viewBox="0 0 63 46"
  >
    <path
      fill={fill}
      d="M4.982 1.276A1.61 1.61 0 0 1 6.638.392L31.5 3.5 56.362.392a1.64 1.64 0 0 1 1.656.884l4.235 8.47c.914 1.818-.06 4.022-2.01 4.58L43.646 19.07a3.24 3.24 0 0 1-3.677-1.453L31.5 3.5l-8.47 14.117a3.24 3.24 0 0 1-3.677 1.453L2.768 14.327a3.247 3.247 0 0 1-2.011-4.58zM31.612 10l5.576 9.283a6.5 6.5 0 0 0 7.363 2.904L57.5 18.492v16.96a4.886 4.886 0 0 1-3.697 4.733l-20.729 5.18a6.36 6.36 0 0 1-3.148 0l-20.73-5.18A4.91 4.91 0 0 1 5.5 35.441v-16.96l12.96 3.706a6.506 6.506 0 0 0 7.363-2.904L31.388 10z"
    ></path>
  </svg>
);

export default SvgIcon;

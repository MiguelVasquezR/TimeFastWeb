import clsx from "clsx";
import React from "react";

interface CardStatusItemProps {
  Icon: React.ReactNode;
  title: string;
  width: number;
  height: number;
  fill: string;
}

const CardStatusItem = ({
  Icon,
  title,
  width,
  height,
  fill,
}: CardStatusItemProps) => {
  console.log(fill);

  return (
    <div className="flex flex-col justify-center items-center gap-1">
      {React.cloneElement(Icon as React.ReactElement, {
        fillBox: fill,
        height: height,
        width: width,
      })}
      <p
        className={clsx(
          `font-roboto font-bold text-[20px]`,
          fill === "#F66B0E" ? "text-orange" : "text-white"
        )}
      >
        {title}
      </p>
    </div>
  );
};

export default CardStatusItem;

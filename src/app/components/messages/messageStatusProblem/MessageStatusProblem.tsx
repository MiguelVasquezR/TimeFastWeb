import React from "react";

interface MessageStatusProblemProps {
  icon: React.ReactNode;
  description: string;
}

const MessageStatusProblem = ({
  icon,
  description,
}: MessageStatusProblemProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      {React.cloneElement(icon as React.ReactElement, {
        fillBox: "white",
        height: 180,
        width: 180,
      })}
      <p className="font-roboto text-[24px] mt-5 font-bold text-white text-center">
        {description}
      </p>
    </div>
  );
};

export default MessageStatusProblem;

import React from "react";

interface ButtonProps {
  isLoading: boolean;
  textButton: string;
  isIcon?: boolean;
  Icon?: React.MouseEvent<HTMLButtonElement>;
  onClick?: () => void;
}

const Button = ({
  isLoading,
  textButton,
  isIcon = false,
  Icon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      disabled={isLoading}
      onClick={onClick}
      className={"bg-orange py-1 px-5 rounded-md text-white h-[40px]"}
      aria-label={isIcon && Icon ? textButton : undefined} // Aria-label si es solo un icono
    >
      {isLoading ? (
        <span className="spinner" aria-hidden="true"></span>
      ) : (
        <>
          {isIcon && Icon && (
            <span className="icon">
              <Icon />
            </span>
          )}
          <span>{textButton}</span>
        </>
      )}
    </button>
  );
};

export default Button;

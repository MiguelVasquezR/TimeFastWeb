interface TextFieldProps {
  label?: string;
  type: string;
  placeholder: string;
  isIcon?: boolean;
  Icon?: React.ElementType;
}

const TextField = ({
  type,
  placeholder,
  isIcon,
  Icon,
}: TextFieldProps) => {
  return (
    <div className="flex flex-row justify-between items-center h-[40px] w-[500px] bg-white p-1 rounded-md shadow-md">
      {isIcon && Icon && (
        <span className="icon">
          <Icon size={24} />
        </span>
      )}
      <input
        className="w-full outline-none h-full p-1"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;

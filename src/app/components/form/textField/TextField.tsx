interface TextFieldProps {
  label?: string;
  type: string;
  placeholder: string;
  isIcon?: boolean;
  Icon?: React.ElementType;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const TextField = ({
  type,
  placeholder,
  isIcon,
  Icon,
  onChange,
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
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextField;

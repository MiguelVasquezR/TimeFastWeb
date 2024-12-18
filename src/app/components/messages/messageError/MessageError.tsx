import errorImage from "../../../../../public/errorEntrega.png";
import Image from "next/image";
const MessageError = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-1 h-full bg-blue">
      <p className="text-red-400 text-xl">
        No se ha encontrado el número de guía, verifique su número
      </p>
      <Image src={errorImage} alt="error" className="w-[200px]" />
    </div>
  );
};

export default MessageError;

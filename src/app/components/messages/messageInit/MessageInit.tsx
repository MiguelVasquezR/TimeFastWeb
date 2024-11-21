import Bus from "../../icons/bus/Bus";

const MessageInit = () => {
  return (
    <div className="w-full h-[80%] flex flex-col justify-center items-center gap-5">
      <h1 className="text-3xl text-white font-roboto text-[40px] text-center">
        Time-Fast: Entregamos soluciones para que tus envíos lleguen primero
      </h1>
      <Bus width={200} height={160} fill="#F66B0E" />
    </div>
  );
};

export default MessageInit;

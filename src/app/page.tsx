"use client";

import TextField from "./components/form/textField/TextField";
import Button from "./components/form/button/Button";
import { IoSearch } from "react-icons/io5";
import InformationShipment from "./components/informationShipment/InformationShipment";
import { useState } from "react";
import MessageInit from "./components/messages/messageInit/MessageInit";

interface DataEnvio {
  destino: string;
  estado: string;
  fechaEstimadaEntrega: string;
  cliente: string;
  numeroGuia: string;
  numeroPaquetes: number;
  origen: string;
  servicio: string;
}

const dataEnvio = {
  destino: "Calle 123",
  estado: "En tránsito",
  fechaEstimadaEntrega: "23 de septiembre",
  cliente: "Juan",
  numeroGuia: "123456",
  numeroPaquetes: 2,
  origen: "Calle 123",
  servicio: "Express",
};

export default function Home() {
  /* const [dataEnvio, setDataEnvio] = useState<DataEnvio | null>(null); */

  return (
    <div className="bg-blue w-screen h-screen grid grid-rows-6 font-roboto">
      <div className="w-full row-start-1 px-5 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-row justify-center items-center gap-5">
            <TextField
              placeholder="Búscar por número de envio"
              type="text"
              Icon={IoSearch}
              isIcon={true}
              label=""
            />
            <Button isLoading={false} textButton="Buscar" isIcon={false} />
          </div>

          <h3>Logo</h3>
        </div>

        <div className="w-full h-[20px] mt-10 flex justify-center items-center">
          <hr className="w-[90%]" />
        </div>
      </div>

      <div className="w-full row-start-2 row-end-7">
        {dataEnvio ? (
          <InformationShipment
            destino={dataEnvio?.destino}
            estado={dataEnvio?.estado}
            fechaEstimadaEntrega={dataEnvio?.fechaEstimadaEntrega}
            nombreCliente={dataEnvio?.cliente}
            numeroGuia={dataEnvio?.numeroGuia}
            numeroPaquetes={dataEnvio?.numeroPaquetes}
            origen={dataEnvio?.origen}
            servicio={dataEnvio?.servicio}
          />
        ) : (
          <MessageInit />
        )}
      </div>
    </div>
  );
}

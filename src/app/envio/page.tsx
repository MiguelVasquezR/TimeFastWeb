"use client";

import InformationShipment from "../components/informationShipment/InformationShipment";
import { useState } from "react";
import MessageInit from "../components/messages/messageInit/MessageInit";
import Loading from "../components/loading/Loading";
import SearchBar from "../components/searchBar/SearchBar";
import MessageError from "../components/messages/messageError/MessageError";
import { Envio } from "../interfaces/envioInterfaces";

export default function Home() {
  const [numGuia, setNumGuia] = useState<string>("");
  const [dataEnvio, setDataEnvio] = useState<Envio | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  return (
    <div className="bg-blue w-screen h-screen grid grid-rows-6 font-roboto absolute">
      {isLoading && (
        <div className="relative w-screen h-screen bg-black/40 flex justify-center items-center">
          <Loading />
        </div>
      )}

      <SearchBar
        numGuia={numGuia}
        setNumGuia={setNumGuia}
        setDataEnvio={setDataEnvio}
        setIsLoading={setIsLoading}
        setIsError={setIsError}
      />

      <div>
        {isError ? (
          <MessageError />
        ) : (
          <>
            <div className="w-full row-start-2 row-end-7">
              {dataEnvio ? (
                <InformationShipment
                  numGuia={dataEnvio?.numGuia}
                  destino={dataEnvio?.destino}
                  origen={dataEnvio?.origen}
                  cliente={dataEnvio?.cliente}
                  paquetes={dataEnvio?.paquetes}
                  fechaEntrega={dataEnvio?.fechaEntrega}
                  estadoEnvios={dataEnvio?.estadoEnvios}
                />
              ) : (
                <MessageInit />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

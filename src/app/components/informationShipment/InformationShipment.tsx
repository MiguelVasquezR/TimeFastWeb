import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import StatusTimeLine from "../statusTimeLine/StatusTimeLine";

import PackageCanceled from "@/app/components/icons/packageCanceled/PackageCanceled";
import PackageArrested from "@/app/components/icons/packageArrested/PackageArredted";
import MessageStatusProblem from "../messages/messageStatusProblem/MessageStatusProblem";
import { Envio } from "@/app/interfaces/envioInterfaces";
import { Estado } from "@/app/interfaces/estadoInterface";

const InfoItem = ({ title, value }: { title: string; value: string }) => (
  <div className="col-span-1 row-span-1">
    <h3 className="font-roboto font-bold text-[18px] text-white">{title}</h3>
    <p className="font-roboto font-bold text-[15px] text-orange">{value}</p>
  </div>
);

const InformationShipment = ({
  cliente,
  numGuia,
  origen,
  destino,
  paquetes,
  fechaEntrega,
  estadoEnvios,
}: Envio) => {
  const [isMoreInformation, setIsMoreInformation] = useState(false);
  const [estado, setEstado] = useState<Estado>();

  const formatearFecha = (fecha: string): string => {
    const fechaObj = new Date(fecha);
    const dia = String(fechaObj.getDate() + 1).padStart(2, "0");
    const mes = String(fechaObj.getMonth() + 1).padStart(2, "0");
    const año = fechaObj.getFullYear();
    return `${dia}-${mes}-${año}`;
  };

  const fechaMasReciente = estadoEnvios.reduce(
    (fechaActualMasReciente: any, estado: any) => {
      const fechaEstado = new Date(estado.fecha);
      if (!fechaActualMasReciente || fechaEstado > fechaActualMasReciente) {
        return fechaEstado;
      }
      return estado;
    },
    null
  );

  useEffect(() => {
    const fecha = fechaMasReciente;
    setEstado(fecha);
  }, []);

  return (
    <div className="px-5 w-screen h-screen bg-blue">
      <div>
        <h2 className="font-roboto text-[24px] font-bold text-white mb-5">
          Hola,{" "}
          {cliente?.persona?.nombre +
            " " +
            cliente?.persona?.apellidoPaterno +
            " " +
            cliente?.persona?.apellidoMaterno}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <InfoItem title="Número de guía" value={numGuia} />
            <InfoItem
              title="Fecha estimada de entrega"
              value={formatearFecha(fechaEntrega)}
            />
            <InfoItem
              title="Número de paquete(s)"
              value={`${paquetes.length} paquete(s)`}
            />
            <InfoItem
              title="Origen"
              value={
                origen.calle +
                " #" +
                origen.numero +
                ", Col. " +
                origen.colonia +
                ", " +
                origen.codigoPostal +
                ". " +
                origen.ciudad +
                ", " +
                origen.estado
              }
            />
            <InfoItem
              title="Destino"
              value={
                destino.calle +
                " #" +
                destino.numero +
                ", Col. " +
                destino.colonia +
                ", " +
                destino.codigoPostal +
                ". " +
                destino.ciudad +
                ", " +
                destino.estado
              }
            />
          </div>

          <div
            onClick={() => setIsMoreInformation(!isMoreInformation)}
            className="w-[90%] transition-all ease-in-out bg-white rounded-md flex flex-col items-center p-5 cursor-pointer my-10"
          >
            <div className="flex flex-row justify-between items-center w-full">
              <p className="font-roboto text-[15px] font-bold">
                Información de paquete
              </p>
              <IoIosArrowDown size={32} color="black" />
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out w-full`}
              style={{
                height: isMoreInformation ? "auto" : "0",
              }}
            >
              {isMoreInformation && (
                <div className="w-full rounded-lg overflow-hidden shadow-md">
                  <table className="w-full table-auto border-collapse border border-gray-300">
                    <thead className="w-full text-center bg-gray-100">
                      <tr>
                        <th className="border px-4 py-2">ID</th>
                        <th className="border px-4 py-2">Descripción</th>
                        <th className="border px-4 py-2">Peso</th>
                        <th className="border px-4 py-2">Dimensiones</th>
                      </tr>
                    </thead>
                    <tbody className="w-full text-center">
                      {paquetes.map((paquete: any, index: number) => (
                        <tr key={index}>
                          <td className="border px-4 py-2">{index + 1}</td>
                          <td className="border px-4 py-2">
                            {paquete.descripcion}
                          </td>
                          <td className="border px-4 py-2">
                            {paquete.peso} kg
                          </td>
                          <td className="border px-4 py-2">
                            {paquete.dimensiones}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="col-span-1">
          <h2 className="text-center text-[22px] font-bold text-white">
            Descripción del Estado:
          </h2>
          <p className="text-center text-[20px] text-white">
            {estado?.descripcion}
          </p>

          {estado?.estado === "Cancelado" || estado?.estado === "Detenido" ? (
            <MessageStatusProblem
              description={
                estado?.estado === "Cancelado"
                  ? "El envío ha sido cancelado"
                  : "El envío ha sido detenido"
              }
              icon={
                estado?.estado === "Cancelado" ? (
                  <PackageCanceled fillBox="#fff" height={32} width={32} />
                ) : (
                  <PackageArrested fill="#fff" height={32} width={32} />
                )
              }
            />
          ) : (
            <StatusTimeLine estado={estado?.estado || ""} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationShipment;

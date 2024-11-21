import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import StatusTimeLine from "../statusTimeLine/StatusTimeLine";

import PackageCanceled from "@/app/components/icons/packageCanceled/PackageCanceled";
import PackageArrested from "@/app/components/icons/packageArrested/PackageArredted";
import MessageStatusProblem from "../messages/messageStatusProblem/MessageStatusProblem";

const InfoItem = ({ title, value }: { title: string; value: string }) => (
  <div className="col-span-1 row-span-1">
    <h3 className="font-roboto font-bold text-[18px] text-white">{title}</h3>
    <p className="font-roboto font-bold text-[15px] text-orange">{value}</p>
  </div>
);

interface InformationShipmentProps {
  nombreCliente: string;
  numeroGuia: string;
  servicio: string;
  fechaEstimadaEntrega: string;
  origen: string;
  destino: string;
  numeroPaquetes: number;
  estado: string;
}

const InformationShipment = ({
  nombreCliente,
  numeroGuia,
  servicio,
  fechaEstimadaEntrega,
  origen,
  destino,
  numeroPaquetes,
  estado,
}: InformationShipmentProps) => {
  const [isMoreInformation, setIsMoreInformation] = useState(false);

  return (
    <div className="px-5">
      <div>
        <h2 className="font-roboto text-[24px] font-bold text-white mb-5">
          Hola, {nombreCliente}
        </h2>
      </div>

      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="grid grid-cols-3 grid-rows-2 gap-5">
            <InfoItem title="Número de guía" value={numeroGuia} />
            <InfoItem title="Servicio" value={servicio} />
            <InfoItem
              title="Fecha estimada de entrega"
              value={fechaEstimadaEntrega}
            />
            <InfoItem title="Origen" value={origen} />
            <InfoItem title="Destino" value={destino} />
            <InfoItem
              title="Número de paquete(s)"
              value={`${numeroPaquetes} paquete(s)`}
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
                      <tr>
                        <td className="border px-4 py-2">1</td>
                        <td className="border px-4 py-2">Paquete 1</td>
                        <td className="border px-4 py-2">10 kg</td>
                        <td className="border px-4 py-2">20x20x20</td>
                      </tr>
                      <tr>
                        <td className="border px-4 py-2">2</td>
                        <td className="border px-4 py-2">Paquete 2</td>
                        <td className="border px-4 py-2">20 kg</td>
                        <td className="border px-4 py-2">30x30x30</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>

          <div className="w-full bg-white h-[400px] rounded-md">Mapa</div>
        </div>

        <div className="col-span-1">
          {estado === "Cancelado" || estado === "Detenido" ? (
            <MessageStatusProblem
              description={
                estado === "Cancelado"
                  ? "El envío ha sido cancelado"
                  : "El envío ha sido detenido"
              }
              icon={
                estado === "Cancelado" ? (
                  <PackageCanceled fillBox="#fff" height={32} width={32} />
                ) : (
                  <PackageArrested fill="#fff" height={32} width={32} />
                )
              }
            />
          ) : (
            <StatusTimeLine estado={estado} />
          )}
        </div>
      </div>
    </div>
  );
};

export default InformationShipment;

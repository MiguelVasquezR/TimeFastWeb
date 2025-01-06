import StatusCheck from "@/app/components/icons/status/check/CkeckPoint";
import StatusWait from "@/app/components/icons/status/wait/WaitPoint";
import clsx from "clsx";
import CardStatusItem from "../cards/cardStatusItem/CardStatusItem";
import PackageProcess from "@/app/components/icons/packageProcess/PackageProcess";
import Bus from "@/app/components/icons/bus/Bus";
import PackageDone from "@/app/components/icons/packageDone/PackageDone";

interface StatusTimeLineProps {
  estado: string;
}

const SIZE_ICONS = 32;
const COLOR_ACTIVE = "#F66B0E";
const COLOR_INACTIVE = "#fff";

const StatusTimeLine = ({ estado }: StatusTimeLineProps) => {
  const isPending = estado === "Pendiente";
  const isInTransit = estado === "En transito";
  const isDelivered = estado === "Entregado";

  return (
    <div className="col-start-3 w-full h-full flex flex-row justify-center items-center gap-10">
      <div className="flex flex-col justify-center items-center gap-2 h-[80%]">
        {isPending ? (
          <StatusWait
            isActive={isPending}
            fill={COLOR_ACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        ) : (
          <StatusCheck
            fill={isInTransit || isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        )}
        <div
          className={clsx(
            "h-[120px] w-[20px] rounded-xl",
            isInTransit || isDelivered ? "bg-orange" : "bg-white"
          )}
        />
        {isInTransit ? (
          <StatusWait
            isActive={isInTransit}
            fill={COLOR_ACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        ) : (
          <StatusCheck
            fill={isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        )}
        <div
          className={clsx(
            "h-[120px] w-[20px] rounded-xl",
            isDelivered ? "bg-orange" : "bg-white"
          )}
        />
        {isDelivered ? (
          <StatusCheck
            fill={COLOR_ACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        ) : (
          <StatusCheck
            fill={COLOR_INACTIVE}
            height={SIZE_ICONS}
            width={SIZE_ICONS}
          />
        )}
      </div>

      <div className="flex flex-col justify-evenly items-center gap-2 h-full">
        <CardStatusItem
          Icon={
            <PackageProcess
              fill={
                isPending || isInTransit || isDelivered
                  ? COLOR_ACTIVE
                  : COLOR_INACTIVE
              }
              height={10}
              width={60}
            />
          }
          title="Pendiente"
          fill={
            isPending || isInTransit || isDelivered
              ? COLOR_ACTIVE
              : COLOR_INACTIVE
          }
          height={80}
          width={80}
        />

        <CardStatusItem
          Icon={
            <Bus
              fill={isInTransit || isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
              height={10}
              width={60}
            />
          }
          title="En tránsito"
          fill={isInTransit || isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
          height={80}
          width={80}
        />

        <CardStatusItem
          Icon={
            <PackageDone
              fill={isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
              height={10}
              width={60}
            />
          }
          title="Entregado"
          fill={isDelivered ? COLOR_ACTIVE : COLOR_INACTIVE}
          height={80}
          width={80}
        />
      </div>
    </div>
  );
};

export default StatusTimeLine;

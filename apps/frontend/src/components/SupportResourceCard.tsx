import { ISupportResource } from "@shared/database/SupportResource.types";
import clsx from "clsx";

interface SupportResourceCardProps {
  supportResource: ISupportResource;
  onClick?: () => void;
  show?: boolean;
}

const SupportResourceCard = ({
  supportResource,
  onClick,
  show = false,
}: SupportResourceCardProps) => {
  return (
    <div className="h-full w-full relative grow flex flex-col">
      <div
        onClick={onClick}
        className={clsx("w-full bg-blue-50 grow", show ? "relative" : "fixed")}
      >
        {supportResource?.name}
      </div>
    </div>
  );
};

export default SupportResourceCard;

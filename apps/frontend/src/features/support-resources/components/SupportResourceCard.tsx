import { ISupportResource } from "@shared/database/SupportResource.types";
import clsx from "clsx";
import { Calendar } from "react-calendar";
import { View } from "react-calendar/dist/shared/types.js";

interface SupportResourceCardProps {
  supportResource: ISupportResource;
  onDoubleClick?: () => void;
  show?: boolean;
}

const SupportResourceCard = ({
  supportResource,
  onDoubleClick,
  show = false,
}: SupportResourceCardProps) => {
  const modifyDateTilesOfFutureOccurences = ({
    date,
    view,
  }: {
    date: Date;
    view: View;
  }) => (view === "month" && date.getDay() === 3 ? "bg-slate-500" : null);

  return (
    <div
      onDoubleClick={onDoubleClick}
      className="h-full w-full relative grow flex flex-col"
    >
      <div
        className={clsx(
          "w-full bg-blue-50 grow p-2",
          show ? "relative" : "fixed",
        )}
      >
        <p>Provider name: {supportResource.provider_name}</p>
        <p>Name: {supportResource.name}</p>
        <p>
          Age range:{" "}
          {`${supportResource.age_range.minInclusive} - ${supportResource.age_range.maxExclusive}`}
        </p>
        <p>Tags: {supportResource.tags.map((tag) => tag)}</p>
        <div>
          Availability patterns:
          {supportResource.availability.patterns.map((p) => (
            <>
              <p>
                Rrule: {p.rrule.freq}, {p.rrule.count}, {p.rrule.by_day},{" "}
                {p.rrule.interval}
              </p>
              <p>
                Start time: {p.start_time.hour}:{p.start_time.minute}
              </p>
              <p>
                End time: {p.end_time.hour}:{p.end_time.minute}
              </p>
              <p>{p.excluded_dates?.map((date) => <p>{date.toString()}</p>)}</p>
            </>
          ))}
        </div>
        <p>
          {supportResource.availability?.additional_dates?.map((date) => (
            <p> {date.toString()}</p>
          ))}
        </p>
        <p>{supportResource.support_type}</p>
        <Calendar
          className="w-80 h-40"
          defaultView="month"
          tileClassName={modifyDateTilesOfFutureOccurences}
        />
      </div>
    </div>
  );
};

export default SupportResourceCard;

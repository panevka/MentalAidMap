import { ISupportResource } from "@shared/database/SupportResource.types";
import clsx from "clsx";
import { Calendar } from "react-calendar";

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
  // const rrule = supportResource.availability.patterns[0].rrule;
  // const dtstart = DateTime.local(2025, 8, 7);
  // const futureOccurences = getWeeklyOccurences(
  //   dtstart,
  //   rrule.by_day,
  //   rrule.interval,
  //   rrule.count,
  //   { occurence: "future", currentDate: dtstart },
  // );
  //
  // const highlightDateIfResourceAvailable = ({
  //   date,
  //   view,
  // }: {
  //   date: Date;
  //   view: View;
  // }) => {
  //   return view === "month" &&
  //     futureOccurences.some(
  //       (occurence) =>
  //         occurence.toISODate() === DateTime.fromJSDate(date).toISODate(),
  //     )
  //     ? "bg-slate-500"
  //     : null;
  // };

  return (
    <div
      onDoubleClick={onDoubleClick}
      className="h-full w-full relative grow flex flex-col"
    >
      <span
        className={clsx(
          "w-full bg-blue-50 grow p-2",
          show ? "relative" : "fixed",
        )}
      >
        <p>Provider/s: {supportResource.providers.map((p) => p + " | ")}</p>
        <p>Name: {supportResource.name}</p>
        <p>
          Age range:{" "}
          {`${supportResource.age_range.minInclusive} - ${supportResource.age_range.maxExclusive}`}
        </p>
        <div>
          Availability patterns:
          {supportResource.services.map((service) => {
            return (
              <>
                <p>SERVICE</p>
                <p> Contact: {service.contact} </p>
                <p> Charge: {service.charge} </p>
                <p> Support type: {service.support_type} </p>
                {service.shifts.map((shifts) => {
                  return (
                    <>
                      <p>SHIFT</p>
                      <p>Responder profession: {shifts.responder_profession}</p>
                      <p>Timezone: {shifts.availability.timezone}</p>
                      <span>
                        PATTERNS:{" "}
                        {shifts.availability.patterns.map((pattern) => {
                          return (
                            <>
                              <p>PATTERN</p>
                              <p>
                                Start time: {pattern.start_time.hour}:
                                {pattern.start_time.minute}
                              </p>
                              <p>
                                End time: {pattern.end_time.hour}:
                                {pattern.end_time.minute}
                              </p>
                              <p>FREQ: {pattern.rrule.freq}</p>
                              <p>COUNT: {pattern.rrule.count}</p>
                              <p>BY DAY: {pattern.rrule.by_day.join(",")}</p>
                              <p>INTERVAL: {pattern.rrule.interval}</p>
                              <p>
                                {" "}
                                EXCLUDED DATES:{" "}
                                {pattern.excluded_dates?.map((date) =>
                                  date.toString(),
                                )}
                              </p>
                            </>
                          );
                        })}
                      </span>
                    </>
                  );
                })}
              </>
            );
          })}
        </div>
        <Calendar className="w-80 h-40" defaultView="month" />
      </span>
    </div>
  );
};

export default SupportResourceCard;

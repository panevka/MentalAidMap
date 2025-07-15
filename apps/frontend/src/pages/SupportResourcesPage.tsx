import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();

  return (
    <div>
      <div className="bg-white w-full flex justify-center p-1">
        <input type="text" placeholder="Szukaj"></input>
      </div>
      {supportResources?.map((r: ISupportResource) => (
        <>
          <p>Provider name: {r.provider_name}</p>
          <p>Name: {r.name}</p>
          <p>
            Age range:{" "}
            {`${r.age_range.minInclusive} - ${r.age_range.maxExclusive}`}
          </p>
          <p>Tags: {r.tags.map((tag) => tag)}</p>
          <p>
            Availability patterns:
            {r.availability.patterns.map((p) => (
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
                <p>
                  {p.excluded_dates?.map((date) => <p>{date.toString()}</p>)}
                </p>
              </>
            ))}
          </p>
          <p>
            {r.availability?.additional_dates?.map((date) => (
              <p> {date.toString()}</p>
            ))}
          </p>
          <p>{r.support_type}</p>
          <hr />
        </>
      ))}
    </div>
  );
};

export default SupportResourcesPage;

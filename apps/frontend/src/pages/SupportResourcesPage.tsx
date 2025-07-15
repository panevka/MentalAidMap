import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();

  return (
    <div className="bg-[#F7F4FB]">
      <div className="w-full flex justify-around py-4 items-center h-16 border-b border-b-slate-400">
        <input
          type="text"
          placeholder="Szukaj"
          className="h-full w-9/12 rounded-xl border border-solid border-gray-400 p-2"
        />
        <MagnifyingGlassIcon className="h-full text-slate-500 border border-gray-400 bg-white p-1 rounded-full" />
      </div>
      {supportResources?.map((r: ISupportResource) => (
        <div className="p-3">
          <p className="text-xl">Name: {r.name}</p>
          <p className="text-sm font-light">Provider name: {r.provider_name}</p>
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
        </div>
      ))}
    </div>
  );
};

export default SupportResourcesPage;

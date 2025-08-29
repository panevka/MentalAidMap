import { useGetFacility } from "@/hooks/useFacilities";
import { Facility, FacilityAddress } from "@/models/facility";

const List: React.FC<{ facilities: FacilityAddress[] }> = ({ facilities }) => {
  const facilityQueries: (Facility | null)[] = facilities.map((facility) => {
    const query = useGetFacility({ providerCode: facility.code });
    return query.data ? query.data : null;
  });

  return (
    <div className="w-full h-full bg-white overflow-scroll">
      {facilities.map((facility, index) => {
        const facilityQuery = facilityQueries[index];
        return (
          <div key={index} className="border border-black">
            <p>{facilityQuery?.name || "Brak nazwy"}</p>
            <p>{facilityQuery?.phone || "Brak telefonu"}</p>
            <p>
              {facility.city}, {facility.street} {facility.building_number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default List;

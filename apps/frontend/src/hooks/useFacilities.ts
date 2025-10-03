import { useQueryClient } from "@tanstack/react-query";
import { getFacilityData, searchFacilities } from "@/api/facilitiesApi";
import { Facility, FacilityAddress } from "@/models/facility";

export const useSearchFacilities = () => {
  const queryClient = useQueryClient();

  const search = async (searchText: string): Promise<FacilityAddress[]> => {
    return queryClient.fetchQuery({
      queryKey: ["facilities", searchText],
      queryFn: () => searchFacilities({ search: searchText }),
    });
  };

  return { search };
};

export const useGetFacility = () => {
  const queryClient = useQueryClient();

  const getFacility = async (providerCode: string): Promise<Facility> => {
    return queryClient.fetchQuery({
      queryKey: ["facilities", providerCode],
      queryFn: () => getFacilityData({ providerCode }),
    });
  };

  return { getFacility };
};

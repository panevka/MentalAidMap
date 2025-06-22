import { useQuery } from "@tanstack/react-query";
import { getFacilityData, searchFacilities } from "@/api/facilitiesApi";
import {
  Facility,
  FacilityAddress,
  GetFacilityDataParams,
  SearchFacilitiesParams,
} from "@/models/facility";

export const useSearchFacilities = (params: SearchFacilitiesParams) => {
  return useQuery({
    queryKey: ["facilities", params.city, params.postCode, params.radius],
    queryFn: async (): Promise<Array<FacilityAddress>> =>
      searchFacilities(params),
    enabled: !!params.city && !!params.postCode && !!params.radius,
  });
};

export const useGetFacility = (params: GetFacilityDataParams) => {
  return useQuery({
    queryKey: ["facility", params.providerCode],
    queryFn: async (): Promise<Facility> => getFacilityData(params),
    enabled: !!params.providerCode,
  });
};

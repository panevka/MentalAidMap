import { useQuery } from "@tanstack/react-query"
import { searchFacilities, SearchFacilitiesParams } from "@/api/facilitiesApi"
import { Facility } from "@/models/facility";

export const useSearchFacilities = (params: SearchFacilitiesParams) => {
	return useQuery({
		queryKey: ['facilities', params.city],
		queryFn: async (): Promise<Array<Facility>> => searchFacilities(params),
		enabled: !!params.city
	})
};

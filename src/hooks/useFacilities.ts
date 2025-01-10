import { useQuery } from "@tanstack/react-query"
import { searchFacilities, SearchFacilitiesParams, Facility } from "@/api/facilitiesApi"

export const useSearchFacilities = (params: SearchFacilitiesParams) => {
	return useQuery({
		queryKey: ['facilities'],
		queryFn: async (): Promise<Array<Facility>> => searchFacilities(params),
		enabled: !!params.city
	})
};

import { useQuery } from "@tanstack/react-query"
import { searchFacilities } from "@/api/facilitiesApi"
import { FacilityAddress, SearchFacilitiesParams } from "@/models/facility";

export const useSearchFacilities = (params: SearchFacilitiesParams) => {
	return useQuery({
		queryKey: ['facilities', params.city, params.postCode, params.radius],
		queryFn: async (): Promise<Array<FacilityAddress>> => searchFacilities(params),
		enabled: !!params.city && !!params.postCode && !!params.radius
	})
};

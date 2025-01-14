import { useQuery } from "@tanstack/react-query"
import { searchFacilities } from "@/api/facilitiesApi"
import { SearchFacilitiesParams } from "@/models/facility";
import { Facility } from "@/models/facility";

export const useSearchFacilities = (params: SearchFacilitiesParams) => {
	return useQuery({
		queryKey: ['facilities', params.city, params.postCode, params.radius],
		queryFn: async (): Promise<Array<Facility>> => searchFacilities(params),
		enabled: !!params.city && !!params.postCode && !!params.radius
	})
};

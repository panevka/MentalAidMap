import { useQuery } from "@tanstack/react-query";
import { ISupportResource } from "@shared/database/SupportResource.types";
import { getSupportResources } from "@/api/supportResourcesApi";

export const useGetSupportResources = () => {
  return useQuery({
    queryKey: ["supportResources"],
    queryFn: async (): Promise<ISupportResource[]> => getSupportResources(),
  });
};

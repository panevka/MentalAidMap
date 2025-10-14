import { useQuery } from "@tanstack/react-query";
import { getSupportResources } from "@/api/supportResourcesApi";
import { ISupportResource } from "@/models/support-resource";

export const useGetSupportResources = () => {
  return useQuery({
    queryKey: ["supportResources"],
    queryFn: async (): Promise<ISupportResource[]> => getSupportResources(),
  });
};

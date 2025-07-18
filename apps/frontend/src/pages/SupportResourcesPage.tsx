import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import SupportResource from "@/components/SupportResource";
import Search from "@/components/Search";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();

  return (
    <>
      <Search />
      <div className="bg-[#F7F4FB] flex flex-col items-center h-full">
        {supportResources?.map((r: ISupportResource) => (
          <SupportResource
            name={r.name}
            providerName={r.provider_name}
            tags={r.tags}
          />
        ))}
      </div>
    </>
  );
};

export default SupportResourcesPage;

import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import SupportResource from "@/components/SupportResource";
import Search from "@/components/Search";
import { ChangeEvent, useEffect, useState } from "react";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();
  const [filteredSupportResources, setFilteredSupportResources] = useState<
    ISupportResource[]
  >([]);

  useEffect(() => {
    setFilteredSupportResources(supportResources || []);
  }, [supportResources]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    if (!supportResources) return;

    const searchedTerm = event.target.value.toLocaleLowerCase();

    setFilteredSupportResources(
      supportResources.filter((resource) => {
        const providerName = resource.provider_name.toLocaleLowerCase();
        const name = resource.name.toLocaleLowerCase();

        return (
          providerName.includes(searchedTerm) || name.includes(searchedTerm)
        );
      }),
    );
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      <div className="bg-[#F7F4FB] flex flex-col items-center h-full">
        {filteredSupportResources?.map((r: ISupportResource) => (
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

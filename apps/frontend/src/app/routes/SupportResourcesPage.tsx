import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import SupportResource from "@/components/SupportResource";
import Search from "@/components/Search";
import { ChangeEvent, useEffect, useState } from "react";
import SupportResourceCard from "@/components/SupportResourceCard";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();
  const [filteredSupportResources, setFilteredSupportResources] = useState<
    ISupportResource[]
  >([]);
  const [clickedSupportResource, setClickedSupportResource] =
    useState<ISupportResource>();

  const [showSupportResourceDetails, setShowSupportResourceDetails] =
    useState<boolean>(false);

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

  const handleSupportResourceClick = (resourceIndex: number) => {
    setClickedSupportResource(filteredSupportResources[resourceIndex]);
    setShowSupportResourceDetails(true);
  };

  return (
    <>
      <Search onSearch={handleSearch} />
      {!showSupportResourceDetails && (
        <div className="bg-[#F7F4FB] flex flex-col items-center h-full">
          {filteredSupportResources?.map((r: ISupportResource, index) => (
            <SupportResource
              name={r.name}
              providerName={r.provider_name}
              tags={r.tags}
              onClick={() => handleSupportResourceClick(index)}
            />
          ))}
        </div>
      )}

      {clickedSupportResource && (
        <SupportResourceCard
          supportResource={clickedSupportResource}
          onClick={() => setShowSupportResourceDetails(false)}
          show={true}
        />
      )}
    </>
  );
};

export default SupportResourcesPage;

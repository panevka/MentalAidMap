import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import SupportResource from "@/features/support-resources/components/SupportResource";
import Search from "@/features/support-resources/components/Search";
import { ChangeEvent, useEffect, useState } from "react";
import SupportResourceCard from "@/features/support-resources/components/SupportResourceCard";

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
        const providersNames = resource.providers.map((providerName) =>
          providerName.toLocaleLowerCase(),
        );
        const name = resource.name.toLocaleLowerCase();

        return (
          providersNames.includes(searchedTerm) || name.includes(searchedTerm)
        );
      }),
    );
  };

  const handleSupportResourceClick = (resourceIndex: number) => {
    setClickedSupportResource(filteredSupportResources[resourceIndex]);
    setShowSupportResourceDetails(true);
  };

  return (
    <div className="bg-[#F7F4FB] flex flex-col items-center">
      <Search onSearch={handleSearch} />
      {!showSupportResourceDetails && (
        <div className="flex flex-col items-center h-full w-11/12">
          {filteredSupportResources?.map((r: ISupportResource, index) => (
            <SupportResource
              supportResource={r}
              onClick={() => handleSupportResourceClick(index)}
            />
          ))}
        </div>
      )}

      {clickedSupportResource && (
        <SupportResourceCard
          supportResource={clickedSupportResource}
          onDoubleClick={() => setShowSupportResourceDetails(false)}
          show={true}
        />
      )}
    </div>
  );
};

export default SupportResourcesPage;

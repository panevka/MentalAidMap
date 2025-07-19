import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import SupportResource from "@/components/SupportResource";
import Search from "@/components/Search";
import { ChangeEvent, useEffect, useState } from "react";
import clsx from "clsx";

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
      <div className="h-full w-full relative grow flex flex-col">
        <div
          onClick={() => setShowSupportResourceDetails(false)}
          className={clsx(
            "w-full bg-blue-50 grow",
            showSupportResourceDetails ? "relative" : "fixed",
          )}
        >
          {clickedSupportResource?.name}
        </div>
      </div>
    </>
  );
};

export default SupportResourcesPage;

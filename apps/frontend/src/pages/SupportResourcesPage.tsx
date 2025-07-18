import { useGetSupportResources } from "@/hooks/useSupportResources";
import { ISupportResource } from "@shared/database/SupportResource.types";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import SupportResource from "@/components/SupportResource";

const SupportResourcesPage: React.FC = () => {
  const { data: supportResources } = useGetSupportResources();

  return (
    <div className="bg-[#F7F4FB] flex flex-col items-center h-full">
      <div className="w-full flex justify-around py-4 items-center h-16 border-b border-b-slate-400">
        <input
          type="text"
          placeholder="Szukaj"
          className="h-full w-9/12 rounded-xl border border-solid border-gray-400 p-2"
        />
        <MagnifyingGlassIcon className="h-full text-slate-500 border border-gray-400 bg-white p-1 rounded-full" />
      </div>
      {supportResources?.map((r: ISupportResource) => (
        <SupportResource
          name={r.name}
          providerName={r.provider_name}
          tags={r.tags}
        />
      ))}
    </div>
  );
};

export default SupportResourcesPage;

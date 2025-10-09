import { Map } from "@/components/Map";
import { Search } from "lucide-react";
import { Facility, FacilityAddress } from "@/models/facility";
import { useState } from "react";
import { useGetFacility, useSearchFacilities } from "@/hooks/useFacilities";

const FacilitiesPage = () => {
  const [inputValue, setInputValue] = useState("");
  const [facilityAdresses, setFacilityAdresses] = useState<FacilityAddress[]>();
  const [facilities, setFacilities] = useState<Facility[]>();
  const [showFacilityList, setShowFacilityList] = useState<boolean>(false);

  const { getFacility } = useGetFacility();

  const { search } = useSearchFacilities();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await search(inputValue).then(async (response) => {
      setFacilityAdresses(response);

      const facilitiesData = await Promise.all(
        response.map(async (facility) => {
          const facilityData = await getFacility(facility.code);
          return facilityData;
        }),
      );

      setFacilities(facilitiesData);
    });
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 h-full min-h-0">
      <div className="flex h-full flex-col lg:flex-row overflow-hidden">
        <div className="flex flex-col flex-1">
          <div className="max-w-2xl mx-auto p-8">
            <form
              className="relative flex flex-col md:flex-row h-16"
              onSubmit={handleSearch}
            >
              <input
                type="text"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setInputValue(e.target.value)
                }
                placeholder="Kraków, ul. Floriańska 15..."
                className="w-full h-full px-6 py-4 rounded-2xl border-0 bg-white/80 backdrop-blur-sm shadow-lg focus:ring-2 focus:ring-purple-500 focus:outline-none text-gray-900 placeholder-gray-500"
              />

              <button
                type="submit"
                className="h-full flex justify-center items-center aspect-square bg-gradient-to-r from-purple-600 to-pink-600 mx-5 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
              >
                <Search className="text-white h-5 w-5" />
              </button>
            </form>
          </div>

          <button
            onClick={() => setShowFacilityList((prev) => !prev)}
            className="lg:hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
          >
            Widok listy
          </button>

          <div
            className={`flex-1 overflow-auto ${showFacilityList ? "" : "hidden lg:flex"} flex flex-col items-center`}
          >
            {facilities?.map((facility) => (
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-10/12 m-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {facility.name}
                </h3>
                <p className="text-gray-600">Telefon: {facility.phone}</p>
                <p className="text-gray-600">NIP: {facility.nip}</p>
                <p className="text-gray-600">REGON: {facility.regon}</p>
              </div>
            )) || <p className="text-gray-600">Brak placówek</p>}
          </div>
        </div>
        <div
          className={`bg-red-500 flex-[2] ${showFacilityList ? "hidden" : ""} lg:visible`}
        >
          <Map facilities={facilityAdresses} />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;

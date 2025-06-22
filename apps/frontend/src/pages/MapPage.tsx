import { Map } from "../components/Map";
import { useGetFacility, useSearchFacilities } from "@/hooks/useFacilities";
import {
  Facility,
  FacilityAddress,
  SearchFacilitiesParams,
} from "@/models/facility";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const List: React.FC<{ facilities: FacilityAddress[] }> = ({ facilities }) => {
  const facilityQueries: (Facility | null)[] = facilities.map((facility) => {
    const query = useGetFacility({ providerCode: facility.code });
    return query.data ? query.data : null;
  });

  return (
    <div className="w-full h-full bg-white overflow-scroll">
      {facilities.map((facility, index) => {
        const facilityQuery = facilityQueries[index];
        return (
          <div key={index} className="border border-black">
            <p>{facilityQuery?.name || "Brak nazwy"}</p>
            <p>{facilityQuery?.phone || "Brak telefonu"}</p>
            <p>
              {facility.city}, {facility.street} {facility.building_number}
            </p>
          </div>
        );
      })}
    </div>
  );
};

const MapPage: React.FC = () => {
  const location = useLocation();
  const inputValue = location.state?.inputValue || "";

  const [city, setCity] = useState(inputValue);
  const [postCode, setPostCode] = useState("");
  const [radius, setRadius] = useState(15);
  const [showFacilityList, setShowFacilityList] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<SearchFacilitiesParams>({
    city: "",
    postCode: "",
    radius: 0,
  });

  const {
    data: facilities,
    isLoading,
    isError,
    isSuccess,
  } = useSearchFacilities(searchQuery || { city: "", postCode: "" });

  const handleSearch = () => {
    setSearchQuery({ city: city, postCode: postCode, radius: radius });
  };

  return (
    <div className="w-full h-full flex flex-col overflow-hidden md:flex-row">
      <div
        className="bg-[#F7F4FB] w-full flex flex-row items-center p-3 
      sticky top-0 justify-center md:h-full md:relative md:left-0 md:w-1/2
      md:items-start md:justify-start md:flex-col md:overflow-scroll"
      >
        <div className="text-sm md:w-full ">
          <Input
            type="search"
            placeholder="Miejscowość"
            defaultValue={inputValue}
            onChange={(e) => setCity(e.target.value)}
            className="text-sm"
          />
          <div className="flex flex-row">
            <Input
              type="text"
              placeholder="Kod pocztowy"
              onChange={(e) => setPostCode(e.target.value)}
              className="text-sm"
            />
            <Input
              type="number"
              placeholder="Odległość (km)"
              onChange={(e) => setRadius(parseInt(e.target.value))}
              className="text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col h-full justify-end md:items-center md:justify-center md:h-16 w-full">
          <Button
            type="submit"
            onClick={handleSearch}
            className="bg-[#2B3A67] mx-2 w-full"
          >
            <p>Szukaj</p>
          </Button>
          <p className="hidden md:flex">
            {isLoading
              ? "Ładowanie..."
              : isError
                ? "Nastąpił błąd!"
                : isSuccess
                  ? "Wyszukiwanie przebiegło pomyślnie!"
                  : ""}
          </p>
        </div>
        <div className="hidden w-full h-full relative md:flex">
          <div
            className={`w-full h-full absolute bg-white overflow-scroll flex duration-700 md:text-sm`}
          >
            <List facilities={facilities || []} />
          </div>
        </div>
      </div>

      <div className="w-full h-full relative">
        <div className="w-full h-full absolute">
          <Map facilities={facilities} />
        </div>
        <div
          className={`h-full w-full absolute bg-white p-8 flex duration-700 ${
            showFacilityList && facilities
              ? "translate-y-0"
              : "translate-y-full"
          }`}
        >
          <List facilities={facilities || []} />
        </div>
      </div>

      <div className="bg-white sticky bottom-0 h-15 p-3 flex flex-row justify-between md:hidden">
        <Button
          type="button"
          onClick={() => setShowFacilityList((prevState) => !prevState)}
          className="h-full w-20 bg-[#2B3A67]"
        >
          Lista
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
            />
          </svg>
        </Button>
        <p>
          {isLoading
            ? "Ładowanie..."
            : isError
              ? "Nastąpił błąd!"
              : isSuccess
                ? "Wyszukiwanie przebiegło pomyślnie! "
                : ""}
        </p>
      </div>
    </div>
  );
};

export { MapPage };

import { Map } from "@/components/Map";
import { Search } from "lucide-react";
import {
  Facility,
  FacilityAddress,
  SearchFacilitiesParams,
} from "@/models/facility";
import { useState } from "react";
import { useGetFacility, useSearchFacilities } from "@/hooks/useFacilities";

const facilitiesMock: Facility[] = [
  {
    code: "FAC001",
    nip: "1234567890",
    regon: "987654321",
    registry_number: "REG-001",
    name: "facility name 1",
    phone: "+48123456789",
    agreements: ["AG-100", "AG-101"],
  },
  {
    code: "FAC002",
    nip: "2345678901",
    regon: "876543210",
    registry_number: "REG-002",
    name: "facility name 2",
    agreements: ["AG-102"],
  },
  {
    code: "FAC003",
    nip: "3456789012",
    regon: "765432109",
    registry_number: "REG-003",
    name: "facility name 3",
    phone: "+48987654321",
    agreements: ["AG-103", "AG-104", "AG-105"],
  },
  {
    code: "FAC004",
    nip: "4567890123",
    regon: "654321098",
    registry_number: "REG-004",
    name: "facility name 4",
    agreements: ["AG-106"],
  },
  {
    code: "FAC005",
    nip: "5678901234",
    regon: "543210987",
    registry_number: "REG-005",
    name: "facility name 5",
    phone: "+48765432109",
    agreements: ["AG-107", "AG-108"],
  },
  {
    code: "FAC006",
    nip: "6789012345",
    regon: "432109876",
    registry_number: "REG-006",
    name: "facility name 6",
    agreements: ["AG-109"],
  },
  {
    code: "FAC007",
    nip: "7890123456",
    regon: "321098765",
    registry_number: "REG-007",
    name: "facility name 7",
    phone: "+48111222333",
    agreements: ["AG-110", "AG-111"],
  },
  {
    code: "FAC008",
    nip: "8901234567",
    regon: "210987654",
    registry_number: "REG-008",
    name: "facility name 8",
    agreements: ["AG-112"],
  },
  {
    code: "FAC009",
    nip: "9012345678",
    regon: "109876543",
    registry_number: "REG-009",
    name: "facility name 9",
    phone: "+48999888777",
    agreements: ["AG-113", "AG-114"],
  },
  {
    code: "FAC010",
    nip: "0123456789",
    regon: "098765432",
    registry_number: "REG-010",
    name: "facility name 10",
    agreements: ["AG-115"],
  },
];

export const mockFacilityAddresses: FacilityAddress[] = [
  {
    code: "FAC001",
    city: "Warsaw",
    street: "Marszałkowska",
    building_number: "12A",
    district: "Śródmieście",
    post_code: "00-001",
    voivodeship: ["Mazowieckie"],
    location: { type: "Point", coordinates: [21.0122, 52.2297] },
  },
  {
    code: "FAC002",
    city: "Kraków",
    street: "Floriańska",
    building_number: "5",
    district: "Stare Miasto",
    post_code: "31-019",
    voivodeship: ["Małopolskie"],
    location: { type: "Point", coordinates: [19.945, 50.0647] },
  },
  {
    code: "FAC003",
    city: "Gdańsk",
    street: "Długa",
    building_number: "45",
    district: "Główne Miasto",
    post_code: "80-831",
    voivodeship: ["Pomorskie"],
    location: { type: "Point", coordinates: [18.6466, 54.352] },
  },
  {
    code: "FAC004",
    city: "Wrocław",
    street: "Rynek",
    building_number: "22",
    district: "Stare Miasto",
    post_code: "50-101",
    voivodeship: ["Dolnośląskie"],
    location: { type: "Point", coordinates: [17.0385, 51.1079] },
  },
  {
    code: "FAC005",
    city: "Poznań",
    street: "Święty Marcin",
    building_number: "30",
    district: "Stare Miasto",
    post_code: "61-806",
    voivodeship: ["Wielkopolskie"],
    location: { type: "Point", coordinates: [16.9252, 52.4064] },
  },
  {
    code: "FAC006",
    city: "Łódź",
    street: "Piotrkowska",
    building_number: "120",
    district: "Śródmieście",
    post_code: "90-006",
    voivodeship: ["Łódzkie"],
    location: { type: "Point", coordinates: [19.456, 51.7592] },
  },
  {
    code: "FAC007",
    city: "Szczecin",
    street: "Kaszubska",
    building_number: "8",
    district: "Śródmieście",
    post_code: "70-226",
    voivodeship: ["Zachodniopomorskie"],
    location: { type: "Point", coordinates: [14.5528, 53.4285] },
  },
  {
    code: "FAC008",
    city: "Lublin",
    street: "Krakowskie Przedmieście",
    building_number: "15",
    district: "Śródmieście",
    post_code: "20-002",
    voivodeship: ["Lubelskie"],
    location: { type: "Point", coordinates: [22.5684, 51.2465] },
  },
  {
    code: "FAC009",
    city: "Katowice",
    street: "Mariacka",
    building_number: "10",
    district: "Śródmieście",
    post_code: "40-014",
    voivodeship: ["Śląskie"],
    location: { type: "Point", coordinates: [19.0238, 50.2649] },
  },
  {
    code: "FAC010",
    city: "Białystok",
    street: "Lipowa",
    building_number: "3",
    district: "Centrum",
    post_code: "15-424",
    voivodeship: ["Podlaskie"],
    location: { type: "Point", coordinates: [23.1688, 53.1325] },
  },
];

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
    <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen">
      <div className="flex h-full flex-col lg:flex-row overflow-hidden">
        <div className="flex-1 py-8 mt-16">
          <div className="max-w-2xl mx-auto mb-12 w-full p-8">
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
            className={`h-full w-full overflow-scroll ${showFacilityList ? "" : "hidden"} lg:flex flex-col items-center`}
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
            ))}
          </div>
        </div>
        <div className="bg-red-500 flex-[2] mt-16">
          <Map facilities={facilityAdresses} />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;

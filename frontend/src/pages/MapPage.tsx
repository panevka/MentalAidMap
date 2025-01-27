import Map from "../components/Map"
import { useGetFacility, useSearchFacilities } from "@/hooks/useFacilities"
import { Facility, FacilityAddress, SearchFacilitiesParams } from "@/models/facility"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const List: React.FC<{ facilities: FacilityAddress[] }> = ({ facilities }) => {
	const facilityQueries: (Facility | null)[] = facilities.map((facility) => {
		const query = useGetFacility({ providerCode: facility.code })
		return query.data ? query.data : null
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
		</div >
	);
};


const MapPage = () => {
	const [city, setCity] = useState('');
	const [postCode, setPostCode] = useState('');
	const [radius, setRadius] = useState(15);
	const [showFacilityList, setShowFacilityList] = useState<boolean>(false)
	const [searchQuery, setSearchQuery] = useState<SearchFacilitiesParams>({ city: '', postCode: '', radius: 0 });

	const { data: facilities } = useSearchFacilities(searchQuery || { city: '', postCode: '' });

	const handleSearch = () => {
		setSearchQuery({ city: city, postCode: postCode, radius: radius })
	};

	return (
		<div className="w-full h-full flex flex-col overflow-hidden">

			<div className="bg-white w-full flex flex-row items-center p-3 sticky top-0">
				<div>
					<Input type="search"
						placeholder="Miejscowość"
						onChange={(e) => setCity(e.target.value)}
					/>
					<div className="flex flex-row">
						<Input type="text" placeholder="Kod pocztowy" onChange={(e) => setPostCode(e.target.value)}
						/>
						<Input type="number"
							placeholder="Odległość"
							onChange={(e) => setRadius(parseInt(e.target.value))}
						/>
					</div>
				</div>
				<Button type="submit" onClick={handleSearch}>Szukaj</Button>
			</div>


			<div className="w-full h-full relative">
				<div className="w-full h-full absolute">
					<Map facilities={facilities} />
				</div>
				<div className={`h-full w-full absolute bg-white p-8 flex duration-700 ${showFacilityList && facilities ? "translate-y-0" : "translate-y-full"}`}>
					<List facilities={facilities || []} />
				</div>
			</div>
			<div className="w-full bg-white sticky bottom-0">
				<Button type="button" onClick={() => setShowFacilityList((prevState) => !prevState)}>Przełącz widok</Button>
			</div>
		</div>

	)
}

export default MapPage

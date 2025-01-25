import Map from "../components/Map"
import { useSearchFacilities } from "@/hooks/useFacilities"
import { SearchFacilitiesParams } from "@/models/facility"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const MapPage = () => {
	const [city, setCity] = useState('');
	const [postCode, setPostCode] = useState('');
	const [radius, setRadius] = useState(15);
	const [searchQuery, setSearchQuery] = useState<SearchFacilitiesParams>({ city: '', postCode: '', radius: 0 });

	const { data: facilities, isLoading, error } = useSearchFacilities(searchQuery || { city: '', postCode: '' });

	const handleSearch = () => {
		setSearchQuery({ city: city, postCode: postCode, radius: radius })
	};

	return (
		<div className="w-full h-full flex flex-col overflow-visible">

			<div className="bg-white w-full flex flex-row p-3">
				<Input type="search"
					placeholder="Znajdź placówki"
					onChange={(e) => setCity(e.target.value)}
				/>
				<Input type="text"
					placeholder="Kod pocztowy"
					onChange={(e) => setPostCode(e.target.value)}
				/>
				<Input type="number"
					placeholder="Odległość"
					onChange={(e) => setRadius(parseInt(e.target.value))}
				/>
				<Button type="submit" onClick={handleSearch}>Szukaj</Button>
			</div>

			<div className="w-full h-full relative">
				<Map facilities={facilities} />
			</div>
		</div>
	)
}

export default MapPage

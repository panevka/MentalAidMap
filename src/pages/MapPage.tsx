import Map from "../components/Map"
import { useSearchFacilities } from "@/hooks/useFacilities"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const MapPage = () => {
	const [city, setCity] = useState('');
	const [searchCity, setSearchCity] = useState('');

	const { data: facilities, isLoading, error } = useSearchFacilities({ city: searchCity });

	const handleSearch = () => {
		setSearchCity(city)
	};

	return (
		<div className="w-full h-full flex flex-col">

			<div className="bg-white w-full flex flex-row p-3">
				<Input type="search"
					placeholder="Znajdź placówki"
					onChange={(e) => setCity(e.target.value)}
				/>
				<Button type="submit" onClick={handleSearch}>Szukaj</Button>
			</div>

			<div className="w-full h-full">
				<Map facilities={facilities} />
			</div>
		</div>
	)
}

export default MapPage

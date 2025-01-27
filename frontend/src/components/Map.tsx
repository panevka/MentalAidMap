import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { FacilityAddress } from "@/models/facility";

interface Props {
  facilities?: Array<FacilityAddress>;
}

function facilityToMarker(facility: FacilityAddress, index: number) {
  const coords = facility.location.coordinates
  if (!coords) return null;

  return (
    <Marker key={`i${index}_f${facility.code}`} position={[coords[1], coords[0]]}>
      <Popup>
        <p>{facility.city},</p>
        <p>{facility.street} {facility.building_number}</p>
      </Popup>
    </Marker>
  )
}

export default function Map(props: Props) {

  return (
    <MapContainer className="w-full h-full z-0" center={[52.3, 19.1]} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        props.facilities?.map((facility, index) => facilityToMarker(facility, index))
      }
    </MapContainer>
  );
}

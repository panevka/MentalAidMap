import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Facility } from "@/models/facility";

interface Props {
  facilities?: Array<Facility>;
}

function facilityToMarker(facility: Facility, index: number) {
  const coords = facility.location.coordinates
  if (!coords) return null;

  return (
    <Marker key={`i${index}_f${facility["provider-code"]}`} position={[coords[1], coords[0]]}>
      <Popup>
        <p>{facility.city},</p>
        <p>{facility.street} {facility["house-number"]}</p>
      </Popup>
    </Marker>
  )
}

export default function Map(props: Props) {

  return (
    <MapContainer className="w-full h-full" center={[52.3, 19.1]} zoom={7} scrollWheelZoom={true}>
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

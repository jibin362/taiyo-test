import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MarkerIcon } from "./Marker";
import { useQuery } from "@tanstack/react-query";
import { fetchAllDiseaseCountry } from "../../apis/fetchAllDiseaseCountry";
import { normalizeMapData } from "../../normalizers/normalizeMapData";
import Loader from "../Loader";

// Keep center location as India
const centerLocation = { lat: 20, lng: 77 };

function GobalMap() {
  const { data, error, isError, isLoading } = useQuery<
    IDiseaseCountryResponse[],
    Error
  >({
    queryKey: ["diseasesByCountries"],
    queryFn: fetchAllDiseaseCountry,
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError && error) {
    return <h2>{error.message || "Oops something went wrong!"}</h2>;
  }

  const markerData = normalizeMapData(data);

  return (
    <MapContainer
      center={centerLocation}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: "350px", width: "100%" }}
      className="mt-10"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {markerData.map((marker) => (
        <Marker
          key={marker.id}
          icon={MarkerIcon}
          position={{ lat: marker.lat, lng: marker.long }}
        >
          <Popup>
            <b>{marker.country}</b>
            <br />
            <span>Active: {marker.active}</span>
            <br />
            <span>Recovered: {marker.recovered}</span>
            <br />
            <span>Deaths: {marker.deaths}</span>
            <br />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default GobalMap;

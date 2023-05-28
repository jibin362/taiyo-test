import L from "leaflet";

/**
 * Custom Leaflet marker for map
 */
const MarkerIcon = new L.Icon({
  iconUrl: "/svgs/marker.svg",
  iconRetinaUrl: "/svgs/marker.svg",
  iconSize: new L.Point(30, 30),
});

export { MarkerIcon };

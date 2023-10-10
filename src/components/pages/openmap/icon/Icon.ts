import L from "leaflet";

import marker from "./marker.svg";

const iconPerson = new L.Icon({
  iconUrl: JSON.stringify(marker.src).replace(/"/g, ""),
  iconRetinaUrl: JSON.stringify(marker.src).replace(/"/g, ""),
  iconSize: new L.Point(30, 30),
});

export { iconPerson };

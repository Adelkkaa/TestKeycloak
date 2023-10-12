import L from "leaflet";

import marker from "./marker.svg";

// const iconPerson = new L.Icon({
//   iconUrl: JSON.stringify(marker.src).replace(/"/g, ""),
//   iconRetinaUrl: JSON.stringify(marker.src).replace(/"/g, ""),
//   iconSize: new L.Point(30, 30),

// });
type IconPerson = (rotate: number) => L.DivIcon;
const iconPerson: IconPerson = (rotate) =>
  L.divIcon({
    className: "custom-marker-icon",
    html: `<div style="transform: rotate(${rotate}deg);" ><img src=${JSON.stringify(
      marker.src
    ).replace(/"/g, "")} alt='marker' /></div>`,
  });

export { iconPerson };

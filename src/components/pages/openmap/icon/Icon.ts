import L from "leaflet";

import marker from "./marker.svg";
import rotateMarker from "./rotateMarker.svg";

type IconPerson = (rotate: number) => L.DivIcon;
const iconPerson: IconPerson = (rotate) =>
  L.divIcon({
    className: "custom-marker-icon",
    html: `<img style="transform: rotate(${rotate}deg);" src=${JSON.stringify(
      isNaN(rotate) ? marker.src : rotateMarker.src
    ).replace(/"/g, "")} alt='marker' />`,
  });

export { iconPerson };

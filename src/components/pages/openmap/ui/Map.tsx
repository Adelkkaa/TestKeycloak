import React, { useRef, useState } from "react";
import { MapContainer, Popup, TileLayer } from "react-leaflet";

import classes from "./Map.module.css";

import MarkerClusterGroup from "./MarkerClusterGroup";

import Image, { StaticImageData } from "next/image";
import { CustomMarker } from "./CustomMarker";

const coords = [
  { id: 0, x: 55.835857, y: 49.121517, rotate: 30 },
  { id: 1, x: 55.835422, y: 49.121059, rotate: 200 },
  { id: 2, x: 55.819274, y: 49.121196, rotate: 90 },
  { id: 3, x: 55.812639, y: 49.075282, rotate: 30 },
  { id: 4, x: 55.813251, y: 49.074939, rotate: 200 },
  { id: 5, x: 55.813307, y: 49.076051, rotate: 90 },
  { id: 6, x: 55.812999, y: 49.076489, rotate: 30 },
  { id: 7, x: 55.812999, y: 49.076489, rotate: 200 },
  { id: 8, x: 55.812714, y: 49.077518, rotate: 90 },
  { id: 9, x: 55.816477, y: 49.092798, rotate: 30 },
  { id: 10, x: 55.816618, y: 49.092118, rotate: 200 },
  { id: 11, x: 55.816727, y: 49.092032, rotate: 90 },
];

const Map = () => {
  const prevMarkerRef = useRef<number | null>(null);
  const [imageSrc, setImageSrc] = useState<StaticImageData | null>(null);
  return (
    <>
      <div className={classes.map}>
        <MapContainer center={[55.7887, 49.1221]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {coords.map(
              (item) => (
                <CustomMarker
                  key={item.id}
                  id={item.id}
                  x={item.x}
                  y={item.y}
                  rotate={item.rotate}
                  prevMarkerRef={prevMarkerRef}
                  setImageSrc={setImageSrc}
                >
                  <Popup className="leaflet-customPopup">
                    {item.x}
                    {imageSrc ? (
                      <Image
                        src={imageSrc}
                        alt="cake"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <p>Loading...</p>
                    )}
                  </Popup>
                </CustomMarker>
              )
              // {
              //   const icon = iconPerson(item.rotate);
              //   return (
              //     <Marker
              //       key={item.x}
              //       position={[item.x, item.y]}
              //       icon={icon}
              //       eventHandlers={{
              //         click: (e) => {
              //           if (prevMarkerRef && prevMarkerRef.current === item.x) {
              //             return;
              //           } else {
              //             prevMarkerRef.current = item.x;
              //             setImageSrc(null);
              //             // Здесь будет логика GET запроса на получение изображения, но пока timeout)))
              //             setTimeout(() => setImageSrc(images[item.id]), 2000);
              //           }
              //         },
              //       }}
              //     >
              //       <Popup className="leaflet-customPopup">
              //         {item.x}
              //         {imageSrc ? (
              //           <Image
              //             src={imageSrc}
              //             alt="cake"
              //             width={100}
              //             height={100}
              //           />
              //         ) : (
              //           <p>Loading...</p>
              //         )}
              //       </Popup>
              //     </Marker>
              //   );
            )}
          </MarkerClusterGroup>
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

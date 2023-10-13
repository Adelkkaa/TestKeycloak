import React from "react";
import { MapContainer, Popup, TileLayer, useMap } from "react-leaflet";

import classes from "./Map.module.css";

import Image from "next/image";
import { CustomMarker } from "./CustomMarker";
import MarkerClusterGroup from "./MarkerClusterGroup";
import { coords, images } from "../mockData";
import { Legend } from "./Legend";

const Map = () => {
  return (
    <>
      <div className={classes.map}>
        <MapContainer center={[55.7887, 49.1221]} zoom={11} minZoom={8}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MarkerClusterGroup>
            {coords.map((item) => (
              <CustomMarker
                key={item.id}
                x={item.x}
                y={item.y}
                rotate={item.rotate}
              >
                <Popup className="leaflet-customPopup">
                  {item.x}

                  <Image
                    src={images[item.id]}
                    alt="cake"
                    width={100}
                    height={100}
                  />
                </Popup>
              </CustomMarker>
            ))}
          </MarkerClusterGroup>
          <Legend />
        </MapContainer>
      </div>
    </>
  );
};

export default Map;

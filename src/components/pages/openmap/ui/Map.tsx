import React, { useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

import classes from "./Map.module.css";

import { CustomMarker } from "./CustomMarker";
import MarkerClusterGroup from "./MarkerClusterGroup";
import { coords } from "../mockData";
import { Legend } from "./Legend";
import Portal from "@/shared/ui/Portal/ui/Portal";

export type PortalData = {
  id: number;
  x: number;
  y: number;
};

const Map = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [portalData, setPortalData] = useState<PortalData>();
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
                id={item.id}
                x={item.x}
                y={item.y}
                rotate={item.rotate || NaN}
                setIsModalOpen={setIsModalOpen}
                setPortalData={setPortalData}
              />
            ))}
          </MarkerClusterGroup>
          <Legend />
        </MapContainer>
      </div>
      {isModalOpen && portalData && (
        <Portal
          x={portalData.x}
          y={portalData.y}
          id={portalData.id}
          setIsModalOpen={setIsModalOpen}
        />
      )}
    </>
  );
};

export default Map;

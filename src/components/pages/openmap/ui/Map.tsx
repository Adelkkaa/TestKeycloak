import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import classes from "./Map.module.css";

import { iconPerson } from "../icon/Icon";
import VideoFeed from "./VideoFeed";

const coords = [
  { x: 55.835857, y: 49.121517 },
  { x: 55.835422, y: 49.121059 },
  { x: 55.819274, y: 49.121196 },
];

const Map = () => {
  return (
    <>
      <div className={classes.map}>
        <MapContainer center={[55.7887, 49.1221]} zoom={11}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coords.map((item) => (
            <Marker key={item.x} position={[item.x, item.y]} icon={iconPerson}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
      <VideoFeed
        src="rtsp://rtsp/stream/movie
"
      />
    </>
  );
};

export default Map;

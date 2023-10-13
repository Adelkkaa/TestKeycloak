import React, { FC, MutableRefObject, PropsWithChildren } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { iconPerson } from "../icon/Icon";
import { LeafletMouseEvent, Map } from "leaflet";

type CustomMarkerProps = PropsWithChildren<{
  x: number;
  y: number;
  rotate: number;
}>;

export const CustomMarker: FC<CustomMarkerProps> = ({
  x,
  y,
  rotate,
  children,
}) => {
  const icon = iconPerson(rotate);
  return (
    <Marker position={[x, y]} icon={icon}>
      {children}
    </Marker>
  );
};

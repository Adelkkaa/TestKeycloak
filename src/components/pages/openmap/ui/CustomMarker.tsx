import React, { FC, MutableRefObject, PropsWithChildren } from "react";
import { Marker, Popup, useMap } from "react-leaflet";

import { iconPerson } from "../icon/Icon";
import { LeafletMouseEvent, Map } from "leaflet";
import { PortalData } from "./Map";

type CustomMarkerProps = PropsWithChildren<{
  x: number;
  y: number;
  id: number;
  rotate: number;
  setIsModalOpen: (arg: boolean) => void;
  setPortalData: (arg: PortalData) => void;
}>;

export const CustomMarker: FC<CustomMarkerProps> = ({
  x,
  y,
  id,
  rotate,
  setIsModalOpen,
  setPortalData,
  children,
}) => {
  const icon = iconPerson(rotate);
  return (
    <Marker
      position={[x, y]}
      icon={icon}
      eventHandlers={{
        click: () => {
          setIsModalOpen(true);
          setPortalData({ x, y, id });
        },
      }}
    >
      {children}
    </Marker>
  );
};

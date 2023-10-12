import React, { FC, MutableRefObject, PropsWithChildren } from "react";
import L from "leaflet";
import marker from "./marker.svg";
import { Marker, Popup } from "react-leaflet";
import image1 from "../icon/image-1.jpg";
import image2 from "../icon/image-2.jpg";
import image3 from "../icon/image-3.jpg";
import { iconPerson } from "../icon/Icon";
import { StaticImageData } from "next/image";

const images = [
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
  image1,
  image2,
  image3,
];

type CustomMarkerProps = PropsWithChildren<{
  x: number;
  y: number;
  id: number;
  rotate: number;
  prevMarkerRef: MutableRefObject<null | number>;
  setImageSrc: (arg: StaticImageData | null) => void;
}>;

export const CustomMarker: FC<CustomMarkerProps> = ({
  x,
  y,
  id,
  rotate,
  prevMarkerRef,
  setImageSrc,
  children,
}) => {
  const icon = iconPerson(rotate);
  return (
    <Marker
      position={[x, y]}
      icon={icon}
      eventHandlers={{
        click: () => {
          if (prevMarkerRef && prevMarkerRef.current === x) {
            return;
          } else {
            console.log(id);
            prevMarkerRef.current = x;
            setImageSrc(null);
            // Здесь будет логика GET запроса на получение изображения, но пока timeout)))
            setTimeout(() => setImageSrc(images[id]), 2000);
          }
        },
      }}
    >
      {children}
    </Marker>
  );
};

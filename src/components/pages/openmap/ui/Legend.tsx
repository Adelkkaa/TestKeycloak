import React, { FC } from "react";

import classes from "./Legend.module.css";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type LegendItem = {
  src: StaticImageData | null;
  description: string;
  isBackground: boolean;
};

import directionIcon from "../icon/rotateMarker.svg";
import staticIcon from "../icon/marker.svg";

const legendData: LegendItem[] = [
  {
    src: directionIcon,
    description: "Направление съемки камеры",
    isBackground: true,
  },
  {
    src: staticIcon,
    description: "Камеры без направления",
    isBackground: false,
  },
  {
    src: null,
    description: "Кол-во стационарных комплексов",
    isBackground: true,
  },
];

const LegendItem: FC<LegendItem> = ({ src, description, isBackground }) => {
  return (
    <div className={classes.legendItem}>
      {src ? (
        isBackground ? (
          <div className={classes.imageWithBg}>
            <Image src={src} width={10} height={7.5} alt="imageLogo" />
          </div>
        ) : (
          <Image src={src} width={30} height={30} alt="imageLogo" />
        )
      ) : (
        <p
          className={clsx(classes.number, {
            [classes.imageWithBg]: isBackground,
          })}
        >
          20
        </p>
      )}
      <p className={classes.legendDescription}>{description}</p>
    </div>
  );
};

export const Legend = () => {
  return (
    <div className={classes.legend}>
      {legendData.map((item) => (
        <LegendItem
          key={item.description}
          src={item.src}
          description={item.description}
          isBackground={item.isBackground}
        />
      ))}
    </div>
  );
};

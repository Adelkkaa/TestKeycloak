import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import { images } from "@/components/pages/openmap/mockData";
import { Button } from "../../Button";

const ExitSvg = dynamic(() => import("../icons/ExitSvg"));
const AcceptSvg = dynamic(() => import("../icons/AcceptSvg"));
const PlayIconSvg = dynamic(() => import("../icons/PlayIcon"));

import classes from "./Portal.module.css";
import { useRouter } from "next/router";

type IAccessibleModalWindow = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  x: number;
  y: number;
};

const Portal = (props: IAccessibleModalWindow): JSX.Element => {
  const { setIsModalOpen, id, x, y } = props;
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const onButtonClick = () => {
    // Логика get запроса на запуск потока
    router.push(`/openmap/${id}`);
  };

  return createPortal(
    <>
      <div
        onClick={() => setIsModalOpen(false)}
        className="KIPARISS_UI_accessibleModal"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="KIPARISS_UI_accessibleModal__content"
        >
          <div className="KIPARISS_UI_accessibleModal__contentWrapper">
            <div className="KIPARISS_UI_accessibleModal__header">
              <h5 className="KIPARISS_UI_accessibleModal__headerTitle">
                Камера № {id}
              </h5>
            </div>
            <button
              className="KIPARISS_UI_accessibleModal__btnExit"
              onClick={() => setIsModalOpen(false)}
            >
              <ExitSvg />
            </button>
            <div className="KIPARISS_UI_accessibleModal__info">
              <div className="KIPARISS_UI_accessibleModal__textWrapper">
                <p className="KIPARISS_UI_accessibleModal__text">
                  Координаты:{" "}
                </p>
                <p className="KIPARISS_UI_accessibleModal__text">
                  {x},{y}
                </p>
              </div>
              <Image
                className="KIPARISS_UI_accessibleModal__image"
                src={images[id]}
                alt="cake"
                width={478}
                height={269}
              />
              {/* Тут поправить */}
              <Button onClick={onButtonClick} className={classes.button}>
                Смотреть
                <PlayIconSvg />
              </Button>
              <div className="KIPARISS_UI_accessibleModal__textWrapper">
                <p className="KIPARISS_UI_accessibleModal__text">
                  Расположение:{" "}
                </p>
                <p className="KIPARISS_UI_accessibleModal__text">
                  {x},{y}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Portal;

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import { images } from "@/components/pages/openmap/mockData";

const ExitSvg = dynamic(() => import("../icons/ExitSvg"));
const AcceptSvg = dynamic(() => import("../icons/AcceptSvg"));

type IAccessibleModalWindow = {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  x: number;
  y: number;
};

const Portal = (props: IAccessibleModalWindow): JSX.Element => {
  const { setIsModalOpen, id, x, y } = props;

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

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
                Просмотр и редактирование информации о доступных товарах
              </h5>
            </div>
            <button
              className="KIPARISS_UI_accessibleModal__btnExit"
              onClick={() => setIsModalOpen(false)}
            >
              <ExitSvg />
            </button>
          </div>
        </div>
        <Image src={images[id]} alt="cake" width={100} height={100} />
      </div>
    </>,
    document.body
  );
};

export default Portal;

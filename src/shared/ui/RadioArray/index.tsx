import React, { FC } from "react";

import classes from "./RadioArray.module.css";
import { RadioElement } from "../Radio";
import { TRadioArray } from "@/components/pages/admin/mockData";

type TRadioArrayProps = {
  array: TRadioArray[];
};

export const RadioArray: FC<TRadioArrayProps> = ({ array }) => {
  return (
    <div className={classes.filters__radio}>
      {array.map((item) => (
        <RadioElement
          key={item.name + item.value}
          name={item.name}
          value={item.value}
          checked={item.checked}
          onChange={item.onChange}
          label={item.label}
        />
      ))}
    </div>
  );
};

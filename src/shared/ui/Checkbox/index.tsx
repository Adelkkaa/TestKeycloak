import React, { FC, useState } from "react";
import classes from "./Checkbox.module.css";
import clsx from "clsx";

type CheckboxProps = {
  withLabel?: boolean;
  id?: string;
  classname?: string;
};
export const Checkbox: FC<CheckboxProps> = ({
  classname,
  id,
  withLabel = false,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.customCheckboxWrapper}>
      <input
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        type="checkbox"
        className={clsx(classes.customCheckbox, classname)}
        id={id || "checkbox"}
        name={id || "checkbox"}
      />
      <label htmlFor={id || "checkbox"}>{withLabel && "Запомнить меня"}</label>
    </div>
  );
};

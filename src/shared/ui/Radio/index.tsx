import React, { FC } from "react";
import classes from "./Radio.module.css";

type RadioInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Создал
export const RadioElement: FC<RadioInputProps> = ({ label, ...otherProps }) => {
  return (
    <label className={classes.radioLabel}>
      <input type="radio" className={classes.radioInput} {...otherProps} />
      <span>{label}</span>
    </label>
  );
};

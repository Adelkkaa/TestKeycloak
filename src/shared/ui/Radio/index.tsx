import React, { FC, ReactHTMLElement } from "react";
import classes from "./Radio.module.css";

type RadioInputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

// Создал
export const RadioInput: FC<RadioInputProps> = ({ label, ...otherProps }) => {
  return (
    <label className={classes.radioLabel}>
      <input type="radio" className={classes.radioInput} {...otherProps} />
      <span>{label}</span>
    </label>
  );
};

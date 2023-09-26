import React, { useState } from "react";
import clsx from "clsx";

import classes from "./Input.module.css";

type InputProps = {
  className?: string;
  label?: string;
  error: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: React.FC<InputProps> = ({
  placeholder,
  className,
  children,
  label,
  error,
  ...otherProps
}) => {
  const [value, setValue] = useState("");
  return (
    <div>
      {label && <label className={classes.inputLabel}>{label}</label>}

      <div className={classes.inputWrapper}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={clsx(classes.input, { [classes.inputActive]: !!value }, [
            className,
          ])}
          {...otherProps}
        />
        <div className={classes.iconWrapper}>{children}</div>
      </div>
      {error && <p className={classes.inputError}>{error}</p>}
    </div>
  );
};

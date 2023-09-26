import clsx from "clsx";
import React from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  children,
  ...otherProps
}) => {
  return (
    <button
      className={clsx(classes.button, { [classes.buttonDisabled]: disabled }, [
        className,
      ])}
      disabled={disabled}
      {...otherProps}
    >
      {children}
    </button>
  );
};

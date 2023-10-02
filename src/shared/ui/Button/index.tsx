import clsx from "clsx";
import React, { ReactNode } from "react";

import classes from "./Button.module.css";

type ButtonProps = {
  className?: string;
  icon?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({
  className,
  disabled,
  icon,
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
      {icon && icon}
      {children}
    </button>
  );
};

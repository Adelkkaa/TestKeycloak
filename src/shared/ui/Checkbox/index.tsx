import React, { useState } from "react";
import classes from "./Checkbox.module.css";

export const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className={classes.customCheckboxWrapper}>
      <input
        checked={checked}
        onChange={() => setChecked((prev) => !prev)}
        type="checkbox"
        className={classes.customCheckbox}
        id="checkbox"
        name="checkbox"
      />
      <label htmlFor="checkbox">Запомнить меня</label>
    </div>
  );
};

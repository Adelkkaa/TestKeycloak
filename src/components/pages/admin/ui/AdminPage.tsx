import React from "react";

import { RightMenu } from "./RightMenu";

import classes from "./AdminPage.module.css";

export const AdminPage = () => {
  return (
    <div className={classes.adminPage}>
      <div className={classes.adminPageTable}>Привет</div>
      <RightMenu />
    </div>
  );
};

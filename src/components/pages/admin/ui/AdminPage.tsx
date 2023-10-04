import React from "react";

import { RightMenu } from "./RightMenu";

import classes from "./AdminPage.module.css";
import { Table } from "./TableComponent";

export const AdminPage = () => {
  return (
    <div className={classes.adminPage}>
      <div className={classes.adminPageTable}>
        <Table />
      </div>
      <RightMenu />
    </div>
  );
};

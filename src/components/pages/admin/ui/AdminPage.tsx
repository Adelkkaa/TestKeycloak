import React, { useMemo, useState } from "react";

import { RightMenu } from "./RightMenu";

import classes from "./AdminPage.module.css";
import { Table } from "./TableComponent";
import {
  ConvertedMockData,
  Employee,
  Managament,
  MockData,
  mockData,
} from "../mockData";
import { MultiValue, SingleValue } from "react-select";

export type SelectOption = {
  label: string;
  value: boolean;
};
export type SelectedFilters = {
  managament?: Managament[] | null;
  employee?: Employee[] | null;
  registration?: SelectOption | null;
  email?: SelectOption | null;
};

const preferConvertMockData: () => ConvertedMockData = () => {
  return {
    List: mockData,
    ManagamentList: [
      ...new Map(
        mockData.map((item) => [item.managament.managamentId, item])
      ).values(),
    ].map((item) => item.managament),
    EmployeeList: mockData.map((item) => item.employee),
  };
};

export const convertedMockData = preferConvertMockData();

export const AdminPage = () => {
  const [selectableFilters, setSelectableFilters] = useState<SelectedFilters>(
    {}
  );
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const changeSelectableFilters = (
    objKey: "managament" | "employee" | "registration" | "email",
    arg:
      | MultiValue<Managament>
      | MultiValue<Employee>
      | SingleValue<SelectOption>
  ) => {
    setSelectableFilters((prev) => ({ ...prev, [objKey]: arg }));
  };

  const applyFilterFunction = () => {
    setSelectedFilters(selectableFilters);
  };

  const clearFilterFunction = () => {
    setSelectableFilters({});
    setSelectedFilters({});
  };
  return (
    <div className={classes.adminPage}>
      <div className={classes.adminPageTable}>
        <Table selectedFilters={selectedFilters} />
      </div>
      <RightMenu
        selectableFilters={selectableFilters}
        changeSelectableFilters={changeSelectableFilters}
        onApplyFilterFunction={applyFilterFunction}
        onClearFilterFunction={clearFilterFunction}
      />
    </div>
  );
};

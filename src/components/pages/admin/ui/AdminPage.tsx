import React, { useCallback, useEffect, useMemo, useState } from "react";

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
import { useRouter } from "next/router";

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
  const router = useRouter();

  const formData = {
    email:
      router.query.email !== undefined
        ? router.query.email !== "false"
          ? { label: "Есть", value: true }
          : { label: "Нет", value: false }
        : {},
    registration:
      router.query.registration !== undefined
        ? router.query.registration !== "false"
          ? { label: "Зарегистрирован", value: true }
          : { label: "Не зарегистрирован", value: false }
        : {},
    managament:
      router.query.managament !== undefined
        ? convertedMockData.ManagamentList.filter(
            (item) =>
              typeof router.query.managament === "string" &&
              router.query.managament
                .split("_")
                .some((v) => v === String(item.managamentId))
          )
        : {},
    employee:
      router.query.employee !== undefined
        ? convertedMockData.EmployeeList.filter(
            (item) =>
              typeof router.query.employee === "string" &&
              router.query.employee
                .split("_")
                .some((v) => v === String(item.employeeId))
          )
        : {},
  };
  const [selectableFilters, setSelectableFilters] = useState<SelectedFilters>(
    formData as SelectedFilters
  );
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>(
    formData as SelectedFilters
  );

  // useEffect(() => {
  //   const queryParams = router.query;

  //   const email =
  //     queryParams.email !== undefined
  //       ? queryParams.email !== "false"
  //         ? { label: "Есть", value: true }
  //         : { label: "Нет", value: false }
  //       : {};
  //   const registration =
  //     queryParams.registration !== undefined
  //       ? queryParams.registration !== "false"
  //         ? { label: "Зарегистрирован", value: true }
  //         : { label: "Не зарегистрирован", value: false }
  //       : {};
  //   const managament =
  //     queryParams.managament !== undefined
  //       ? convertedMockData.ManagamentList.filter(
  //           (item) =>
  //             typeof queryParams.managament === "string" &&
  //             queryParams.managament
  //               .split("_")
  //               .some((v) => v === String(item.managamentId))
  //         )
  //       : {};

  //   const employee =
  //     queryParams.employee !== undefined
  //       ? convertedMockData.EmployeeList.filter(
  //           (item) =>
  //             typeof queryParams.employee === "string" &&
  //             queryParams.employee
  //               .split("_")
  //               .some((v) => v === String(item.employeeId))
  //         )
  //       : {};

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router]);

  const changeSelectableFilters = (
    objKey: "managament" | "employee" | "registration" | "email",
    arg:
      | SingleValue<SelectOption>
      | MultiValue<Managament>
      | MultiValue<Employee>
  ) => {
    setSelectableFilters((prev) => ({ ...prev, [objKey]: arg }));
  };

  const onChangeRouterQuery = (
    queryParams: Record<string, string | boolean>
  ) => {
    router.push(
      {
        query: {
          ...router.query,
          ...queryParams,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const applyFilterFunction = () => {
    setSelectedFilters(selectableFilters);
    const queryParams: Record<string, string | boolean> = {};
    if (selectableFilters.email) {
      queryParams["email"] = String(selectableFilters.email?.value) || "";
    }
    if (selectableFilters.email) {
      queryParams["registration"] =
        String(selectableFilters.registration?.value) || "";
    }

    if (
      selectableFilters &&
      selectableFilters.managament &&
      selectableFilters.managament.length > 0
    ) {
      const managament = selectableFilters.managament
        .map((item) => item.managamentId)
        .join("_");
      queryParams["managament"] = managament || "";
    }
    if (
      selectableFilters &&
      selectableFilters.employee &&
      selectableFilters.employee.length > 0
    ) {
      const employee = selectableFilters.employee
        .map((item) => item.employeeId)
        .join("_");
      queryParams["employee"] = employee || "";
    }
    onChangeRouterQuery(queryParams);
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

import React, { useCallback, useEffect, useMemo, useState } from "react";

import { RightMenu } from "./RightMenu";

import classes from "./AdminPage.module.css";
import { Table } from "./TableComponent";
import { ConvertedMockData, Employee, Managament, mockData } from "../mockData";
import { MultiValue, SingleValue } from "react-select";
import { useRouter } from "next/router";
import { objectEmptyFilter } from "@/utils/objectFilter";

export type SelectOption = {
  label: string;
  value: string;
};
export type SelectableFilters = {
  managament?: MultiValue<Managament>;
  employee?: MultiValue<Employee>;
  registration?: SingleValue<SelectOption>;
  email?: SingleValue<SelectOption>;
};

export type SelectedFilters = {
  managament?: number[];
  employee?: number[];
  registration?: string;
  email?: string;
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
  console.log(router.query);

  const [selectableFilters, setSelectableFilters] = useState<SelectableFilters>(
    {}
  );
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  // useEffect(() => {
  //   const queryParams = router.query;

  //   const email =
  //     queryParams.email !== undefined
  //       ? queryParams.email !== "false"
  //         ? { label: "Есть", value: true }
  //         : { label: "Нет", value: false }
  //       : undefined;
  //   const registration =
  //     queryParams.registration !== undefined
  //       ? queryParams.registration !== "false"
  //         ? { label: "Зарегистрирован", value: true }
  //         : { label: "Не зарегистрирован", value: false }
  //       : undefined;
  //   const managament =
  //     queryParams.managament !== undefined
  //       ? convertedMockData.ManagamentList.filter(
  //           (item) =>
  //             typeof queryParams.managament === "string" &&
  //             queryParams.managament
  //               .split("_")
  //               .some((v) => v === String(item.managamentId))
  //         )
  //       : undefined;

  //   const employee =
  //     queryParams.employee !== undefined
  //       ? convertedMockData.EmployeeList.filter(
  //           (item) =>
  //             typeof queryParams.employee === "string" &&
  //             queryParams.employee
  //               .split("_")
  //               .some((v) => v === String(item.employeeId))
  //         )
  //       : undefined;

  //   // setSelectableFilters({ email, registration, employee, managament });
  //   // setSelectedFilters({ email, registration, employee, managament });

  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [router]);

  const changeSelectableFilters = (
    objKey: keyof SelectableFilters,
    arg:
      | SingleValue<SelectOption>
      | MultiValue<Managament>
      | MultiValue<Employee>
  ) => {
    setSelectableFilters((prev) => ({ ...prev, [objKey]: arg }));
  };

  const onChangeRouterQuery = (queryParams: SelectedFilters) => {
    const params = objectEmptyFilter(queryParams, (value) => !!value);
    router.push(
      {
        query: {
          ...router.query,
          ...params,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  const applyFilterFunction = () => {
    const formData = {
      managament: selectableFilters.managament?.map(
        (item) => item.managamentId
      ),
      employee: selectableFilters.employee?.map((item) => item.employeeId),
      registration: selectableFilters.registration?.value,
      email: selectableFilters.email?.value,
    };
    setSelectedFilters(formData);
    onChangeRouterQuery(formData);

    // const queryParams: Record<string, string | number[]> = {};
    // if (selectableFilters.email) {
    //   queryParams["email"] = String(selectableFilters.email?.value) || "";
    // }
    // if (selectableFilters.registration) {
    //   queryParams["registration"] =
    //     String(selectableFilters.registration?.value) || "";
    // }

    // if (
    //   selectableFilters &&
    //   selectableFilters.managament &&
    //   selectableFilters.managament.length > 0
    // ) {
    //   queryParams["managament"] = selectableFilters.managament || "";
    // }
    // if (
    //   selectableFilters &&
    //   selectableFilters.employee &&
    //   selectableFilters.employee.length > 0
    // ) {
    //   queryParams["employee"] = selectableFilters.employee || "";
    // }
  };

  const clearFilterFunction = () => {
    setSelectableFilters({});
    setSelectedFilters({});
    router.push({});
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

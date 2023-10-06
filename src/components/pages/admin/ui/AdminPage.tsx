import React, { useCallback, useEffect, useMemo, useState } from "react";

import { RightMenu } from "./RightMenu";

import classes from "./AdminPage.module.css";
import { Table } from "./TableComponent";
import {
  TConvertedMockData,
  TEmployee,
  TManagament,
  TMockData,
  mockData,
} from "../mockData";
import { MultiValue, SingleValue } from "react-select";
import { useRouter } from "next/router";
import { objectEmptyFilter } from "@/utils/objectFilter";
import { resolve } from "path";
import { preferMockData } from "./preferMockData";

export type SelectOption = {
  label: string;
  value: string;
};
export type SelectableFilters = {
  managament?: MultiValue<TManagament>;
  employee?: MultiValue<TEmployee>;
  registration?: SingleValue<SelectOption>;
  email?: string;
};

export type SelectedFilters = {
  managament?: number[];
  employee?: number[];
  registration?: string;
  email?: string;
};

export const AdminPage = () => {
  const router = useRouter();

  console.log(router.query);
  const [convertedMockData, setConvertedMockData] =
    useState<TConvertedMockData>();
  const [selectableFilters, setSelectableFilters] = useState<SelectableFilters>(
    {}
  );
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const formDataSelected = {
      managament:
        Array.isArray(router.query.managament) &&
        router.query.managament.length > 0
          ? Array.isArray(router.query.managament)
            ? router.query.managament.map((item) => Number(item))
            : [Number(router.query.managament)]
          : undefined,
      employee:
        Array.isArray(router.query.employee) && router.query.employee.length > 0
          ? Array.isArray(router.query.employee)
            ? router.query.employee.map((item) => Number(item))
            : [Number(router.query.employee)]
          : undefined,
      registration:
        typeof router.query.registration === "string"
          ? router.query.registration
          : undefined,
      email:
        typeof router.query.email === "string" ? router.query.email : undefined,
    };
    setSelectedFilters(formDataSelected);
    setSelectableFilters({ email: formDataSelected.email });
  }, [router.query]);

  useEffect(() => {
    new Promise((res, rej) => {
      setIsLoading(true);
      setTimeout(() => res(mockData), 5000);
    }).then((mock) => {
      const data = preferMockData(mock as TMockData[]);
      setConvertedMockData(data);
      setIsLoading(false);
    });
  }, []);

  const changeSelectableFilters = (
    objKey: keyof SelectableFilters,
    arg:
      | SingleValue<SelectOption>
      | MultiValue<TManagament>
      | MultiValue<TEmployee>
      | string
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
      email: selectableFilters.email,
    };
    // setSelectedFilters(formData);
    onChangeRouterQuery(formData);
  };

  const clearFilterFunction = () => {
    setSelectableFilters({});
    setSelectedFilters({});
    router.push({});
  };
  return (
    <div className={classes.adminPage}>
      <div className={classes.adminPageTable}>
        <Table
          isLoading={isLoading}
          selectedFilters={selectedFilters}
          convertedMockData={convertedMockData}
        />
      </div>
      <RightMenu
        selectableFilters={selectableFilters}
        changeSelectableFilters={changeSelectableFilters}
        onApplyFilterFunction={applyFilterFunction}
        onClearFilterFunction={clearFilterFunction}
        convertedMockData={convertedMockData}
      />
    </div>
  );
};

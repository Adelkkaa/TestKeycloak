import React, { useCallback, useEffect, useMemo, useState } from 'react';

import { RightMenu } from './RightMenu';

import classes from './AdminPage.module.css';
import { Table } from './TableComponent';
import { TPreferMockData, TEmployee, TManagament, TMockData, mockData } from '../mockData';
import { MultiValue, SingleValue } from 'react-select';
import { useRouter } from 'next/router';
import { objectEmptyFilter } from '@/utils/objectFilter';
import { resolve } from 'path';
import { preferMockData } from './preferMockData';
import Loader from '@/shared/ui/Loader';

export type SelectOption = {
  label: string;
  value: string;
};
export type TSelectableFilters = {
  managament?: MultiValue<TManagament>;
  employee?: MultiValue<TEmployee>;
  registration?: string;
  email?: string;
};

export type TSelectedFilters = {
  managament?: number[];
  employee?: number[];
  registration?: string;
  email?: string;
};

export const AdminPage = () => {
  const router = useRouter();

  const [convertedMockData, setConvertedMockData] = useState<TPreferMockData>();
  const [selectableFilters, setSelectableFilters] = useState<TSelectableFilters>({});
  const [selectedFilters, setSelectedFilters] = useState<TSelectedFilters>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (router.isReady) {
      const { managament, employee, registration, email } = router.query;

      const formDataSelected = {
        managament:
          Array.isArray(managament) && managament.length > 0
            ? managament.map((item) => Number(item))
            : typeof managament === 'string'
            ? [Number(managament)]
            : undefined,
        employee:
          Array.isArray(employee) && employee.length > 0
            ? employee.map((item) => Number(item))
            : typeof employee === 'string'
            ? [Number(employee)]
            : undefined,
        registration: typeof registration === 'string' ? registration : undefined,
        email: typeof email === 'string' ? email : undefined,
      };
      setSelectedFilters(formDataSelected);

      setSelectableFilters((prev) => ({
        ...prev,
        email: formDataSelected.email,
        registration: formDataSelected.registration,
      }));
    }
  }, [router.isReady, router.query]);

  useEffect(() => {
    if (router.isReady) {
      new Promise((res, rej) => {
        setIsLoading(true);
        setTimeout(() => res(mockData), 1000);
      }).then((mock) => {
        const data = preferMockData(mock as TMockData[]);
        setConvertedMockData(data);

        const { managament, employee } = router.query;
        setSelectableFilters((prev) => ({
          ...prev,
          managament:
            typeof managament !== undefined
              ? data.ManagamentList.filter((item) =>
                  Array.isArray(managament)
                    ? managament.some((v) => v === String(item.managamentId))
                    : item.managamentId === Number(managament),
                )
              : undefined,
          employee:
            typeof employee !== undefined
              ? data.EmployeeList.filter((item) =>
                  Array.isArray(employee)
                    ? employee.some((v) => v === String(item.employeeId))
                    : item.employeeId === Number(employee),
                )
              : undefined,
        }));
        setIsLoading(false);
      });
    }
  }, [router.isReady, router.query]);

  const changeSelectableFilters = (
    objKey: keyof TSelectableFilters,
    arg: SingleValue<SelectOption> | MultiValue<TManagament> | MultiValue<TEmployee> | string,
  ) => {
    setSelectableFilters((prev) => ({ ...prev, [objKey]: arg }));
  };

  const onChangeRouterQuery = (queryParams: TSelectedFilters) => {
    const params = objectEmptyFilter(queryParams, (value) => !!value);
    router.push(
      {
        query: {
          ...router.query,
          ...params,
        },
      },
      undefined,
      { shallow: true },
    );
  };

  const applyFilterFunction = () => {
    const formData = {
      managament: selectableFilters.managament?.map((item) => item.managamentId),
      employee: selectableFilters.employee?.map((item) => item.employeeId),
      registration: selectableFilters.registration,
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className={classes.adminPageTable}>
            <Table selectedFilters={selectedFilters} preferMockData={convertedMockData} />
          </div>
          <RightMenu
            selectableFilters={selectableFilters}
            changeSelectableFilters={changeSelectableFilters}
            onApplyFilterFunction={applyFilterFunction}
            onClearFilterFunction={clearFilterFunction}
            preferMockData={convertedMockData}
          />
        </>
      )}
    </div>
  );
};

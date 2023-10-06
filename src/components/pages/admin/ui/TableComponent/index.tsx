import clsx from "clsx";
import React, { FC, PropsWithChildren, TdHTMLAttributes } from "react";

import classes from "./TableComponent.module.css";
import { Checkbox } from "@/shared/ui/Checkbox";
import { SelectedFilters } from "../AdminPage";
import { TConvertedMockData } from "../../mockData";
import Loader from "@/shared/ui/Loader";

type AdminCellProps = TdHTMLAttributes<HTMLTableCellElement>;
const AdminCell = (props: PropsWithChildren<AdminCellProps>) => {
  const { children, ...otherProps } = props;
  return (
    <td className="AISPP_UI_table_td" {...otherProps}>
      {children}
    </td>
  );
};

type TableProps = {
  selectedFilters: SelectedFilters;
  convertedMockData?: TConvertedMockData;
  isLoading: boolean;
};

export const Table: FC<TableProps> = ({
  selectedFilters,
  convertedMockData,
  isLoading,
}) => {
  const filterTableData = convertedMockData?.List.filter((v) =>
    Object.keys(selectedFilters).length
      ? (selectedFilters.employee && selectedFilters.employee.length > 0
          ? selectedFilters?.employee?.some(
              (item) => item === v.employee.employeeId
            )
          : true) &&
        (selectedFilters.managament && selectedFilters.managament.length
          ? selectedFilters.managament.some(
              (item) => item === v.managament.managamentId
            )
          : true) &&
        (selectedFilters.registration &&
        Object.keys(selectedFilters.registration).length
          ? selectedFilters.registration === String(v.isRegistr)
          : true) &&
        (selectedFilters.email && Object.keys(selectedFilters.email).length
          ? (selectedFilters.email == "true" && !!v.email) ||
            (selectedFilters.email == "false" && !!!v.email) ||
            selectedFilters.email === "all"
          : true)
      : true
  );
  return (
    <table className={clsx("AISPP_UI_table", classes.adminTableBlock)}>
      <thead className="AISPP_UI_table_thead">
        <tr className="AISPP_UI_table_tr">
          <AdminCell>ID</AdminCell>
          <AdminCell>ФИО</AdminCell>
          <AdminCell>Должность</AdminCell>
          <AdminCell>Управление</AdminCell>
          <AdminCell>Подразделение</AdminCell>
          <AdminCell>Email</AdminCell>
          <AdminCell>Отправить письмо</AdminCell>
        </tr>
      </thead>
      <tbody
        className={clsx("AISPP_UI_table_tbody", classes.adminTableBlock_body)}
      >
        {!filterTableData?.length ? (
          isLoading ? (
            <tr className="AISPP_UI_emptyTable_tr">
              <AdminCell colSpan={10}>
                <Loader />
              </AdminCell>
            </tr>
          ) : (
            <tr className="AISPP_UI_emptyTable_tr">
              <AdminCell colSpan={10}>Ничего не найдено...</AdminCell>
            </tr>
          )
        ) : (
          filterTableData.map((row) => (
            <tr className="AISPP_UI_table_tr" key={row.id}>
              <AdminCell title="Описание пользователя">{row.id}</AdminCell>
              <AdminCell>{`${row.employee.employeeSurname} ${row.employee.employeeName} ${row.employee.employeePatronymic}`}</AdminCell>
              <AdminCell>{row.title}</AdminCell>
              <AdminCell>{row.managament.managamentName}</AdminCell>
              <AdminCell>{row.subdivision}</AdminCell>
              <AdminCell>{row.email}</AdminCell>
              <AdminCell>
                <Checkbox classname={classes.checkbox} id={String(row.id)} />
              </AdminCell>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

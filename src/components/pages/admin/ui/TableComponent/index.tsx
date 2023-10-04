import clsx from "clsx";
import Link from "next/link";
import React, { PropsWithChildren, TdHTMLAttributes, useRef } from "react";

import classes from "./TableComponent.module.css";
import { Checkbox } from "@/shared/ui/Checkbox";

const mockData = [
  {
    id: 1,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 2,
    name: "Горбунов",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-2",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 3,
    name: "Горелов",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 4,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 5,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 6,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 7,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 8,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 9,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 10,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 11,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 12,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 13,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 14,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 15,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 16,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 17,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 18,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 19,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 20,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
  {
    id: 21,
    name: "Шарипов Адель Сиринович",
    title: "Ведущий специалист",
    upr: "ИТС",
    podr: "Подразделение-1",
    email: "snakeadel00@gmail.com",
  },
];

type AdminCellProps = TdHTMLAttributes<HTMLTableCellElement>;
const AdminCell = (props: PropsWithChildren<AdminCellProps>) => {
  const { children, ...otherProps } = props;
  return (
    <td className="AISPP_UI_table_td" {...otherProps}>
      {children}
    </td>
  );
};

export const Table = () => {
  //   const tableRef = useRef<HTMLTableElement | null>(null);

  //   const saveTableScrollTop = (scrollTop: number) => {
  //     return;
  //   };
  return (
    <table
      className={clsx("AISPP_UI_table", classes.adminTableBlock)}
      //   onScroll={(event) => saveTableScrollTop(event.currentTarget.scrollTop)}
      //   ref={tableRef}
    >
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
        {!mockData.length ? (
          <tr className="AISPP_UI_emptyTable_tr">
            <AdminCell colSpan={10}>Ничего не найдено...</AdminCell>
          </tr>
        ) : (
          mockData
            .filter((v) => true)
            .map((row) => (
              <tr className="AISPP_UI_table_tr" key={row.id}>
                <AdminCell title="Описание пользователя">{row.id}</AdminCell>
                <AdminCell>{row.name}</AdminCell>
                <AdminCell>{row.title}</AdminCell>
                <AdminCell>{row.upr}</AdminCell>
                <AdminCell>{row.podr}</AdminCell>
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

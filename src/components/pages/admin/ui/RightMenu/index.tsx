import React, { FC, useState } from "react";

import { Button } from "@/shared/ui/Button";
import { ResetIcon } from "../../icons/ResetIcon";
import { ApplyIcon } from "../../icons/ApplyIcon";

import classes from "./RightMenu.module.css";
import clsx from "clsx";
import Select from "react-select";
import {
  TPreferMockData,
  TEmployee,
  TManagament,
  TRadioArray,
} from "../../mockData";
import { TChangeSelectableFilters, TSelectableFilters } from "../AdminPage";
import { RadioElement } from "@/shared/ui/Radio";
import { RadioArray } from "@/shared/ui/RadioArray";

const selectClassNames = {
  control: () => "AISPP_selectBlock__input",
  menu: () => "AISPP_selectBlock__options",
  menuList: () => "AISPP_selectBlock__optionsList",
  singleValue: () => "AISPP_selectBlock__singleValue",
  valueContainer: () => "AISPP_selectBlock__valueContainer",
  placeholder: () => "AISPP_selectBlock__placeholder",
  input: () => "AISPP_selectBlock__input_field",
  option: ({
    isSelected,
    isFocused,
  }: {
    isSelected: boolean;
    isFocused: boolean;
  }) =>
    clsx(
      "AISPP_selectBlock__optionsItem",
      isSelected && "AISPP_selectBlock__optionsItemActive",
      isFocused && "AISPP_selectBlock__optionsItemFocus"
    ),
};

type RightMenuProps = {
  selectableFilters: TSelectableFilters;
  preferMockData: TPreferMockData | undefined;
  changeSelectableFilters: TChangeSelectableFilters;
  onApplyFilterFunction: () => void;
  onClearFilterFunction: () => void;
};
export const RightMenu: FC<RightMenuProps> = ({
  selectableFilters,
  changeSelectableFilters,
  onApplyFilterFunction,
  onClearFilterFunction,
  preferMockData,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const registrationData: TRadioArray[] = [
    {
      name: "radioRegistr",
      value: "true",
      checked: selectableFilters.registration == "true" ? true : false,
      onChange: (e) => changeSelectableFilters("registration", e.target.value),
      label: "Да",
    },
    {
      name: "radioRegistr",
      value: "false",
      checked: selectableFilters.registration == "false" ? true : false,
      onChange: (e) => changeSelectableFilters("registration", e.target.value),
      label: "Нет",
    },
    {
      name: "radioRegistr",
      value: "all",
      checked:
        selectableFilters.registration == "all" ||
        selectableFilters.registration == undefined
          ? true
          : false,
      onChange: (e) => changeSelectableFilters("registration", e.target.value),
      label: "Все",
    },
  ];

  const emailData: TRadioArray[] = [
    {
      name: "radio",
      value: "true",
      checked: selectableFilters.email == "true" ? true : false,
      onChange: (e) => changeSelectableFilters("email", e.target.value),
      label: "Да",
    },
    {
      name: "radio",
      value: "false",
      checked: selectableFilters.email == "false" ? true : false,
      onChange: (e) => changeSelectableFilters("email", e.target.value),
      label: "Нет",
    },
    {
      name: "radio",
      value: "all",
      checked:
        selectableFilters.email == "all" ||
        selectableFilters.email === undefined
          ? true
          : false,
      onChange: (e) => changeSelectableFilters("email", e.target.value),
      label: "Все",
    },
  ];

  return (
    <div
      className={clsx(classes.rightMenu, {
        [classes["rightMenu-open"]]: isOpen,
      })}
    >
      <div
        className={clsx(classes.caret, {
          [classes["caret-open"]]: isOpen,
        })}
        onClick={() => setIsOpen((prev) => !prev)}
      ></div>
      {isOpen && (
        <>
          <div className={classes.selectWrapper}>
            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Управление</p>
              <div>
                <Select
                  name="managamentId"
                  id="managamentId"
                  instanceId="managamentId"
                  isMulti
                  placeholder="Выберите управление"
                  options={preferMockData?.ManagamentList}
                  getOptionLabel={(option: TManagament) =>
                    option.managamentName
                  }
                  getOptionValue={(option: TManagament) =>
                    String(option.managamentId)
                  }
                  value={selectableFilters.managament || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("managament", value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Сотрудник</p>
              <div>
                <Select
                  name="employee"
                  id="employee"
                  instanceId="employee"
                  isMulti
                  placeholder="Выберите фамилию сотрудника"
                  options={preferMockData?.EmployeeList}
                  getOptionLabel={(option: TEmployee) =>
                    `${option.employeeSurname} ${option.employeeName} ${option.employeePatronymic}`
                  }
                  getOptionValue={(option: TEmployee) =>
                    String(option.employeeId)
                  }
                  value={selectableFilters.employee || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("employee", value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Регистрация</p>
              <RadioArray array={registrationData} />
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Email</p>
              <RadioArray array={emailData} />
            </div>
          </div>

          <div className={classes.buttonWrapper}>
            <Button
              onClick={onClearFilterFunction}
              icon={
                <div className={classes.resetIconWrapper}>
                  <ResetIcon />
                </div>
              }
              className={classes.resetButton}
            >
              Сбросить
            </Button>
            <Button
              onClick={onApplyFilterFunction}
              icon={
                <div className={classes.applyIconWrapper}>
                  <ApplyIcon />
                </div>
              }
              className={classes.applyButton}
            >
              Применить
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

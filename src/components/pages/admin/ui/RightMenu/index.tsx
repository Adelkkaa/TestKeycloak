import React, { FC, useState } from "react";

import { Button } from "@/shared/ui/Button";
import { ResetIcon } from "../../icons/ResetIcon";
import { ApplyIcon } from "../../icons/ApplyIcon";

import classes from "./RightMenu.module.css";
import clsx from "clsx";
import Select, { MultiValue, SingleValue } from "react-select";
import { Employee, Managament } from "../../mockData";
import {
  SelectOption,
  SelectableFilters,
  SelectedFilters,
  convertedMockData,
} from "../AdminPage";

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
  selectableFilters: SelectableFilters;
  changeSelectableFilters: (
    objKey: keyof SelectableFilters,
    arg:
      | MultiValue<Managament>
      | MultiValue<Employee>
      | SingleValue<SelectOption>
  ) => void;
  onApplyFilterFunction: () => void;
  onClearFilterFunction: () => void;
};
export const RightMenu: FC<RightMenuProps> = ({
  selectableFilters,
  changeSelectableFilters,
  onApplyFilterFunction,
  onClearFilterFunction,
}) => {
  const [isOpen, setIsOpen] = useState(true);

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
                  options={convertedMockData.ManagamentList}
                  getOptionLabel={(option: Managament) => option.managamentName}
                  getOptionValue={(option: Managament) =>
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
                  options={convertedMockData.EmployeeList}
                  getOptionLabel={(option: Employee) =>
                    `${option.employeeSurname} ${option.employeeName} ${option.employeePatronymic}`
                  }
                  getOptionValue={(option: Employee) =>
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
              <div>
                <Select
                  name="registration"
                  id="registration"
                  instanceId="registration"
                  placeholder="Выберите статус регистрации"
                  options={[
                    { value: "true", label: "Зарегистрирован" },
                    { value: "false", label: "Не зарегистрирован" },
                  ]}
                  value={selectableFilters.registration || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("registration", value);
                  }}
                  classNames={selectClassNames}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Email</p>
              <div>
                <Select
                  name="email"
                  id="email"
                  instanceId="email"
                  placeholder="Выберите статус наличие email"
                  options={[
                    { value: "true", label: "Есть" },
                    { value: "false", label: "Нет" },
                  ]}
                  value={selectableFilters.email || []}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    changeSelectableFilters("email", value);
                  }}
                  classNames={selectClassNames}
                />
              </div>
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

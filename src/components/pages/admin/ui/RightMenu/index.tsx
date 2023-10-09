import React, { FC, useState } from "react";

import { Button } from "@/shared/ui/Button";
import { ResetIcon } from "../../icons/ResetIcon";
import { ApplyIcon } from "../../icons/ApplyIcon";

import classes from "./RightMenu.module.css";
import clsx from "clsx";
import Select from "react-select";
import { TPreferMockData, TEmployee, TManagament } from "../../mockData";
import { TChangeSelectableFilters, TSelectableFilters } from "../AdminPage";
import { RadioInput } from "@/shared/ui/Radio";

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
              <div className={classes.filters__radio}>
                <RadioInput
                  name="radioRegistr"
                  value="true"
                  checked={
                    selectableFilters.registration == "true" ? true : false
                  }
                  onChange={(e) =>
                    changeSelectableFilters("registration", e.target.value)
                  }
                  label="Да"
                />
                <RadioInput
                  name="radioRegistr"
                  value="false"
                  checked={
                    selectableFilters.registration == "false" ? true : false
                  }
                  onChange={(e) =>
                    changeSelectableFilters("registration", e.target.value)
                  }
                  label="Нет"
                />
                <RadioInput
                  name="radioRegistr"
                  value="all"
                  checked={
                    selectableFilters.registration == "all" ||
                    selectableFilters.registration == undefined
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    changeSelectableFilters("registration", e.target.value)
                  }
                  label="Все"
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Email</p>
              <div className={classes.filters__radio}>
                <RadioInput
                  name="radio"
                  value="true"
                  checked={selectableFilters.email == "true" ? true : false}
                  onChange={(e) =>
                    changeSelectableFilters("email", e.target.value)
                  }
                  label="Да"
                />
                <RadioInput
                  name="radio"
                  value="false"
                  checked={selectableFilters.email == "false" ? true : false}
                  onChange={(e) =>
                    changeSelectableFilters("email", e.target.value)
                  }
                  label="Нет"
                />
                <RadioInput
                  name="radio"
                  value="all"
                  checked={
                    selectableFilters.email == "all" ||
                    selectableFilters.email === undefined
                      ? true
                      : false
                  }
                  onChange={(e) =>
                    changeSelectableFilters("email", e.target.value)
                  }
                  label="Все"
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

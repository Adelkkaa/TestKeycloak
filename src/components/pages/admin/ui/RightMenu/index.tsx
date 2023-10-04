import React, { useCallback, useState } from "react";

import { Button } from "@/shared/ui/Button";
import { Select as CustomSelect } from "@/widgets/Select";
import { ResetIcon } from "../../icons/ResetIcon";
import { ApplyIcon } from "../../icons/ApplyIcon";
// import { SelectOption } from "@/widgets/Select/ui/Select";

import classes from "./RightMenu.module.css";
import clsx from "clsx";
import Select, { GetOptionLabel, GetOptionValue } from "react-select";

const options = [
  { value: "1", label: "First" },
  { value: "2", label: "Second" },
  { value: "3", label: "Third" },
  { value: "4", label: "Fourth" },
  { value: "5", label: "Fifth" },
];

type SelectOption = {
  label: string;
  value: string;
};

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
export const RightMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [value1, setValue1] = useState<SelectOption[]>([]);
  const [value2, setValue2] = useState<SelectOption[]>();
  const [value3, setValue3] = useState<SelectOption[]>();
  const [value4, setValue4] = useState<SelectOption | undefined>();

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
                  name="upravlenie"
                  id="upravlenie"
                  instanceId={"upravlenie"}
                  isMulti
                  placeholder="Выберите управление"
                  options={options}
                  value={value1}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    if (!value) {
                      return;
                    } else if (Array.isArray(value)) {
                      setValue1(value);
                    }
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
                  hideSelectedOptions={false}
                  name="status"
                  id="status"
                  instanceId={"status"}
                  placeholder="Статус регистрации"
                  options={options}
                  value={value4}
                  noOptionsMessage={() => "Ничего не выбрано"}
                  onChange={(value) => {
                    value && setValue4(value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            {/* <CustomSelect
              multiple
              options={options.map((item) => ({
                    label: item.subtitle,
                    value: item.title,
                  }))}
              value={value1 || []}
              onChange={(o) => setValue1(o)}
              placeholder="Выберите управление"
              label="Управление"
            /> */}
            {/* <CustomSelect
              multiple
              options={options}
              value={value2 || []}
              onChange={(o) => setValue2(o)}
              placeholder="Выберите фамилию сотрудника"
              label="Сотрудник"
            />
            <CustomSelect
              multiple
              options={options}
              value={value3 || []}
              onChange={(o) => setValue3(o)}
              placeholder="Выберите статус регистрации"
              label="Регистрация"
            />
            <CustomSelect
              options={options}
              value={value4}
              onChange={(o) => setValue4(o)}
              placeholder="Выберите статус регистрации"
              label="Регистрация"
            /> */}
          </div>

          <div className={classes.buttonWrapper}>
            <Button
              icon={
                <div className={classes.resetIconWrapper}>
                  <ResetIcon />
                </div>
              }
              className={classes.resetButton}
              disabled
            >
              Сбросить
            </Button>
            <Button
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

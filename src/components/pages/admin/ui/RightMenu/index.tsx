import React, { useState } from "react";

import { Button } from "@/shared/ui/Button";
import { Select } from "@/widgets/Select";
import { ResetIcon } from "../../icons/ResetIcon";
import { ApplyIcon } from "../../icons/ApplyIcon";
import { SelectOption } from "@/widgets/Select/ui/Select";

import classes from "./RightMenu.module.css";
import clsx from "clsx";

const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];
export const RightMenu = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [value1, setValue1] = useState<SelectOption[]>();
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
            <Select
              multiple
              options={options}
              value={value1 || []}
              onChange={(o) => setValue1(o)}
              placeholder="Выберите управление"
              label="Управление"
            />
            <Select
              multiple
              options={options}
              value={value2 || []}
              onChange={(o) => setValue2(o)}
              placeholder="Выберите фамилию сотрудника"
              label="Сотрудник"
            />
            <Select
              multiple
              options={options}
              value={value3 || []}
              onChange={(o) => setValue3(o)}
              placeholder="Выберите статус регистрации"
              label="Регистрация"
            />
            <Select
              options={options}
              value={value4}
              onChange={(o) => setValue4(o)}
              placeholder="Выберите статус регистрации"
              label="Регистрация"
            />
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

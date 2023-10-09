import React, { FC, useState } from 'react';

import { Button } from '@/shared/ui/Button';
import { ResetIcon } from '../../icons/ResetIcon';
import { ApplyIcon } from '../../icons/ApplyIcon';

import classes from './RightMenu.module.css';
import clsx from 'clsx';
import Select from 'react-select';
import { TPreferAdminData, TEmployee, TManagament, TRadioArray } from '../../types';
import { TChangeSelectableFilters, TSelectableFilters } from '../AdminPage';
import { RadioComponent } from '@/shared/ui/RadioComponent';

const selectClassNames = {
  control: () => 'AISPP_selectBlock__input',
  menu: () => 'AISPP_selectBlock__options',
  menuList: () => 'AISPP_selectBlock__optionsList',
  singleValue: () => 'AISPP_selectBlock__singleValue',
  valueContainer: () => 'AISPP_selectBlock__valueContainer',
  placeholder: () => 'AISPP_selectBlock__placeholder',
  input: () => 'AISPP_selectBlock__input_field',
  option: ({ isSelected, isFocused }: { isSelected: boolean; isFocused: boolean }) =>
    clsx(
      'AISPP_selectBlock__optionsItem',
      isSelected && 'AISPP_selectBlock__optionsItemActive',
      isFocused && 'AISPP_selectBlock__optionsItemFocus',
    ),
};

type RightMenuProps = {
  selectableFilters: TSelectableFilters;
  preferedAdminData: TPreferAdminData | undefined;
  changeSelectableFilters: TChangeSelectableFilters;
  onApplyFilterFunction: () => void;
  onClearFilterFunction: () => void;
};
export const RightMenu: FC<RightMenuProps> = ({
  selectableFilters,
  changeSelectableFilters,
  onApplyFilterFunction,
  onClearFilterFunction,
  preferedAdminData,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const registrationData: TRadioArray[] = [
    {
      name: 'registration',
      value: 'true',
      label: 'Да',
    },
    {
      name: 'registration',
      value: 'false',
      label: 'Нет',
    },
    {
      name: 'registration',
      value: 'all',
      label: 'Все',
    },
  ];

  const emailData: TRadioArray[] = [
    {
      name: 'email',
      value: 'true',
      label: 'Да',
    },
    {
      name: 'email',
      value: 'false',
      label: 'Нет',
    },
    {
      name: 'email',
      value: 'all',
      label: 'Все',
    },
  ];

  return (
    <div
      className={clsx(classes.rightMenu, {
        [classes['rightMenu-open']]: isOpen,
      })}
    >
      <div
        className={clsx(classes.caret, {
          [classes['caret-open']]: isOpen,
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
                  options={preferedAdminData?.ManagamentList}
                  getOptionLabel={(option: TManagament) => option.managamentName}
                  getOptionValue={(option: TManagament) => String(option.managamentId)}
                  value={selectableFilters.managament || []}
                  noOptionsMessage={() => 'Ничего не выбрано'}
                  onChange={(value) => {
                    changeSelectableFilters('managament', value);
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
                  options={preferedAdminData?.EmployeeList}
                  getOptionLabel={(option: TEmployee) =>
                    `${option.employeeSurname} ${option.employeeName} ${option.employeePatronymic}`
                  }
                  getOptionValue={(option: TEmployee) => String(option.employeeId)}
                  value={selectableFilters.employee || []}
                  noOptionsMessage={() => 'Ничего не выбрано'}
                  onChange={(value) => {
                    changeSelectableFilters('employee', value);
                  }}
                  classNames={selectClassNames}
                  closeMenuOnSelect={false}
                />
              </div>
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Регистрация</p>
              <RadioComponent
                selectableFilters={selectableFilters}
                array={registrationData}
                changeSelectableFilters={changeSelectableFilters}
              />
            </div>

            <div className={classes.filters__item}>
              <p className={classes.filters__title}>Email</p>
              <RadioComponent
                selectableFilters={selectableFilters}
                array={emailData}
                changeSelectableFilters={changeSelectableFilters}
              />
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

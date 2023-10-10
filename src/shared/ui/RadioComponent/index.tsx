import React, { FC } from 'react';

import classes from './RadioComponent.module.css';
import { RadioElement } from '../Radio';
import { TRadioArray } from '@/components/pages/admin/types';
import {
  TChangeSelectableFilters,
  TSelectableFilters,
} from '@/components/pages/admin/ui/AdminPage';

type TRadioComponentProps = {
  array: TRadioArray[];
  selectableFilters: TSelectableFilters;
  changeSelectableFilters: TChangeSelectableFilters;
};

export const RadioComponent: FC<TRadioComponentProps> = ({
  array,
  selectableFilters,
  changeSelectableFilters,
}) => {
  return (
    <div className={classes.filters__radio}>
      {array.map((item) => (
        <RadioElement
          key={item.name + item.value}
          name={item.name}
          value={item.value}
          checked={
            selectableFilters[item.name] == item.value ||
            (selectableFilters[item.name] == 'all' && selectableFilters[item.name] == undefined)
              ? true
              : false
          }
          onChange={(e) => changeSelectableFilters(item.name, e.target.value)}
          label={item.label}
        />
      ))}
    </div>
  );
};

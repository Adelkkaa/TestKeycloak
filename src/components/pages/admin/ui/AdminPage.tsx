import { Button } from "@/shared/ui/Button";
import React, { useState } from "react";
import { ResetIcon } from "../icons/ResetIcon";

import classes from "./AdminPage.module.css";
import { ApplyIcon } from "../icons/ApplyIcon";
import { Select } from "@/widgets/Select";
import { SelectOption } from "@/widgets/Select/ui/Select";
const options = [
  { label: "First", value: 1 },
  { label: "Second", value: 2 },
  { label: "Third", value: 3 },
  { label: "Fourth", value: 4 },
  { label: "Fifth", value: 5 },
];

export const AdminPage = () => {
  const [value1, setValue1] = useState<SelectOption[]>();
  const [value2, setValue2] = useState<SelectOption | undefined>();
  return (
    <div>
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
        Сбросить
      </Button>
      <Select
        multiple
        options={options}
        value={value1 || []}
        onChange={(o) => setValue1(o)}
      />
      <br />
      <Select options={options} value={value2} onChange={(o) => setValue2(o)} />
    </div>
  );
};

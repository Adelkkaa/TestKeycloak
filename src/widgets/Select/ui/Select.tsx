import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import classes from "./Select.module.css";
import clsx from "clsx";
import useComponentVisible from "./useComponentVisible";

export type SelectOption = {
  label: string;
  value: string | number;
};

type MultipleSelectProps = {
  multiple: true;
  value: SelectOption[];
  onChange: (value: SelectOption[]) => void;
};

type SingleSelectProps = {
  multiple?: false;
  value?: SelectOption;
  onChange: (value: SelectOption | undefined) => void;
};

type SelectProps = {
  options: SelectOption[];
} & (SingleSelectProps | MultipleSelectProps);

export function Select({ multiple, value, onChange, options }: SelectProps) {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const { containerRef, isOpen, setIsOpen } = useComponentVisible(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function clearOptions() {
    multiple ? onChange([]) : onChange(undefined);
  }

  const selectOption = useCallback(
    (option: SelectOption) => {
      if (multiple) {
        if (value.includes(option)) {
          onChange(value.filter((o) => o !== option));
        } else {
          onChange([...value, option]);
        }
      } else {
        if (option !== value) onChange(option);
      }
    },
    [multiple, onChange, value]
  );

  const isOptionSelected = useCallback(
    (option: SelectOption) => {
      return multiple ? value.includes(option) : option === value;
    },
    [multiple, value]
  );

  const filterCallback = useCallback(
    (option: SelectOption) =>
      multiple
        ? !isOptionSelected(option) &&
          option.label.toLowerCase().includes(inputValue.toLowerCase())
        : option.label.toLowerCase().includes(inputValue.toLowerCase()),
    [inputValue, isOptionSelected, multiple]
  );
  const filterOptions = useMemo(
    () => options.filter(filterCallback),
    [options, filterCallback]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.target != inputRef.current && e.target != containerRef.current)
        return;

      switch (e.code) {
        case "Enter":
          multiple ? setIsOpen(true) : setIsOpen(false);
          if (
            isOpen &&
            filterOptions.length > 0 &&
            ((multiple && value.length < options.length) || !multiple)
          ) {
            selectOption(filterOptions[highlightedIndex]);
            setInputValue("");
            setHighlightedIndex(0);
          }
          break;
        case "ArrowUp":
        case "ArrowDown": {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === "ArrowDown" ? 1 : -1);
          if (
            newValue >= 0 &&
            newValue < options.filter(filterCallback).length
          ) {
            setHighlightedIndex(newValue);
          }

          break;
        }
        case "Escape":
          setIsOpen(false);
          break;
      }
    };
    containerRef.current?.addEventListener("keydown", handler);

    if (isOpen && dropdownRef.current && highlightedIndex > -1) {
      const dropdownMenu = dropdownRef.current;
      const dropdownItems = dropdownMenu.querySelectorAll("li");
      if (dropdownItems && dropdownItems[highlightedIndex]) {
        dropdownItems[highlightedIndex].scrollIntoView({
          block: "nearest",
        });
      }
    }
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      containerRef.current?.removeEventListener("keydown", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, selectOption, options, filterCallback]);

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onClick={() => {
        inputRef?.current?.focus();
        setIsOpen((prev) => !prev);
      }}
      className={classes.container}
    >
      <span className={classes.value}>
        {multiple ? (
          value.map((v) => (
            <button key={v.value} className={classes["option-badge"]}>
              {v.label}
              <span
                onClick={(e) => {
                  e.stopPropagation();
                  inputRef?.current?.focus();
                  selectOption(v);
                }}
                className={classes["remove-btn"]}
              >
                &times;
              </span>
            </button>
          ))
        ) : (
          <>
            <input
              ref={inputRef}
              className={classes["option-input"]}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setHighlightedIndex(0);
              }}
            />
            <p className={classes["option-current"]}>
              {!inputValue && value?.label}
            </p>
          </>
        )}
        {multiple && (
          <input
            className={classes["option-input"]}
            ref={inputRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              setHighlightedIndex(0);
            }}
          />
        )}
      </span>

      <button
        onClick={(e) => {
          e.stopPropagation();
          inputRef?.current?.focus();

          clearOptions();
        }}
        className={clsx(classes["clear-btn__hidden"], {
          [classes["clear-btn"]]:
            value && Array.isArray(value)
              ? multiple && value.length > 0
              : value && value?.label,
        })}
      >
        &times;
      </button>
      <div className={classes.caret}></div>
      <ul
        ref={dropdownRef}
        className={`${classes.options} ${isOpen ? classes.show : ""}`}
      >
        {filterOptions.length > 0 ? (
          filterOptions.map((option, index) => (
            <li
              onClick={(e) => {
                e.stopPropagation();
                selectOption(option);
                setInputValue("");
                inputRef?.current?.focus();
                !multiple && setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              key={option.value}
              className={`${classes.option} ${
                isOptionSelected(option) ? classes.selected : ""
              } ${index === highlightedIndex ? classes.highlighted : ""}`}
            >
              {option.label}
            </li>
          ))
        ) : (
          <p>Ничего не найдено...</p>
        )}
      </ul>
    </div>
  );
}

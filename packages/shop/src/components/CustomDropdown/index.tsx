import {
  ChangeEvent,
  LegacyRef,
  forwardRef,
  memo,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.scss";
import classNames from "classnames";
import { DropdownIcon } from "src/icons";
import { useClickOutside } from "src/hooks/useClickOutside";

interface Option {
  id: string;
  name: string;
}

interface SearchableSelectOptionProps {
  options: Option[];
  onChange?: (value: string) => void;
}

interface Props {
  className?: string;
  label?: string;
  required?: boolean;
  errors?: any;
  name: string;
  error?: string;
  options: Option[];
  tabIndex?: number;
  value?: string;
  // events
  onChange?: (v: string, e?: ChangeEvent<Element>) => void;
  onBlur?: (event: any) => void;
}

const CustomDropdown = forwardRef<HTMLDivElement, Props>(
  (
    {
      className,
      label,
      required,
      errors,
      name,
      error,
      options,
      tabIndex,
      value,
      onChange,
      onBlur,
    }: Props,
    fRef
  ) => {
    const errMsg = errors?.[name]?.message || error;

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const found = options?.find((x) => x.id === value);
      setSelectedOption(found || null);
    }, [value]);

    useClickOutside(wrapperRef, () => {
      setIsOpen(false);
    });

    useEffect(() => {
      if (searchTerm) {
        const filtered = options.filter((option) =>
          option?.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredOptions(filtered);
      } else {
        setFilteredOptions(options);
      }
    }, [options, searchTerm]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    };

    const handleOptionClick = (option: Option) => {
      setSelectedOption(option);
      setSearchTerm("");
      setIsOpen(false);
      if (onChange) {
        onChange(option.id);
      }
    };

    const handleClear = () => {
      setSelectedOption(null);
      setSearchTerm("");
      setIsOpen(false);
      if (onChange) {
        onChange("");
      }
    };

    const handleBlur = useCallback((e: any) => {
      !!onBlur && onBlur(e);
    }, []);

    return (
      <div className={classNames(["dropdown", className])} ref={wrapperRef}>
        {!!label && (
          <label>
            {label}
            {required ? <span className="text-danger text-xxs"> *</span> : ``}
          </label>
        )}

        <div
          ref={fRef}
          className={classNames(["dropdown__wrap"])}
          tabIndex={tabIndex}
          onBlur={handleBlur}
        >
          <div
            className={classNames([
              "dropdown__wrap-input",
              selectedOption ? "dropdown__input-selected" : "",
              errMsg ? "error" : "",
            ])}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedOption && (
              <span className="selected__label text-xs">
                {selectedOption.name}
              </span>
            )}
            {!selectedOption && (
              <span className="selected__placeholder text-xs">Dropdown</span>
            )}
            {!selectedOption && (
              <span className="selected__arrow-down">
                <DropdownIcon />
              </span>
            )}
            {selectedOption && (
              <span
                className="selected__clear-button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleClear();
                }}
              >
                <DropdownIcon isClear />
              </span>
            )}
          </div>
          {isOpen && (
            <div className="dropdown__wrap-options">
              <input
                className="dropdown__search-input"
                placeholder="Filter..."
                value={searchTerm}
                onChange={handleInputChange}
              />
              <ul className="dropdown__options-list">
                {filteredOptions.map((option) => (
                  <li
                    key={option.id}
                    className="options-list__option"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option?.name}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        {!!errMsg && <span className="text-xxs text-danger">{errMsg}</span>}
      </div>
    );
  }
);

export default memo(CustomDropdown);

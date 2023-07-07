import { ChangeEvent, memo, useEffect, useRef } from "react";
import "./styles.scss";
import "thanh-pj1-ui-lib";
// debug only
// import "../../../../ui-libs/src/pr1-input";
import classNames from "classnames";
const CustomInputWC: any = "pj1-input";

interface CustomInputProps {
  value?: string;
  onChange?: (v: string, e?: ChangeEvent<Element>) => void;
  onBlur?: (event: any) => void;
  type?: string;
  placeholder?: string;
  errors?: any; // error object depend on yup validator
  error?: string | false;
  name?: string;
  pattern?: string;
  label?: string | React.ReactNode;
  size?: string;
  width?: string;
  align?: "center" | "left" | "right";
  className?: string;
  required?: boolean;
  disabled?: boolean;
  tabIndex?: number;
}

const CustomInput = memo(
  ({
    value,
    onChange,
    errors,
    error,
    name = "",
    pattern,
    label,
    className,
    required,
    disabled = false,
    ...props
  }: CustomInputProps) => {
    const errMsg = errors?.[name]?.message || error;
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      const inputRef = ref.current;
      if (!inputRef) return;
      const handleChange = (e: any) => {
        onChange && onChange(e?.detail?.target?.value?.toString() || "", e);
      };
      inputRef.addEventListener("onchange", handleChange);
      return () => {
        inputRef.removeEventListener("onchange", handleChange);
      };
    }, [onChange]);

    return (
      <div className={classNames(["input-wrapper", className])}>
        {!!label && (
          <label>
            {label}
            {required ? <span className="text-danger text-xxs"> *</span> : ``}
          </label>
        )}
        <CustomInputWC
          ref={ref}
          value={value}
          {...props}
          {...(disabled ? { disabled } : undefined)}
          error={errMsg}
        ></CustomInputWC>
      </div>
    );
  }
);

export default CustomInput;

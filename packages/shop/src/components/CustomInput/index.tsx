import { ChangeEvent, memo, useEffect, useRef } from "react";
import "./styles.scss";
import { helloWorld } from "thanh-pj1-ui-lib";
import classNames from "classnames";
helloWorld();
const CustomInputWC: any = "pj1-input";

interface CustomInputProps {
  value?: string;
  onChange?: (event: string | ChangeEvent<Element>) => void;
  onBlur?: () => void;
  type?: string;
  placeholder?: string;
  errors?: any; // error object depend on yup validator
  name?: string;
  pattern?: string;
  label?: string | React.ReactNode;
  size?: string;
  width?: string;
  align?: "center" | "left" | "right";
  className?: string;
  required?: boolean;
}

const CustomInput = memo(
  ({
    value,
    onChange,
    errors,
    name = "",
    pattern,
    label,
    className,
    required,
    ...props
  }: CustomInputProps) => {
    const errMsg = errors?.[name]?.message;
    const ref = useRef<HTMLInputElement>();

    useEffect(() => {
      const inputRef = ref.current;
      if (!inputRef) return;
      const handleChange = (e: any) => {
        onChange && onChange(e?.detail?.target?.value || "");
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
            {required ? <span className="text-danger"> *</span> : ``}
          </label>
        )}
        <CustomInputWC
          ref={ref}
          value={value}
          {...props}
          error={errMsg}
        ></CustomInputWC>
      </div>
    );
  }
);

export default CustomInput;

import { memo, useEffect, useRef } from "react";
import "./styles.scss";
const CustomInputWC: any = "pj1-input";

interface CustomInputProps {
  value: string;
  onChange: Function;
  errors?: any; // error object depend on yup validator
  name?: string;
  pattern?: string;
  label?: string;
}

const CustomInput = memo(
  ({
    value,
    onChange,
    errors,
    name = "",
    pattern,
    label,
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
      <div className="input-wrapper">
        {!!label && <label>{label}</label>}
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

import classNames from "classnames";
import { MouseEvent, memo } from "react";
import "./styles.scss";

interface CustomButtonProps {
  children?: string | React.ReactNode;
  size?: "default" | "md" | "sm" | "xs";
  variant?: "primary";
  type?: "submit" | "button";
  disabled?: boolean;
  fullWidth?: boolean;
  width?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

const CustomButton = memo(
  ({
    children,
    size = "default",
    variant = "primary",
    disabled = false,
    fullWidth,
    className = "",
    onClick = () => {},
    width,
    type,
  }: CustomButtonProps) => {
    return (
      <div
        className={classNames([
          className,
          "button-wrapper",
          `button-wrapper__${size}`,
          `button-wrapper__${variant}`,
          `button-wrapper__${disabled && "disabled"}`,
          fullWidth ? `button-wrapper__fullWidth` : "",
        ])}
        onClick={!disabled ? onClick : undefined}
        style={{ width }}
      >
        <button disabled={disabled} type={type}>
          {children}
        </button>
      </div>
    );
  }
);

export default CustomButton;

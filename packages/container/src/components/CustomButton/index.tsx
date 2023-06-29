import classNames from "classnames";
import { memo } from "react";
import "./styles.scss";

interface CustomButtonProps {
  children?: string | React.ReactNode;
  size?: "default" | "md" | "xs";
  variant?: "primary";
  type?: "submit" | "button";
  disabled?: boolean;
  onClick?: () => void;
}

const CustomButton = memo(
  ({
    children,
    size = "default",
    variant = "primary",
    disabled = false,
    onClick,
  }: CustomButtonProps) => {
    return (
      <div
        className={classNames([
          "button-wrapper",
          `button-wrapper__${size}`,
          `button-wrapper__${variant}`,
          `button-wrapper__${disabled && "disabled"}`,
        ])}
      >
        <button disabled={disabled} onClick={onClick}>
          {children}
        </button>
      </div>
    );
  }
);

export default CustomButton;

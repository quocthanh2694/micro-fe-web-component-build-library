import { memo } from "react";
import CustomButton from "../../CustomButton";

interface PageItemProps {
  children: string;
  disabled?: boolean;
  onClick: () => void;
}
const PageItem = memo(
  ({ onClick, children, disabled, ...rest }: PageItemProps) => {
    return (
      <CustomButton
        onClick={onClick}
        disabled={disabled}
        size="xs"
        className="pagination__pages-button"
        {...rest}
      >
        {children}
      </CustomButton>
    );
  }
);

export default PageItem;

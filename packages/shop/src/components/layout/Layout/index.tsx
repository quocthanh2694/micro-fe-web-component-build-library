import { memo } from "react";
import "./style.scss";

interface Props {
  children?: React.ReactNode;
}

export const Layout = memo(({ children }: Props) => {
  return <div className="shop-layout">{children}</div>;
});

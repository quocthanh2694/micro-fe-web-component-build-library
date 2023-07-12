import classNames from "classnames";
import { memo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { URI } from "src/constants/constant";
import useCurrentResolvedPath from "src/hooks/useCurrentResolvedPath";
import { AccountSection } from "../AccountSection";
import ShoppingCart from "../ShoppingCart";
import "./styles.scss";

const SHOP_URL =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_CONTAINER_URL!
    : process.env.PROD_CONTAINER_URL!;

interface Props {
  isMobile?: boolean;
}
const DesktopMenu = memo(({ isMobile = false }: Props) => {
  const { generateNavPath } = useCurrentResolvedPath();
  const location = useLocation();

  const getActiveState = useCallback(
    (uri: URI) => {
      return location?.pathname === generateNavPath(uri) ||
        `${location?.pathname}/` === generateNavPath(uri)
        ? "active"
        : undefined;
    },
    [location?.pathname, generateNavPath]
  );

  return (
    <div
      className={classNames({
        menu: true,
        "is-mobile": isMobile,
      })}
    >
      <h4 className="menu__item">
        <Link
          className={getActiveState(URI.shop)}
          to={generateNavPath(URI.shop)}
        >
          Products
        </Link>
      </h4>

      <h4 className="menu__item">
        <Link to={SHOP_URL}>About Us</Link>
      </h4>

      <h4 className="menu__item">
        <Link to={generateNavPath(URI.cart)}>
          <ShoppingCart />
        </Link>
      </h4>

      <AccountSection />
    </div>
  );
});

export default DesktopMenu;

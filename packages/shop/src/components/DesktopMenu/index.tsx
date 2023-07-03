import { memo } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { URI } from "src/constant";
import ShoppingCart from "../ShoppingCart";
import { LogoutIcon, UserIcon } from "src/icons";
import classNames from "classnames";
import { getPageURI } from "src/utils/utils";

const AccountSection = memo(() => {
  return (
    <h4 className="desktop-menu__item">
      <UserIcon />
      <Link to={URI.cart}>
        Thanh Tran
        <LogoutIcon />
      </Link>
    </h4>
  );
});

interface Props {
  isMobile?: boolean;
}
const DesktopMenu = memo(({ isMobile = false }: Props) => {
  return (
    <div
      className={classNames({
        "desktop-menu": true,
        "is-mobile": isMobile,
      })}
    >
      <h4 className="desktop-menu__item">
        <Link to={getPageURI(URI.shop)}>Products</Link>
      </h4>

      <h4 className="desktop-menu__item">
        <Link to={process.env.DEV_SHOP_URL!}>About Us </Link>
      </h4>

      <h4 className="desktop-menu__item">
        <Link to={getPageURI(URI.cart)}>
          <ShoppingCart quantity={100} />
        </Link>
      </h4>

      <AccountSection />
    </div>
  );
});

export default DesktopMenu;

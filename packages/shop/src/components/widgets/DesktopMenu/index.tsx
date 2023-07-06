import { memo, useCallback, useContext, useState } from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { URI } from "src/constants/constant";
import ShoppingCart from "../ShoppingCart";
import { LogoutIcon, UserIcon } from "src/icons";
import classNames from "classnames";
import { ModalContextType } from "src/Modals/type";
import { ModalContext } from "src/Modals/Modal";
import { useAppContext } from "src/context/reducer";
import { getPageURI } from "src/utils/route.utils";

const AccountSection = memo(() => {
  const { user, handleLogout } = useAppContext();
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const handleOpenAuthModal = useCallback(() => {
    if (user?.id) {
      const confirmed = confirm("Are you sure you want to logout?");
      confirmed && handleLogout();
    } else {
      setToggleShowModal("isShowAuthModal", true);
    }
  }, [handleLogout, user?.id, setToggleShowModal]);

  return (
    <>
      <h4 className="desktop-menu__item" onClick={handleOpenAuthModal}>
        {user?.id ? (
          <>
            <span className="text-ellipsis-1 username" title={user.name}>
              {user.name}
            </span>
            <LogoutIcon />
          </>
        ) : (
          <UserIcon />
        )}
      </h4>
    </>
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
          <ShoppingCart />
        </Link>
      </h4>

      <AccountSection />
    </div>
  );
});

export default DesktopMenu;

import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { URI } from "src/constants/constant";
import { MenuIcon } from "src/icons";
import ShoppingCart from "../ShoppingCart";
import "./styles.scss";
import { getPageURI } from "src/utils/utils";
import { ModalContextType } from "src/Modals/type";
import { ModalContext } from "src/Modals/Modal";

interface Props {}
const MobileMenu = memo(({}: Props) => {
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const handleOpenMenu = () => {
    setToggleShowModal("isShowMenuModal", true);
  };

  return (
    <div className="mobile-menu">
      <h4 className="mobile-menu__item">
        <Link to={getPageURI(URI.cart)}>
          <ShoppingCart />
        </Link>
      </h4>
      <h4 className="mobile-menu__item" onClick={handleOpenMenu}>
        <MenuIcon />
      </h4>
    </div>
  );
});

export default MobileMenu;

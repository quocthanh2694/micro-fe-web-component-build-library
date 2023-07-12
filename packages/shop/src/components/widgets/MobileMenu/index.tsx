import { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { ModalContext } from "src/Modals/Modal";
import { ModalContextType } from "src/Modals/type";
import { URI } from "src/constants/constant";
import useCurrentResolvedPath from "src/hooks/useCurrentResolvedPath";
import { MenuIcon } from "src/icons";
import ShoppingCart from "../ShoppingCart";
import "./styles.scss";

interface Props {}
const MobileMenu = memo(({}: Props) => {
  const { generateNavPath } = useCurrentResolvedPath();
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  const handleOpenMenu = () => {
    setToggleShowModal("isShowMenuModal", true);
  };

  return (
    <div className="mobile-menu">
      <h4 className="mobile-menu__item">
        <Link to={generateNavPath(URI.cart)}>
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

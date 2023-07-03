import { memo } from "react";
import { Link } from "react-router-dom";
import { URI } from "src/constant";
import { MenuIcon } from "src/icons";
import ShoppingCart from "../ShoppingCart";
import "./styles.scss";
import { getPageURI } from "src/utils/utils";

interface Props {
  onToggle?: () => void;
}
const MobileMenu = memo(({ onToggle }: Props) => {
  return (
    <div className="mobile-menu">
      <h4 className="mobile-menu__item">
        <Link to={getPageURI(URI.cart)}>
          <ShoppingCart quantity={100} />
        </Link>
      </h4>
      <h4 className="mobile-menu__item" onClick={onToggle}>
        <MenuIcon />
      </h4>
    </div>
  );
});

export default MobileMenu;

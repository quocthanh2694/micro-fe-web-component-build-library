import { memo } from "react";
import { MenuIcon } from "src/icons";
import "./styles.scss";
import DesktopMenu from "src/components/DesktopMenu";
import classNames from "classnames";

interface Props {
  show?: boolean;
  onToggle: () => void;
}

const MenuModal = memo(({ show, onToggle }: Props) => {
  return (
    <div
      className={classNames({
        "menu-modal backdrop": true,
        show: show,
      })}
    >
      <div className="backdrop"></div>
      <div className="menu-modal__menu">
        <div className="container">
          <div className="menu-modal__menu-close" onClick={onToggle}>
            <MenuIcon isClose />
          </div>
          <DesktopMenu isMobile />
        </div>
      </div>
    </div>
  );
});

export default MenuModal;

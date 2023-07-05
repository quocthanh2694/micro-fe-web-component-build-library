import { memo, useContext } from "react";
import { MenuIcon } from "src/icons";
import "./styles.scss";
import DesktopMenu from "src/components/widgets/DesktopMenu";
import classNames from "classnames";
import { ModalContextType } from "../type";
import { ModalContext } from "../Modal";

interface Props {
  show?: boolean;
}

const MenuModal = memo(({ show }: Props) => {
  const { setToggleShowModal } = useContext<ModalContextType>(ModalContext);

  return (
    <div
      className={classNames({
        "menu-modal modal backdrop": true,
        show: show,
      })}
      onClick={() => setToggleShowModal("isShowMenuModal", false)}
    >
      <div className="menu-modal__menu">
        <div className="container">
          <div className="menu-modal__menu-close">
            <MenuIcon isClose />
          </div>
          <DesktopMenu isMobile />
        </div>
      </div>
    </div>
  );
});

export default MenuModal;

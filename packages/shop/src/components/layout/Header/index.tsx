import { memo, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import DesktopMenu from "src/components/DesktopMenu";
import Image from "src/components/Image";
import MobileMenu from "src/components/MobileMenu";
import { SCREEN_BREAKPOINTS, URI } from "src/constant";
import useWindowDimensions from "src/hooks/useWindowSize";
import "./style.scss";
import MenuModal from "src/components/Modals/MenuModal";
const Logo = require("src/assets/images/logo.png").default;

interface Props {}

export const Header = memo(({}: Props) => {
  const { width } = useWindowDimensions();
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const handleToggleMenu = useCallback(() => {
    setIsShowMobileMenu((prev) => !prev);
  }, []);

  return (
    <section className="header">
      <div className="header__wrap container">
        <div className="header__wrap-logo">
          <Link to={URI.shop}>
            <Image src={Logo} width="82px" height="40px" radius="4px" />
          </Link>
        </div>

        <div className="header__wrap-menu">
          {width > SCREEN_BREAKPOINTS.desktop ? (
            <DesktopMenu />
          ) : (
            <>
              <MobileMenu onToggle={handleToggleMenu} />
              <MenuModal show={isShowMobileMenu} onToggle={handleToggleMenu} />
            </>
          )}
        </div>
      </div>
    </section>
  );
});

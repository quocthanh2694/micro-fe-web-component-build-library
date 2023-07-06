import { memo } from "react";
import { Link } from "react-router-dom";
import Image from "src/components/Image";
import DesktopMenu from "src/components/widgets/DesktopMenu";
import MobileMenu from "src/components/widgets/MobileMenu";
import { SCREEN_BREAKPOINTS, URI } from "src/constants/constant";
import useWindowDimensions from "src/hooks/useWindowSize";
import "./style.scss";
import { getPageURI } from "src/utils/route.utils";
const Logo = require("src/assets/images/logo.png").default;

interface Props {}

export const Header = memo(({}: Props) => {
  const { width } = useWindowDimensions();

  return (
    <section className="header">
      <div className="header__wrap container">
        <div className="header__wrap-logo">
          <Link to={getPageURI(URI.shop)}>
            <Image src={Logo} width="82px" height="40px" radius="4px" />
          </Link>
        </div>

        <div className="header__wrap-menu">
          {width > SCREEN_BREAKPOINTS.desktop ? (
            <DesktopMenu />
          ) : (
            <>
              <MobileMenu />
            </>
          )}
        </div>
      </div>
    </section>
  );
});

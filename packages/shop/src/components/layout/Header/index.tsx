import { memo } from "react";
import "./style.scss";
import Image from "src/components/Image";
import { Link } from "react-router-dom";
import { URI } from "src/constant";
const Logo = require("src/assets/images/logo.png").default;

interface Props {}

export const Header = memo(({}: Props) => {
  return (
    <section className="header">
      <div className="header__wrap container">
        <div className="header__wrap-logo">
          <Link to={URI.shop}>
            <Image src={Logo} width="82px" height="40px" radius="4px" />
          </Link>
        </div>
        <div className="header__wrap-menu">
          <Link to={URI.shop}>
            <h4>Products</h4>
          </Link>
          <Link to={process.env.DEV_SHOP_URL!}>
            <h4>About Us</h4>
          </Link>
        </div>
      </div>
    </section>
  );
});

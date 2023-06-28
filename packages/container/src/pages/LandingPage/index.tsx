// import { Profile } from "../../components/Profile";

import { Profile } from "./components/Profile";
import "./style.scss";
import CustomButton from "src/components/CustomButton";

export const LandingPage = () => {
  return (
    <div className="layout">
      <div className="layout__background"></div>
      <div className="container">
        <div className="layout__header">
          <CustomButton>Shopping Now</CustomButton>
        </div>
      </div>
      <Profile />
    </div>
  );
};

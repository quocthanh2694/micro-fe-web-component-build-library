import React, { memo } from "react";
import "./style.scss";
import Image from "src/components/Image";
// const thanhAvatar = require("src/assets/images/thanh.png");

interface ProfileProps {}

export const Profile = memo(({}: ProfileProps) => {
  return (
    <section className="profile container box">
      <div className="profile__user">
        <div className="profile__user-avatar">
          {/* <Image src={thanhAvatar} width="130px" height="130px" /> */}
        </div>
        <div className="profile__user-info">
          <h4>TRAN QUOC THANH</h4>
          <span className="text-xs profile__user-info-title text-primary d-block">
            Software Engineer
          </span>
          <span className="text-xs text-primary d-block">
            Email: thanhtran@strongtie.com
          </span>
          <span className="text-xs text-primary d-block">
            Phone: (+84) 356 975 240
          </span>
          <span className="text-xs text-primary d-block">
            Address: Binh Thanh, HCMC
          </span>
        </div>
      </div>
      <div className="profile__welcome">
        <h4>Welcome to my blog!</h4>
        <span className="text-xs text-primary d-block">
          I am a Senior Front-end Developer at Simpson with experience in web
          development. My goal is to create valuable products that benefit both
          the company and society. Thank you.
        </span>
      </div>
    </section>
  );
});

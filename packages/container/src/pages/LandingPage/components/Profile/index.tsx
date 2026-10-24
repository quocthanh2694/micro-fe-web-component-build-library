import { memo } from "react";
import "./style.scss";
import Image from "src/components/Image";
import { SOCIAL_LINKS } from "src/constant/constant";
const thanhAvatar = require("src/assets/images/thanh.jpg");

const ContactInfo = () => {
  return (
    <div className="profile__user-info-contact-info">
      <span className="text-xs text-primary d-block">
        Email:{" "}
        <a href="mailto:quocthanh2694@gmail.com" className="text-primary">
          quocthanh2694@gmail.com
        </a>
      </span>
      <span className="text-xs text-primary d-block">
        Phone: +84 35 695 7240
      </span>
      <span className="text-xs text-primary d-block">
        Address: Ho Chi Minh City, Viet Nam
      </span>
      <span className="text-xs profile__user-info-links">
        <a
          href={SOCIAL_LINKS.LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          LinkedIn
        </a>
        <a
          href={SOCIAL_LINKS.GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          GitHub
        </a>
      </span>
    </div>
  );
};

interface Props {}

export const Profile = memo(({}: Props) => {
  return (
    <section className="profile container box">
      <div className="profile__user">
        <div className="profile__user-avatar">
          <Image
            radius="50%"
            src={thanhAvatar.default}
            width="130px"
            height="130px"
            alt="Tran Quoc Thanh"
          />
        </div>
        <div className="profile__user-info">
          <h5>TRAN QUOC THANH</h5>
          <span className="text-xs profile__user-info-title text-primary d-block">
            Senior Software Engineer · Front-end Lead
          </span>
          <ContactInfo />
        </div>
      </div>

      <div className="line"></div>

      <div className="profile__welcome">
        <h4>Hi, I'm Thanh</h4>
        <span className="text-xs text-primary d-block">
          A front-end engineer with 10 years of experience (2 of them
          full-stack), building products with React, Next.js, TypeScript and Web
          Components. I have led small front-end teams, worked directly with
          US-based teams, and care about performance, clean code and reusable UI
          libraries. This site itself is a micro-frontend demo — see how it's
          built below.
        </span>
      </div>
    </section>
  );
});

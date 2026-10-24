import { memo } from "react";
import { SOCIAL_LINKS } from "src/constant/constant";
import "./style.scss";

interface Props {}

export const Footer = memo(({}: Props) => {
  return (
    <section className="footer">
      <span className="text-xxs">© {new Date().getFullYear()} Tran Quoc Thanh</span>
      <a
        href={SOCIAL_LINKS.LINKEDIN}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xxs"
      >
        LinkedIn
      </a>
      <a
        href={SOCIAL_LINKS.GITHUB}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xxs"
      >
        GitHub
      </a>
    </section>
  );
});

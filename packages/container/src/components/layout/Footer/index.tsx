import { memo } from "react";
import "./style.scss";

interface Props {}

export const Footer = memo(({}: Props) => {
  return (
    <section className="footer">
      <span className="text-xxs">Powered by Thanh Tran</span>
    </section>
  );
});

import { memo } from "react";
import "./styles.scss";
import { ScrollToTopIcon } from "src/icons";

interface Props {}

const ScrollToTop = memo(({}: Props) => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="scroll-top-top" onClick={handleScrollToTop}>
      <ScrollToTopIcon />
    </div>
  );
});

export default ScrollToTop;

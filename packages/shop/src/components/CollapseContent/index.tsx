import { memo, useCallback, useState } from "react";
import "./styles.scss";
import { ArrowIcon, CollapsedIcon } from "src/icons";

interface Props {
  title: string;
  body: string;
}
const CollapseContent = memo(({ title, body }: Props) => {
  const [show, setShow] = useState(false);

  const handleToggleContent = useCallback(() => {
    setShow((prev) => !prev);
  }, []);

  return (
    <div className="collapsed-content">
      <div className="collapsed-content__title" onClick={handleToggleContent}>
        <div className="collapsed-content__title-icon">
          <CollapsedIcon type={show ? "up" : "right"} />
        </div>
        <h3>{title}</h3>
      </div>
      {show && (
        <div
          className="collapsed-content__body"
          dangerouslySetInnerHTML={{ __html: body }}
        ></div>
      )}
    </div>
  );
});

export default CollapseContent;

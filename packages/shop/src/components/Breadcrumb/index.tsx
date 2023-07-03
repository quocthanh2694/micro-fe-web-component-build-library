import { memo } from "react";
import "./styles.scss";

interface BreadCrumbType {
  title: string;
}

interface Props {
  list: BreadCrumbType[];
}
const Breadcrumb = memo(({ list }: Props) => {
  return (
    <div className="breadcrumb">
      {list.map((item, i) => (
        <div key={item.title} className="breadcrumb__item">
          <span className="text-xxs text-primary">
            {i > 0 && (
              <span className="text-xxs text-primary">&nbsp;&gt;&nbsp;</span>
            )}
            {item.title}
          </span>
        </div>
      ))}
    </div>
  );
});

export default Breadcrumb;

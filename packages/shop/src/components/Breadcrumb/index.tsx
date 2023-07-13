import { memo } from "react";
import "./styles.scss";
import { URI } from "src/constants/constant";
import classNames from "classnames";
import useNavigateMFA from "src/hooks/useNavigateMFA";

interface IBreadCrumb {
  title: string;
  uri?: URI;
}

interface Props {
  list: IBreadCrumb[];
}
const Breadcrumb = memo(({ list }: Props) => {
  const { navigateTo } = useNavigateMFA();

  const handleNavigate = (item: IBreadCrumb) => {
    if (item.uri === undefined) return;
    navigateTo(item.uri);
  };

  return (
    <div className="breadcrumb">
      {list.map((item, i) => (
        <div
          key={item.title}
          className={classNames([
            "breadcrumb__item",
            item.uri !== undefined ? "clickable" : "",
          ])}
          onClick={() => handleNavigate(item)}
        >
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

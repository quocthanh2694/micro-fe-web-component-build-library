import classNames from "classnames";
import { memo } from "react";
import "./styles.scss";
import { ICategory } from "src/interface/category";

interface Props {
  categories: Array<ICategory>;
  selectedId: string;
  onSelect: (category: ICategory) => void;
}

const Category = memo(({ categories, selectedId, onSelect }: Props) => {
  return (
    <div className="category">
      {categories?.map((category) => (
        <div
          key={category.id}
          className={classNames([
            "category__item",
            category.id === selectedId ? "category__item selected" : "",
          ])}
          onClick={() => onSelect(category)}
        >
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
});

export default Category;

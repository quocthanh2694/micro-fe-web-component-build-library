import { memo } from "react";
import CustomButton from "../CustomButton";
import Image from "../Image";
import "./styles.scss";
import { CURRENCY } from "src/constant";
import classNames from "classnames";

export interface CategoryType {
  id: string;
  name: string;
}

interface Props {
  categories: Array<CategoryType>;
  selectedId: string;
  onSelect: (category: CategoryType) => void;
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

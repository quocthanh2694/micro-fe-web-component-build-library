import Slider from "src/components/Slider";
import "./style.scss";
import Product from "src/components/Product";
import Category, { CategoryType } from "src/components/Category";
import { useCallback, useState } from "react";
import Pagination from "src/components/Pagination";
import HotSale from "src/components/HotSale";
const Watch = require("src/assets/images/watch.png").default;

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [categoryId, setCategoryId] = useState("all");
  const categories = [
    {
      id: "all",
      name: "All Products",
    },
    {
      id: "watch",
      name: "Watch",
    },
    {
      id: "phone",
      name: "Phone",
    },
    {
      id: "laptop",
      name: "Laptop",
    },
    {
      id: "tablet",
      name: "Tablet",
    },
    {
      id: "camera",
      name: "Camera",
    },
  ];

  const handleSelectCategory = useCallback((c: CategoryType) => {
    setCategoryId(c.id);
  }, []);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="shop container">
      <Slider />
      <br />
      <HotSale />
      <br />
      <Category
        categories={categories}
        selectedId={categoryId}
        onSelect={handleSelectCategory}
      />

      <br />
      <Pagination currentPage={currentPage} onChangePage={onChangePage} />
      <br />
      <Product
        product={{
          id: 1,
          name: "ROLEX OYSTER AUTO PERPETUAL 41 ROLEX OYSTER AUTO PERPETUAL 42 ROLEX OYSTER AUTO PERPETUAL 43",
          discountPercent: 32,
          image: Watch,
          price: 10000,
          details: [
            {
              key: "Type",
              value: "Analog",
            },
            {
              key: "Water Resistance",
              value: "50 M",
            },
            {
              key: "Some others",
              value: "Value",
            },
          ],
        }}
      />
    </div>
  );
};

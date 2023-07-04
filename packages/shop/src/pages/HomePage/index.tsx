import Slider from "src/components/Slider";
import "./style.scss";
import Product from "src/components/Product";
import Category, { CategoryType } from "src/components/Category";
import { useCallback, useEffect, useState } from "react";
import Pagination from "src/components/Pagination";
import HotSale from "src/components/HotSale";
import useProducts from "src/hooks/useProducts";
import { FETCH_LIMIT, PAGE_LIMIT } from "src/constants/constant";
import Image from "src/components/Image";
import useHotSaleProduct from "src/hooks/useHotSaleProduct";
const Loading = require("src/assets/images/loading.gif").default;

export const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { loading, items: products, totalPages, getProducts } = useProducts();

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

  // init get products
  useEffect(() => {
    getProducts({
      skipCount: 0,
      type: "all",
    });
  }, []);

  const handleSelectCategory = useCallback((c: CategoryType) => {
    setCategoryId(c.id);
    setCurrentPage(1);
    getProducts({
      skipCount: 0,
      type: c.id,
    });
  }, []);

  const onChangePage = (page: number) => {
    setCurrentPage(page);
    getProducts({
      skipCount: (page - 1) * FETCH_LIMIT,
      type: categoryId,
    });
  };

  return (
    <div className="home container">
      <div className="home__slider">
        <Slider />
      </div>

      <div className="home__hotsale">
        <HotSale />
      </div>

      <div className="home__category">
        <Category
          categories={categories}
          selectedId={categoryId}
          onSelect={handleSelectCategory}
        />
      </div>

      <div className="home__products">
        {products?.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>

      <div className="home__loading">
        {loading && <Image src={Loading} width="40px" height="40px" />}
      </div>

      <div className="home__pagination">
        <Pagination
          currentPage={currentPage}
          onChangePage={onChangePage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

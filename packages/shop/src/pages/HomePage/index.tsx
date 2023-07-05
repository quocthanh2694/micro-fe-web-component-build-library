import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Category,
  HotSale,
  Pagination,
  Product,
  ScrollToTop,
  Slider,
} from "src/components";
import Image from "src/components/Image";
import useInfiniteScroll from "src/hooks/useInfinityScroll";
import useProducts from "src/hooks/useProducts";
import useWindowDimensions from "src/hooks/useWindowSize";
import { ICategory } from "src/interface/category";
import "./style.scss";
import { FETCH_LIMIT } from "src/constants/pagination.constant";
const Loading = require("src/assets/images/loading.gif").default;

const CATEGORIES = [
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

export const HomePage = () => {
  const { isMobile } = useWindowDimensions();

  const [currentPage, setCurrentPage] = useState(1);
  const {
    loading,
    items: products,
    totalPages,
    getProducts,
    skipCount,
  } = useProducts();
  const [categoryId, setCategoryId] = useState("all");

  console.log("HOomepage data@@", products);

  // init get products
  useEffect(() => {
    getProducts({
      skipCount: 0,
      type: "all",
    });
  }, []);

  const handleLoadMore = useCallback(() => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage + 1;
      getProducts(
        {
          skipCount: (nextPage - 1) * FETCH_LIMIT,
          type: categoryId,
        },
        () => {
          setIsFetching(false);
        }
      );
      return nextPage;
    });
  }, [getProducts, categoryId]);

  const { isFetching, setIsFetching } = useInfiniteScroll(handleLoadMore);

  const handleSelectCategory = useCallback((c: ICategory) => {
    setCategoryId(c.id);
    setCurrentPage(1);
    getProducts({
      skipCount: 0,
      type: c.id,
    });
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      getProducts({
        skipCount: (page - 1) * FETCH_LIMIT,
        type: categoryId,
      });
    },
    [categoryId]
  );

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
          categories={CATEGORIES}
          selectedId={categoryId}
          onSelect={handleSelectCategory}
        />
      </div>

      <h1>{products?.length}</h1>
      <div className="home__products">
        {products?.map((p, i) => (
          <Product key={p.id + i} product={p} />
        ))}
      </div>

      {(loading || isFetching) && (
        <div className="home__loading">
          <Image src={Loading} width="40px" height="40px" />
        </div>
      )}

      {!isMobile && (
        <div className="home__pagination">
          <Pagination
            currentPage={currentPage}
            onChangePage={handlePageChange}
            totalPages={totalPages}
          />
        </div>
      )}

      <ScrollToTop />
    </div>
  );
};

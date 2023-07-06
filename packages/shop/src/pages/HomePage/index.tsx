import { useCallback, useEffect, useState } from "react";
import {
  Category,
  HotSale,
  Loading,
  Pagination,
  Product,
  ScrollToTop,
  Slider,
} from "src/components";
import { FETCH_LIMIT } from "src/constants/pagination.constant";
import useInfiniteScroll from "src/hooks/useInfinityScroll";
import useProducts from "src/hooks/useProducts";
import useWindowDimensions from "src/hooks/useWindowSize";
import { ICategory } from "src/interface/category";
import "./style.scss";

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
  const [currentPage, setCurrentPage] = useState(1);
  const {
    loading,
    items: products,
    totalPages,
    getProducts,
    hasMore,
  } = useProducts();
  const [categoryId, setCategoryId] = useState("all");
  const { isMobile } = useWindowDimensions();

  // init get products
  useEffect(() => {
    getProducts(
      {
        skipCount: 0,
        type: "all",
      },
      undefined,
      true
    );
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

  const { isFetching, setIsFetching } = useInfiniteScroll(
    handleLoadMore,
    hasMore
  );

  const handleSelectCategory = useCallback((c: ICategory) => {
    setCategoryId(c.id);
    setCurrentPage(1);
    getProducts(
      {
        skipCount: 0,
        type: c.id,
      },
      undefined,
      true
    );
  }, []);

  const handlePageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      getProducts(
        {
          skipCount: (page - 1) * FETCH_LIMIT,
          type: categoryId,
        },
        undefined
      );

      // handle scroll to product section
      setTimeout(() => {
        const elemRef = document.getElementById("categoryRef");
        elemRef?.scrollIntoView({
          behavior: "smooth",
        });
      }, 0);
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

      <div className="home__category" id="categoryRef">
        <Category
          categories={CATEGORIES}
          selectedId={categoryId}
          onSelect={handleSelectCategory}
        />
      </div>

      <div className="home__products">
        {products?.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
      {(loading || isFetching) && (
        <div className="home__loading">
          <Loading />
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

import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { EmptyMessage, Loading, ScrollToTop } from "src/components";
import Breadcrumb from "src/components/Breadcrumb";
import ProductDetail from "src/components/widgets/ProductDetail";
import SuggestedProduct from "src/components/widgets/SuggestedProduct";
import { URI } from "src/constants/constant";
import useProductDetail from "src/hooks/useProductDetail";
import "./style.scss";

export const ProductPage = () => {
  const params = useParams();

  const { getProductDetail, loading, product } = useProductDetail();

  useEffect(() => {
    if (!params.id) return;
    getProductDetail(params.id);
  }, [params.id]);

  return (
    <div className="product-page container">
      <Breadcrumb
        list={[
          {
            title: "Products",
            uri: URI.shop,
          },
          {
            title: product?.name || "Product detail",
          },
        ]}
      />

      {!loading && !product?.id && <EmptyMessage message="No Product found" />}
      {loading && (
        <div className="product-page__loading">
          <Loading />
        </div>
      )}

      {!!product?.id && <ProductDetail product={product} />}

      <SuggestedProduct />

      <ScrollToTop />
    </div>
  );
};

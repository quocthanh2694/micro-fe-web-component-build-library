import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb";
import ProductDetail from "src/components/ProductDetail";
import SuggestedProduct from "src/components/SuggestedProduct";
import "./style.scss";
import useProductDetail from "src/hooks/useProductDetail";
import { useEffect } from "react";

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
          },
          {
            title: "productName",
          },
        ]}
      />
      {!!product?.id && <ProductDetail product={product} />}

      <SuggestedProduct />
    </div>
  );
};

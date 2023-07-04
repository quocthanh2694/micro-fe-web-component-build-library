import { memo, useEffect } from "react";
import useSuggestedProduct from "src/hooks/useSuggestedProduct";
import Product from "../Product";
import "./styles.scss";

const Watch = require("src/assets/images/watch.png").default;

interface Props {}
const SuggestedProduct = memo(({}: Props) => {
  const { getSuggestedProducts, items: products } = useSuggestedProduct();

  useEffect(() => {
    getSuggestedProducts();
  }, []);

  return (
    <div className="suggested-product">
      <div className="suggested-product__header">
        <h3>You may also like</h3>
      </div>
      <div className="suggested-product__products">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
});

export default SuggestedProduct;

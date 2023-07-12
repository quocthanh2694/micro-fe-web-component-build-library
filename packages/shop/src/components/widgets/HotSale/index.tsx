import { memo, useEffect } from "react";
import "./styles.scss";
import Product from "../Product";
import useHotSaleProduct from "src/hooks/useHotSaleProduct";

const Watch = require("src/assets/images/watch.png").default;

interface Props {}
const HotSale = memo(({}: Props) => {
  const { getHotSaleProducts, items: products, loading } = useHotSaleProduct();

  useEffect(() => {
    getHotSaleProducts();
  }, []);

  if (!loading && !products?.length) {
    return <></>;
  }

  return (
    <div className="hot-sale">
      <div className="hot-sale__header">
        <h3>HOT SALE (up to 70%)</h3>
      </div>
      <div className="hot-sale__products">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
});

export default HotSale;

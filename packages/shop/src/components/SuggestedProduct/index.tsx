import { memo } from "react";
import "./styles.scss";
import Product from "../Product";

const Watch = require("src/assets/images/watch.png").default;

interface Props {}
const SuggestedProduct = memo(({}: Props) => {
  const products = new Array(4).fill(1).map((item, index) => {
    return {
      id: index,
      name: index + "ROLEX OYSTER AUTO PERPETUAL 41",
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
    };
  });
  return (
    <div className="suggested-product">
      <div className="suggested-product__header">
        <h3>You may also like</h3>
      </div>
      <div className="suggested-product__products">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
});

export default SuggestedProduct;

import { memo } from "react";
import "./styles.scss";
import Product from "../Product";

const Watch = require("src/assets/images/watch.png").default;

interface Props {}
const HotSale = memo(({}: Props) => {
  const products = new Array(10).fill(1).map((item, index) => {
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
    <div className="hot-sale">
      <div className="hot-sale__header">
        <h3>HOT SALE (up to 70%)</h3>
      </div>
      <div className="hot-sale__products">
        {products.map((p) => (
          <Product product={p} />
        ))}
      </div>
    </div>
  );
});

export default HotSale;

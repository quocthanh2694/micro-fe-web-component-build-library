import { useParams } from "react-router-dom";
import Breadcrumb from "src/components/Breadcrumb";
import ProductDetail from "src/components/ProductDetail";
import SuggestedProduct from "src/components/SuggestedProduct";
import "./style.scss";
const Watch = require("src/assets/images/watch.png").default;
const Banner = require("src/assets/images/banner1.png").default;

export const ProductPage = () => {
  const params = useParams();

  console.log("@@id", params.id);

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
      <br />
      <ProductDetail
        product={{
          id: 1,
          name: "ROLEX OYSTER AUTO 41 ",
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

      <SuggestedProduct />
    </div>
  );
};

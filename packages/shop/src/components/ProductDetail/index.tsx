import { memo } from "react";
import CustomButton from "../CustomButton";
import Image from "../Image";
import "./styles.scss";
import { BASE_URL, CURRENCY, URI, getPageURI } from "src/constant";
import { generatePath, useNavigate } from "react-router-dom";
import { Product } from "../Product";
import ProductImage from "../ProductImage";
import SuggestedProduct from "../SuggestedProduct";
import CollapseContent from "../CollapseContent";
import AddToCart from "../AddToCart";

interface Props {
  product: Product;
}
const ProductDetail = memo(({ product }: Props) => {
  const { name, price, details, discountPercent, image } = product || {};

  return (
    <div className="product-detail">
      <div className="product-detail__wrap">
        <div className="product-detail__wrap-image">
          <ProductImage images={[image, image, image]} />
        </div>
        <div className="product-detail__wrap-info">
          <h4 className="text-center">{name}</h4>
          <h3 className="text-secondary text-center">{`$${price.toLocaleString()} (${discountPercent}%off)`}</h3>
          <div className="line-2 product-detail__wrap-info-first-line"></div>
          <div className="product-detail__wrap-info-actions">
            <AddToCart />
          </div>
          <div className="line-2 product-detail__wrap-info-middle-line"></div>
          <div className="product-detail__wrap-info-more">
            <h4>More Information</h4>
            {details?.map((detail) => (
              <div className="product-detail__wrap-info-more-row">
                <div>{detail.key}</div>
                <div className="text-primary">{detail.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-detail__body">
        <CollapseContent title={name} body={`<>body</>`} />
      </div>
    </div>
  );
});

export default ProductDetail;

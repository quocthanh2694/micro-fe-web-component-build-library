import { memo } from "react";
import CustomButton from "../CustomButton";
import Image from "../Image";
import "./styles.scss";
import { BASE_URL, CURRENCY, URI, getPageURI } from "src/constant";
import { generatePath, useNavigate } from "react-router-dom";

export interface Product {
  id: number;
  image: string;
  name: string;
  price: number;
  discountPercent: number;
  details: Array<{
    key: string;
    value: string;
  }>;
}

interface Props {
  product: Product;
}
const Product = memo(({ product }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const path = generatePath(getPageURI(URI.product), { id: product.id });
    navigate(path);
  };

  return (
    <div className="product" onClick={handleNavigate}>
      <span className="product__discount">{product.discountPercent}%</span>
      <div className="product__image">
        <Image src={product.image} width="196px" height="196px" />
      </div>
      <div className="product__info">
        <span className="product__info-name" title={product.name}>
          {product.name}
        </span>
        <div className="product__info-detail">
          {product.details?.slice(0, 2).map((detail) => (
            <div
              key={detail.key}
              className="product__info-detail-row text-xs text-primary"
            >{`${detail.key}: ${detail.value}`}</div>
          ))}
          <div className="product__info-detail-row text-xs text-primary">{`Price: ${CURRENCY}${product.price}`}</div>
        </div>
        <div className="product__info-action">
          <CustomButton size="xs" fullWidth>
            Add to cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
});

export default Product;

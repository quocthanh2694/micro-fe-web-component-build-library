import { memo } from "react";
import AddToCart from "../../AddToCart";
import CollapseContent from "../../CollapseContent";
import ProductImage from "../ProductImage";
import "./styles.scss";
import { IProduct } from "src/interface/product";
import { numberWithComma } from "src/utils/number.utils";
import { useAppContext } from "src/context/reducer";

interface Props {
  product: IProduct;
}
const ProductDetail = memo(({ product }: Props) => {
  const { name, price, details, discountPercent, images, description } =
    product || {};
  const { handleAddToCart } = useAppContext();

  const _handleAddToCart = (num: number) => {
    handleAddToCart({ product, quantity: num });
  };

  return (
    <div className="product-detail">
      <div className="product-detail__wrap">
        <div className="product-detail__wrap-image">
          <ProductImage images={images} />
        </div>
        <div className="product-detail__wrap-info">
          <h4 className="text-center">{name}</h4>
          <h3 className="text-secondary text-center line-break">{`$${numberWithComma(
            price
          )} (${discountPercent}%off)`}</h3>
          <div className="line-2 product-detail__wrap-info-first-line"></div>
          <div className="product-detail__wrap-info-actions">
            <AddToCart onAddToCart={_handleAddToCart} />
          </div>
          <div className="line-2 product-detail__wrap-info-middle-line"></div>
          <div className="product-detail__wrap-info-more">
            <h4>More Information</h4>
            {details?.map((detail) => (
              <div
                key={detail.key}
                className="product-detail__wrap-info-more-row"
              >
                <div>{detail.key}</div>
                <div
                  className="product-detail__wrap-info-more-row-value text-primary line-break"
                  title={detail.value}
                >
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="product-detail__body">
        <CollapseContent title={`Review: ${name}`} body={description} />
      </div>
    </div>
  );
});

export default ProductDetail;

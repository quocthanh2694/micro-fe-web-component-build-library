import { MouseEvent, memo, useCallback } from "react";
import { CURRENCY, URI } from "src/constants/constant";
import { useAppContext } from "src/context/reducer";
import useNavigateMFA from "src/hooks/useNavigateMFA";
import { IProduct } from "src/interface/product";
import { numberWithComma } from "src/utils/number.utils";
import CustomButton from "../../CustomButton";
import Image from "../../Image";
import "./styles.scss";

interface Props {
  product: IProduct;
}
const Product = memo(({ product }: Props) => {
  const { handleAddToCart } = useAppContext();

  const { navigateTo } = useNavigateMFA();

  const handleNavigateToDetail = () => {
    navigateTo(URI.product, { id: product.id });
    window.scroll(0, 0);
  };

  const _handleAddToCart = useCallback(
    (e: MouseEvent<HTMLDivElement>, p: IProduct) => {
      e.stopPropagation();
      handleAddToCart({ product: p, quantity: 1 });
    },
    []
  );

  return (
    <div className="product" onClick={handleNavigateToDetail}>
      <span className="product__discount">{product.discountPercent}%</span>
      <div className="product__image">
        <Image
          src={product.images?.[0]}
          width="196px"
          height="196px"
          radius="4px"
        />
      </div>
      <div className="product__info">
        <span
          className="product__info-name text-ellipsis-2"
          title={product.name}
        >
          {product.name}
        </span>
        <div className="product__info-detail">
          {product.details?.slice(0, 2).map((detail) => (
            <div
              key={detail.key}
              className="product__info-detail-row text-xs text-primary"
            >{`${detail.key}: ${detail.value}`}</div>
          ))}
          <div className="product__info-detail-row text-xs text-primary line-break">{`Price: ${CURRENCY}${numberWithComma(
            product.price
          )}`}</div>
        </div>
        <div className="product__info-action">
          <CustomButton
            size="xs"
            fullWidth
            onClick={(e) => _handleAddToCart(e, product)}
          >
            Add to cart
          </CustomButton>
        </div>
      </div>
    </div>
  );
});

export default Product;

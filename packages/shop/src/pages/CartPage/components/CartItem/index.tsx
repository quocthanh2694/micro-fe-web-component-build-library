import { memo } from "react";
import "./style.scss";
import { CartFormItem } from "../../type";
import { DeleteIcon } from "src/icons";
import AddToCart from "src/components/AddToCart";
import Image from "src/components/Image";

interface Props {
  cartItem: CartFormItem;
}
const CartItem = memo(({ cartItem }: Props) => {
  const { product, quantity } = cartItem || {};

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <Image src={product?.image} width="94px" height="94px" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info-title">
          <span>{product?.name}</span>
          <div className="cart-item__info-title-delete">
            <DeleteIcon />
          </div>
        </div>
        <div className="cart-item__info-footer">
          <AddToCart />
          <span className="text-primary text-xs">
            ${product?.price?.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
});

export default CartItem;

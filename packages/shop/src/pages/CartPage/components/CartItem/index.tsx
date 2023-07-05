import { memo, useCallback } from "react";
import "./style.scss";
import { DeleteIcon } from "src/icons";
import AddToCart from "src/components/AddToCart";
import Image from "src/components/Image";
import { ICartItem } from "src/interface/cart";
import { numberWithComma } from "src/utils/number.utils";
import { useAppContext } from "src/context/reducer";

interface Props {
  cartItem: ICartItem;
}
const CartItem = memo(({ cartItem }: Props) => {
  const {
    handleAddToCart,
    handleSubtractFromCart,
    handleUpdateCartItem,
    handleRemoveFromCart,
  } = useAppContext();
  const { product, quantity } = cartItem || {};

  const handleChangeQty = (qty: number) => {
    if (qty > 0) {
      handleUpdateCartItem(product.id, qty);
    }
  };

  const handleMinus = (qty: number) => {
    handleSubtractFromCart(product.id);
  };

  const handlePlus = (qty: number) => {
    handleAddToCart({
      product: cartItem.product,
      quantity: 1,
    });
  };

  const handleRemoveItem = useCallback(() => {
    handleRemoveFromCart(product.id);
  }, [product?.id]);

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <Image src={product?.images?.[0]} width="94px" height="94px" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info-title">
          <span className="text-ellipsis-2" title={product?.name}>
            {product?.name}
          </span>
          <div
            className="cart-item__info-title-delete"
            onClick={handleRemoveItem}
          >
            <DeleteIcon />
          </div>
        </div>
        <div className="cart-item__info-footer">
          <AddToCart
            key={product?.id}
            defaultQty={quantity}
            onChangeQuantity={handleChangeQty}
            onMinus={handleMinus}
            onPlus={handlePlus}
            inputOnly
          />
          {quantity}
          <span className="text-primary text-xs">
            ${numberWithComma(product?.price)}
          </span>
        </div>
      </div>
    </div>
  );
});

export default CartItem;

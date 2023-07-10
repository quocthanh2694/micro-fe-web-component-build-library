import { memo } from "react";
import "./style.scss";
import CartItem from "../CartItem";
import { useAppContext } from "src/context/reducer";
import { calculateCartSubTotal } from "src/utils/cart.utils";
import { CURRENCY } from "src/constants/constant";
import { numberWithComma } from "src/utils/number.utils";

const CartProduct = () => {
  const { cartItems } = useAppContext();

  const subTotal = calculateCartSubTotal(cartItems);

  return (
    <div className="cart-product">
      <h5 className="text-secondary cart-product__title">Products</h5>
      <div className="cart-product__list">
        <div className="cart-product__list-item">
          {cartItems?.map((cartItem) => (
            <CartItem cartItem={cartItem} />
          ))}
        </div>
      </div>

      <div className="cart-product__subtotal">
        <h5 className="text-primary text-right line-break">{`Subtotal: ${CURRENCY}${numberWithComma(
          subTotal
        )}`}</h5>
      </div>
    </div>
  );
};

export default memo(CartProduct);

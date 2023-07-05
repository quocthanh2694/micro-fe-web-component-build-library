import { memo } from "react";
import "./styles.scss";
import { CartIcon } from "src/icons";
import { useAppContext } from "src/context/reducer";
import { getCartTotalQty } from "src/utils/cart.utils";

interface ImageProps {}

const ShoppingCart = memo(({}: ImageProps) => {
  const { cartItems } = useAppContext();
  const quantity = getCartTotalQty(cartItems);
  const quantityView = quantity > 9 ? "9+" : quantity > 0 ? quantity : "";

  return (
    <div className="shopping-cart">
      {quantityView && (
        <span className="shopping-cart__quantity text-xxs">{quantityView}</span>
      )}
      <CartIcon />
    </div>
  );
});

export default ShoppingCart;

import { memo, useEffect, useRef, useState } from "react";
import "./styles.scss";
import { CartIcon } from "src/icons";
import { useAppContext } from "src/context/reducer";
import { getCartTotalQty } from "src/utils/cart.utils";
import classNames from "classnames";

interface ImageProps {}

const ShoppingCart = memo(({}: ImageProps) => {
  const lastCartNumRef = useRef<number>(0);
  const [triggerAnimation, setTriggerAnimation] = useState(0);

  const { cartItems } = useAppContext();
  const quantity = getCartTotalQty(cartItems);
  const quantityView = quantity > 9 ? "9+" : quantity > 0 ? quantity : "";

  useEffect(() => {
    if (!quantity) return;
    if (quantity > lastCartNumRef.current) {
      setTriggerAnimation(quantity);
    }
    lastCartNumRef.current = quantity;
  }, [quantity, lastCartNumRef.current]);

  return (
    <div
      className={classNames([
        "shopping-cart",
        quantity && triggerAnimation ? "animate-bounce" : "",
      ])}
      key={`shoppingCart_${triggerAnimation}`}
    >
      {quantityView && (
        <span className="shopping-cart__quantity text-xxs">{quantityView}</span>
      )}
      <CartIcon />
    </div>
  );
});

export default ShoppingCart;

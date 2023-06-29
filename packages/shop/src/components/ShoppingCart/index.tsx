import { memo } from "react";
import "./styles.scss";
import { CartIcon } from "src/icons";

interface ImageProps {
  quantity?: number;
}

const ShoppingCart = memo(({ quantity = 0 }: ImageProps) => {
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

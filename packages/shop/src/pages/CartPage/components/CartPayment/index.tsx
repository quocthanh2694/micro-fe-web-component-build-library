import { memo } from "react";
import "./style.scss";
import { CustomButton } from "src/components";
import { useFormContext } from "react-hook-form";
import { CartForm } from "src/interface/cart";
import { DELIVERY_FEE } from "src/constants/constant";
import { calculateCartTotal } from "src/utils/cart.utils";
import { useAppContext } from "src/context/reducer";
import { numberWithComma } from "src/utils/number.utils";

const CartPayment = memo(() => {
  const { cartItems } = useAppContext();
  const {
    formState: { isValid, errors },
  } = useFormContext<CartForm>();

  const total = calculateCartTotal(cartItems);

  return (
    <div className="cart-payment">
      <div className="cart-payment__wrap">
        <div className="cart-payment__wrap-fee">
          <span>Delivery fee:</span>
          <span className="text-primary">+${DELIVERY_FEE}</span>
        </div>
        <div className="cart-payment__wrap-total">
          <span>Total:</span>
          <h4 className="text-secondary">${numberWithComma(total)}</h4>
        </div>
        <div className="cart-payment__wrap-submit">
          <CustomButton
            width="210px"
            fullWidth
            type="submit"
            disabled={!isValid}
          >
            Pay
          </CustomButton>
        </div>
      </div>
    </div>
  );
});

export default CartPayment;

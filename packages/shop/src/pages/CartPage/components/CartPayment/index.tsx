import { memo } from "react";
import "./style.scss";
import { CustomButton } from "src/components";
import { useFormContext } from "react-hook-form";
import { CartForm } from "../../type";

const CartPayment = memo(() => {
  const {
    formState: { isValid, errors },
  } = useFormContext<CartForm>();
  console.log("@@isvalid", isValid, errors);

  return (
    <div className="cart-payment">
      <div className="cart-payment__wrap">
        <div className="cart-payment__wrap-fee">
          <span>Delivery fee:</span>
          <span className="text-primary">+$10</span>
        </div>
        <div className="cart-payment__wrap-total">
          <span>Total:</span>
          <h4 className="text-secondary">$1,210</h4>
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

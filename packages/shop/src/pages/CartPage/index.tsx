import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "src/components/Breadcrumb";
import CartInfo from "./components/CartInfo";
import CartPayment from "./components/CartPayment";
import CartProduct from "./components/CartProudcts";
import "./style.scss";
import { validationScheme } from "./validationScheme";
import { CartForm } from "src/interface/cart";
import { useAppContext } from "src/context/reducer";
import { numberWithComma } from "src/utils/number.utils";
import { DELIVERY_FEE } from "src/constants/constant";
import { calculateCartTotal, getCartTotalQty } from "src/utils/cart.utils";
import { useEffect } from "react";

const CartPage = () => {
  const { cartItems, user } = useAppContext();

  const methods = useForm<CartForm>({
    defaultValues: {},
    resolver: yupResolver(validationScheme()),
    mode: "all",
  });

  useEffect(() => {
    methods.setValue("fullname", user?.name || "");
    methods.setValue("phone", user?.phone || "");
  }, [user?.name, user?.phone, methods.setValue]);

  const onSubmit = (data: CartForm) => {
    // always keep log here
    console.log("@@Submit payment", data, cartItems);
    alert(`
      Thank you! Payment Successful!

      Delivery info:
      ${data.fullname} - ${data.phone}
      ${data.houseNumber}, ${data.ward}, ${data.district}, ${data.city}
      Note: ${data.note}

      Cart info:
      Quantity: ${numberWithComma(getCartTotalQty(cartItems))}
      Delivery fee: $${DELIVERY_FEE}
      Total: $${numberWithComma(calculateCartTotal(cartItems))}

    `);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="cart-page container">
          <Breadcrumb
            list={[
              {
                title: "Products",
              },
              {
                title: "Cart",
              },
            ]}
          />

          <div className="cart-page__title">
            <h3 className="text-secondary text-center">Cart</h3>
          </div>

          <CartInfo userInfo={user} />

          <div className="cart-page__product">
            <CartProduct />
          </div>
          <div className="cart-page__payment">
            <CartPayment />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};

export default CartPage;

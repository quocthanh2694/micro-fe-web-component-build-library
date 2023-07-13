import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { EmptyMessage } from "src/components";
import Breadcrumb from "src/components/Breadcrumb";
import { URI } from "src/constants/constant";
import { useAppContext } from "src/context/reducer";
import useNavigateMFA from "src/hooks/useNavigateMFA";
import { CartForm } from "src/interface/cart";
import CartInfo from "./components/CartInfo";
import CartPayment from "./components/CartPayment";
import CartProduct from "./components/CartProudcts";
import "./style.scss";
import { validationScheme } from "./validationScheme";

const CartPage = () => {
  const { navigateTo } = useNavigateMFA();
  const { cartItems, user, handleClearCart } = useAppContext();

  const methods = useForm<CartForm>({
    defaultValues: {},
    resolver: yupResolver(validationScheme()),
    mode: "all",
  });

  useEffect(() => {
    methods.reset({
      fullname: user?.name || "",
      phone: user?.phone || "",
    });
  }, [user?.name, user?.phone, methods.setValue]);

  const onSubmit = (data: CartForm) => {
    // always keep log here to see submit form data
    console.log("@@Submit payment", data, cartItems);
    alert(`Thank you! Payment Successful!`);
    // reset cart
    handleClearCart();
    // navigate to home
    navigateTo(URI.shop);
  };

  const isEmptyCart = !cartItems?.length;

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="cart-page container">
          <Breadcrumb
            list={[
              {
                title: "Products",
                uri: URI.shop,
              },
              {
                title: "Cart",
              },
            ]}
          />

          <div className="cart-page__title">
            <h3 className="text-secondary text-center">Cart</h3>
          </div>

          {isEmptyCart ? (
            <EmptyMessage message="Your cart is empty" />
          ) : (
            <>
              <CartInfo userInfo={user} />

              <div className="cart-page__product">
                <CartProduct />
              </div>
              <div className="cart-page__payment">
                <CartPayment />
              </div>
            </>
          )}
        </div>
      </form>
    </FormProvider>
  );
};

export default CartPage;

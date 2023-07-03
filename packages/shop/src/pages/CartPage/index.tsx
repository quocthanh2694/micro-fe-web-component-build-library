import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import Breadcrumb from "src/components/Breadcrumb";
import CartInfo from "./components/CartInfo";
import CartPayment from "./components/CartPayment";
import CartProduct from "./components/CartProudcts";
import "./style.scss";
import { validationScheme } from "./validationScheme";
const Watch = require("src/assets/images/watch.png").default;
const Banner = require("src/assets/images/banner1.png").default;

const CartPage = () => {
  const methods = useForm({
    defaultValues: {},
    resolver: yupResolver(validationScheme()),
  });
  const onSubmit = (data: any) => {
    console.log(data);
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

          <CartInfo />

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

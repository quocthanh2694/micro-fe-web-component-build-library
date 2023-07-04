import { memo } from "react";
import "./style.scss";
import CartItem from "../CartItem";

const Watch = require("src/assets/images/watch.png").default;

const CartProduct = memo(() => {
  return (
    <div className="cart-product">
      <h5 className="text-secondary cart-product__title">Products</h5>
      <div className="cart-product__list">
        <div className="cart-product__list-item">
          <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
          <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
           <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
           <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
           <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
           <CartItem
            cartItem={{
              product: {
                id: 1,
                name: "ROLEX OYSTER AUTO 41 ",
                discountPercent: 32,
                image: Watch,
                price: 10000,
                details: [
                  {
                    key: "Type",
                    value: "Analog",
                  },
                  {
                    key: "Water Resistance",
                    value: "50 M",
                  },
                  {
                    key: "Some others",
                    value: "Value",
                  },
                ],
              },
              quantity: 1000,
            }}
          />
        </div>
      </div>

      <div className="cart-product__subtotal">
        <h5 className="text-primary text-right">{`Subtotal: $${"1,200"}`}</h5>
      </div>
    </div>
  );
});

export default CartProduct;

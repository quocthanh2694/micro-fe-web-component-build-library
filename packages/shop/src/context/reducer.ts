import { createContext, useContext, useReducer } from "react";
import { ICartItem } from "src/interface/cart";
import { appContext } from "./context";
import { APP_ACTION } from "./actions";

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case APP_ACTION.ADD_TO_CART:
      const product = action.payload.product;
      const quantity = action.payload.quantity;
      let newCartItems = [...state.cartItems];

      if (newCartItems.find((item) => item.product?.id === product.id)) {
        const found = newCartItems.find(
          (item) => item.product.id === product.id
        );
        if (found) found.quantity += quantity;
      } else {
        newCartItems.push({
          quantity: quantity,
          product: product,
        });
      }
      return { ...state, cartItems: newCartItems };

    case APP_ACTION.SUBTRACT_FROM_CART: {
      const id = action.payload.id;
      let cartItems = [...state.cartItems];

      const item = cartItems.find((item: any) => item.product.id === id);

      if (!item) return state;

      if (item.quantity < 2) {
        cartItems = cartItems.filter((cartItem) => cartItem.product.id != id);
      } else {
        --cartItems.find((item) => item.product.id === id).quantity;
      }
      return { ...state, cartItems };
    }

    case APP_ACTION.DELETE_FROM_CART: {
      const id = action.payload.id;
      let cartItems = state.cartItems?.filter(
        (item: ICartItem) => item.product.id != id
      );
      return { ...state, cartItems };
    }

    case APP_ACTION.UPDATE_QUANTITY: {
      const id = action.payload.id;
      const quantity = action.payload.quantity;
      let cartItems = [...state.cartItems];

      const item = cartItems.find((item: any) => item.product.id === id);
      if (!item) return state;

      item.quantity = quantity;

      return { ...state, cartItems };
    }

    default:
      return state;
  }
};

export const useAppContext = () => {
  const { state, dispatch } = useContext<any>(appContext);

  const handleAddToCart = (cartItem: ICartItem) => {
    dispatch({ type: APP_ACTION.ADD_TO_CART, payload: cartItem });
  };

  const handleSubtractFromCart = (id: string) => {
    dispatch({ type: APP_ACTION.SUBTRACT_FROM_CART, payload: { id } });
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch({ type: APP_ACTION.DELETE_FROM_CART, payload: { id } });
  };

  const handleUpdateCartItem = (id: string, quantity: number) => {
    dispatch({ type: APP_ACTION.UPDATE_QUANTITY, payload: { id, quantity } });
  };

  return {
    handleAddToCart,
    handleSubtractFromCart,
    handleRemoveFromCart,
    handleUpdateCartItem,
    cartItems: (state.cartItems as ICartItem[]) || [],
  };
};

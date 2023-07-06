import { useContext } from "react";
import { IAppContext, IStore } from "src/interface/app";
import { ICartItem } from "src/interface/cart";
import { APP_ACTION } from "./actions";
import { appContext } from "./context";
import { IUser } from "src/interface/user";

export const appReducer = (state: IStore, action: any) => {
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
        --cartItems.find((item) => item.product.id === id)!.quantity;
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

    case APP_ACTION.CLEAR_CART:
      return { ...state, cartItems: [] };

    case APP_ACTION.LOGIN:
      {
        const { name = 'Thanh Tran' } = action.payload;
        const loggedUser: IUser = { id: '1', name: name, phone: '0987654321' }
        return { ...state, user: loggedUser };
      }

    case APP_ACTION.LOG_OUT: {
      return { ...state, user: undefined };
    }

    default:
      return state;
  }
};

export const useAppContext = () => {
  const { state, dispatch } = useContext<IAppContext>(appContext);

  // cart management
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

  const handleClearCart = () => {
    dispatch({ type: APP_ACTION.CLEAR_CART });
  };

  // user management
  const handleLogin = (name: string) => {
    dispatch({ type: APP_ACTION.LOGIN, payload: { name } })
  }

  const handleLogout = () => {
    dispatch({ type: APP_ACTION.LOG_OUT, })
  }

  return {
    // cart
    handleAddToCart,
    handleSubtractFromCart,
    handleRemoveFromCart,
    handleUpdateCartItem,
    handleClearCart,
    cartItems: (state.cartItems as ICartItem[]) || [],

    // user
    user: state.user,
    handleLogin,
    handleLogout,
  };
};

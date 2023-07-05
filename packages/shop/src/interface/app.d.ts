import { ICartItem } from "./cart";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IStore {
    user?: IUser,
    cartItems: ICartItem[],
}

export interface IAppContext {
    state: IStore,
    dispatch: any;
}
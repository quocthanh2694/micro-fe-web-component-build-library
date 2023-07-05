import { ICartItem } from "./cart";
import { IProduct } from "./product";
import { IUser } from "./user";

export interface IAppContext {
    user?: IUser,
    cartItems: ICartItem[],
}
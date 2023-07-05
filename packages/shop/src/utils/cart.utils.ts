import { DELIVERY_FEE } from "src/constants/constant";
import { ICartItem } from "src/interface/cart";

export const getCartTotalQty = (items: ICartItem[]) => {
    return items?.reduce((t: number, item) => t + item.quantity, 0) || 0;
}

export const calculateCartSubTotal = (items: ICartItem[]) => {
    return items?.reduce((t: number, item) => t + (item.quantity * item.product?.price), 0) || 0;
}

export const calculateCartTotal = (items: ICartItem[]) => {
    return calculateCartSubTotal(items) + DELIVERY_FEE;
}
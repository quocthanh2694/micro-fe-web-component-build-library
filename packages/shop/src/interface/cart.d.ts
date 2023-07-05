import { IProduct } from "./product";

export interface ICartItem {
    product: IProduct;
    quantity: number;
};

export interface CartForm {
    fullname: string;
    phone: string;
    city: string;
    district: string;
    ward: string;
    houseNumber: string;
    note: string;
}

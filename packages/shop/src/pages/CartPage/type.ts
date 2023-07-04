import { IProduct } from "src/interface/product";

export interface CartForm {
    fullname: string;
    phone: string;
    city: string;
    district: string;
    ward: string;
    houseNumber: string;
    note: string;
}

export interface CartFormItem {
    quantity: number;
    product: IProduct;
}
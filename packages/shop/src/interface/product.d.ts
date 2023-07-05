export interface GetProductsRequest {
    limit?: number;
    skipCount?: number;
    type?: string; // TODO:

}

export interface GetProductsResponse {
    limit?: number;
    skipCount?: number;
    type?: string;
    totalItems?: number;
    totalPages?: number;
    items: IProduct[];
}
export interface GetHotSaleProductsResponse {
    items: IProduct[];
}

export interface GetSuggestedProductsResponse {
    items: IProduct[];
}

export interface GetProductByIdResponse {
    product?: IProduct;
}

export interface IProduct {
    id: string;
    images: string[];
    name: string;
    description: string;
    type: string;
    price: number;
    discountPercent: number;
    details: Array<{
        key: string;
        value: string;
    }>;
}
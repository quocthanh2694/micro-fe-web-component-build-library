import { useState } from 'react';
import { getHotSaleProductsAPI, getProductsAPI } from 'src/apis/productApi';
import { GetProductsRequest, GetProductsResponse } from 'src/interface/product';


export default function useProducts() {

    const [result, setResult] = useState<GetProductsResponse>({
        items: [],
        limit: 12,
        skipCount: 0,
        totalItems: 0,
        totalPages: 1,
    });
    const [loading, setLoading] = useState(false);

    const getProducts = async (props: GetProductsRequest) => {
        setLoading(true);
        const res = await getProductsAPI(props);
        setResult(res);
        setLoading(false);
    }

    const getHotSaleProducts = async () => {
        setLoading(true);
        const res = await getHotSaleProductsAPI();
        setResult(res);
        setLoading(false);
    }

    return {
        ...result,
        loading,
        getProducts,
        getHotSaleProducts,
    }
}

import { useState } from 'react';
import { getHotSaleProductsAPI } from 'src/apis/productApi';
import { GetHotSaleProductsResponse } from 'src/interface/product';


export default function useHotSaleProduct() {

    const [result, setResult] = useState<GetHotSaleProductsResponse>({
        items: [],
    });
    const [loading, setLoading] = useState(false);


    const getHotSaleProducts = async () => {
        setLoading(true);
        const res = await getHotSaleProductsAPI();
        setResult(res);
        setLoading(false);
    }

    return {
        ...result,
        loading,
        getHotSaleProducts,
    }
}

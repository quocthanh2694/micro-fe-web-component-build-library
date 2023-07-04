import { useState } from 'react';
import { getProductByIdAPI } from 'src/apis/productApi';
import { GetProductByIdResponse } from 'src/interface/product';


export default function useProductDetail() {

    const [result, setResult] = useState<GetProductByIdResponse>({
        product: undefined
    });
    const [loading, setLoading] = useState(false);

    const getProductDetail = async (id: string) => {
        setLoading(true);
        const res = await getProductByIdAPI(id);
        setResult(res);
        setLoading(false);
    }

    return {
        ...result,
        loading,
        getProductDetail,
    }
}

import { useState } from 'react';
import { getSuggestedProductsAPI } from 'src/apis/productApi';
import { GetSuggestedProductsResponse } from 'src/interface/product';


export default function useSuggestedProduct() {

    const [result, setResult] = useState<GetSuggestedProductsResponse>({
        items: [],
    });
    const [loading, setLoading] = useState(false);


    const getSuggestedProducts = async () => {
        setLoading(true);
        const res = await getSuggestedProductsAPI();
        setResult(res);
        setLoading(false);
    }

    return {
        ...result,
        loading,
        getSuggestedProducts,
    }
}

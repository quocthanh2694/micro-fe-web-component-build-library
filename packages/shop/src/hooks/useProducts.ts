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
    const [hasMore, setHasMore] = useState(true);

    const getProducts = async (props: GetProductsRequest, loadMoreCallback?: () => void, isReturnFromPageZero = false) => {
        if (isReturnFromPageZero) {
            setHasMore(true);
            setResult(prev => ({
                ...prev,
                items: [],
                limit: 0,
                skipCount: 0,
                totalItems: 0,
                totalPages: 0,
            }))
        }

        if (!isReturnFromPageZero && !hasMore) {
            !!loadMoreCallback && loadMoreCallback();
            setLoading(false);
            return;
        }

        setLoading(true);
        const res = await getProductsAPI(props);

        if (loadMoreCallback) {
            loadMoreCallback();
            setResult(prev => ({
                ...prev,
                ...res,
                items: [...prev.items, ...res.items]
            }));
            if (!res.items?.length) {
                setHasMore(false);
            }
        } else {
            setResult(res);
        }
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
        hasMore,
        loading: loading,
        getProducts,
        getHotSaleProducts,
    }
}

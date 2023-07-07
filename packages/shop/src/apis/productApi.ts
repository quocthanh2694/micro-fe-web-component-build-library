import { DELAY_API, } from "src/constants/constant";
import { FETCH_LIMIT } from "src/constants/pagination.constant";
import { GetHotSaleProductsResponse, GetProductByIdResponse, GetProductsRequest, GetProductsResponse, GetSuggestedProductsResponse, IProduct } from "src/interface/product";

const watchesJson: IProduct[] = require('../dummyData/watches.json');
const phonesJson: IProduct[] = require('../dummyData/phones.json');

// all products
// TODO:
const allProducts = watchesJson.concat(phonesJson).map((x, i) => ({
    ...x,
    id: `H${i}_${x.id}`,
    name: `#${i + 1} ${x.name}`,
}));


// suggested products
// TODO:
const suggestedProducts = allProducts.slice(0, 4);

// all 5000 products = 500 * 10 products
const all5000Products = new Array(500).fill(1).reduce((prevArr, p, index) => {
    return prevArr.concat(allProducts.map((item, i) => ({
        ...item,
        id: `${index}_${i}_${item.id}`,
        name: `#${index + 1}${i + 1} ${item.name}`,
    })));
}, [])


export const getHotSaleProductsAPI = async (): Promise<GetHotSaleProductsResponse> => {
    return new Promise((resolve, reject) => {

        const result = {
            items: allProducts,
        };
        resolve(result);
    })
}

export const getProductsAPI = async ({ limit = FETCH_LIMIT, skipCount = 0, type = 'all' }: GetProductsRequest, delay = DELAY_API): Promise<GetProductsResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const allProductByType = all5000Products?.filter((p: IProduct) => (p.type === type || type === 'all'));
            const filteredItems = allProductByType
                .slice(skipCount, skipCount + limit);
            const totalItems = allProductByType?.length || 0;
            const result = {
                limit,
                skipCount,
                type,
                totalItems: totalItems,
                totalPages: Math.ceil(totalItems / limit),
                items: filteredItems,
            };
            resolve(result);
        }, delay);
    })
}


export const getProductByIdAPI = async (id: string): Promise<GetProductByIdResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                product: allProducts.concat(all5000Products).find((p: IProduct) => p.id?.includes(id)),
            });
        }, DELAY_API);
    })
}



export const getSuggestedProductsAPI = async (): Promise<GetSuggestedProductsResponse> => {
    return new Promise((resolve, reject) => {
        const result = {
            items: suggestedProducts,
        };
        resolve(result);
    })
}
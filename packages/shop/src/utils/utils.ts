import { BASE_URL, URI } from "src/constants/constant"

export const getPageURI = (target: URI) => {
    return `${target}`
    // return `${BASE_URL}${target}`
}

export const dummyData = (dataJson: any[], key: string, quantity: number) => {
    return new Array(quantity).fill(1).map((item, index) => {
        const p = index % 2 === 0 ? dataJson[0] : dataJson[1];
        return {
            ...p,
            id: `${key}_${index}`,
            name: `${p.name} - ${index}`,
        };
    })
};
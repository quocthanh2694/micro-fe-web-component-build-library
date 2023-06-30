
export const BASE_URL = '/shop';
export enum URI {
    shop = '/',
    product = '/product/:id',
    cart = '/cart',
    aboutUs = '/',
}

export const getPageURI = (target: URI) => {
    return `${BASE_URL}${target}`
}

export const SCREEN_BREAKPOINTS = {
    mobile: 390,
    tablet: 1024,
    desktop: 1440,
}

export const CURRENCY = '$';
export const PAGE_LIMIT = 5;

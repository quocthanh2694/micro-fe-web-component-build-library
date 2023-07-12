
export const BASE_URL = '/shop';
export enum URI {
    shop = '',
    product = 'product/:id',
    cart = 'cart',
    aboutUs = '',
}

export const DELAY_API = 500;

export const SLIDER_DELAY = 3000;

export const SCREEN_BREAKPOINTS = {
    mobile: 390,
    tablet: 1024,
    desktop: 1440,
}

export const CURRENCY = '$';
export const DELIVERY_FEE = 10;

export const CATEGORIES = [
    {
        id: "all",
        name: "All Products",
    },
    {
        id: "watch",
        name: "Watch",
    },
    {
        id: "phone",
        name: "Phone",
    },
    {
        id: "laptop",
        name: "Laptop",
    },
    {
        id: "tablet",
        name: "Tablet",
    },
    {
        id: "camera",
        name: "Camera",
    },
];



const Banner1 = require("src/assets/images/banner1.jpg").default;
const Banner2 = require("src/assets/images/banner2.jpg").default;
const Banner3 = require("src/assets/images/banner3.jpg").default;
const Banner4 = require("src/assets/images/banner4.jpg").default;

export const getSliderApi = () => {
    const sliders = [
        {
            id: 1,
            image: Banner1,
        },
        {
            id: 2,
            image: Banner2,
        },
        {
            id: 3,
            image: Banner3,
        },
        {
            id: 4,
            image: Banner4,
        },
    ];
    return sliders
}
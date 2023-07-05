
export const numberWithComma = (number: string | number, symbol = ',') => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}
export function calculatePrice(price, size="medium") {
    if (size === 'small') {
        return (Number(price) - Number(1.50)).toFixed(2);
    } else if (size === 'medium') {
        return Number(price);
    } else if (size === 'large') {
        return (Number(price) + Number(1.50)).toFixed(2);
    } else {
        return price;
    }
}
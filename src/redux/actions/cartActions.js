export const addToCart = (product) => ({
    type: 'ADD_TO_CART',
    payload: product
});

export const increaseProductCount = (product) => ({
    type: 'INCREASE',
    payload: product
});

export const decreaseProductCount = (product) => ({
    type: 'DECREASE',
    payload: product
});

export const removeFromCart = (product) => ({
    type: 'REMOVE_FROM_CART',
    payload: product
});

export const makeOrder = () => ({
    type: 'MAKE_ORDER',
    payload: ''
});
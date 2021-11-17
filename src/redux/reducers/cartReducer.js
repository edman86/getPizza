const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const added = action.payload;

            // First, we check if there is such a product in the cart 
            // by checking the properties id, size and dough type. 
            const product = state.items.find(item => item.id === added.id && item.size === added.size && item.dough === added.dough);

            // if there is no such product, creating a new one
            if (product === undefined) {
                const newProduct = { ...added, count: 1, priceSum: added.price };
                return {
                    ...state,
                    items: [...state.items, newProduct],
                    totalPrice: (Number(state.totalPrice) + Number(newProduct.price)).toFixed(2),
                    totalCount: state.totalCount + 1
                };

            // if the product already exists in the cart - increasing its count and price sum   
            } else {
                const updatedItems = state.items.map(item => {
                    if (item.id === added.id && item.size === added.size && item.dough === added.dough) {
                        return {
                            ...item,
                            count: item.count + 1,
                            priceSum: (Number(item.priceSum) + Number(added.price)).toFixed(2)
                        };
                    } else {
                        return item;
                    }
                });
                return {
                    ...state,
                    items: [...updatedItems],
                    totalPrice: (Number(state.totalPrice) + Number(added.price)).toFixed(2),
                    totalCount: state.totalCount + 1
                };
            }

        case 'INCREASE':
            let increasePrice = 0;
            const increasedItems = state.items.map(item => {
                if (item.id === action.payload.id && item.size === action.payload.size && item.dough === action.payload.dough) {
                    increasePrice = item.price;
                    return {
                        ...item,
                        count: item.count + 1,
                        priceSum: (Number(item.priceSum) + Number(increasePrice)).toFixed(2)
                    };
                } else {
                    return item;
                }
            });

            return {
                ...state,
                items: increasedItems,
                totalPrice: (Number(state.totalPrice) + Number(increasePrice)).toFixed(2),
                totalCount: state.totalCount + 1
            };

        case 'DECREASE':
            let decreasePrice = 0;
            let decreaseCount = 0;
            const decreasedItems = state.items.map(item => {
                if (item.id === action.payload.id && item.size === action.payload.size && item.dough === action.payload.dough && item.count > 1) {
                    decreasePrice = item.price;
                    decreaseCount = 1;
                    return {
                        ...item,
                        count: item.count - 1,
                        priceSum: (Number(item.priceSum) - Number(decreasePrice)).toFixed(2)
                    };
                } else {
                    return item;
                }
            });

            return {
                ...state,
                items: decreasedItems,
                totalPrice: (Number(state.totalPrice) - Number(decreasePrice)).toFixed(2),
                totalCount: state.totalCount - decreaseCount
            };

            case 'REMOVE_FROM_CART':
                let removedPriceSum = 0;
                let removedCount = 0;
                const products = state.items.filter(item => {
                    if (item.id === action.payload.id && item.size === action.payload.size && item.dough === action.payload.dough) {
                        removedPriceSum = item.priceSum;
                        removedCount = item.count;
                    } else {
                        return {
                            ...item
                        };
                    }
                });
                return {
                    ...state,
                    items: products,
                    totalPrice: (Number(state.totalPrice) - Number(removedPriceSum)).toFixed(2),
                    totalCount: state.totalCount - removedCount
                }
            case 'MAKE_ORDER':
                return {
                    items: [],
                    totalPrice: 0,
                    totalCount: 0
                };   
        default:
            return state;
    }
};

export default cartReducer;
const initialState = {
    pizzas: [],
    snacks: [],
    isLoaded: false
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PIZZAS':
            return {
                ...state,
                pizzas: action.payload
            };
        case 'SET_SNACKS':
            return {
                ...state,
                snacks: action.payload
            };
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload
            };    
        default:
            return state;
    }
};

export default productsReducer;
import { AiOutlineLike } from 'react-icons/ai';
import { MdAttachMoney } from 'react-icons/md';
import { ImSortAlphaAsc } from 'react-icons/im';

const initialState = {
    categoryFilters: ['all', 'meat', 'chicken', 'fish', 'moshrooms', 'spicy', 'vegetarian'],
    currentCategoryFilter: 'all',
    sortTypes: [
        { name: 'popularity', label: 'popularity', direction: ['asc', 'desc'], icon: <AiOutlineLike /> },
        { name: 'price', label: 'price', direction: ['asc', 'desc'], icon: <MdAttachMoney /> },
        { name: 'name', label: 'alphabet', direction: ['asc', 'desc'], icon: <ImSortAlphaAsc /> }
    ],
    currentSortType: {type: 'popularity', name: 'popularity', direction: 'desc'}
};

const filtersReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SORT_BY_TYPE':
            return {
                ...state,
                currentSortType: action.payload
            };
        case 'SET_CATEGORY_FILTER':
            return {
                ...state,
                currentCategoryFilter: action.payload
            }    
        default:
            return state;    
    }
};

export default filtersReducer;
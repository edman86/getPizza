export const sortByType = (sortType) => ({
    type: 'SORT_BY_TYPE',
    payload: sortType
});

export const setCategoryFilter = (category) => ({
    type: 'SET_CATEGORY_FILTER',
    payload: category
});
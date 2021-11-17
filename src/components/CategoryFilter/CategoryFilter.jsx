import { useSelector, useDispatch } from 'react-redux';
import { setCategoryFilter } from '../../redux/actions/filtersActions';
import './categoryFilter.scss';

const CategoryFilter = () => {
    const categories = useSelector(state => state.filters.categoryFilters);
    const selectedCategory = useSelector(state => state.filters.currentCategoryFilter);
    const dispatch = useDispatch();
    
    return (
        <ul className="categories">
            {categories && categories.map(category => {
                return (
                    <li 
                        className={`categories__item ${category === selectedCategory && 'selected-category'}`}
                        key={category}
                        onClick={ () => dispatch(setCategoryFilter(category)) }
                    >
                        {category[0].toUpperCase() + category.slice(1)}
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoryFilter;
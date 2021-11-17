import { useState } from 'react';
import { useClickOutside } from '../../customHooks/useClickOutside';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { sortByType } from '../../redux/actions/filtersActions';
import SortSelector from '../SortSelector/SortSelector';
import './sortDialog.scss';

const SortDialog = () => {
    const [isOpen, setOpen] = useState(false);
    
    // getting all sort types from redux
    const sortTypes = useSelector(state => state.filters.sortTypes);

    // getting current sort type value from redux ('popularity', 'price' or 'alphabet')
    const currentSortType = useSelector(state => state.filters.currentSortType);
    
    // for handle click outside the dialog (component window), 
    // using custom hook useClickOutside
    const dialogRef = useClickOutside(setOpen);
    
    const dispatch = useDispatch();

    const toggleDropdown = () => {
        setOpen(!isOpen);
    }

    const selectSortType = (type, name, direction) => {
        // dispathing sort by type changes to redux
        dispatch(sortByType({type: type, name: name, direction: direction}));
    }

    return (
        <div className="sort-dialog" ref={dialogRef}>
            <button
                className="sort-dialog__btn"
                onClick={toggleDropdown}
            >
                Sort by <span className="btn-label">{currentSortType.type}</span>
                {isOpen ? <MdKeyboardArrowUp className="sort-dialog__arrow" /> : <MdKeyboardArrowDown />}
            </button>

            <ul className={`sort-dialog__dropdown-list ${isOpen && 'is-open'}`}>
                {sortTypes.map((type, index) => {
                    return (
                        <SortSelector 
                            key={index}
                            type={type} 
                            currentSortType={currentSortType} 
                            selectSortType={selectSortType} 
                        />
                    );
                })}
            </ul>
        </div>
    );
};

export default SortDialog;
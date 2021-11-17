import { useState } from "react";
import './sortSelector.scss';

const SortSelector = ({ type, currentSortType, selectSortType }) => {
    const [direction, setDirection] = useState('desc');
    
    const handleOptionClick = (dirType) => {
        setDirection(dirType);
        selectSortType(type.label, type.name, dirType);
    };

    return (
        <li
            className="sort-dialog-item"
            key={type.name}
            onClick={ () => selectSortType(type.label, type.name, direction) }
        >
            <section className="selector">
                <span className="label">{type.label}</span>
                <span className="icon">{type.icon}</span>
            </section>
            <section 
                className={`options ${type.label === currentSortType.type && 'opened'}`}
            >
                {type.direction.map((dir, index) => {
                    return (
                        <button
                            key={index}
                            className={`option ${dir === direction && 'selected-option'}`}
                            onClick={ (e) => {
                                e.stopPropagation();
                                handleOptionClick(dir);
                            } }
                        >
                            {dir}
                        </button> 
                    );
                })}
            </section>
        </li>
    );

};

export default SortSelector;
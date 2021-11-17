import { useState, useEffect } from 'react';
import './switchButton.scss';

const SwitchButton = ({ buttons, startIndex, setValue }) => {

    const [currentButton, setCurrentButton] = useState(startIndex);
    const count = buttons.length;

    const sliderStyles = {
        width: `${100 / count}%`,
        transform: `translateX(${100 * +currentButton}%)`
    };

    const toggle = (e) => {
        setCurrentButton(e.target.value);
        setValue(e.target.dataset.value);
    };

    return (
        <div className="switch">
            {buttons.map((button, index) => {
                return (

                    <label 
                        key={index}
                        className="switch__label" 
                        style={{
                            width: `${100 * count}%`,
                            color: +currentButton === +index && 'rgb(207, 90, 7)'
                        }}
                    >
                        <input
                            type="radio"
                            className="switch__radio"
                            name="switch"
                            value={index}
                            data-value={button}
                            onChange={toggle}
                        />
                        {button[0].toUpperCase() + button.slice(1)}
                    </label>

                );
            })}
            <span
                className="switch__slider"
                style={sliderStyles}
            />
        </div>
    );
};

export default SwitchButton;
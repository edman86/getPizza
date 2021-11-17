import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.scss';

const Button = ({ 
    children,
    type,
    variant,
    uppercase,
    rounded,
    background,
    color,
    container,
    handleClick,
    selected

}) => {
    const [styles, setStyles] = useState({});

    const buttonClasses = classNames({
        btn: true,
        contained: variant === 'contained',
        outlined: variant === 'outlined',
        rounded: rounded,
        container: container,
        uppercase: uppercase,
    })

    // inline styles
    const stylesObj = {
        backgroundColor: selected ? 'rgb(97, 98, 102)' : background,
        color: selected ? '#fff' : color,
    }

    // final styles object will be it
    const filteredStyles = {};

    // removing all properties with null
    for (let [key, value] of Object.entries(stylesObj)) {
        if (value === null) {
            continue;
        }
        filteredStyles[key] = value;
    }

    useEffect(() => {
        setStyles(filteredStyles);
    }, [selected]);

    return (
        <button 
            type={type}
            className={buttonClasses}
            style={styles}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    uppercase: PropTypes.bool.isRequired,
    rounded: PropTypes.bool.isRequired,
    background: PropTypes.string,
    color: PropTypes.string,
    container: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    type: 'button',
    variant: '',
    uppercase: false,
    rounded: false,
    background: null,
    color: null,
    container: false,
    selected: false,
    handleClick: () => {},
};

export default Button;
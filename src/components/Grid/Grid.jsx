import { useState, useEffect } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';
import './grid.scss';

const Grid = ({
    children,
    container,
    item,
    gridCard,
    gridCategory,
    direction,
    justify,
    align,
    wrap,
    mt,
    mr,
    mb,
    ml,
    pt,
    pr,
    pb,
    pl,
    width,

}) => {

    const [styles, setStyles] = useState({});

    const gridClasses = classNames({
        'grid-container': container,
        'grid-item': item,
        'grid-card': gridCard,
        'grid-category': gridCategory
    });

    const stylesObj = {
        flexDirection: direction,
        flexWrap: wrap,
        justifyContent: justify,
        alignItems: align,
        marginTop: mt ? `${mt}em` : null,
        marginBottom: mb ? `${mb}em` : null,
        marginLeft: ml ? `${ml}em` : null,
        marginRight: mr ? `${mr}em` : null,
        paddingTop: pt ? `${pt}em` : null,
        paddingBottom: pb ? `${pb}em` : null,
        paddingLeft: pl ? `${pl}em` : null,
        paddingRight: pr ? `${pr}em` : null,
        width: width ? `${width}` : null,
    };

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
    }, []);

    return (
        <div
            className={gridClasses}
            style={styles}
        >
            {children}
        </div>
    );
};

Grid.propTypes = {
    container: PropTypes.bool.isRequired,
    item: PropTypes.bool.isRequired,
    gridCard: PropTypes.bool.isRequired,
    gridCategory: PropTypes.bool.isRequired,
    direction: PropTypes.string,
    justify: PropTypes.string,
    align: PropTypes.string,
    wrap: PropTypes.string,
    mt: PropTypes.string,
    mr: PropTypes.string,
    mb: PropTypes.string,
    ml: PropTypes.string,
    pt: PropTypes.string,
    pr: PropTypes.string,
    pb: PropTypes.string,
    pl: PropTypes.string,
    width: PropTypes.string, 
}

Grid.defaultProps = {
    container: false,
    item: false,
    gridCard: false,
    gridCategory: false,
    direction: null,
    justify: null,
    align: null,
    wrap: null,
    mt: null,
    mr: null,
    mb: null,
    ml: null,
    pt: null,
    pr: null,
    pb: null,
    pl: null,
    width: null,
}

export default Grid;
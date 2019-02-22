import React from "react";
import PropTypes from "prop-types";

const Manufacturer = ({ item, isSelected, onManufacturerChange }) => {
    return (
        <div>
            <input
                type="radio"
                name="manufacturere"
                id={item}
                value={item}
                checked={isSelected}
                onChange={onManufacturerChange}
            />
            <label htmlFor={item}>{item}</label>
        </div>
    );
};

Manufacturer.propTypes = {
    item: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onManufacturerChange: PropTypes.func.isRequired
};

export default Manufacturer;
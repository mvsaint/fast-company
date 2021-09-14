import React from "react";
import PropTypes from "prop-types";

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    const listItems = Array.isArray(items) ? items : Object.values(items);

    return (
        <ul className="list-group">
            {listItems.map((value) => (
                <li
                    key={value[valueProperty]}
                    className={
                        "list-group-item" +
                        (value === selectedItem ? " active" : "")
                    }
                    onClick={() => onItemSelect(value)}
                    role="button"
                >
                    {value[contentProperty]}
                </li>
            ))}
        </ul>
    );
};

GroupList.defaultProps = {
    valueProperty: "_id",
    contentProperty: "name"
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onItemSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;

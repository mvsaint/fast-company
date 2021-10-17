import React from "react";
import PropTypes from "prop-types";

const Search = ({ searchValue, onChange }) => {
    return (
        <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={onChange}
            value={searchValue}
        />
    );
};

Search.propTypes = {
    searchValue: PropTypes.string,
    onChange: PropTypes.func
};

export default Search;

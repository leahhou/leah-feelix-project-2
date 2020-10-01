import React from "react";
import PropTypes from "prop-types";
import { Search } from "@myob/myob-widgets";

const SearchBar = ({ filterText, onFilterChange, label, ...props }) => {
  return (
    <div style={{ width: "200px" }}>
      <Search
        name="search"
        onChange={event => {
          onFilterChange(event.target.value);
        }}
        placeholder="Search..."
        label={label}
        value={filterText}
      />
    </div>
  );
};

SearchBar.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
SearchBar.defaultProps = {
  name: "search",
  placeholder: "Search..."
};

export default SearchBar;

import React from "react";
import PropTypes from "prop-types";
import { Search} from "@myob/myob-widgets";

const SearchBar = ({filterText,onFilterChange, ...props}) => {
  return (
    <div style={{ width: "200px" }}>
      <Search
        name="search"
        onChange={event => {
          onFilterChange(event.target.value);
        }}
        placeholder="Search..."
        label="Search label"
        value={filterText}
      />
      {console.log(filterText)}
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

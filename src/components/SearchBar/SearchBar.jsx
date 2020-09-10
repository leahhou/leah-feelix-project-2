import React from "react";
import PropTypes from "prop-types";
import { Search, Label} from "@myob/myob-widgets";

const SearchBar = () => {
  const [search, setSearchValue] = React.useState("");
  return (
    <div style={{ width: "200px" }}>
      <Search
        name="search"
        onChange={event => {
          setSearchValue(event.target.value);
        }}
        placeholder="Search..."
        label="Search label"
        value={search}
      />
      <Label color="green">{search}</Label>
    </div>
  );
};

SearchBar.propTypes = {};

export default SearchBar;

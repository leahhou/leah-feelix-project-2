import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterableContacts.module.css";
import avatar1 from "./../../statics/avatar-1.png";
import avatar2 from "./../../statics/avatar-2.png";
import SearchBar from "./../SearchBar/SearchBar";
import ContactsList from "./../ContactsList/ContactsList";
import {
  Avatar,
  UserAvatar,
  StandardTemplate,
  Button,
  Table,
  PageHead,
  HeaderSort
} from "@myob/myob-widgets";

const FilterableContacts = props => {
  const pageHead = (
    <PageHead title="Contacts">
      <Button type="primary" className={[styles.button, styles.override]}>
        Add Contacts
      </Button>
    </PageHead>
  );

  
  const [filterText, setFilterText] = React.useState("");
  const handleFilterChange = filterInput => {
    setFilterText(filterInput);
    // setData(filterContacts(tableData));
  };
  const filterContacts = list => {
    const filtered = [];
    list.forEach(contact => {
      const filterContact = contact.firstName.toLowerCase();
      if (filterContact.indexOf(filterText) === -1) {
        return;
      }
      filtered.push(contact);
    });
    return filtered;
  };

 
  return (
    <StandardTemplate
      pageHead={pageHead}
      filterBar={
        <SearchBar
          onFilterChange={handleFilterChange}
          filterText={filterText}
        ></SearchBar>
      }
    >
      <ContactsList />
    </StandardTemplate>
  );
};

FilterableContacts.propTypes = {};

export default FilterableContacts;
